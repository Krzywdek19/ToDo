import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginP";
import Home from "./pages/Home";

const App = () => {
  console.log("App component rendered");
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
