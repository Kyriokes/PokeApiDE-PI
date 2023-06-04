import "./App.css";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import LandingPage from "./components/Landing page/LandingPage";
import Nav from "./components/Nav/Nav";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
      {location.pathname !== "/" && <Nav/>}
      <Routes>
        <Route path="/home/" element={<Home />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/form" element={<Form />} />

        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
