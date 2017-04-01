# Maintainging the utPLSQL Website

The [utPLSQL website](https://utplsql.github.io)  is powered by [Jekyll](https://jekyllrb.com/).  Which generated HTML when you push a commit to [utplsql.github.io](https://github.com/utPLSQL/utPLSQL.github.io).   

This also works in harmony with the gh-pages branches on the various other repository to create a single website.  For example the [utpsql](https://github.com/utPLSQL/utPLSQL) repositories [gh-pages](https://github.com/utPLSQL/utPLSQL/tree/gh-pages) branch, is visible at [https://utplsql.github.io/utPLSQL/](https://utplsql.github.io/utPLSQL/).  

This allows for documentation from each sub repository to host it's own documentation without having to modify the utpsql.github.io repsitory directly.



## How to make an announcement post.

Create a File in the [_posts](https://github.com/utPLSQL/utPLSQL.github.io/tree/master/_posts) directory with the file name of `YYYY-MM-DD-Blog-Post-Name.md`

This file will be a standard [Markdown file](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) which can be editing with any text editor although there are many offline and online editors for Markdown.

The file will also need a YAML Front Matter section at the top of the file.

    ---
    layout: post
    title:  "Title of Blog Post"
    date:   2016-06-20 15:00:00 -0600
    categories: moving
    ---

Look at an existing post if you want an example.

## How to preview site locally

Jekyll will allow you to preview the site locally doing the following:

1. [Install Jekyll 3](https://jekyllrb.com/docs/installation/)
2. [Use Jekyll Serve](https://jekyllrb.com/docs/usage/)







  
