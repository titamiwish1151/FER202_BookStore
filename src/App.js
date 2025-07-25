import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainNavigation } from "./components/MainNavigation";
import SubNavigation from "./components/SubNavigation";
import HeaderTopBar from "./components/HeaderTopBar";

import AuthPage from "./pages/AuthPage";
import HomePageContent from "./pages/HomePageContent";
import Authors from "./pages/Authors";
import BestSellers from "./pages/BestSellers";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Companies from "./pages/Companies";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Ideas from "./pages/Ideas";
import NewBooks from "./pages/NewBooks";
import InputForm from "./components/InputForm";

// ✅ Thêm các trang liên quan đến bill
import BillDetail from "./pages/BillDetail";
import BillList from "./pages/BillList";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage"; 

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
          <Route path="/authors" element={<Authors />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/new-books" element={<NewBooks />} />

          {/* ✅ Trang chi tiết bill và danh sách bill */}
          <Route path="/bill-detail" element={<BillDetail />} />
          <Route path="/bills" element={<BillList />} />
          <Route path="/checkout/:billId" element={<CheckoutPage />} />
          <Route path="/payment/:id" element={<PaymentPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
