# jdd.scot

[![Main](https://github.com/douglasdowie/jdd.scot/actions/workflows/main.yml/badge.svg)](https://github.com/douglasdowie/jdd.scot/actions/workflows/main.yml)

[My wee bit of the internet](https://jdd.scot), created using [Eleventy](https://www.11ty.dev).

The website serves as my curated online profile. Its design is based around a CLI (command line interface). It aims for 
high accessibility and adherence to web standards. Both established (_HTML5_, _CSS_, _robots.txt_ and _sitemap.xml_) 
and emerging (_humans.txt_ and _llms.txt_). Supporting metadata is present.

## npm

Install the project's dependencies.

```bash
npm install
```

## Scripts

### Build

Build the website and output the result to the *_site* directory.

```bash
npm run build
```

### Lint

Lint the CSS for the website using [Stylelint](https://stylelint.io).

```bash
npm run lint
npm run lint:fix
```

### Start

[Start a local website](http://localhost:8080) to aid in development.

```bash
npm run start
```

### Test

Run the [tests](tests).

```bash
npm run test
```
