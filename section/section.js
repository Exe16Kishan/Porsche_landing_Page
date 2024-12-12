import css from "../CsshelperFunction.js";
import { leftComponent } from "../left/left.js";
import { rightComponent } from "../right/right.js";
import { styles } from "./sectionStyle.js";

export function createSection() {
  const section = document.createElement("div");
  css(section, styles.section);

  const left = document.createElement("div");
  const right = document.createElement("div");
  css(left, styles.left);
  css(right, styles.right);

  const fragment = document.createDocumentFragment();

  const S = document.createElement("img");
  S.setAttribute("src", "./image/S.png");
  // css(S, styles.s);
  fragment.appendChild(S);

  const watchImage = document.createElement("img");
  watchImage.setAttribute("src", "./image/watch.png");
  watchImage.loading = "lazy"; 
  css(watchImage, styles.watch);
  fragment.appendChild(watchImage);

  const button = document.createElement("button");
  button.textContent = "Explore More";
  css(button, styles.exploreButton);
  button.addEventListener("mouseover", () => {
    button.classList.add("hover");
  });
  button.addEventListener("mouseout", () => {
    button.classList.remove("hover");
  });
  fragment.appendChild(button);

  const addLetters = (parent, letters) => {
    const fragment = document.createDocumentFragment();
    letters.forEach((letter) => {
      const letterElement = document.createElement("h1");
      letterElement.setAttribute("name","letter")
      letterElement.textContent = letter;
      css(letterElement, styles.letter);
      fragment.appendChild(letterElement);
    });
    parent.appendChild(fragment);
  };

  const createLine = (parent) => {
    const topLine = document.createElement("hr");
    const bottomLine = document.createElement("hr");
    if (parent === left) {
      css(topLine, styles.topLeftLine);
      css(bottomLine, styles.bottomLeftLine);
    } else {
      css(topLine, styles.topRightLine);
      css(bottomLine, styles.bottomRightLine);
    }
    parent.appendChild(topLine);
    parent.appendChild(bottomLine);
  };

  const addTag = (parent, textArray) => {
    const fragment = document.createDocumentFragment();
    textArray.forEach((text, index) => {
      const h1 = document.createElement("h1");
      h1.setAttribute("name","tags")
      h1.textContent = text;
      // css(h1, index === 0 ? styles.leftTop : styles.leftBottom);
      if (parent === left) {
        if (index === 0) {
          css(h1, styles.leftTop);
        } else {
          css(h1, styles.leftBottom);
        }
      } else {
        if (index === 0) {
          css(h1, styles.rightTop);
        } else {
          css(h1, styles.rightBottom);
        }
      }
      fragment.appendChild(h1);
    });
    parent.appendChild(fragment);
  };

  const applyMediaQueryStyles = () => {
    const isSmallScreen = window.innerWidth <= 768;
    const lines = document.querySelectorAll("hr");
    const letters = document.querySelectorAll('[name="letter"]');
    const tags = document.querySelectorAll('[name="tags"]');


    // css
    lines.forEach((line) => (line.style.display = isSmallScreen ? "none" : "block"));
    letters.forEach((letter) => css(letter, isSmallScreen ? styles.letter2 : styles.letter));
    tags.forEach((tag) => (tag.style.display = isSmallScreen ? "none" : "block"));
    css(S, isSmallScreen ? styles.s2 : styles.s);
    css(watchImage, isSmallScreen ? styles.watch2 : styles.watch);
    css(left, isSmallScreen ? styles.left2 : styles.left);
    css(right, isSmallScreen ? styles.right2 : styles.right);
  };

  const debouncedResize = (() => {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(applyMediaQueryStyles, 200);
    };
  })();

  window.addEventListener("resize", debouncedResize);
  applyMediaQueryStyles();

  const leftLetters = ["P", "O", "R"];
  const rightLetters = ["C", "H", "E"];
  const leftText = ["Diesel", "Tough"];
  const rightText = ["Watches", "Modern"];

  addTag(left, leftText);
  addTag(right, rightText);
  createLine(left);
  createLine(right);
  addLetters(left, leftLetters);
  addLetters(right, rightLetters);

  left.appendChild(leftComponent());
  right.appendChild(rightComponent());

  section.appendChild(left);
  section.appendChild(right);
  section.appendChild(fragment);

  return section;
}
