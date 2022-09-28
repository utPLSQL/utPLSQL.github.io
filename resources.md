---
layout: page
title: Resources
permalink: /resources/
menuInclude: true
---

Do you know about videos, articles, blogs or code examples that are missing here? Please let us know! 

## Framework

- <i class="fas fa-book"></i> [Latest documentation](/utPLSQL/latest/)

#### Overview

- <i class="fas fa-video"></i> [UKOUG Testing PLSQL APIs with utPLSQL v3 Webinar](https://www.youtube.com/watch?v=3IQXWdKkBP4) (by Jacek Gebal)  
  Comprehensive webinar about utPLSQL by Jacek Gebal. The definitive guide to why and how to test PL/SQL with utPLSQL
- <i class="fas fa-file-alt"></i> [utPLSQL 3.0 - How to have your cake and eat it](https://mikesmithers.wordpress.com/2018/04/25/utplsql-3-0-how-to-have-your-cake-and-eat-it/) (by Mike Smithers)  
  Complete introduction to utPLSQL 3.0, covering installation, comprehensive example application, transaction challenges and even code coverage
- <i class="fas fa-file-alt"></i> [Strongholds of Confidence: Self-Testing your Database](https://cleandatabase.wordpress.com/2017/10/26/strongholds-of-confidence-self-testing-your-database/) (by Samuel Nitsche)   
  Plea to start creating meaningful, automated self-tests and why. Finishes with a concrete utPLSQL example
- <i class="fas fa-file-alt"></i> [Test Driven Development in PLSQL with utPLSQL v3 – intro](http://www.oraclethoughts.com/uncategorized/test-driven-development-in-oracle-database-with-utplsql-v3-intro/) (by Jacek Gebal)  
  Addresses some major struggles of developers who start with unit-testing and also gives a brief intro into Test-Driven-Development
- <i class="fas fa-video"></i> [Testing PL/SQL in your Ci/Cd pipeline with utPLSQL](https://www.youtube.com/watch?v=rgbAG8RgR9U) (by Blaine Carter)
  Blaine demonstrates running utPLSQL unit tests in Oracle Developer Cloud and publishing test results. 
- <i class="fas fa-video"></i> [Extending Oracle Database DevOps with Automated PL/SQL Unit Testing](https://www.youtube.com/watch?v=zFtUmAe61mg) (by Shay Shmeltzer)
  Overview of running utPLSQL unit tests within Oracle Developer Cloud
- <i class="fas fa-video"></i> [DevOps Around Autonomous Data Warehouse](https://www.youtube.com/watch?v=AcWaYWAgOeQ) (Oracle)
  A short overview of an architecture proposed for Database Software Delivery LifeCycle with automated testing and static code analysis  
- <i class="fas fa-video"></i> [Oracle Developers Office Hours - Real World Testing of PL/SQL Code](https://www.youtube.com/watch?v=-GkzMV5lUaQ) (hosted by Steven Feuerstein)
  Panel webinar with: Jasmin Fluri, Deepthi Bandari, Swathi Ambati & Maik Becker, Patrick Barel & Samuel Nitsche
- <i class="fas fa-video"></i> [Oracle Groundbreakers - Testing with utPLSQL](https://www.youtube.com/watch?v=OxHMaOiPitI) (by Philipp Salvisberg)
  Presentation on 28th October 2020 at Oracle Groundbreakers APAC Virtual Tour
- <i class="fas fa-video"></i> [Oracle Developers Office Hours - Testing with utPLSQL](https://www.youtube.com/watch?v=5WGHplRgXzQ) (hosted by Connor McDonald)
  Live coding and testing session with Samuel Nitsche and Jacek Gebal 
- <i class="fas fa-video"></i> [Testing in the Imperial Database](https://www.youtube.com/watch?v=sDI8FwKzdok) (by Samuel Nitsche)
  Talk from SAST Q4 Digital Testing conference  
- <i class="fas fa-file-code"></i> [Testing With utPLSQL – Made Easy With SQL Developer](https://www.salvis.com/blog/2022/07/31/testing-with-utplsql-made-easy-with-sql-developer/) (by Philipp Salvisberg)
- <i class="fas fa-file-code"></i> [Database Development Champions - Programming With utPLSQL – This Is the Way](https://www.youtube.com/watch?v=LtypQEr4-5A) (by Philipp Salvisberg)

#### Structuring Tests

- <i class="fas fa-file-code"></i> [utPLSQL’s Suite Hierarchy in action](https://cleandatabase.wordpress.com/2018/12/16/100codeexamples-utplsqls-suite-hierarchy-in-action/) (by Samuel Nitsche)  
  Example of the `%suitepath` annotation and utPLSQL hierarchies
- <i class="fas fa-file-code"></i> [Narrate Star Wars Movies with utPLSQL annotations](https://cleandatabase.wordpress.com/2019/06/25/narrate-star-wars-movies-with-utplsql-annotations/) (by Samuel Nitsche)  
  Example how to use the different annotations that allow to structure tests (`%before`, `%after`, `%context`)
- <i class="fas fa-file-code"></i> [Testing the Deathstar security with utPLSQL contexts](https://cleandatabase.wordpress.com/2019/06/06/testing-the-deathstar-security-with-utplsql-contexts/) (by Samuel Nitsche)  
  Example how to use the `%context` annotation
     
#### Cursor Comparison

- <i class="fas fa-file-code"></i> [What is the equivalent of utassert eqtable / eqquery in utPLSQL v3](http://www.oraclethoughts.com/utplsql/what-is-the-equivalent-of-utassert-eqtable-utplsql-v2-v3/) (by Jacek Gebal)  
  Comparison between utPLSQL v2's `utassert.eqtable` and v3's `ut.expect(sys_refcursor).to_equal(sys_refcursor)` approach.
- <i class="fas fa-file-code"></i> [Unit-Tests for Primary/Secondary Lookup with Cursor Comparison](https://cleandatabase.wordpress.com/2018/12/06/100codeexamples-unit-tests-for-primary-secondary-lookup-with-cursor-comparison/) (by Samuel Nitsche)  
  Example how to use cursor comparison with `select from dual` expectations
- <i class="fas fa-file-code"></i> [utPLSQL Cursor Comparison with user-defined Types](https://cleandatabase.wordpress.com/2019/02/03/100codeexamples-utplsql-cursor-comparison-with-user-defined-types/) (by Samuel Nitsche)  
  Example how to use cursor comparison with expectations created via user-defined types 
- <i class="fas fa-file-code"></i> [Test updatable views with utPLSQL Cursors](https://cleandatabase.wordpress.com/2019/03/15/100codeexamples-test-updatable-views-with-utplsql-cursors/) (by Samuel Nitsche)  
  Example how to easily test the updatability of a view with cursor comparison

#### Code Talks

- <i class="fas fa-video"></i> [2017 CodeTalk Series: Unit Testing PL SQL Code in the Real World](https://www.youtube.com/watch?v=1qAZvS5rvyY)
- <i class="fas fa-video"></i> [2018 CodeTalk Series: Practical Advice for Taking Your PL SQL Testing to the Next Level](https://www.youtube.com/watch?v=CvZOwp9pn4o)


## Tools

#### utPLSQL - SQLDeveloper extension

- <i class="fas fa-file-alt"></i> [Running utPLSQL Tests in SQL Developer](https://www.salvis.com/blog/2019/07/06/running-utplsql-tests-in-sql-developer/) (by Philipp Salvisberg)  
  Detailed explanation how to install and use the utPLSQL-Plugin for SQLDeveloper
- <i class="fas fa-file-alt"></i> [utPLSQL for SQL Developer 1.2 – What’s New?](https://www.salvis.com/blog/2020/06/07/utplsql-for-sql-developer-1-2-whats-new/) (by Philipp Salvisberg)
- <i class="fas fa-file-alt"></i> [Documentation](https://github.com/utPLSQL/utPLSQL-SQLDeveloper)
- <i class="fab fa-github"></i> [Downloads](https://github.com/utPLSQL/utPLSQL-SQLDeveloper/releases)

#### utPLSQL Command-line interface

- <i class="fas fa-file-alt"></i> [Documentation](https://github.com/utPLSQL/utPLSQL-cli) 
- <i class="fab fa-github"></i> [Downloads](https://github.com/utPLSQL/utPLSQL-cli/releases) 

#### utPLSQL PLSQL-Developer plugin

- <i class="fas fa-file-alt"></i> [Documentation](https://github.com/utPLSQL/utPLSQL-PLSQL-Developer)
- <i class="fab fa-github"></i>[Download](https://github.com/utPLSQL/utPLSQL-PLSQL-Developer/releases)

#### Maven-Plugin

- <i class="fas fa-file-alt"></i> [Documentation](https://github.com/utPLSQL/utPLSQL-maven-plugin)

