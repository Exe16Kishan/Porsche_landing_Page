import css from "../CsshelperFunction.js";
import { styles } from "./footerStyle.js";



export function createFooter() {
const footer = document.createElement("div")
css(footer,styles.footer)
footer.textContent="footer"
// const content = document.createElement("div");
// content.textContent="footer"

return footer;
}
