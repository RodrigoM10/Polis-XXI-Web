import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//router dom
import { Route, Routes, useLocation } from "react-router-dom";

// Shared Components
import { FooterPolis } from "./components/shared/footer/FooterPolis";
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
import { HeaderMain } from "./components/headerMain/HeaderMain";
import { SidebarRedes } from "./components/sidebarRedes/SidebarRedes";
import Participation from "./pages/Participation";



function App() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  let headersMainPages = [
    {
      title: "NOSOTROS",
      description: "Conocé más sobre nosotros, nuestra misión y que hacemos.",
    },
    {
      title: "NOVEDADES",
      description: "Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo.",
    },
    {
      title: "PARTICIPÁ/COLABORÁ",
      description: "Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo.",
    },

]
  return (
    <div className="schema-page">
      <NavbarMain />
      {splitLocation[1] === '' &&
        <HeaderMain />
      }
      <SidebarRedes />
      <div className="bg-container-main mb-3">
        <Routes >
          {/* pages */}
          <Route path="/" element={<Home />} />

          <Route exact path="/aboutUs" element={<AboutUs/>} />

          <Route exact path="/novelties" element={<Novelties />} />

          <Route exact path="/participate" element={<Participate />} />

          <Route exact path="/youngsters" element={<Youngsters />} />

          <Route exact path="/institutions" element={<Institutions />} />

          <Route exact path="/environment" element={<Environment />} />
          <Route exact path="/participation" element={<Participation />} />

          <Route path="/404" element={<NoMatch />} />
          <Route path="*" element={<NoMatch />} />

        </Routes>
      </div>
      <FooterPolis />


    </div>
  );
}

export default App;
