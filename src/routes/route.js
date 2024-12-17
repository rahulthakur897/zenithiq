import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import loadable from "@loadable/component";

const Home = loadable(() => import("../pages/home"));
const About = loadable(() => import("../pages/about"));
const OurServices = loadable(() => import("../pages/services"));
const Contact = loadable(() => import("../pages/contact"));

const MyRoutes = ({ history }) => {
  let location = useLocation();

  // Ensure we always have a hash in the browser URL
  if (
    location.pathname + location.search + location.hash === "/" &&
    window.location.hash === ""
  ) {
    return <Navigate to="" replace={true} />;
  }
  return (
  <Routes history={history}>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/services" element={<OurServices />} />
    <Route exact path="/contact" element={<Contact />} />
  </Routes>
)};

export default MyRoutes;