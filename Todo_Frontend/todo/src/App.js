import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import WelcomePage from "./components/welcome/WelcomePage";
import SignInPage from "./components/signUp/SignInPage";
import SignUpPage from "./components/signIn/SignUpPage";
import TaskPage from "./components/task/TaskPage";
import TaskListPage from "./components/taskList/TaskListPage";
import ErrorPage from "./components/Error/ErrorPage";
import CreateTaskFormPage from "./components/taskForm/CreateTaskFormPage";
import ConfirmationPage from "./components/Confirmation/ConfirmationPage";
import EditTaskFormPage from "./components/taskForm/EditTaskFormPage";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route index element={<TaskListPage />} />
              <Route path="/" element={<TaskListPage />} />
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/task/:id" element={<TaskPage />} />
              <Route path="/task/create" element={<CreateTaskFormPage />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="/task/edit/:id" element={<EditTaskFormPage />} />

              <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
