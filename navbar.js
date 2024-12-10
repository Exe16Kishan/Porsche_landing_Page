import { styles } from "./style.js";


document.body.style.backgroundColor = "gray";
// function to add css
function css(element, styles) {
    Object.assign(element.style, styles);
  }

// navbar
const navbar = document.createElement("div");
document.body.appendChild(navbar);
css(navbar,styles.navbar)

// symbol

const symbol = document.createElement('img')
symbol.setAttribute("src","./image/bird.png")
css(symbol,styles.symbol)
navbar.appendChild(symbol)



// list of buttons in navbar
const buttonSection = document.createElement("div");
const button = ["HOME","ABOUT","SERVICES","CONTACT"];
button.forEach(element => {
    const button = document.createElement("p");
    button.textContent=element;
    buttonSection.appendChild(button);
});
css(buttonSection,styles.buttonSection)
navbar.appendChild(buttonSection);






