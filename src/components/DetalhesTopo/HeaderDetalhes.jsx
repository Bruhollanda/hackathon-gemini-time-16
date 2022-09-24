import { Container, Grid, Typography, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getDetalhes } from "../../services/detalhe.service";
import { useParams } from "react-router-dom";

import "./Style.css";

function HeaderDetalhe(props){

  return (
    <Container className="header">
      <div class="header">
          <img src={props.restaurante.imagem  + ".jpg"} alt="" />
          <div class="info"> 
            <p>{props.restaurante.nome}</p>
            <p>{props.restaurante.distancia} km</p>
            <p>{props.restaurante.nota}</p>
            <p>{props.restaurante.tempo_medio}</p>
          </div>
      </div>
      <div>
          <p>{props.restaurante.descricao}</p>
          <p>{props.restaurante.endereco}</p>
      </div>
    </Container>
  )
}

export default HeaderDetalhe;