import "./render-add-button.css"

/**
 * 
 * @param { HTMLDivElement } element 
 * @param { (MouseEvent) => void } callback
 */
export const renderAddButton = (element, callback) => {
    const fabButton = document.createElement("button");
    fabButton.innerText = "+";
    fabButton.classList.add("fab-button");

    element.append(fabButton);

    fabButton.addEventListener("click", (e) => {
        if (!callback) return;
        callback(e);
    });
};

