import css from "../CsshelperFunction.js";
import { styles } from "./navbarStyle.js";
export function createNavbar() {
  // navbar container
  const navbar = document.createElement("div");
  css(navbar, styles.navbar);

  // symbol
  const symbol = document.createElement("p");
  symbol.textContent = "CoderWorld";
  css(symbol, styles.symbol);
  navbar.appendChild(symbol);

  // button section
  const buttonSection = document.createElement("div");
  const buttonNames = ["HOME", "ABOUT", "SERVICES", "CONTACT"];
  buttonNames.forEach((name) => {
    const button = document.createElement("p");
    button.textContent = name;

    // Adding hover effect
    button.addEventListener("mouseover", () => {
      css(button, styles.onMouseHover);
    });

    button.addEventListener("mouseout", () => {
      css(button, styles.ofMouseHover);
    });

    buttonSection.appendChild(button);
  });

  css(buttonSection, styles.buttonSection);
  navbar.appendChild(buttonSection);

  return navbar;
}
