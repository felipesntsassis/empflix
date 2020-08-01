import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Footer from '../Footer';
import Menu from '../Menu';

const Main = styled.main`
    background-color: var(--midnight);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll }) => css`
      padding: ${paddingAll}
    `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  paddingAll: 'text',
};

PageDefault.propTypes = {
  children: PropTypes.node.isRequired,
  paddingAll: PropTypes.string,
};

export default PageDefault;
