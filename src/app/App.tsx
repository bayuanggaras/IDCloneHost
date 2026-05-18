import { Routes, Route } from "react-router-dom";
import LandingPage        from "./pages/LandingPage";
import Homepage        from "./pages/Homepage";
import CloudVPS from "./pages/CloudVPS";

export default function App() {
  return (
    <Routes>
      <Route path="/landing-page"       element={<LandingPage />} />
      <Route path="/cloud-vps" element={<CloudVPS />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}