import { Container, Grid, Typography, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getRestaurantes } from "../../services/restaurantes.service";
import { getDetalhes} from "../../services/detalhe.service";
import { useNavigate, useParams } from "react-router-dom";
import "cardapio.css";


function Cardapio(id) {
    const restaurante = getDetalhes(id);

    array.forEach ((restaurante.cardapio.categoria) => {
        return (
            <div className="categoria">
                <h1>{restaurante.cardapio.categoria}</h1>
            </div>
        );
        array.forEach((restaurante.cardapio.categoria.item) => {
            return (
                <div className="itens">
                    <img>{restaurante.cardapio.categoria.item.imagem}</img>
                    <div className="texto">
                        <p id="nome">{restaurante.cardapio.categoria.item.nome}</p>
                        <p1>{restaurante.cardapio.categoria.item.descricao}</p1>
                        <p id="preco">{restaurante.cardapio.categoria.item.preco}</p>
                    </div>
                </div>
            );        
        });
    });
}

export default Cardapio;
 