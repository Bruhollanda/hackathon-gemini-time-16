import { Container, Grid, Typography, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getDetalhes } from "../../services/detalhe.service";
import { useNavigate, useParams } from "react-router-dom";

import "./style.css";

function DetalhesPage(){
  const params = useParams();
  const restaurante = getDetalhes(params.id);

  return (
    <Container class="restaurante">
      <div>
          

      </div>
    
    </Container>
  )
}