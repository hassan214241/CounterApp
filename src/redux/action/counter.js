import { INCREMENT } from "./types";
import { DECREMENT } from "./types";

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
