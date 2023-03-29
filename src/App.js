import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";
import GlobalStyle from "./GlobalStyle";
import AuthProvider from "./Context/Auth";
import DashboardPage from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignInPage />}></Route>
          <Route path="/up" element={<SignUpPage />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
