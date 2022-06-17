import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "./Context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./Redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <ReduxProvider store={store}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ReduxProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
