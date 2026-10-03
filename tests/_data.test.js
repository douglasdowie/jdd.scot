import assert from "node:assert";
import fs from "node:fs";
import { before, describe, test } from "node:test";

describe("jdd.json", () => {
  let jdd;

  before(() => {
    jdd = JSON.parse(fs.readFileSync("site/_data/jdd.json"));
  });

  test("alias", () => {
    assert.strictEqual(jdd.alias, "Douglas Dowie");
  });

  test("description", () => {
    assert.strictEqual(
        jdd.description,
        "J. Douglas Dowie, a Software Engineer focused on Data Engineering, Agile, and Python. " +
        "Ex-Engineering Manager. Scotland-based."
    );
  });

  test("email", () => {
    assert.strictEqual(jdd.email, "mailto:hello@jdd.scot");
  });

  test("locale", () => {
    assert.strictEqual(jdd.locale, "en-GB");
  });

  test("me", () => {
    assert.strictEqual(Object.keys(jdd.me).length, 7);
    assert.strictEqual(jdd.me.acm, "https://dl.acm.org/profile/81502795581");
    assert.strictEqual(jdd.me.github, "https://github.com/douglasdowie");
    assert.strictEqual(jdd.me.gitlab, "https://gitlab.com/douglasdowie");
    assert.strictEqual(jdd.me.jdd, "https://jdd.co.scot");
    assert.strictEqual(jdd.me.linkedin, "https://www.linkedin.com/in/douglasdowie");
    assert.strictEqual(jdd.me.opencollective, "https://opencollective.com/douglasdowie");
    assert.strictEqual(jdd.me.orcid, "https://orcid.org/0009-0004-1322-0798");
  });

  test("name", () => {
    assert.strictEqual(jdd.name, "J. Douglas Dowie");
  });

  test("register", () => {
    assert.strictEqual(jdd.register.name, "Register of Technology Professionals");
    assert.strictEqual(jdd.register.title, "BCS, The Chartered Institute for IT");
    assert.strictEqual(jdd.register.website, "https://www.bcs.org");
  });

  test("title", () => {
    assert.strictEqual(jdd.title, "Software Engineer");
  });

  test("website", () => {
    assert.strictEqual(jdd.website, "https://jdd.scot");
  });
});
