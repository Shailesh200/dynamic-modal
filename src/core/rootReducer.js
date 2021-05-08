import { combineReducers } from "redux";
import { HIDE_MODAL, REGISTER_MODAL, SHOW_MODAL } from "./actionTypes";


const initialState = {
  modals: {}
};

const modals = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_MODAL:
      const newModal = {
        id: action.id,
        visible: false
      };
      return {
        ...state,
        modals: { ...state.modals, [action.id]: newModal }
      };
    case SHOW_MODAL:
      return {
        ...state,
        modals: {
          ...state.modals,
          [action.id]: { ...state.modals[action.id], visible: true, id: action.id }
        }
      };
    case HIDE_MODAL:
      return {
        ...state,
        modals: {
          ...state.modals,
          [action.id]: { ...state.modals[action.id], visible: false, id: action.id  }
        }
      };
    default:
      return state;
  }
};

export default combineReducers({
  modals
});
