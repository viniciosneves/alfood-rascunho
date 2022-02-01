import React from 'react';
import Banner from './componentes/Banner';
import ListaRestaurantes from './componentes/ListaRestaurantes';
import NavBar from './componentes/NavBar';
import './index.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ListaRestaurantes />
    </div>
  );
}

export default App;
