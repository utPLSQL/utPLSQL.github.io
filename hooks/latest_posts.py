"""
Renders the most recent announcements as Material grid cards.

Replaces the `<!-- latest-posts -->` placeholder in any page with cards for
pinned posts (`pin: true`) followed by the newest ones, as ordered by the
blog plugin.

Card text is, in order of preference:
  1. the post's `description:` front matter,
  2. the first paragraph before the first list (e.g. an intro above `## What's Changed`),
  3. the list items (release notes), without author, PR and issue references.

Posts without a `description:` also get the generated summary as their
`<meta name="description">` and RSS feed item description.
"""
import posixpath
import re

from material.plugins.blog.structure import Post

PLACEHOLDER = "<!-- latest-posts -->"
COUNT = 4
SUMMARY_LENGTH = 180

ICONS = {
    "releases": ":material-rocket-launch-outline:",
    "news": ":material-newspaper-variant-outline:",
    "website": ":material-web:",
    "tips-n-tricks": ":material-lightbulb-on-outline:",
}
DEFAULT_ICON = ":material-bullhorn-outline:"

LINK = re.compile(r"\[([^\]]*)\]\([^)]*\)")
LIST_ITEM = re.compile(r"^\s*[*+-]\s+(.*)$", re.MULTILINE)
# Setext headings - a line underlined with --- or ===
SETEXT_HEADING = re.compile(r"^.+\n[-=]{3,}\s*$", re.MULTILINE)
# Lines that are not prose: headings, lists, tables, HTML, code, rules,
# "**Label**: ..." lines (e.g. Full Changelog), link-only lines (e.g. Download) and bare URLs
NOT_PROSE = re.compile(r"^(#|<|!|\||`|[*+-] |---|\*\*[^*]+\*\*:|\[[^\]]*\]\([^)]*\)$|https?://\S+$)")
# Trailing references of a release note item, e.g. " by @user in [#1](...)",
# ". Fixed in [#1](...), resolves [#2](...)", " ([#1](...))", " #1" or ". See [documentation](...)"
REFERENCES = re.compile(
    r"(\s+(by\s+\[?@\S+|\[?@\S+\s+in\s+\[#).*"
    r"|\.?\s+(Fixed|Implemented)\s+in\b.*"
    r"|[\s,]+-?\s*resolves\s+\[?#.*"
    r"|\.?\s+See\s+\[[^\]]*\]\([^)]*\)"
    r"|[\s,(]+\[#\d+\]\([^)]*\)\)?"
    r"|\s+#\d+)$",
    re.IGNORECASE,
)


def on_page_markdown(markdown, page, config, files):
    # Set before the page is rendered, so the RSS plugin picks it up as well
    if isinstance(page, Post) and not page.meta.get("description"):
        summary = _summary(page)
        if summary:
            page.meta["description"] = re.sub(r"`|\*\*", "", summary)
            page.meta["description_generated"] = True
    if PLACEHOLDER not in markdown:
        return markdown
    blog = config.plugins["material/blog"].blog
    posts = [post for post in blog.posts if not post.config.draft][:COUNT]
    base = posixpath.dirname(page.file.src_uri)
    cards = "\n".join(_card(post, posixpath.relpath(post.file.src_uri, base or ".")) for post in posts)
    html = f'<div class="grid cards latest-posts" markdown>\n\n{cards}\n</div>'
    return markdown.replace(PLACEHOLDER, html)


def _card(post, link):
    categories = post.config.categories
    icon = next((ICONS[c] for c in categories if c in ICONS), DEFAULT_ICON)
    created = post.config.date.created
    date = f"{created:%B} {created.day}, {created.year}"
    # Same pin badge as on the Announcements page (Material's `md-pin`)
    pin = '<span class="md-pin"></span> · ' if post.config.pin else ""
    return (
        f"-   {icon}{{ .lg .middle }} __[{post.meta['title']}]({link})__\n\n"
        f"    ---\n\n"
        f'    <span class="latest-posts__meta">{pin}{date} · {" · ".join(categories)}</span>\n\n'
        f"    {_summary(post)}\n\n"
        f'    <span class="latest-posts__more">Read more :octicons-arrow-right-24:</span>\n'
    )


def _summary(post):
    # A generated description is plain text - rebuild it, so cards keep code formatting
    if post.meta.get("description") and not post.meta.get("description_generated"):
        return _truncate(_plain(post.meta["description"]))
    body = SETEXT_HEADING.sub("", post.markdown)
    first_item = LIST_ITEM.search(body)
    intro = _first_paragraph(body[:first_item.start()] if first_item else body)
    if intro:
        return _truncate(_plain(intro))
    return _changes(body)


def _first_paragraph(markdown):
    # First run of prose lines
    lines = []
    for line in markdown.splitlines():
        line = line.strip()
        if line and not NOT_PROSE.match(line):
            lines.append(line)
        elif lines:
            break
    return " ".join(lines)


def _changes(markdown):
    # Release note items joined into one line, e.g. "Fix A · Add B · +3 more"
    items = [_item(match.group(1)) for match in LIST_ITEM.finditer(markdown)]
    items = [item for item in items if item and not item.startswith("#")]
    summary = ""
    for count, item in enumerate(items):
        more = f" · +{len(items) - count} more"
        candidate = f"{summary} · {item}" if summary else item
        if summary and len(candidate) + len(more) > SUMMARY_LENGTH:
            return summary + more
        summary = candidate
    return _truncate(summary)


def _item(text):
    previous = None
    while previous != text:
        previous, text = text, REFERENCES.sub("", text.strip())
    return _plain(text).rstrip(" .,")


def _plain(text):
    text = LINK.sub(r"\1", text)
    return re.sub(r"\s+", " ", text).strip()


def _truncate(text):
    if len(text) > SUMMARY_LENGTH:
        text = text[:SUMMARY_LENGTH].rsplit(" ", 1)[0].rstrip(",.;:") + "…"
    return text
