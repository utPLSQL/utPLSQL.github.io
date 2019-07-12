---
layout: post
title:  "utPLSQL-cli v3.1.7 released"
date:   2019-07-12 15:00:00 +0000
categories: cli
---


# Changes in release 3.1.7

## New Features
* CLI is now runnable from Java 8-12 (and probably also upcoming versions)
* CLI now uses Picocli instead of JCommander. __This might have some impact on how parameters are interpreted__, for example on windows machines when you define `-f=ut_documentation_reporter -o="output.txt"` you will have to enclose the "output.txt" part as shown
* Support for [Tags](https://github.com/utPLSQL/utPLSQL/blob/v3.1.7/docs/userguide/annotations.md#tags) via `--tags=tag1[,tag2[,tag3]]`parameter ([#157](https://github.com/utPLSQL/utPLSQL-cli/issues/157))
* Support for [random order](https://github.com/utPLSQL/utPLSQL/blob/v3.1.7/docs/userguide/running-unit-tests.md#random-order) of test execution via `-r`/`--random-test-order` and `-seed`/`--random-test-order-seed` ([#139](https://github.com/utPLSQL/utPLSQL-cli/issues/139))
* Ability to enable DBMS_OUTPUT from cli via `-D`/`--dbms_output` ([#137](https://github.com/utPLSQL/utPLSQL-cli/issues/137))

## Enhancements
* Completely removed HikariCP ([#158](https://github.com/utPLSQL/utPLSQL-cli/issues/158))
* A warning is shown if `orai18n.jar` is not on the classpath. This is highly recommended due to some strange behaviour of the jdbc-driver otherwise ([#146](https://github.com/utPLSQL/utPLSQL-cli/issues/146), [#153](https://github.com/utPLSQL/utPLSQL-cli/issues/153))

## Bugfixes
* Type mapping (`-type_mapping`) parameter is now interpreted correctly ([#143](https://github.com/utPLSQL/utPLSQL-cli/issues/143))

## Internal enhancements
* Improvement of tests
* Refactoring towards immutability
* Added some more debug information