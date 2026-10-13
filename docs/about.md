---
layout: page
title: About
permalink: /about/
menuInclude: true
---

{%
  include-markdown "https://raw.githubusercontent.com/utPLSQL/.github/main/profile/README.md"
  rewrite-relative-urls=true
  start="<!--start-include-in-doc-about-->"
  end="<!--end-include-in-doc-about-->"
%}


## History

### Framework history

While the framework exists since 1999, 
the current version is a consequence of a complete rewrite done in 2016 by passionate developers,
using the object-oriented capabilities of the Oracle database to make it more aligned with other testing frameworks (e.g. JUnit for Java, RSpec for Ruby). 

This had significant impact on the test code syntax and how the framework is used.

In 2026, utPLSQL Development Labs Ltd was established to provide a sustainable legal and financial foundation for the project ([announcement](announcements/posts/2026/2026-09-25_incorporation_of_utPLSQL.md), [background](https://oraclethoughts.com/blog/2026/09/25/incorporation_of_utPLSQL/)).

Gratitude to creators, contributors and maintainers of previous versions of the framework  
- [Steven Feuerstein](https://www.linkedin.com/in/steven-feuerstein/) - Initial Author
- [Chris Rimmer](https://www.linkedin.com/in/chrisrim/)
- [Patrick Barel](https://www.linkedin.com/in/patrickbarel/)
- [Paul Walker](https://www.linkedin.com/in/paul-walker-67b0226b/)
- and others 

### Major Contributors 

| Name                                                                    | GitHub                                       | Comments                                                                                           |
|-------------------------------------------------------------------------|----------------------------------------------|----------------------------------------------------------------------------------------------------|
| [Jacek Gebal](https://www.linkedin.com/in/jacekgebal/)                  | [jgebal](https://github.com/jgebal)          | Project lead, admin, core PL/SQL framework, pipelines, expectations, reporters, annotations, cache | 
| [Pavel Kaplya](https://www.linkedin.com/in/pavel-kaplya/)               | [Pazus](https://github.com/Pazus)            | Core PL/SQL framework, design, annotations, pipelines                                              |
| [Lukasz Wasylow](https://www.linkedin.com/in/lukasz-wasylow-45a38120/)  | [lwasylow](https://github.com/lwasylow/)     | Core PL/SQL framework, demo project                                                                |
| [Samuel Nitsche](https://www.linkedin.com/in/samuel-nitsche-457ba3158/) | [pesse](https://github.com/pesse/)           | utPLSQL-java-api, utPLSQL-cli                                                                      |
| [Philipp Salvisberg](https://www.linkedin.com/in/philippsalvisberg/)    |                                              | utPLSQL-SQLDeveloper-extension                                                                     |
| [Simon Martinelli](https://www.linkedin.com/in/simonmartinelli/)        |                                              | utPLSQL-PLSQL-Developer plugin, utPLSQL-cli                                                        |
| [Vinicius Avellar](https://www.linkedin.com/in/amvinicius/)             | [viniciusam](https://github.com/viniciusam/) | utPLSQL-java-api, maven-plugin, utPLSQL-cli                                                        |
| [Robert Love](https://www.linkedin.com/in/robjlove/)                    | [rlove](https://github.com/rlove)            |                                                                                                    |
| [David Pyke](https://www.linkedin.com/in/davidpyke/)                    | [Shoelace](https://github.com/Shoelace)      |                                                                                                    |


Many thanks to [all contributors](https://github.com/utPLSQL/utPLSQL/graphs/contributors) across utPLSQL projects.


## Contact

For help with using utPLSQL, bug reports and feature ideas, please use [GitHub Discussions](https://github.com/orgs/utPLSQL/discussions).

- **General questions** - email [info@utPLSQL.org](mailto:info@utPLSQL.org)
- **Inquiries via social media** - [X](https://x.com/utPLSQL), [LinkedIn](https://www.linkedin.com/company/utplsql/), [Bluesky](https://bsky.app/profile/utplsql.org)

utPLSQL is free and open source, built by its maintainers and contributors. Its maintenance and development are funded by the organizations and individuals listed here. Thank you.

**Want to be listed?**
[Become a sponsor](sponsorship.md){ .md-button .md-button--primary }

