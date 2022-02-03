import { Routes, Route } from 'react-router-dom';
import Pratos from './paginas/Admin/Pratos';
import Restaurantes from './paginas/Admin/Restaurantes';
import Cadastro from './paginas/Cadastro';
import Home from './paginas/Home';
import Login from './paginas/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/admin/pratos" element={<Pratos />} />
      <Route path="/admin/restaurantes" element={<Restaurantes />} />
    </Routes>
  );
}

export default App;
