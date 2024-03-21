
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* importo los archivos Header, Navegador y Footoer */
import'./App.css';
import Header from "./componentes/layout/Header";
import Navegador from "./componentes/layout/Navegador";
import Footer from "./componentes/layout/Footer";

/* importo los archivos de las 6 paginas */

import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import GastronomiaPage from "./pages/GastronomiaPage";
import LugaresPage from "./pages/LugaresPage";
import ExcursionesPage from "./pages/ExcursionesPage";
import ContactoPage from "./pages/ContactoPage";

function App () {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Navegador />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="gastronomia" element={<GastronomiaPage />} />
          <Route path="lugares" element={<LugaresPage />} />
          <Route path="excursiones" element={<ExcursionesPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
