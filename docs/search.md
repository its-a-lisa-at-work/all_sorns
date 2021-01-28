# Search

SORN DASH provides more granular search options for SORNs than what is
available through the Federal Register, by converting SORNs from
narrative documents into structured database records. We focused on
implementing search methods for quickly finding exact matches, because
our research showed that displaying highlighted snippets of the location
of exact terms or phrases was useful to our users.

## How search works

We use postgres' built-in [full text
search](https://www.postgresql.org/docs/current/textsearch.html)
ability.

By default, searches are made against all of our SORN data at once. We do
a single search against the `xml` column which has the entirety of the
published SORN. If a user applies filters to narrow their search to a
subset of columns or agencies, then we search against only those columns.

All of the columns we use for full text search are generated columns
containing the tsvector data type that powers search. Generated columns are
a new type, just introduced in PostgreSQL 12.

Full text search use the [**pg\_search
gem**](https://github.com/Casecommons/pg_search).

This article was helpful in our development.
  - > [Full Text Search in Milliseconds with Rails and
    > PostgreSQL](https://pganalyze.com/blog/full-text-search-ruby-rails-postgres)
