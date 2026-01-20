import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
// import Chat from "./pages/chat/Chat"
import ProfileUpdate from "./pages/profileUpdate/ProfileUpdate";
import Home from "../src/pages/ChatBar/HomeChatBar";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/profile" element={<ProfileUpdate />} />
      </Routes>
    </>
  );
};

export default App;
