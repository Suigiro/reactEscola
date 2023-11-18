import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Atividade from "./pages/Atividade";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/atividade" element={<Atividade />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;