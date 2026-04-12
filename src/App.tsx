import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import ForgotPasswordPage from "./page/ForgotPasswordPage";
import OTPPage from "./page/OTPPage";
import ResetPasswordPage from "./page/ResetPasswordPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;