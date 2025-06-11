import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import MenuAdministracion from './componentes/MenuAdministracion';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu-administracion" element={<MenuAdministracion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
