// TRAINING EXAMPLE - FIXED VERSION (see the repository security advisory)
// The original version wrote untrusted input with document.write, which is an
// HTML injection sink. This version assigns through textContent instead, so
// the input is rendered as inert text.
function renderGreeting(name) {
  const el = document.getElementById("greeting");
  el.textContent = "Hello " + name;
}
