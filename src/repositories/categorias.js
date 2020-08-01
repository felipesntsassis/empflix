import config from '../config';

const URL_CATEGORIES = `${config.API_URL}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível listar as categorias :(');
  });
}

function getAllCategoriesWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível listar as categorias :(');
  });
}

export default {
  getAll,
  getAllCategoriesWithVideos,
};
