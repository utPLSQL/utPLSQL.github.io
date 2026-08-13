---
layout: post
title:  "Next chapter for utPLSQL"
date:
  created: 2026-08-12
categories:
  - "news"
---

## The past of utPLSQL
utPLSQL v3 has come a long way since it was first released in 2017. 
It has already been over 10 years since the first discussions about starting the project began. 
However, development slowed after 2019, and by 2024 the project had become inactive. 
Life took me in a different direction for a few years, and the after-hours project understandably took a back seat.

<!-- more -->
## The now
In the last year, a few people reached out to me asking whether the project is still alive. 
Regulated companies often can't use software that isn't under active maintenance, 
and others simply treat it as a security risk.

In recent months I have invested time in bringing the project back to life, 
refreshing all libraries and dependencies, fixing build processes and pipelines, 
and releasing new versions for the main project and tools. 
The documentation was restructured and updated, and discussions were moved from Slack to [GitHub](https://github.com/orgs/utPLSQL/discussions).

## The future roadmap

I realized that **utPLSQL needs a clear vision for its future development**. Without one, 
it risks becoming legacy and dying, like many other open-source projects have.

The software world keeps moving forward. New versions of Oracle Database, programming languages, developer tools and libraries are released continuously.

At the same time, there are many ideas and plans that were never implemented as part of the development of utPLSQL v3. Those are still very much valid and would be highly valuable additions to the framework. They would make PL/SQL development and testing even more modern and smoother.

I have created a high-level roadmap that highlights the key points of the future development of utPLSQL core.

### Phase 1 - Core

- Security model rework: CBAC for framework internals
- Drop legacy version support (11g, 12c, 18c)
- Annotations, suite structure & module rework

### Phase 2 - Modernization

- Code coverage rework
- Reporter API & assertion output improvements
- Modern database capabilities (data types)

### Phase 3 - Developer experience

- Framework usage - telemetry
- Developer/tester productivity (data setup, mocking, scope narrowing)

### Phase 4 - New capability

- cucumber-utPLSQL: Gherkin BDD/ATDD test runner for PL/SQL

The detailed roadmap is available in the [utPLSQL org GitHub Discussions](https://github.com/orgs/utPLSQL/discussions/15).

## Sustainability 

The intention is to keep utPLSQL under active development and create possibilities for companies and individuals to get direct access to the development team, with options for knowledge sharing, consultations, and more.

Working on the above requires significant investment of thought, time and effort. It is not sustainable to keep developing utPLSQL without support from those who use it and benefit from it daily.

Over the last decade, this project has been a significant part of my life as an engineer and professional software developer. I would like to see it thrive rather than fade into deprecation and obscurity.

## Sponsorship

I am currently working on opening utPLSQL for sponsorship, and I'll share the tiers and details in a follow-up post once everything is in place. 

If you or your company would benefit from active development of utPLSQL and want to be notified when sponsorship opens, contact [me directly](https://www.linkedin.com/in/jacek-gebal-6678301/) or [utPLSQL.org on LinkedIn](https://www.linkedin.com/company/utplsql/posts/).
You can also drop a comment or open a new discussion on [GitHub](https://github.com/orgs/utPLSQL/discussions/categories/sponsorship-sustainability).

Your responses will help me gauge interest as I finalize the preparations. 

> Jacek Gebal <br>
> @utPLSQL