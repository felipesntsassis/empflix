import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useForm from '../../../hooks/useForm';
import categoriaRepository from '../../../repositories/categorias';
import videoRepository from '../../../repositories/videos';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { values, handleChange } = useForm({
    titulo: 'Jogo com JavaScript #01: Criando um Flappy Bird do ZERO!!!',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c&t=61s',
    categoria: 'Front end',
  });

  useEffect(() => {
    categoriaRepository
      .getAll()
      .then((categories) => {
        setCategorias(categories);
      });
  }, []);

  return (
    <PageDefault paddingAll={15}>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Vídeo cadastrdo com sucesso!');

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        videoRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          console.log('Cadastrou com sucesso!');
          history.push('/');
        });
      }}
      >
        <FormField
          type="text"
          name="titulo"
          label="Título do Vídeo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          type="text"
          name="url"
          label="URL"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          type="text"
          name="categoria"
          label="Categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
