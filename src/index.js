import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Calendar from "./pages/Calendar";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Team/" element={<Team />} />
        <Route path="Projects/" element={<Projects />} />
        <Route path="Calendar/" element={<Calendar />} />
        <Route path="Portfolio/" element={<Portfolio />} />
      </Routes>
    <Footer />
  </BrowserRouter>
);

// react governance + react collab with Judy and design collab / svelte