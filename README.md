# Maintaining the utPLSQL Website

The [utPLSQL website](https://utplsql.github.io)  is generated using [MkDocs](https://www.mkdocs.org/) and [material theme](https://squidfunk.github.io/mkdocs-material) 
[Mike](https://github.com/jimporter/mike) is used for versioning of documentation see also [this page](https://squidfunk.github.io/mkdocs-material/setup/setting-up-versioning/)  

## How to make an announcement post.

- Create a new post file in the [docs/_posts](https://github.com/utPLSQL/utPLSQL.github.io/tree/main/docs/_posts) directory with the file name of `YYYY-MM-DD-Blog-Post-Name.md` This file will be a standard [Markdown file](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) which can be editing with any text editor although there are many offline and online editors for Markdown.
- Add new entry pointing to new announcement file to the start of `nav` section in `mkdocs.yml`
- Add new entry to the top of  `index.md`
- Commit and push changes to develop branch

## Local setup

If you want to generate and preview the website locally, you will need to have [python and pip installed](https://squidfunk.github.io/mkdocs-material/getting-started/))

To install mkdocs required components, you need to execute the below commands from command line:
```
pip install mkdocs-material
pip install mkdocs-git-revision-date-localized-plugin
pip install mike

```

Once installed you can use following commands from command line:

`mkdocs serve` - will stat a local server, so you can see the web page generated locally and tet real-time updates to documentation

The pages are automatically generated on every commit to the `main` branch.
If however you would need to generate pages manually from your local copy, use the command:
`mkdocs gh-deploy`.
The generated web pages are hen visible at [utplsql.org](https://utPLSQL.org).

Individual project documentation pages are deployed separately from the main organization page.
Each corresponding project repository needs to have its own gh-pages branch.
  

utPLSQL-framework repository uses `mike` to deploy documentation for specific project version.

Example commands to use are:

- `mike deploy develop` - to deploy documentation for develop branch
- `mike deploy -p develop` - to deploy and push documentation for develop branch
- `mike deploy -p -u v3.1.12 latest` - to deploy and push documentation for version v3.1.12 and update the `latest` alias to point to that version

