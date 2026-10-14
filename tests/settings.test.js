import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { JSDOM } from "jsdom";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const settingsScript = await readFile(new URL("../src/settings.js", import.meta.url), "utf8");

function createForm() {
  const dom = new JSDOM(html, {
    url: "https://settings.example.test/account",
    runScripts: "outside-only",
  });
  dom.window.eval(settingsScript);
  return dom.window.document;
}

function submitForm(document) {
  const event = new document.defaultView.Event("submit", {
    bubbles: true,
    cancelable: true,
  });
  document.querySelector("#settings-form").dispatchEvent(event);
  return event;
}

test("renders labeled profile fields and a notification preference", () => {
  const document = createForm();

  assert.equal(document.querySelector('label[for="display-name"]').textContent, "Display name");
  assert.equal(document.querySelector('label[for="email"]').textContent, "Email address");
  assert.equal(document.querySelector("#display-name").getAttribute("aria-describedby"), "display-name-error");
  assert.equal(document.querySelector("#email").getAttribute("aria-describedby"), "email-error");
  assert.equal(document.querySelector('button[type="submit"]').textContent, "Save settings");
  assert.equal(document.querySelector("#notifications").checked, false);
});

test("reports required name and invalid email", () => {
  const document = createForm();
  const errors = document.defaultView.validateSettings({ displayName: "   ", email: "not-an-email" });

  assert.equal(errors.displayName, "Enter a display name.");
  assert.equal(errors.email, "Enter a valid email address.");
});

test("shows accessible field errors for invalid submission", () => {
  const document = createForm();
  const originalUrl = document.defaultView.location.href;
  const event = submitForm(document);

  assert.equal(event.defaultPrevented, true);
  assert.equal(document.defaultView.location.href, originalUrl);
  assert.equal(document.querySelector("#display-name-error").textContent, "Enter a display name.");
  assert.equal(document.querySelector("#email-error").textContent, "Enter an email address.");
  assert.equal(document.querySelector("#display-name").getAttribute("aria-invalid"), "true");
  assert.equal(document.querySelector("#email").getAttribute("aria-invalid"), "true");
  assert.equal(document.querySelector("#success-message").textContent, "");
});

test("shows success after valid submission without claiming a server save", () => {
  const document = createForm();
  const originalUrl = document.defaultView.location.href;
  document.querySelector("#display-name").value = "Avery Chen";
  document.querySelector("#email").value = "avery@example.com";

  const event = submitForm(document);

  assert.equal(event.defaultPrevented, true);
  assert.equal(document.defaultView.location.href, originalUrl);
  assert.equal(
    document.querySelector("#success-message").textContent,
    "Settings validated successfully. No data was sent to a server.",
  );
  assert.equal(document.querySelector("#display-name-error").hidden, true);
  assert.equal(document.querySelector("#email-error").hidden, true);
});

test("allows the notification preference to be toggled", () => {
  const document = createForm();
  const notifications = document.querySelector("#notifications");

  notifications.click();
  assert.equal(notifications.checked, true);

  notifications.click();
  assert.equal(notifications.checked, false);
});