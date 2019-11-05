import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import BaseTitle from '../../atoms/BaseTitle/BaseTitle';

const StyledCol = styled(Col)`
  margin: 25px auto;
`;

const Card = styled.div`
  width: 100%;
  height: 9rem;
  display: block;
  position: relative;
  text-align: left;
  color: #525c65;
  background-color: #fff;
  text-decoration: none;
  border-radius: 6px;
  box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.15);
  transition: box-shadow 0.3s ease, border 0.3s ease;

  &:hover {
    box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
  }
`;

const StyledImg = styled.img`
  width: auto;
  max-width: 100%;
  height: 9rem;
  float: left;
  margin-right: 20px;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
`;

const CardContent = styled.div`
  width: 100%;
  padding: 20px 20px;
  h6 {
    margin-top: 0;
    margin-bottom: 0.75rem;
    color: #02ccba !important;
    font-weight: 600;
    font-size: 0.5625rem;
    line-height: 0.75rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  h5 {
    margin-top: 0;
    margin-bottom: 0.375rem;
    padding-right: 0.75rem;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 24px;
  }
`;

export default class BaseTile extends React.PureComponent {
  render() {
    if (this.props.href) {
      return (
        <StyledCol md={4}>
          <Link to={this.props.href}>
            <Card>
              <StyledImg
                alt={this.props.alt}
                title={this.props.alt}
                src={this.props.image}
              />
              <CardContent>
                <BaseTitle title={this.props.title} size="H6" />
                <BaseTitle title={this.props.subtitle} size="H5" />

                <h5 />
              </CardContent>
            </Card>
          </Link>
        </StyledCol>
      );
    }
    return (
      <StyledCol md={4}>
        <Card>
          <StyledImg
            alt={this.props.alt}
            title={this.props.alt}
            src={this.props.image}
          />
          <CardContent>
            <BaseTitle title={this.props.title} size="H6" />
            <BaseTitle title={this.props.subtitle} size="H5" />

            <h5 />
          </CardContent>
        </Card>
      </StyledCol>
    );
  }
}

BaseTile.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string,
};
