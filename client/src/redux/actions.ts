import { INIT_HIKES, TOGGLE_USER } from "./action-types";

export const initHikes = (payload)  => {
    debugger;
    return ({ type: INIT_HIKES, payload })
};
  

export const toggleUser = (payload) => ({
    type: TOGGLE_USER,
    payload,
  });