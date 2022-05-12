import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import WelcomePage from "./components/welcome/WelcomePage";
import TaskList from "./components/TaskList";
import SignInPage from "./components/signUp/SignInPage";
import SignUpPage from "./components/signIn/SignUpPage";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route index element={<WelcomePage />} />
              <Route path="/" element={<WelcomePage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
