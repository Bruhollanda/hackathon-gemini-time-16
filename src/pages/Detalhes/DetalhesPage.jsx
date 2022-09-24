import { Container, Grid, Typography, CircularProgress } from "@material-ui/core";
import Filtro from "../../components/Filtro";
import HeaderDetalhe from "../../components/DetalhesTopo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetalhes } from "../../services/detalhe.service";

import "./style.css";



function DetalhesPage() {
    const params = useParams();
    const rest = getDetalhes(params.id);
    const [restaurante, setDetalhes] = useState({});

    useEffect(() => {
        getDetalhes(params.id).then((response) => {
            setDetalhes(response.data)
        })
    }, []);

    return (
        <Container class="restaurantes">
            <HeaderDetalhe restaurante={restaurante} />
            <Filtro restaurante={restaurante}/>
        </Container>
    )
}

export default DetalhesPage;