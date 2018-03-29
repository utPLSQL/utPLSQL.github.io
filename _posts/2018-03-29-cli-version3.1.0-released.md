---
layout: post
title:  "utPLSQL-cli v3.1.0 released"
date:   2018-03-29 21:04:00 +0000
categories: version3
---


utPLSQL-cli v3.1.0 released
------------------------------------

[Release download page](https://github.com/utPLSQL/utPLSQL-cli/releases/tag/v3.1.0)
[Readme](https://github.com/utPLSQL/utPLSQL-cli/blob/v3.1.0/README.md)

### Requirements

- [Java8](http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html)
- Oracle JDBC driver file (ojdbc8.jar) is required    
- Oracle i18n driver file (orai18n.jar) is required for national character-set support

Both driver files need to be [downloaded](http://www.oracle.com/technetwork/database/features/jdbc/jdbc-ucp-122-3110062.html) and placed in `utPLSQL-cli/lib` folder


### Compatibility

This version of java-api is compatible with all versions of utPLSQL from 3.0.0 to 3.1.0. 
We encourage you to always use the latest version of cli to communicate with a v3 core.

### Changes in this release

*Enhancements*
- Support for custom reporters. Just call utplsql run user/pass@connstr -f=my_custom_reporter and cli will try to use a database-reporter with the given name
- Assets necessary for CoverageHTMLReporter are written to $outputFileName-assets folder (utPLSQL/utPLSQL-java-api#39)
- Realtime-Feedback: Output to screen is immediate, output to files is in bulks (#68)
- NLS-Support from environment (#56)

*Bugfixes*
- The correct usage is now stated in help message (#63)
- Several small improvements

For more info on improvements and fixes, check out the [blog post from Samuel Nitsche](https://cleandatabase.wordpress.com/2018/03/29/open-source-engagement-for-utplsql/)
