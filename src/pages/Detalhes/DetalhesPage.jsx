import { Container, Grid, Typography, CircularProgress } from "@material-ui/core";
import Filtro from "../../components/Filtro";
import HeaderDetalhe from "../../components/DetalhesTopo";
import { useEffect, useState } from "react";
import { getRestaurantes } from "../../services/restaurantes.service";
import { useNavigate, useParams } from "react-router-dom";

import "./style.css";



function DetalhesPage() {
    const params = useParams();
    
    return (
        <Container class="restaurantes">
            <HeaderDetalhe id={params.id} />
            <Filtro/>
        </Container>
    )
}

export default DetalhesPage;