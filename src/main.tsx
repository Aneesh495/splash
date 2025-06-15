import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "aos/dist/aos.css"; // imports AOS styles
import AOS from "aos";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import ContactForm from "./ContactForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

AOS.init({
  once: false, // fire animations
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

<ThemeProvider theme={theme}>
  <CssBaseline />
  <React.StrictMode>
    <App />
  </React.StrictMode>
</ThemeProvider>;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);