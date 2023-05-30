import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Footer from "./pages/Footer";
import Detail from './pages/Detail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="albums" element={<Albums />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="footer" element={<Footer />} />
          <Route path='/detail/:item_id' element = {<Detail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);