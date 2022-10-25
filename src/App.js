import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleMoive from "./components/SingleMoive";
import Error from "./components/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<SingleMoive />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
