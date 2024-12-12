import css from "../CsshelperFunction.js";
import { styles } from "../right/rightStyles.js";

export function rightComponent() {
  const mainContainer = document.createElement("div");

  const navList = ["Cart", "Login", "Profile"];
  const nav = document.createElement("div"); // Parent div for navigation
  const linkContainer = document.createElement("div"); // Child div for links
  css(linkContainer, styles.Link);

  
  navList.forEach((text) => {
    const h1 = document.createElement("h1");
    h1.textContent = text;
    css(h1, styles.link);

    // Add hover effects for links
    h1.addEventListener("mouseover", () => {
      css(h1, styles.linkHover);
    });
    h1.addEventListener("mouseout", () => {
      css(h1, styles.link);
    });

    linkContainer.appendChild(h1);
  });

  // Adding linkContainer div to nav
  nav.appendChild(linkContainer);

  const printButton = document.createElement("div");
  printButton.textContent = "P R I N T";


  mainContainer.appendChild(printButton);
  mainContainer.appendChild(nav);

  // Responsive design 
  function applyResponsiveStyles() {
    if (window.innerWidth <= 768) {
      css(nav, styles.nav2);
      css(printButton, styles.printButton2);
    } else {
      css(nav, styles.nav);
      css(printButton, styles.printButton);
    }
  }

  const debouncedResize = (() => {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(applyResponsiveStyles, 200);
    };
  })();

  window.addEventListener("resize", debouncedResize);
  applyResponsiveStyles();

  return mainContainer;
}
