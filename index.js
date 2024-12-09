// index.js

// Import the styles object from style.js
import { styles } from "./style.js";

// Helper function to apply styles from an object
function applyStyles(element, styles) {
  Object.assign(element.style, styles);
}

// Create the main container
const mainContainer = document.createElement("div");
applyStyles(mainContainer, styles.mainContainer);
document.body.appendChild(mainContainer);

// Create and style the header
const header = document.createElement("h1");
header.textContent = "Welcome to My Professional JavaScript Website!";
applyStyles(header, styles.header);
mainContainer.appendChild(header);

// Create a paragraph with some text
const paragraph = document.createElement("p");
paragraph.textContent =
  "This website is built entirely using JavaScript! You can add elements, style them, and make them interactive—all with JavaScript.";
applyStyles(paragraph, styles.paragraph);
mainContainer.appendChild(paragraph);

// Create an image
const image = document.createElement("img");
image.setAttribute("src", "https://via.placeholder.com/800x400");
image.setAttribute("alt", "Placeholder Image");
applyStyles(image, styles.image);
mainContainer.appendChild(image);

// Add a button with interactivity
const button = document.createElement("button");
button.textContent = "Click Me!";
applyStyles(button, styles.button);
mainContainer.appendChild(button);

// Change button color on hover
button.addEventListener("mouseover", () => {
  applyStyles(button, styles.buttonHover);
});
button.addEventListener("mouseout", () => {
  applyStyles(button, styles.button);
});

// Add button functionality
button.addEventListener("click", () => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "You clicked the button! JavaScript is amazing!";
  applyStyles(newParagraph, styles.newParagraph);
  mainContainer.appendChild(newParagraph);
  
  // Add a new button to hide the new paragraph
  const hideButton = document.createElement("button");
  hideButton.textContent = "Hide the Message";
  applyStyles(hideButton, styles.button);
  mainContainer.appendChild(hideButton);
  
  // Hide the new paragraph when clicked
  hideButton.addEventListener("click", () => {
    newParagraph.style.display = "none";
    hideButton.style.display = "none";
  });
});

// Create a footer
const footer = document.createElement("footer");
footer.textContent = "© 2024 My JavaScript Website";
applyStyles(footer, styles.footer);
mainContainer.appendChild(footer);

// Add a smooth scroll to the top button
const scrollButton = document.createElement("button");
scrollButton.textContent = "Scroll to Top";
applyStyles(scrollButton, styles.button);
document.body.appendChild(scrollButton);

// Scroll to the top of the page when the button is clicked
scrollButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
