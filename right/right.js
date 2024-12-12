import css from "../CsshelperFunction.js";
import { styles } from "../right/rightStyles.js";

export function rightComponent() {
  const mainContainer = document.createElement("div");
  const navList = ["Cart", "Login", "Profile"];
  const nav = document.createElement("div"); // Parent div for navigation
  const Link = document.createElement("div"); // Child div for links

  css(nav, styles.nav);
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

  css(printButton, styles.printButton);

  // create a media query
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  // function to apply media query styles
  function applyMediaQueryStyles(e) {
    if (e.matches) {
      styles.printButton.display = "none";  // hide the button
      styles.nav.display = "none";          // hide the nav
    } else {
      styles.printButton.display = "flex";  // show the print button
      styles.nav.display = "";              // reset 
    }

    // re-apply updated styles in element
    css(nav, styles.nav);
    css(printButton, styles.printButton);
  }

  // Add event listener to handle media query change
  mediaQuery.addEventListener("change", applyMediaQueryStyles);

  // call the function 
  applyMediaQueryStyles(mediaQuery);

  return mainContainer;
}
