import Api from "./api";

export async function getDetalhes(id) {
  try {
    const restaurante = await Api.get(`/detalhes/${id}.json`);
    return restaurante;
  } catch (err) {
    throw err;
  }
};