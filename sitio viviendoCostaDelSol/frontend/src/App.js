
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* importo los archivos Header, Navegador y Footoer */
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
      <Navegador />
      <Footer />
    </div>
  );
}

export default App;
