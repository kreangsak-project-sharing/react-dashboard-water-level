import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
