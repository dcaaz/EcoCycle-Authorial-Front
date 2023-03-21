import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignInPage />}></Route>
        <Route path="/up" element={<SignUpPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
