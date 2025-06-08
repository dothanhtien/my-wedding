import { Routes, Route } from "react-router-dom";

import AutoPlayAudio from "./components/autoPlayAudio";

import HomePage from "./pages/home";
import CouplePage from "./pages/couple";
import AlbumPage from "./pages/album";
import EventPage from "./pages/event";
import InvitationPage from "./pages/invitation";
import Layout from "./components/layout";
import Tracker from "./components/tracker";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/couple" element={<CouplePage />} />
          <Route path="/album" element={<AlbumPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/invitation" element={<InvitationPage />} />
        </Routes>
      </Layout>
      <AutoPlayAudio />
      <Tracker />
    </>
  );
}

export default App;
