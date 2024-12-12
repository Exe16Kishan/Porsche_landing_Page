import css from "../CsshelperFunction.js";
import { leftComponent } from "../left/left.js";
import { rightComponent } from "../right/right.js";
import { styles } from "./sectionStyle.js";

export function createSection() {
  const section = document.createElement("div");
  css(section, styles.section);

  // Create left and right divs
  const left = document.createElement("div");
  const right = document.createElement("div");

  // CSS styles to left and right divs
  css(left, styles.left);
  css(right, styles.right);

  // S letter image
  const S = document.createElement("img");
  S.setAttribute("src", "./image/S.png");
  section.appendChild(S);

  // Adding watch image
  const image = document.createElement("img");
  image.setAttribute("src", "./image/watch.png");
  css(image, styles.watch);
  section.appendChild(image);

  // Adding Explore button
  const button = document.createElement("button");
  button.textContent = "Explore More";
  section.appendChild(button);
  css(button, styles.exploreButton);
  button.addEventListener("mouseover", () => {
    button.style.filter = "drop-shadow(0 0 0.75rem black)";
  });
  button.addEventListener("mouseout", () => {
    button.style.filter = "inherit";
  });

  // Letters for left and right div
  const leftLetters = ["P", "O", "R"];
  const rightLetters = ["C", "H", "E"];

  // Function to create, style, and add hover effects to specific letters
  function addLetters(parent, letters) {
    
    letters.forEach((letter) => {
      const letterElement = document.createElement("h1");
      letterElement.setAttribute("name","letter")
      letterElement.textContent = letter;
      css(letterElement, styles.letter);

      // Effects for individual letters
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

  // Function to create lines
  function createLine(parent) {
    const topLine = document.createElement("hr");
    const bottomLine = document.createElement("hr");
    parent.appendChild(topLine);
    parent.appendChild(bottomLine);

    // Add styles for the lines based on the parent div
    if (parent === left) {
      css(topLine, styles.topLeftLine);
      css(bottomLine, styles.bottomLeftLine);
    } else {
      css(topLine, styles.topRightLine);
      css(bottomLine, styles.bottomRightLine);
    }
  }

  // Function to add text
  const leftText = ["Diesel", "Tough"];
  const rightText = ["Watches", "Modern"];

  function addText(parent, parentTextArray) {
    parentTextArray.forEach((text, index) => {
      const h1 = document.createElement("h1");
      h1.textContent = text;
      parent.appendChild(h1);

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
    });
  }

  addText(left, leftText);
  addText(right, rightText);

  createLine(left);
  createLine(right);

   addLetters(left, leftLetters);  
   addLetters(right, rightLetters);  

  section.appendChild(left);
  section.appendChild(right);

  const leftSide = leftComponent();
  left.appendChild(leftSide);

  const rightSide = rightComponent();
  right.appendChild(rightSide);

  // Media query to handle screen size changes
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  // Function to apply media query styles
  function applyMediaQueryStyles(e) {
    // Apply styles based on media query match
    const lines = document.getElementsByTagName("hr")
    const letters = document.querySelectorAll('[name="letter"]')
    console.log(letters)
      if (e.matches) {
        //lines
        for (const line of lines) {
          line.style.display = "none";
        }
        // letters
        for (const letter of letters) {
          css(letter,styles.letter2)
        }
        // letter s
        css(S, styles.s2); 
      } else {
        // lines
        for (const line of lines) {
          line.style.display = "block";
        }
        // letters
        for (const letter of letters) {
          css(letter,styles.letter)
        }
        // letter s
      css(S, styles.s);
    }
  }

  // Add event listener to handle media change
  mediaQuery.addEventListener("change", applyMediaQueryStyles);

  applyMediaQueryStyles(mediaQuery);

  return section;
}
