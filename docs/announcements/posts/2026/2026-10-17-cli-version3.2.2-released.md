---
layout: post
title:  "utPLSQL-cli v3.2.2 released"
date:
  created: 2026-10-17
categories:
  - "releases"
  - "utplsql-cli"
---

## Highlights

### Code coverage scope defined with regular expressions

`utplsql run` has four new options that decide what is included in the coverage report by schema or object **name pattern**:

<!-- more -->
| Option                  | Meaning                                                            |
|-------------------------|--------------------------------------------------------------------|
| `-include-schema-expr`  | report coverage only on schemas whose name matches the expression  |
| `-exclude-schema-expr`  | leave out schemas whose name matches the expression                |
| `-include-object-expr`  | report coverage only on objects whose name matches the expression  |
| `-exclude-object-expr`  | leave out objects whose name matches the expression                |

When project files are mapped to database objects (`-source_path` / `-test_path`), coverage is already limited to those files.
The new options are for code that cannot be mapped to project files. They allow for new packages that follow your naming conventions
to be covered (or left out) automatically, without updating a list of schemas or objects in your pipeline.

```bash
utplsql run app/pass@db -p=app -f=ut_coverage_html_reporter -o=coverage.html \
  -include-schema-expr='^APP_' -exclude-schema-expr='_TEST$' -exclude-object-expr='_TMP$'
```

- Expressions are case-insensitive Oracle regular expressions. Object expressions are matched against the object name without the schema.
- If an include expression is given, `--coverage-schemes` and `-include` are ignored. All exclude options are always applied.
- The filters do not apply when coverage is gathered on project files (`-source_path` / `-test_path`).

See [Filtering objects in coverage reports](https://www.utplsql.org/utPLSQL/latest/userguide/coverage.html#filtering-objects-in-coverage-reports)
and the [utPLSQL-cli documentation](https://www.utplsql.org/utPLSQL-cli.html).

The utPLSQL Maven plugin supports the same filters (`includeSchemaExpr`, `excludeSchemaExpr`, `includeObjectExpr`, `excludeObjectExpr`)
and now documents them in detail.


## What's Changed
* Add coverage filter options by regular expression by @jgebal in [#233](https://github.com/utPLSQL/utPLSQL-cli/pull/233)
* Announce releases with the shared announce-release action by @jgebal in [#234](https://github.com/utPLSQL/utPLSQL-cli/pull/234)


**Full Changelog**: [v3.2.1...v3.2.2](https://github.com/utPLSQL/utPLSQL-cli/compare/v3.2.1...v3.2.2)

----------------------------
[Download utPLSQL-cli v3.2.2 here](https://github.com/utPLSQL/utPLSQL-cli/releases/tag/v3.2.2)
