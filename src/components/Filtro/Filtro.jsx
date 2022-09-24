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
        return (
            <div className="root">
                <Input onChange={text => this.filtrar(text)} />
            </div>
        );
      }
}

export default Filtro;