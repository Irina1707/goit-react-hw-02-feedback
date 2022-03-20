import React from 'react';
import PropTypes from 'prop-types';
//import { SectionStyle } from './Section.styled';

const Section = ({ title, children }) => (
    <div>
        <h2>{title}</h2>
        {children}
   </div> 
)
export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
