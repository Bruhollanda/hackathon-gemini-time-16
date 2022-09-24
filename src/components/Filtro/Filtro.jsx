import { Input } from "@material-ui/core";
import React, { Component } from 'react'
import "./styles.css";

class Filtro extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            //inicializa o restaurante filtrado 
          restauranteFiltrado: JSON.parse(JSON.stringify(this.props.restaurante))
        };
      }
    
      componentDidMount() {
        console.log(this.state.restauranteFiltrado)
      }

      filtrar(e) {
        let text  = e.target.value
        let restFiltro = JSON.parse(JSON.stringify(this.props.restaurante))
        
        restFiltro.cardapio.forEach(
            c => {
                c.itens = c.itens.filter(i => i.descricao.toLowerCase().includes(text.toLowerCase()) || i.nome.toLowerCase().includes(text.toLowerCase()) )
            }
         ) 
        this.setState({restauranteFiltrado: restFiltro})
        console.log(restFiltro)
     }
      
      render() {
        const itens = (categoria) => {
          return categoria.itens.map((item) => (
                <div className="itens">
                <img>{item.imagem}</img>
                <div className="texto">
                    <p id="nome">{item.nome}</p>
                    <p1>{item.descricao}</p1>
                    <p id="preco">{item.preco}</p>
                </div>
                </div>
            ));
        };

        const categorias = (cardapio) => {
          return cardapio.map((categoria) => (
                <div>
                  <h1>{categoria.categoria}</h1><br/>
                </div> 
            ));
        };


        return (
            <div className="root">
              <div class="filtro">
                  <Input onChange={text => this.filtrar(text)} />
                </div>

                <br/>
                <br/>
                {categorias(this.state.restauranteFiltrado.cardapio)}
            </div>
        );
      }
}

export default Filtro;