import { Container, Grid, Typography, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getRestaurantes } from "../../services/restaurantes.service";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

function RestaurantesPage() {
  const navigate = useNavigate();
  const [restaurantesBaratinho, setRestaurantesBaratinho] = useState([]);
  const [restaurantesNoPreco, setRestaurantesNoPreco] = useState([]);
  const [restaurantesCaro, setRestaurantesCaro] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getRestaurantes(params.id).then((response) => {
      setRestaurantesBaratinho(response.baratinho);
      setRestaurantesNoPreco(response.no_preco);
      setRestaurantesCaro(response.caro);
      setCategoryName(response.categoria);
      setLoading(false);
    })
  }, []);

  const mapBaratinho = () => {
    return restaurantesBaratinho.map((restaurante) => (
      <Grid item xs={4} key={restaurante.id}>
          <div className="restaurante-categoria" onClick={() => navigate(`/detalhes/${restaurante.id}`)}>
            <img src={ restaurante.imagem } alt={ restaurante.nome } />
            <div className="restaurante-categoria-detalhes">
              <strong>{ restaurante.nome }</strong>
              <span>{ `${restaurante.distancia}km` }</span>
              <span>{ `⭐ ${restaurante.nota}` }</span>
              <span>{ `${restaurante.tempo_medio} - ${restaurante.valor_entrega}` }</span>
            </div>
          </div>
      </Grid>
      ));
  };

  const mapNoPreco = () => {
    return restaurantesNoPreco.map((restaurante) => (
      <Grid item xs={4} key={restaurante.id}>
        <div className="restaurante-categoria" onClick={() => navigate(`/detalhes/${restaurante.id}`)}>
            <img src={ restaurante.imagem } alt={ restaurante.nome } />
            <div className="restaurante-categoria-detalhes">
              <strong>{ restaurante.nome }</strong>
              <span>{ `${restaurante.distancia}km` }</span>
              <span>{ `⭐ ${restaurante.nota}` }</span>
              <span>{ `${restaurante.tempo_medio} - ${restaurante.valor_entrega}` }</span>
            </div>
          </div>
      </Grid>
      ));
  };

  const mapCaro = () => {
    return restaurantesCaro.map((restaurante) => (
      <Grid item xs={4} key={restaurante.id}>
        <div className="restaurante-categoria" onClick={() => navigate(`/detalhes/${restaurante.id}`)}>
            <img src={ restaurante.imagem } alt={ restaurante.nome } />
            <div className="restaurante-categoria-detalhes">
              <strong>{ restaurante.nome }</strong>
              <span>{ `${restaurante.distancia}km` }</span>
              <span>{ `⭐ ${restaurante.nota}` }</span>
              <span>{ `${restaurante.tempo_medio} - ${restaurante.valor_entrega}` }</span>
            </div>
          </div>
      </Grid>
      ));
  };

  return (
    <Container class="restaurantes">
      <Typography variant="h5" align="center" color="primary" className="title">
        RESTAURANTES: {categoryName}
      </Typography>
      {loading && (
        <div className="loading">
          <CircularProgress color="primary" />
        </div>
      )}
      <div className="sub-header">
      {restaurantesBaratinho ? 
        <Typography variant="body1" color="primary">
            Baratinho <span>(</span>$ <span>$ $ $ $)</span>
            <div>
              { mapBaratinho() }
            </div>
        </Typography>
        : <></>}
      </div>

      <div className="sub-header">
        {
          restaurantesNoPreco ?
          <Typography variant="body1" color="primary">
            No preço <span>(</span>$ $ $<span> $ $ $)</span>
            <div>
              { mapNoPreco() }
            </div>
          </Typography>
          : <></>
        }
      </div>
      
      <div className="sub-header">
        {
          restaurantesCaro ?
          <Typography variant="body1" color="primary">
            Caro, mas vale a pena <span>(</span>$ $ $ $ $ $<span>)</span>
            <div>
              { mapCaro() }
            </div>
          </Typography>
          : <></>
        }
      </div>
      
    </Container>
  )
}

export default RestaurantesPage;