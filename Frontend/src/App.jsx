import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//router dom
import { Route, Routes, useLocation } from "react-router-dom";

// Shared Components
import { Footer } from "./components/shared/footer/Footer";
import { NavbarMain } from "./components/shared/navbarMain/NavbarMain";
// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Novelties from "./pages/Novelties";
import Participate from "./pages/Participate";
import Youngsters from "./pages/Youngsters";
import Institutions from "./pages/Institutions";
import Environment from "./pages/Environment";
import NoMatch from "./pages/NoMatch";
import { Container } from "react-bootstrap";
import { HeaderMain } from "./components/headerMain/HeaderMain";


function App() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="schema-page">
      <NavbarMain />
      {splitLocation[1] === '' &&
        <HeaderMain />
      }
      <Container className="bg-container-main mb-3">
        <Routes >
          {/* pages */}
          <Route path="/" element={<Home />} />

          <Route path="/aboutUs" element={<AboutUs />} />

          <Route path="/novelties" element={<Novelties />} />

          <Route path="/participate" element={<Participate />} />

          <Route path="/youngsters" element={<Youngsters />} />

          <Route path="/institutions" element={<Institutions />} />

          <Route path="/environment" element={<Environment />} />

          <Route path="/404" element={<NoMatch />} />
          <Route path="*" element={<NoMatch />} />

        </Routes>
      </Container>
      <Footer />


    </div>
  );
}

export default App;
