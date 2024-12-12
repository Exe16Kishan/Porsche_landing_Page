import css from "../CsshelperFunction.js";
import { styles } from "./leftStyles.js";

export function leftComponent() {
  const mainContainer = document.createElement("div");
  const linkList = ["Store", "Shop", "Collection"];

  // Navigation container
  const nav = document.createElement("div");
  css(nav, styles.nav);

  // Title setup
  const title = document.createElement("div");
  title.setAttribute("name", "Title");
  title.textContent = "Diesel";
  css(title, styles.title);
  nav.appendChild(title);

  const title2 = document.createElement("h1");
  title2.textContent = "Diesel";
  css(title2, styles.title2);
  mainContainer.appendChild(title2);

  // Links container
  const Link = document.createElement("div");
  Link.setAttribute("name", "Link");
  css(Link, styles.Link);

  // Adding links to the Link div
  linkList.forEach((text) => {
    const h1 = document.createElement("h1");
    h1.textContent = text;
    css(h1, styles.link);

    // Adding hover effect
    h1.addEventListener("mouseenter", () => css(h1, styles.linkHover));
    h1.addEventListener("mouseleave", () => css(h1, styles.link));

    Link.appendChild(h1);
  });

  nav.appendChild(Link); // Append Link to nav

  // Content button setup
  const content = document.createElement("div");
  const bigLine = document.createElement("hr");
  const smallLine = document.createElement("hr");
  const textNode = document.createTextNode("Content");

  content.appendChild(bigLine);
  content.appendChild(smallLine);
  content.appendChild(textNode);

  css(bigLine, styles.bigLine);
  css(smallLine, styles.smallLine);

  // Bottom buttons setup
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

  // Ring setup
  const ring = document.createElement("div");
  const innerRing = document.createElement("div");

  ring.appendChild(innerRing);
  css(ring, styles.ring);
  css(innerRing, styles.innerRing);

  // Append elements to main container
  mainContainer.appendChild(ring);
  mainContainer.appendChild(content);
  mainContainer.appendChild(bottomButton);
  mainContainer.appendChild(nav);

  // Responsive design function
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

  // Adding a debounced resize event listener
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(applyResponsiveStyles, 100);
  });

  applyResponsiveStyles();

  return mainContainer;
}
