import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>

    </div>
  );
}

export default App;
