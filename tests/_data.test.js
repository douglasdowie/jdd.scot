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

  test("education", () => {
    assert.strictEqual(Object.keys(jdd.education).length, 3);

    assert.strictEqual(jdd.education.dundee.level, "Bachelor's Degree");
    assert.strictEqual(jdd.education.dundee.name, "BSc (Hons) Applied Computing");
    assert.strictEqual(jdd.education.dundee.university, "University of Dundee");

    assert.strictEqual(jdd.education.glasgow.level, "Master's Degree");
    assert.strictEqual(jdd.education.glasgow.name, "MSc Software Engineering");
    assert.strictEqual(jdd.education.glasgow.university, "University of Glasgow");

    assert.strictEqual(jdd.education.ou.level, "Bachelor's Degree");
    assert.strictEqual(jdd.education.ou.name, "BA (Hons) Politics, Philosophy and Economics");
    assert.strictEqual(jdd.education.ou.university, "The Open University");
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

  test("register", () => {
    assert.strictEqual(jdd.register.link, "https://www.bcs.org/find-a-bcs-member");
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
