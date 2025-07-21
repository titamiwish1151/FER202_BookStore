// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HeaderTopBar } from "./components/HeaderTopBar";
import Home from "./pages/HomePage";
import { MainNavigation } from "./components/MainNavigation";
import SubNavigation from "./components/SubNavigation";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <Router>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          backgroundColor: "#fff",
          minHeight: "100vh",
        }}
      >
        <HeaderTopBar />
        <MainNavigation />
        <SubNavigation />

        <Routes>
          {/* Define a route for the authentication page */}
          <Route path="/" element={<Home />} />
          {/* You can add more routes here for other pages, e.g.: */}
          <Route path="/login" element={<AuthPage />} />
          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
