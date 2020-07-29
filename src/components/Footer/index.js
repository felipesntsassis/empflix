import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
		<FooterBase>
			<a href="https://www.alura.com.br/">
				<img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
			</a>
			<p>
				<strong>Empflix</strong>. Sua TV digital sobre empreendedorismo criado com{" "}
				<a href="https://reactjs.org/" target="_blank">ReactJS</a>.
                <br/>
				Desenvolvido por{" "}
				<a href="https://www.linkedin.com/in/felipesntsassis/" target="_blank">
					Felipe Assis
				</a>
                <br/>
				Código-fonte disponível em{" "}
				<a href="https://github.com/felipesntsassis/empflix" target="_blank">
					felipesntsassis/empflix
				</a>
				.
			</p>
			<p>
				Orgulhosamente criado durante a <a href="https://www.alura.com.br/" target="_blank">Imersão React da Alura</a>
			</p>
		</FooterBase>
  );
}

export default Footer;
