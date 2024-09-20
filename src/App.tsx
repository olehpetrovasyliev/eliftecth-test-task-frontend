import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import EventParticipantsPage from "./routes/EventParticipantsPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="events/:id/participants"
          element={<EventParticipantsPage />}
        />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
