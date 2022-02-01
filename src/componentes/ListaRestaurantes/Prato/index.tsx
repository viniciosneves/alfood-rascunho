import IPrato from '../../../interfaces/IPrato';
import style from './Prato.module.scss';

interface PratoProps {
  prato: IPrato
}

const Prato = ({ prato }: PratoProps) => {
  return (<div className={style.Prato}>
    <div className={style.Container}>
      <div>
        <div className={style.EfeitoTorcao}>
          <img src={prato.imagem} alt={prato.descricao}/>
        </div>
      </div>
    </div>
    <div className={style.Conteudo}>
      <h3>{prato.nome}</h3>
      <div>
        {prato.descricao}
      </div>
    </div>
  </div>)
}

export default Prato