import React from "react";
import { Provider } from "react-redux";
import { Counter } from "./src/screens/Counter";
import { store } from "./src/redux/store/index";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
