---
layout: post
title:  "utPLSQL-java-api v3.1.7 released"
date:   2019-07-12 09:00 +0000
categories: java-api
---


# Changes in release 3.1.7
## Highlights

* utPLSQL java-api now supports JDK 8-12
* Support to call [Tags](https://github.com/utPLSQL/utPLSQL/blob/v3.1.7/docs/userguide/annotations.md#tags)
* Support for [random order](https://github.com/utPLSQL/utPLSQL/blob/v3.1.7/docs/userguide/running-unit-tests.md#random-order) of test execution

## Changes in public API

* `CompatibilityProxy`
  * It's possible to instantiate it with an optional `assumedUtPlsql` version. This replaces the former `skipCompatibilityCheck` parameter
  * Method `getDatabaseVersion` is now deprecated in favor of `getUtPlsqlVersion` and `getRealDbPlsqlVersion`
* `TestRunner`
  * `getOptions` returns the current `TestRunnerOptions` now

## Internal changes
* Added several new tests
* Several small refactorings
* Additional logging
* Preparations to completely rewrite the api

# Download
https://packagecloud.io/utPLSQL/utPLSQL-java-api/packages/java/org.utplsql/java-api-3.1.7.jar

## Maven
```
<dependency>
  <groupId>org.utplsql</groupId>
  <artifactId>java-api</artifactId>
  <version>3.1.7</version>
</dependency>
```
## Gradle
```
compile 'org.utplsql:java-api:3.1.7'
```