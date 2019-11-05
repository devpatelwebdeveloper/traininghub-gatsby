import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BaseTitle from '../../atoms/BaseTitle/BaseTitle';

const StyledContainer = styled.section`
  background-size: cover;
  background-position: center;
  width: 100wh;
  height: 50vh;
  display: flex;
  margin-top: -50px;
  overflow: hidden;
`;

const CenterContent = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  & h1,
  h3 {
    color: white;
    line-height: 1;
  }

  & h1 {
    text-transform: uppercase;
    font-size: 3em;
    margin-bottom: 0;
    text-align: center;
  }
  & h3 {
    margin-bottom: 40px;
    font-size: 1.5em;
    font-weight: normal;
  }
`;

export default class TopBanner extends React.PureComponent {
  render() {
    const sectionStyle = {
      backgroundImage: `url(${this.props.background})`,
    };
    return (
      <StyledContainer style={sectionStyle}>
        <CenterContent>
          <BaseTitle title={this.props.title} size="H1" center />
          <BaseTitle title={this.props.subtitle} size="H3" center />
        </CenterContent>
      </StyledContainer>
    );
  }
}

TopBanner.propTypes = {
  title: PropTypes.any.isRequired,
  subtitle: PropTypes.any.isRequired,
  background: PropTypes.string.isRequired,
};
