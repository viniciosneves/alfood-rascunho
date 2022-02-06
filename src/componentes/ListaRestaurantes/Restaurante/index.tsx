import { useState, useEffect } from 'react';
import http from '../../../http';
import { IPaginacao } from '../../../interfaces/IPaginacao';
import IPrato from '../../../interfaces/IPrato';
import IRestaurante from '../../../interfaces/IRestaurante';
import Prato from '../Prato';
import estilos from './Restaurante.module.scss';

interface RestauranteProps {
  restaurante: IRestaurante
}

const Restaurante = ({ restaurante }: RestauranteProps) => {
  const [pratos, setPratos] = useState<IPrato[]>()
  const [pagina, setPagina] = useState(1)
  const [possuiPaginacao, setPossuiPaginacao] = useState(false)
  const paginar = () => {
    const proximaPagina = pagina + 1
    setPagina(proximaPagina)
    http.get<IPaginacao<IPrato>>('/v1/pratos/', {
      params: {
        page: proximaPagina
      }
    })
      .then(resposta => {
        setPratos([
          ...pratos!,
          ...resposta.data.results
        ])
        setPossuiPaginacao(!!resposta.data.next)
      })
  }

  useEffect(() => {
    http.get<IPaginacao<IPrato>>('/v1/pratos/')
      .then(resposta => {
        setPratos(resposta.data.results)
        setPossuiPaginacao(!!resposta.data.next)
      })
  }, [])
  return (<section className={estilos.Restaurante}>
    <div className={estilos.Titulo}>
      <h2>{restaurante.nome}</h2>
    </div>
    <div>
      {pratos?.map(item => <Prato prato={item} key={item.id} />)}
      {possuiPaginacao && <button className={estilos.VerMais} onClick={paginar}>
        <i className="fa fa-search-plus"></i> ver mais
      </button>}
    </div>
  </section>)
}

export default Restaurante