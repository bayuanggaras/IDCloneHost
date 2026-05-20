import { Routes, Route } from "react-router-dom";
import Paperclip       from "./pages/Paperclip";
import Homepage        from "./pages/Homepage";
import CloudVPS from "./pages/CloudVPS";

export default function App() {
  return (
    <Routes>
      <Route path="/paperclip" element={<Paperclip />} />
      <Route path="/cloud-vps" element={<CloudVPS />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}