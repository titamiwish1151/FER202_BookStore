// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainNavigation } from "./components/MainNavigation";
import SubNavigation from "./components/SubNavigation";
import AuthPage from "./pages/AuthPage";
import HeaderTopBar from "./components/HeaderTopBar";
import HomePageContent from "./pages/HomePageContent";
import InputForm from "./components/InputForm";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";


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
          <Route path="/" element={<HomePageContent />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/fullSignup" element={<InputForm />} />
          <Route path="/lost-password" element={<ForgotPasswordPage />} />
          {/* <Route path="/login" element={<RegisterPage />} /> */}
          {/* <Route path="/books" element={<BookListPage />} /> */}
          {/* <Route path="/signup" element={<SignupPage />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
