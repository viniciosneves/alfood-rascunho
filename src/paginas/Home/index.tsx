import React from 'react';
import Banner from '../../componentes/Banner';
import ListaRestaurantes from '../../componentes/ListaRestaurantes';
import NavBar from '../../componentes/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <ListaRestaurantes />
    </>
  );
}

export default App;
