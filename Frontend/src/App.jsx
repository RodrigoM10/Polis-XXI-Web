import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//router dom
import { Route, Routes} from "react-router-dom";

// Shared Components
import  {Footer}  from "./components/shared/footer/Footer";
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


function App() {
  return (
    <div className="schema-page">
      <NavbarMain />
      <Routes >
        {/* pages */}
          <Route path="/"  element={<Home />} />

          <Route path="/aboutUs" element={<AboutUs />} />

          <Route path="/novelties" element={<Novelties />} />

          <Route path="/participate" element={<Participate />} />

          <Route path="/youngsters" element={<Youngsters />} />

          <Route path="/institutions" element={<Institutions />} />

          <Route path="/environment" element={<Environment />}/>
            
          <Route path="/404" element={<NoMatch />}/>
           <Route path="*" element={<NoMatch />} />

          </Routes>
          <Footer />


        </div>
        );
}

        export default App;
