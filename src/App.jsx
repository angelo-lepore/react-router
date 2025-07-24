// Import di Bootstrap (CSS, JS e icone)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import dei componenti di routing
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import del layout e delle pagine
import DefaultLayout from "./layout/DefaultLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

// Componente principale dell'applicazione
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout di default che racchiude le varie pagine */}
          <Route Component={DefaultLayout}>
            {/* Rotte principali */}
            <Route path="/" Component={HomePage} />
            <Route path="/products" Component={ProductsPage} />
            <Route path="/about" Component={AboutPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
