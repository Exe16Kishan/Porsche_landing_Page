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

  //CSS styles to left and right divs
  css(left, styles.left);
  css(right, styles.right);

  // S letter image
  const S = document.createElement("img");
  S.setAttribute("src", "./image/S.png");
  css(S, styles.s);
  section.appendChild(S);

  // adding watch 
  const image = document.createElement("img")
  image.setAttribute("src","./image/watch.png")
  css(image,styles.watch)
  section.appendChild(image)


  // adding Explore button
  const button = document.createElement("button")
  button.textContent="Explore More";
  section.appendChild(button);
  css(button,styles.exploreButton)
  button.addEventListener("mouseover",()=>{
    button.style.filter="drop-shadow(0 0 0.75rem black)"
  })
  button.addEventListener("mouseout",()=>{
    button.style.filter="inherit"
  })

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
  // function to create lines
  function createLine(parent) {
    // creating line
    const topLine = document.createElement("hr");
    const bottomLine = document.createElement("hr");
    // adding it to parent div
    parent.appendChild(topLine);
    parent.appendChild(bottomLine);
    // addingCss
    if (parent == left) {
      css(topLine, styles.topLeftLine);
      css(bottomLine, styles.bottomLeftLine);
    } else {
      css(topLine, styles.topRightLine);
      css(bottomLine, styles.bottomRightLine);
    }
  }

  // function to add text
  const leftText = ["Diesel","Tough"];
  const rightText = ["Watches","Modern"];

  function AddingText(parent ,parentTextArray) {
    parentTextArray.forEach((text,index) => {
      const h1 = document.createElement("h1");
      h1.textContent=text;
      parent.appendChild(h1)
      if (parent==left) {
        if (index==0) {
          css(h1,styles.leftTop)
        }
        else{
          css(h1,styles.leftBottom)
        }
      }
      else{
        if (index==0) {
          css(h1,styles.rightTop)
        }
        else{
          css(h1,styles.rightBottom)
        }
      }
    }); 
  }

  AddingText(left,leftText)
  AddingText(right,rightText)


  createLine(left);
  createLine(right);

  addLetters(left, leftLetters);
  addLetters(right, rightLetters);

  section.appendChild(left);
  section.appendChild(right);

  const leftSide = leftComponent();
  left.appendChild(leftSide)

  const rightSide = rightComponent()
  right.appendChild(rightSide)

  return section;
}
