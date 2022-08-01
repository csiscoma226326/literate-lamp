import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import App from "./App";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Calendar from "./pages/Calendar";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Team/" element={<Team />} />
      <Route path="Projects/" element={<Projects />} />
      <Route path="Calendar/" element={<Calendar />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

//initing
