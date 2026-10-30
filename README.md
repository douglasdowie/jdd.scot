# jdd.scot

[![Main](https://github.com/douglasdowie/jdd.scot/actions/workflows/main.yml/badge.svg)](https://github.com/douglasdowie/jdd.scot/actions/workflows/main.yml)

[My wee bit of the internet](https://jdd.scot) (the domain being my initials). Its design is based around a CLI (command-line 
interface) that also uses my initials. The website conforms to web standards and has an underlying semantic structure. 
There is also metadata for search, sharing, and more.

## Community

I handcrafted the website using [Eleventy](https://www.11ty.dev). Go check it out! I have an 
[author page in the community](https://www.11ty.dev/authors/douglasdowie/). Also, you can find me on
[the leaderboard](https://www.speedlify.dev/site/jdd-scot/), which tracks my progress over time (and is a bit of fun).

The website also aligns with the [IndieWeb](https://indieweb.org). I am in the early days of learning about the 
IndieWeb, owning my domain, identity and microformats.

## Setup

First, install the project's dependencies.

```bash
npm install
```

## Scripts

### Build

After that, you build the website with the following command. This will output the result to the *_site* directory 
(not versioned in Git).

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

[Start a local server](http://localhost:8080) to aid in any development work (it will update as you code).

```bash
npm run start
```

### Test

Run the [tests](tests) (these are safeguards on key data).

```bash
npm run test
```
