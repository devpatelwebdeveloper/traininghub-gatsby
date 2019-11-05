import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../../styles/ScreenSizes';

const StyledParagraph = styled.p`
  color: #f4f4f4;
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  ${media.medium`
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
   `}
  ${media.small`
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
   `}
`;

export default function Paragraph(props) {
  return <StyledParagraph>{props.children}</StyledParagraph>;
}

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};
