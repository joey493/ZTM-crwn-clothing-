import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/home";
import Shop from "./pages/shop";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/shop' element={<Shop />} />
      </Routes>

    </div>
  );
}

export default App;
