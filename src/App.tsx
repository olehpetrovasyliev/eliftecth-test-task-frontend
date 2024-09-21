import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./scss/index.scss";
import Home from "./routes/Home";
import EventParticipantsPage from "./routes/EventParticipantsPage";
import EventRegistrationPage from "./routes/EventRegistrationPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="events/:id/participants"
          element={<EventParticipantsPage />}
        />
        <Route path="events/:id/register" element={<EventRegistrationPage />} />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
