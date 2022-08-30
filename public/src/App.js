import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import WhatsAppLogin from "./pages/WhatsAppLogin";
import WhatsAppSignUp from "./pages/WhatsAppSignUp";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
        <Route path="/register" element={<WhatsAppSignUp/>}/>
        <Route path="/login" element={<WhatsAppLogin/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}
