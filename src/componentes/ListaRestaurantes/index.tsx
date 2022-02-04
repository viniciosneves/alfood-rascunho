import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';

const ListaRestaurantes = () => {
  const restaurantes = [
    {
      "id": 1,
      "nome": "Aluroni",
      "pratos": [
        {
          "id": 2,
          "nome": "Macarrão",
          "tag": "Massas",
          "imagem": "https://www.kikkoman.eu/fileadmin/user_upload/03-recipes/WEB_Mushroom_Carbonara.jpg",
          "descricao": "Carbonara, é uma receita tradicional italiana de massa. Acredita-se que tenha sido uma receita apreciada pelos preparadores de carvão vegetal (carbinai) dos montes apeninos, na região italiana da Úmbria.",
          "restaurante": 1
        },
        {
          "id": 1,
          "nome": "Pizza Toscana",
          "tag": "Italiana",
          "imagem": "https://blog.novasafra.com.br/wp-content/uploads/2018/06/Toscana-Gerson-Pascine-Junior-780x450.jpeg",
          "descricao": "Mais uma tradição da Itália, a Toscana da Rede Leve Pizza com muita calabresa ralada e bacon vai levar um sabor diferenciado para sua mesa.",
          "restaurante": 1
        },
      ]
    },
    {
      "id": 2,
      "nome": "Hamburgueria Lura",
      "pratos": [
        {
          "id": 3,
          "nome": "X Salada",
          "tag": "Americana",
          "imagem": "https://www.receiteria.com.br/wp-content/uploads/Receitas-de-x-salada-1.jpg",
          "descricao": "Sanduíche com hambúrguer e queijo acompanhado com salada.",
          "restaurante": 2
        },
        {
          "id": 4,
          "nome": "X Tudo",
          "tag": "Americana",
          "imagem": "https://s2.glbimg.com/EdGu6BukYOlD3vR1MOHTty7k77g=/0x0:1280x720/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/n/p/gbAtA2SyaZ6zuEDIZ5rg/ffb51898-6520-409b-b34f-4ed2f4b3f242.jpg",
          "descricao": "Sanduíche com muita carne e tudo que tiver disponível na cozinha.",
          "restaurante": 2
        },
        {
          "id": 5,
          "nome": "X Salada",
          "tag": "Americana",
          "imagem": "https://www.receiteria.com.br/wp-content/uploads/Receitas-de-x-salada-1.jpg",
          "descricao": "Sanduíche com hambúrguer e queijo acompanhado com salada.",
          "restaurante": 2
        },
      ]
    },
    {
      "id": 3,
      "nome": "Obi-Wan Kenobi Sushi",
      "pratos": [{
        "id": 5,
        "nome": "Sushi",
        "tag": "Japonesa",
        "imagem": "data:image/jpeg;base64,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",
        "descricao": "Iguaria de origem japonesa, caracterizado por ser feito de arroz temperado, enrolado em peixe cru ou frutos do mar frescos, vegetais, frutas, ovos e algas.",
        "restaurante": 3
      },
      {
        "id": 6,
        "nome": "Temaki",
        "tag": "Japonesa",
        "imagem": "https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2008/05/temaki_salmao.jpg",
        "descricao": "O clássico arroz japonês acompanhado de peixes, alga marinha ou verduras ganhou o paladar do brasileiro.",
        "restaurante": 3
      }]
    },
    {
      "id": 4,
      "nome": "Neo Trinity Vegan Foods",
      "pratos": [{
        "id": 7,
        "nome": "Caldo",
        "tag": "Caldos",
        "imagem": "https://veganandcolors.com/wp-content/uploads/2018/08/4-1-750x460.jpg",
        "descricao": "A sopa vai para o prato com pedaços de legumes, hortaliças ou carnes. Também pode entrar o arroz ou o macarrão,ingredientes que dão sustança.",
        "restaurante": 4
      },
      {
        "id": 8,
        "nome": "Feijoada Smith",
        "tag": "Mineira",
        "imagem": "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/05/feijoada-vegetariana-na-pressao-15087.jpg",
        "descricao": "A feijoada é um dos pratos típicos mais conhecidos e populares da culinária brasileira.",
        "restaurante": 4
      }]
    }
  ]
  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurantes.map(item => <Restaurante restaurante={item} key={item.id}/>)}
  </section>)
}

export default ListaRestaurantes