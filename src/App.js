import RegistrationForm from "./components/Registration/Registration";
import LoginForm from "./components/Login/Login";
import ChatArea from "./components/ChatArea/ChatArea";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" Component={LoginForm} />
          <Route path="/register" Component={RegistrationForm} />
          <Route path="/chat" Component={ChatArea} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
