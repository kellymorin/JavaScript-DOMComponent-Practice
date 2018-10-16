const article = document.querySelector("#messages");
const messages = ["Are we doing fireworks this year?", "After what happened to spot last year, should we?", "That was a fluke, and it wasn't even that big of a problem", "We'll make sure spot is inside this year.", "Only if you have a spare leash laying around in case we need it"]
let fragment = document.createDocumentFragment()

const createSection = (clName, array) => {
  array.forEach((phrase)=>{
    let element = document.createElement("section");
    element.className = clName;
    element.textContent = phrase
    fragment.appendChild(element);
  })
  return fragment
}
article.appendChild(createSection("messages", messages));
