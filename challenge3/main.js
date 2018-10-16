const article = document.querySelector("#messages");
const messages = ["Are we doing fireworks this year?", "After what happened to spot last year, should we?", "That was a fluke, and it wasn't even that big of a problem", "We'll make sure spot is inside this year.", "Only if you have a spare leash laying around in case we need it"]

for (i = 0; i< messages.length; i++) {
  const section = document.createElement("section");
  section.className = "messages";
  section.textContent = messages[i];
  article.appendChild(section);
};
