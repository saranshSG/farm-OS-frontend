import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import EmailForm from "./Login/emailForm";
import LoginForm from "./Login/loginForm";
import Sensor from "./Sensor";
import AppsTools from "./AppsTools/AppsTools";
import Setttings from "./Settings";
import CropMangement from "./CropManagement";
import FarmRegistration from "./FarmRegistration";
import PrivateRoute from "./Utilities/PrivateRoute";
import PreventSigninRoute from "./Utilities/preventSignRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/registerFarm" element={<FarmRegistration />} />
        <Route exact path="/" element={<EmailForm />} />
        <Route exact path="/login" element={<LoginForm />} />

        <Route exact path="/home/dashboard" element={<Home />} />
        <Route exact path="/home/sensor" element={<Sensor />} />
        <Route exact path="/home/crop" element={<CropMangement />} />
        <Route exact path="/home/tools" element={<AppsTools />} />
        <Route exact path="/home/settings" element={<Setttings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
