---
layout: post
title:  "We've released utPLSQL-cli"
date:   2017-11-22 09:04:00 +0000
categories: version3
---


First official release of command line client for utPLSQL.
------------------------------------

You may find the client on the [download page](https://github.com/utPLSQL/utPLSQL-cli/releases/tag/v3.0.4)

### Requirements

- [Java8](http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html)
- Oracle JDBC driver file (ojdbc8.jar) is required    
- Oracle i18n driver file (orai18n.jar) is required for national character-set support

Both driver files need to be [downloaded](http://www.oracle.com/technetwork/database/features/jdbc/jdbc-ucp-122-3110062.html) and placed in `utPLSQL-cli/lib` folder

### Key features

- connectivity to Oracle database without Oracle client software (needs JDBC driver)
- support for multiple reporters and multiple output files
- real-time reporting to screen (depends on reporter implementation)
- documentation reporting in color
- mapping of project files to database objects (needed for Sonar reporting)
- support for customized project file-mapping rules

### Supported utPLSQL versions 

- utPLSQL v3.0.0
- utPLSQL v3.0.1
- utPLSQL v3.0.2
- utPLSQL v3.0.3
- utPLSQL v3.0.4
