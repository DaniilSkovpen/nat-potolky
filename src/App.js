import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import AboutUs from "./components/AboutUs/AboutUs";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import Types from "./components/TypesOf/Types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stelya1 from "./components/Stelya/Stelya1";
import Stelya3 from "./components/Stelya/Stelya3";
import Stelya2 from "./components/Stelya/Stelya2";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/nat-potolky/" element={<MainPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/types" element={<Types />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/stelya1" element={<Stelya1 />} />
        <Route path="/stelya2" element={<Stelya2 />} />
        <Route path="/stelya3" element={<Stelya3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
