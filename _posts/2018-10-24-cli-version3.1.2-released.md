---
layout: post
title:  "utPLSQL-cli v3.1.2 released"
date:   2018-10-24 10:55:00 +0000
categories: cli
---

# Compatibility

This version of utPLQL-cli is compatible with all versions of utPLSQL from 3.0.0 to 3.1.3. We encourage you to always use the latest version of cli to communicate with a v3 core.

# Changes in this release

## New Features
* New command `utplsql info [user/password@connectstring]` [#77](https://github.com/utPLSQL/utPLSQL-cli/issues/77) 
* New command `utplsql reporters user/password@connecstring` 
* Cli tries to connect to oracle via thick-driver first and use thin-driver as fallback [#88](https://github.com/utPLSQL/utPLSQL-cli/issues/88) [#90](https://github.com/utPLSQL/utPLSQL-cli/issues/90) [#91](https://github.com/utPLSQL/utPLSQL-cli/issues/91) 

## Enhancements
* Limit number of connections to number of reporters+1 [#85](https://github.com/utPLSQL/utPLSQL-cli/issues/85)
* Include JAXB library so utPLSQL-cli can be run on java 9+10 [#82](https://github.com/utPLSQL/utPLSQL-cli/issues/82) 
  * There is however still a problem when using HTMLCoverageReporter and Java 9/10
* Improved documentation and help-command [#31](https://github.com/utPLSQL/utPLSQL-cli/issues/31) 
* An existant NLS_LANG-variable will now lead to corresponding `ALTER SESSION` statements when connecting [#101](https://github.com/utPLSQL/utPLSQL-cli/issues/101) 

## Bugfixes
* HTML Coverage assets are placed and referenced correctly when using output file in subdirectory [#94](https://github.com/utPLSQL/utPLSQL-cli/issues/94) 
* Java-locale is now correctly derived from LC_ALL or LANG environment variable, not from NLS_LANG [#101](https://github.com/utPLSQL/utPLSQL-cli/issues/101) 

## Internal enhancements
* Refactoring of Command architecture
* Refactoring of Connection handling
* Improved Error handling