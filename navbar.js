import { styles } from "./style.js";


// function to add css
function css(element, styles) {
    Object.assign(element.style, styles);
  }

css(document.body,styles.body)  
// navbar
const navbar = document.createElement("div");
document.body.appendChild(navbar);
css(navbar,styles.navbar)

// symbol
const symbol = document.createElement('p')
// symbol.setAttribute("src","./image/bird.png")
symbol.textContent="CoderWorld"
css(symbol,styles.symbol)
navbar.appendChild(symbol)



// list of buttons in navbar
const buttonSection = document.createElement("div");
const button = ["HOME","ABOUT","SERVICES","CONTACT"];
button.forEach(element => {
    const button = document.createElement("p");
    button.textContent=element;
    buttonSection.appendChild(button);
    button.addEventListener("mouseover", () => {
        css(button, styles.onMouseHover);
      });

      button.addEventListener("mouseout", () => {
        css(button, styles.ofMouseHover);
      });
});

css(buttonSection,styles.buttonSection)
navbar.appendChild(buttonSection);






