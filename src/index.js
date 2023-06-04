import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const themeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff8f00", // This is an orange looking color
    },
    secondary: {
      main: "#ffcc80", //Another orange-ish color
    },
  },
});
const themeDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5423ff", // This is an purple looking color
    },
    text: {
      primary: "#555",
    },
    secondary: {
      main: "#ffcc80", //Another orange-ish color
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeLight}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
