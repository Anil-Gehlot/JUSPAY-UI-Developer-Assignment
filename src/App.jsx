import CoverPage from "./components/cover-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoverPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
