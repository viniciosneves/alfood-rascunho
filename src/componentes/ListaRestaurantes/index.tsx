import { useEffect, useState } from 'react';
import http from '../../http';
import { IPaginacao } from '../../interfaces/IPaginacao';
import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';

const ListaRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>()
  useEffect(() => {
    http.get<IPaginacao<IRestaurante>>('/v1/restaurantes/')
      .then(resposta => setRestaurantes(resposta.data.results))
  }, [])
  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id}/>)}
  </section>)
}

export default ListaRestaurantes