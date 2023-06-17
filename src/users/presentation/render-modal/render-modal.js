import modalHtml from "./render-modal.html?raw";
import "./render-modal.css";

let modal;

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RenderModal = (element) => {
    if (!element) throw new Error("Provide an HTML div element to work with");

    if (modal) return;

    modal = document.createElement("div");
    modal.innerHTML = modalHtml;
    modal.className = "modal-container hide-modal";

    element.append(modal);
};