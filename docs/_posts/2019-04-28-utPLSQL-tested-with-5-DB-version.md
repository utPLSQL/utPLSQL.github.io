---
layout: post
title:  "utPLSQL is continuously tested on 5 DB versions"
date:   2019-04-28 13:38:00 +0000
categories: utPLSQL
---

# Oracle 19c DB added to our CI/CD process

We take all the possible effort to assure utPLSQL can be tested against t all supported Oracle database versions.

Today, our automation got enriched with Oracle 19c database testing.

Pavel Kaplya has prepared a new **small Docker Image** for Oracle 19c.

**Note:**
> You can take advantage of our efforts and build your own small Docker images (non-PDB) using our [docker-scripts](https://github.com/utPLSQL/docker-scripts).     

# Continuous testing of utPLSQL

utPLSQL is now getting tested against *five* database versions:
- Oracle 11g XE
- Oracle 12c R1
- Oracle 12c R2
- Oracle 18c
- Oracle 19c

You can see our build process & test results on [travis-ci.org/utPLSQL](https://travis-ci.org/utPLSQL)

All of our deliverable projects use set of tools that are free to sue for Open-Source:
- static code analysis using [sonarcloud](https://sonarcloud.io/organizations/utplsql/projects)
- publishing code coverage using [coveralls](https://coveralls.io/github/utPLSQL/utPLSQL)
- deploying java-api artifacts to [packagecloud](https://packagecloud.io/utPLSQL/utPLSQL-java-api)
- deploying utPLSQL-cli artifacts to [bintray](https://bintray.com/utplsql/utPLSQL-cli/utPLSQL-cli-develop)
- maven plugin publishing into [maven repository](https://mvnrepository.com/artifact/org.utplsql/utplsql-maven-plugin)

All of our builds must pass quality gates (code quality/tests/code coverage) before we approve and merge pull requests.


