import { INCREMENT,DECREMENT,RESET } from "./types";
// import {  } from "./types";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decNumber = () => {
  return {
    type: DECREMENT,
  };
};


export const Reset = () => {
  return{
    type: RESET,
  };
};