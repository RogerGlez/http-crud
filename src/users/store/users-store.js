import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: []
};

const loadNextPage = async () => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if (users.length === 0) return;
    state.currentPage++;
    state.users = users;
};

const loadPreviousPage = async () => {
    if (state.currentPage - 1 < 1) return;
    const users = await loadUsersByPage(state.currentPage - 1);
    if (users.length === 0) return;
    state.currentPage--;
    state.users = users;
};

const onUserChange = () => {
    throw new Error("No implementado");
};

const reloadPage = async () => {
    throw new Error("No implementado");
};

/**
 * 
 * @returns {User[]}
 */
const getUsers = () => {
    return [...state.users];
};

/**
 * 
 * @returns {Number}
 */
const getCurrentPage = () => {
    return state.currentPage;
};

export default {
    getCurrentPage,
    getUsers,
    loadNextPage,
    loadPreviousPage,
    onUserChange,
    reloadPage,
}