# jdd.scot

[![Main](https://github.com/douglasdowie/jdd.scot/actions/workflows/main.yml/badge.svg)](https://github.com/douglasdowie/jdd.scot/actions/workflows/main.yml)

[My wee bit of the internet](https://jdd.scot) (the domain being my initials). The website serves as a combination of my 
online identity hub and a curated profile. It is also a personal development project for all aspects of creating and 
running a website.

Its design is based around a CLI (command line interface) that also uses my initials. My aim is the website being 
accessible through adherence to web standards. Also, a strong underlying semantic web structure. Supporting metadata is 
present for search, sharing, and AI ~~theft~~ integration.

I handcrafted the website using [Eleventy](https://www.11ty.dev). Go check them out!

It also aligns with the [IndieWeb](https://indieweb.org).

## Setup

First, install the project's dependencies.

```bash
npm install
```

## Scripts

### Build

After that, you build the website with the following command. This will output the result to the *_site* directory.

```bash
npm run build
```

### Lint

Lint the website's CSS using [Stylelint](https://stylelint.io) (there is also a command for auto-fixing issues).

```bash
npm run lint
npm run lint:fix
```

### Start

[Start a local website](http://localhost:8080) to aid in development (it will update as you code).

```bash
npm run start
```

### Test

Run the [tests](tests) (these are safeguards on key data).

```bash
npm run test
```
