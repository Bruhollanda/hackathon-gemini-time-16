import { Container, Grid, Typography, CircularProgress } from "@material-ui/core";
import Filtro from "../../components/Filtro";
import { useEffect, useState } from "react";
import { getRestaurantes } from "../../services/restaurantes.service";
import { useNavigate, useParams } from "react-router-dom";

import "./style.css";

function DetalhesPage() {
    return (
        <Container class="restaurantes">
            <Filtro/>
        </Container>
    )
}

export default DetalhesPage;