import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProfileSetup from "../pages/ProfileSetup";
import HomeSelection from "../pages/HomeSelection";
import CreateHome from "../pages/CreateHome";
import JoinHome from "../pages/JoinHome";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Members from "../pages/Members";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/home-selection" element={<HomeSelection />} />
        <Route path="/create-home" element={<CreateHome />} />
        <Route path="/join-home" element={<JoinHome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </BrowserRouter>
  );
}