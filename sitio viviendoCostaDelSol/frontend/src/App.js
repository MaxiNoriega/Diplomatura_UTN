
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './componentes/layout/Header';
import Navegador from './componentes/layout/Navegador';
import Footer from './componentes/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import ExcursionesPage from './pages/ExcursionesPage';
import GastronomiaPage from './pages/GastronomiaPage';
import HomePage from './pages/HomePage';
import LugaresPage from './pages/LugaresPage';
import NosotrosPage from './pages/NosotrosPage';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Navegador />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="nostros" element={<NosotrosPage />} />
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
