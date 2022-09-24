import { Container, Grid, Typography, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getDetalhes } from "../../services/detalhe.service";
import { useNavigate, useParams } from "react-router-dom";

import "./Style.css";
import { PersonPinSharp, StayPrimaryPortraitSharp } from "@material-ui/icons";

function HeaderDetalhe(props){
  const params = useParams();
  const restaurante = getDetalhes(props.id);

  return (
    <Container className="header">
      <div class="header">
          <img src={restaurante.imagem  + ".jpg"} alt="" />
          <div class="info"> 
            <p>{restaurante.nome}</p>
            <p>{restaurante.distancia} km</p>
            <p>{restaurante.nota}</p>
            <p>{restaurante.tempo_medio}</p>
          </div>
      </div>
      <div>
          <p>{restaurante.descricao}</p>
          <p>{restaurante.endereco}</p>
      </div>
    </Container>
  )
}

export default HeaderDetalhe;