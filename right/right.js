import css from "../CsshelperFunction.js";
import { styles } from "../right/rightStyles.js";

export function rightComponent() {
  const mainContainer = document.createElement("div");
  const navList = ["Cart", "Login", "Profile"];
  const nav = document.createElement("div"); // Parent div for navigation
  const Link = document.createElement("div"); // Child div for links
  css(Link, styles.Link);

  // Add links to the Link div
  navList.forEach((text) => {
    const h1 = document.createElement("h1");
    h1.textContent = text;
    css(h1, styles.link);
    Link.appendChild(h1);
  });

  // Add Link div to nav
  nav.appendChild(Link);

  const printButton = document.createElement("div");
  printButton.textContent = "P R I N T";
  mainContainer.appendChild(printButton);
  mainContainer.appendChild(nav);

  // Responsive design using window.innerWidth
  function applyResponsiveStyles() {
    if (window.innerWidth <= 768) {
      css(nav, styles.nav2);
      css(printButton, styles.printButton2);
    } else {
      css(nav, styles.nav);
      css(printButton, styles.printButton);
    }
  }

  
  window.addEventListener("resize", applyResponsiveStyles);
  applyResponsiveStyles();

  return mainContainer;
}
