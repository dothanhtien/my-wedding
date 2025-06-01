import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar";
import AutoPlayAudio from "./components/autoPlayAudio";

import HomePage from "./pages/home";
import CouplePage from "./pages/couple";
import AlbumPage from "./pages/album";
import EventPage from "./pages/event";
import InvitationPage from "./pages/invitation";
import Tracker from "./components/Tracker";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/couple" element={<CouplePage />} />
        <Route path="/album" element={<AlbumPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/invitation" element={<InvitationPage />} />
      </Routes>
      <AutoPlayAudio />
      <Tracker />
    </>
  );
}

export default App;
