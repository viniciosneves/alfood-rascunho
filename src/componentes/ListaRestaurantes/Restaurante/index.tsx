import IRestaurante from '../../../interfaces/IRestaurante';
import Prato from '../Prato';
import style from './Restaurante.module.scss';

interface RestauranteProps {
  restaurante: IRestaurante
}

const Restaurante = ({ restaurante }:RestauranteProps) => {

  return (<section className={style.Restaurante}>
    <div className={style.Titulo}>
      <h2>{restaurante.nome}</h2>
    </div>
    <div>
      {restaurante.pratos.map(item => <Prato prato={item} key={item.id}/>)}
      {restaurante.pratos.map(item => <Prato prato={item} key={item.id}/>)}
    </div>
  </section>)
}

export default Restaurante