// TRAINING EXAMPLE - INTENTIONALLY VULNERABLE - DO NOT USE IN PRODUCTION
// Used by this repository's published security advisory (GHSA demo) to show
// what an unsanitised redirect / HTML injection sink looks like.
function renderGreeting(name) {
  // Vulnerable: untrusted input written straight into the page.
  document.write("Hello " + name);
}
