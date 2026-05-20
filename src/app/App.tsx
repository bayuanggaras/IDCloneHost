import { Routes, Route } from "react-router-dom";
import Paperclip       from "./pages/Paperclip";
import Openclaw       from "./pages/Openclaw";
import Homepage        from "./pages/Homepage";
import CloudVPS from "./pages/CloudVPS";

export default function App() {
  return (
    <Routes>
      <Route path="/paperclip" element={<Paperclip />} />
      <Route path="/openclaw" element={<Openclaw />} />
      <Route path="/cloud-vps" element={<CloudVPS />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}