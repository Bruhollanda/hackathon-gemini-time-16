import { Container, Grid, Typography, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getDetalhes } from "../../services/detalhe.service";
import { useParams } from "react-router-dom";

import "./Style.css";

function HeaderDetalhe(props){

  return (
    <Container class="body" className="header">
      <div class="header">
          <img src={props.restaurante.imagem  + ".jpg"} alt="" />
          <div class="info"> 
            <span>{props.restaurante.nome}</span>
            <span id="km">{props.restaurante.distancia} km</span>
            <span id="nota">{"⭐" + props.restaurante.nota}</span>
            <span id="min">{props.restaurante.tempo_medio}</span>
          </div>
      </div>
      <div>
        <p></p>
          <span id="desc">{props.restaurante.descricao}</span>
          <p></p>
          <span id="end">{props.restaurante.endereco}</span>
      </div>
    </Container>
  )
}

export default HeaderDetalhe;