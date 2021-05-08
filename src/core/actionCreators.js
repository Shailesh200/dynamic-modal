import { HIDE_MODAL, REGISTER_MODAL, SHOW_MODAL } from "./actionTypes";

export const registerModal = (id) => ({
    type: REGISTER_MODAL,
    id
  });
  
  export const showModal = (id) => ({
    type: SHOW_MODAL,
    id
  });
  
  export const hideModal = (id) => ({
    type: HIDE_MODAL,
    id
  });