import { Routes, Route } from 'react-router-dom';
import Pratos from './paginas/Admin/Pratos';
import FormPrato from './paginas/Admin/Pratos/FormPrato';
import Restaurantes from './paginas/Admin/Restaurantes';
import FormRestaurante from './paginas/Admin/Restaurantes/FormRestaurante';
import Cadastro from './paginas/Cadastro';
import Home from './paginas/Home';
import Login from './paginas/Login';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/cadastro" element={<Cadastro />} />
      <Route path="/admin/pratos" element={<Pratos />} />
      <Route path="/admin/pratos/novo" element={<FormPrato />} />
      <Route path="/admin/pratos/:id" element={<FormPrato />} />
      <Route path="/admin/restaurantes" element={<Restaurantes />} />
      <Route path="/admin/restaurantes/novo" element={<FormRestaurante />} />
      <Route path="/admin/restaurantes/:i" element={<FormRestaurante />} />
    </Routes>
  );
}

export default App;
