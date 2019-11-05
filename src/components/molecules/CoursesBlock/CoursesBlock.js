import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BaseTile from '../../atoms/BaseTile/BaseTile';

const CardType = styled.div`
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #d8d8d8;
  border-bottom-width: 2px;
  width: 100%;
  min-width: 300px;
  min-height: 400px;
  margin-bottom: 3%;
  overflow: hidden;
  text-align: center;
  a:hover {
    color: #00aeef;
  }
  h4,
  p {
    padding: 8px;
  }
`;

const ImgC = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  overflow: hidden;
  width: 100%;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  &:hover {
    width: 120%;
    margin: 0 0 0 -10%;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
`;
const ClearLine = styled.div`
  width: 100%;
  height: 20px;
`;
export default class CoursesBlock extends React.PureComponent {
  render() {
    return (
      <CardType>
        <ImgC>
          <BaseTile image={this.props.image} alt={this.props.alt} />
        </ImgC>
        <ClearLine />
        <h4>{this.props.title}</h4>
        <p>{this.props.text}</p>
      </CardType>
    );
  }
}

CoursesBlock.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
