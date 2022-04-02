import logo from "./logo.svg";
import "./App.css";
import WireGuardForm from "./Components/WireGuardForm";
import WireGuardList from "./Components/WireGuardList";
import LoginForm from "./Components/LoginForm";
import LoginLogout from "./Components/LoginLogout";
import { Routes, Route } from "react-router-dom";
import User from "./Components/User";

import { ProtectedRoute } from "./Components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginLogout />} />
        <Route path="/secure" element={<ProtectedRoute  component={User}/>}/>
      </Routes>
    </div>
  );
}

export default App;
