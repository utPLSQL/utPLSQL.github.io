---
layout: post
title:  "utPLSQL-cli v3.1.6 released"
date:   2019-03-25 23:10:00 +0000
categories: cli
---


# Changes in release 3.1.6

## Compatibility
This version of utPLQL-cli is compatible with all versions of utPLSQL from 3.0.0 to 3.1.6. We encourage you to always use the latest version of cli to communicate with a v3 core.

## New Features
* CLI now logs some basic information to screen in addition to an eventually configured to-screen-reporter ([#89](https://github.com/utPLSQL/utPLSQL-cli/issues/89), [#76](https://github.com/utPLSQL/utPLSQL-cli/issues/76))
  * This output can be avoided with the new `-q, --quiet` parameter
  * Much more logging can be output with the new `-d, --debug` parameter
* It's possible to connect as sysdba now via `utplsql run "sys as sysdba"/pw@connectstring` ([#115](https://github.com/utPLSQL/utPLSQL-cli/issues/115))
* The default timeout of 60 minutes is now configurable via the new `-t, --timeout` parameter ([#124](https://github.com/utPLSQL/utPLSQL-cli/issues/124))

## Enhancements
* Timeout now returns error exit-code ([#129](https://github.com/utPLSQL/utPLSQL-cli/issues/129))
* In case of Oracle stuck-scenario during createStatement, a warning is written to the screen and the same call for running the tests is retried up to 5 times. ([#20](https://github.com/utPLSQL/utPLSQL-cli/issues/20))
* It's now possible to pass usernames containing `/` and passwords containing `@` by encapsulating those in the connectstring with `"`: `utplsql run "my/User"/"P@ssword"@server:1521/Service` ([#111](https://github.com/utPLSQL/utPLSQL-cli/issues/111))
* API-version is now stored in a separate, non-compiled file

## Bugfixes
* Info command should now show the correct version information ([#108](https://github.com/utPLSQL/utPLSQL-cli/issues/108))
* Non-argument call will output help ([#110](https://github.com/utPLSQL/utPLSQL-cli/issues/110))

## Internal enhancements
* Update of HikariCP
* Improvement of passing user/pw/connect info to connection pool
* Improvement of Error-Handling
* Cleanup of tests