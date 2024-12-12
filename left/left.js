import css from "../CsshelperFunction.js";
import { styles } from "./leftStyles.js";

export function leftComponent() {
  const mainContainer = document.createElement("div");
  const linkList = ["Store", "Shop", "Collection"];
  const nav = document.createElement("div"); // Parent div for navigation
  const title = document.createElement("div"); // Child div for the title
  title.setAttribute("name", "Title");
  title.textContent = "Diesel";

  const title2 = document.createElement("h1"); // Alternate title for small screens
  title2.textContent = "Diesel";
  css(title2, styles.title2);
  mainContainer.appendChild(title2);

  const Link = document.createElement("div"); // Child div for links
  Link.setAttribute("name", "Link");
  nav.appendChild(title); // Add title to the nav

  // Apply styles
  css(nav, styles.nav);
  css(title, styles.title);
  css(Link, styles.Link);

  // Add links to the navigation
  linkList.forEach((text) => {
    const h1 = document.createElement("h1");
    h1.textContent = text;
    css(h1, styles.link);
    Link.appendChild(h1);
  });

  // Content button
  const content = document.createElement("div");
  const bigLine = document.createElement("hr");
  const smallLine = document.createElement("hr");

  content.appendChild(bigLine);
  content.appendChild(smallLine);
  const textNode = document.createTextNode("Content");
  content.appendChild(textNode);

  css(bigLine, styles.bigLine);
  css(smallLine, styles.smallLine);

  // Bottom buttons
  const bottomButton = document.createElement("div");
  const leftButton = document.createElement("div");
  const rightButton = document.createElement("div");
  const leftImg = document.createElement("img");
  const rightImg = document.createElement("img");

  leftImg.setAttribute("src", "./image/left.png");
  rightImg.setAttribute("src", "./image/left.png");

  leftButton.appendChild(leftImg);
  rightButton.appendChild(rightImg);
  bottomButton.appendChild(leftButton);
  bottomButton.appendChild(rightButton);

  css(bottomButton, styles.bottomButton);
  css(leftButton, styles.leftButton);
  css(rightButton, styles.rightButton);
  css(leftImg, styles.leftImg);
  css(rightImg, styles.rightImg);

  const ring = document.createElement("div");
  const innerRing = document.createElement("div");
  ring.appendChild(innerRing);
  css(ring, styles.ring);
  css(innerRing, styles.innerRing);

  nav.appendChild(Link); // Append Link to nav
  mainContainer.appendChild(ring);
  mainContainer.appendChild(content);
  mainContainer.appendChild(bottomButton);
  mainContainer.appendChild(nav);

  function applyResponsiveStyles() {
    if (window.innerWidth <= 768) {
      css(content, styles.contentButton2);
      css(bottomButton, styles.bottomButton2);
      nav.style.display = "none";
      title2.style.display = "block";
    } else {
      css(content, styles.contentButton);
      css(bottomButton, styles.bottomButton);
      nav.style.display = "flex";
      title2.style.display = "none";
    }
  }

  window.addEventListener("resize", applyResponsiveStyles);

  // applyResponsiveStyles();

  return mainContainer;
}