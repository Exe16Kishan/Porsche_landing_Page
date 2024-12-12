import css from "../CsshelperFunction.js";
import { styles } from "./leftStyles.js";

export function leftComponent() {
  const mainContainer = document.createElement("div");
  const linkList = ["Store", "Shop", "Collection"];
  const nav = document.createElement("div"); // Parent div for navigation
  const title = document.createElement("div"); // Child div for the title
  title.setAttribute("name","Title")
  title.textContent = "Diesel";


  const title2 = document.createElement("h1"); // Child div for the title
  title2.textContent = "Diesel";
  css(title2,styles.title2)
  mainContainer.appendChild(title2)

  

  const Link = document.createElement("div"); // Child div for links
  Link.setAttribute("name", "Link");
  // Add title to the nav
  nav.appendChild(title);

  // css
  css(nav, styles.nav);
  css(title, styles.title);
  css(Link, styles.Link);

  // Add links to the nav
  linkList.forEach((text) => {
    const h1 = document.createElement("h1");
    h1.textContent = text;
    css(h1, styles.link);
    Link.appendChild(h1);
  });

  // content button
  const content = document.createElement("div");
  const bigLine = document.createElement("hr");
  const smallLine = document.createElement("hr");

  // lines
  content.appendChild(bigLine);
  content.appendChild(smallLine);

  // text
  const textNode = document.createTextNode("Content");
  content.appendChild(textNode);
  // css
  // css(content, styles.contentButton);
  css(bigLine, styles.bigLine);
  css(smallLine, styles.smallLine);

  // parent div
  const bottomButton = document.createElement("div");
  // child div
  // adding buttons to parrent div
  const leftButton = document.createElement("div");
  bottomButton.appendChild(leftButton);
  // adding buttons to parrent div
  const rightButton = document.createElement("div");
  bottomButton.appendChild(rightButton);
  // adding icon in
  const leftImg = document.createElement("img");
  leftImg.setAttribute("src", "./image/left.png");
  leftButton.appendChild(leftImg);

  const rightImg = document.createElement("img");
  rightImg.setAttribute("src", "./image/left.png");
  rightButton.appendChild(rightImg);

  // css
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

  // Append the Link div to the nav
  nav.appendChild(Link);
  // Append the nav to the main container
  mainContainer.appendChild(ring);
  mainContainer.appendChild(content);
  mainContainer.appendChild(bottomButton);
  mainContainer.appendChild(nav);
  css(title,styles.title)

  // media query
  // create a media query
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  // function to apply media query styles
  function applyMediaQueryStyles(e) {
    
    if (e.matches) {
      css(content,styles.contentButton2)
      css(bottomButton,styles.bottomButton2)
      nav.style.display="none"
      title2.style.display="block"
    } else {
      css(content,styles.contentButton)
      css(bottomButton,styles.bottomButton)
      nav.style.display="flex"
      title2.style.display="none"
            
    }
  }

  // Add event listener to handle media query change
  mediaQuery.addEventListener("change", applyMediaQueryStyles);

  // call the function
  applyMediaQueryStyles(mediaQuery);
  return mainContainer;
}
