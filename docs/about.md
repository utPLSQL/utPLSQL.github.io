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


### Major Contributors


| Name                                                             | GitHub                                       | Comments                                                                                           |
|-------------------------------------------------------------------|-----------------------------------------------|-----------------------------------------------------------------------------------------------------|
| [Jacek Gebal](https://twitter.com/GebalJacek/)                   | [jgebal](https://github.com/jgebal)          | Project lead, admin, core PL/SQL framework, pipelines, expectations, reporters, annotations, cache | 
| [Pavel Kaplya](https://twitter.com/Pazus)                        | [Pazus](https://github.com/Pazus)            | Core PL/SQL framework, design, annotations                                                         |
| [Lukasz Wasylow](https://twitter.com/Baalowy)                    | [lwasylow](https://github.com/lwasylow/)     | Core PL/SQL framework, demo project                                                                |
| [Samuel Nitsche](https://twitter.com/Der_Pesse)                  | [pesse](https://github.com/pesse/)           | utPLSQL-java-api, utPLSQL-cli                                                                      |
| [Philipp Salvisberg](https://twitter.com/phsalvisberg)           |                                               | utPLSQL-SQLDeveloper-extension                                                                     |
| [Simon Martinelli](https://www.linkedin.com/in/simonmartinelli/) |                                               | utPLSQL-PLSQL-Developer plugin, utPLSQL-cli                                                        |
| [Vinicius Avellar](https://twitter.com/mrvmoreira)               | [viniciusam](https://github.com/viniciusam/) | utPLSQL-java-api, maven-plugin, utPLSQL-cli                                                        |
| Robert Love                                                      | [rlove](https://github.com/rlove)            |                                                                                                     |
| David Pyke                                                       | [Shoelace](https://github.com/Shoelace)      |                                                                                                     |


Many thanks to [all contributors](https://github.com/utPLSQL/utPLSQL/graphs/contributors) across utPLSQL projects.


### Prior versions creators

| Name                                               | Comments         |
| -------------------------------------------------- | ---------------- |
| [Steven Feuerstein](http://stevenfeuerstein.com/)  | Original Author  |
| Chris Rimmer                                       |                  |
| Patrick Barel                                      |                  |
| Paul Walker                                        |                  |


## Supporters

The utPLSQL project is community-driven and is not commercially motivated. Nonetheless, donations and other contributions are always welcome, and are detailed below.

### Active supporters

There are currently no active supporters. If your company would like to support the project, please reach out on
[GitHub Discussions](https://github.com/utPLSQL/utPLSQL/discussions).

### Past supporters


| Supporter                                                                                                                | Details                                                                |
|--------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [![supported_by_redgate](assets/supported_by_redgate_100.png)](https://www.red-gate.com/hub/events/open-source-projects) | In 2019, Redgate supported utPLSQL by sponsoring stickers and t-shirts | 

