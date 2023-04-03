import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";
import GlobalStyle from "./GlobalStyle";
import AuthProvider from "./Context/Auth";
import DashboardPage from "./Pages/Dashboard";
import AdressPage from "./Pages/Adress";
import MapsPage from "./Pages/Maps";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<DashboardPage />}></Route>
          <Route path="/signin" element={<SignInPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/adress" element={<AdressPage />}></Route>
          <Route path="/maps" element={<MapsPage />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
