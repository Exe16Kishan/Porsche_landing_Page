import css from "../CsshelperFunction.js";
import { styles } from "./sectionStyle.js";

export function createSection() {
  const section = document.createElement("div");
  css(section, styles.section);

  // Create left and right divs
  const left = document.createElement("div");
  const right = document.createElement("div");

  //CSS styles to left and right divs
  css(left, styles.left);
  css(right, styles.right);

  // S letter image
  const S = document.createElement("img");
  S.setAttribute("src", "./image/S.png");
  css(S, styles.s);
  section.appendChild(S);

  // letters for left and right div
  const leftLetters = ["P", "O", "R"];
  const rightLetters = ["C", "H", "E"];

  // Function to create, style, and add hover effects to letters
  function addLetters(parent, letters) {
    letters.forEach((letter) => {
      const letterElement = document.createElement("h1");
      letterElement.textContent = letter;
      css(letterElement, styles.letter);

      // effects to individual letters
      letterElement.addEventListener("mouseover", () => {
        letterElement.style.color = styles.letterHover.color;
        letterElement.style.textShadow = styles.letterHover.textShadow;
        letterElement.style.transform = styles.letterHover.transform;
      });

      // Reset the letter styles on mouseout
      letterElement.addEventListener("mouseout", () => {
        letterElement.style.color = "inherit";
        letterElement.style.textShadow = styles.letter.textShadow;
        letterElement.style.transform = "scale(1)";
      });

      parent.appendChild(letterElement);
    });
  }

  addLetters(left, leftLetters);
  addLetters(right, rightLetters);

  section.appendChild(left);
  section.appendChild(right);

  return section;
}
