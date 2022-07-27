import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import App from "./App";
import Pricing from './pages/Pricing';
import Docs from './pages/Docs';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Pricing/" element={<Pricing />} />
      <Route path="Docs/" element={<Docs />} />
    </Routes>
  <Footer />
  </BrowserRouter>
);

//init