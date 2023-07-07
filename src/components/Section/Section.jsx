import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Title.styled';
import { SectionStyled } from './SectionStyled.styled';

export const Section = ({ title, children }) => (
  <SectionStyled>
    <Title>{title}</Title>
    {children}
  </SectionStyled>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
