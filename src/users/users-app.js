import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async (element) => {
    if (!element)
        throw new Error("No HTML Div Element provided");

    element.innerHTML = "Loading...";
    await usersStore.loadNextPage();
    element.innerHTML = "";
    renderTable(element);

}