import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";

const StyledContainer = styled.section`
  background-size: cover;
  background-position: center;
  width: 100wh;
  height: 50vh;
  display: flex;

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

export default class TopBanner extends React.Component {
  static propTypes = {
    Title: PropTypes.any.isRequired,
    Subtitle: PropTypes.any.isRequired,
    Background: PropTypes.string.isRequired,
  };
  static defaultProps = {
    Title: "Toptitle",
    Subtitle: "Subtitle",
    Background: "Background",
  };
  render() {
    const { Title, Subtitle, Background } = this.props;

    const sectionStyle = {
      backgroundImage: `url(${Background})`,
    };
    return (
      <StyledContainer style={sectionStyle}>
        <CenterContent>
          <BaseTitle title={Title} size="H1" center />
          <BaseTitle title={Subtitle} size="H3" center />
        </CenterContent>
      </StyledContainer>
    );
  }
}
