---
layout: post
title:  "utPLSQL-cli and utPLSQL-maven-plugin v3.2.1 released"
date:
  created: 2026-09-27
categories:
  - "releases"
  - "utplsql-cli"
  - "utplsql-maven-plugin"
---

Both utPLSQL-cli and utPLSQL-maven-plugin v3.2.1 are now available, adding support for Oracle Wallet (Secure External Password Store) connections.
<!-- more -->
## utPLSQL-cli v3.2.1

### What's Changed
* Allow `/@TNS` connections using Oracle Wallet (Secure External Password Store) by @jgebal in [#230](https://github.com/utPLSQL/utPLSQL-cli/pull/230)
* Update of java-api-version dependency by @jgebal in [#231](https://github.com/utPLSQL/utPLSQL-cli/pull/231)
* Don't reveal credentials in log and error output by @jgebal in [#232](https://github.com/utPLSQL/utPLSQL-cli/pull/232)

**Full Changelog**: [v3.2.0...v3.2.1](https://github.com/utPLSQL/utPLSQL-cli/compare/v3.2.0...v3.2.1)

[Download utPLSQL-cli v3.2.1 here](https://github.com/utPLSQL/utPLSQL-cli/releases/tag/v3.2.1)

## utPLSQL-maven-plugin v3.2.1

### What's Changed
* Added support for Oracle Wallet (Secure External Password Store) connections by @jgebal in [#82](https://github.com/utPLSQL/utPLSQL-maven-plugin/pull/82)
* Added support for skipping utPLSQL tests with `-DskipTests` and `-Dmaven.test.skip` by @jgebal in [#83](https://github.com/utPLSQL/utPLSQL-maven-plugin/pull/83)

**Full Changelog**: [v3.2.0...v3.2.1](https://github.com/utPLSQL/utPLSQL-maven-plugin/compare/v3.2.0...v3.2.1)

[Download utPLSQL-maven-plugin v3.2.1 here](https://github.com/utPLSQL/utPLSQL-maven-plugin/releases/tag/v3.2.1)
