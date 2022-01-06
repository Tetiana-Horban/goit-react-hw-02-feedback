import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer, Title } from './Section.styled';

const Sections = ({ title, children }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
};

Sections.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Sections;
