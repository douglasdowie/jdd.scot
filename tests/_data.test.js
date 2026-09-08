import assert from "node:assert";
import fs from "node:fs";
import { before, describe, test } from "node:test";

describe("jdd.json", () => {
  let jdd;

  before(() => {
    jdd = JSON.parse(fs.readFileSync("site/_data/jdd.json"));
  });

  test("country", () => {
    assert.strictEqual(jdd.country, "GB");
  });

  test("description", () => {
    assert.strictEqual(
        jdd.description,
        "The personal website of J. Douglas Dowie, a Software Engineer based in Scotland. Previous roles include " +
        "Engineering Manager and Research Assistant."
    );
  });

  test("email", () => {
    assert.strictEqual(jdd.email, "mailto:hello@jdd.scot");
  });

  test("locale", () => {
    assert.strictEqual(jdd.locale, "en-GB");
  });

  test("me", () => {
    assert.strictEqual(Object.keys(jdd.me).length, 5);
    assert.strictEqual(jdd.me.acm, "https://dl.acm.org/profile/81502795581");
    assert.strictEqual(jdd.me.github, "https://github.com/douglasdowie");
    assert.strictEqual(jdd.me.gitlab, "https://gitlab.com/douglasdowie");
    assert.strictEqual(jdd.me.linkedin, "https://linkedin.com/in/douglasdowie");
    assert.strictEqual(jdd.me.orcid, "https://orcid.org/0009-0004-1322-0798");
  });

  test("name", () => {
    assert.strictEqual(jdd.name, "J. Douglas Dowie");
  });

  test("region", () => {
    assert.strictEqual(jdd.region, "GB-SCT");
  });

  test("title", () => {
    assert.strictEqual(jdd.title, "Software Engineer");
  });

  test("website", () => {
    assert.strictEqual(jdd.website, "https://jdd.scot");
  });
});
