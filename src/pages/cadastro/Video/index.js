import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

import useForm from '../../../hooks/useForm';
import videoRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { values, handleChange } = useForm({
    titulo: 'Jogo com JavaScript #01: Criando um Flappy Bird do ZERO!!!',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c&t=61s',
    categoriaId: 'Front end',
  });

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Vídeo cadastrado com sucesso!');
        videoRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
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
          name="categoriaId"
          label="Categoria"
          value={values.categoriaId}
          onChange={handleChange}
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
