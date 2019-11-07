import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import BaseTile from "../../atoms/BaseTitle/BaseTitle";

export default class ContentGenericAligned extends React.PureComponent {
  static propTypes = {
    Title: PropTypes.string.isRequired,
    Text: PropTypes.any.isRequired,
    Image: PropTypes.string.isRequired,
    Alt: PropTypes.string.isRequired,
  };
  static defaultProps = {
    Title: "Title",
    Text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit amet. Egestas purus viverra accumsan in. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Libero volutpat sed cras ornare arcu dui vivamus arcu. Vel fringilla est ullamcorper eget. Tincidunt lobortis feugiat vivamus at augue eget. Elit duis tristique sollicitudin nibh sit. Massa tincidunt nunc pulvinar sapien et. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Purus in massa tempor nec feugiat nisl pretium. Sodales ut etiam sit amet nisl. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Urna molestie at elementum eu facilisis sed. Sem viverra aliquet eget sit amet. Porta nibh venenatis cras sed. Sollicitudin ac orci phasellus egestas tellus. Suspendisse ultrices gravida dictum fusce.`,
    Image: "https://unsplash.it/1500?random",
    Alt: "Alt Text",
  };
  render() {
    const { Title, Text, Image, Alt } = this.props;
    return (
      <Row>
        <Col md={6}>
          <BaseTitle title={Title} size="H3" />
          <Paragraph>{Text}</Paragraph>
        </Col>
        <Col md={6}>
          <Paragraph>Test</Paragraph>
          <BaseTile Image={Image} Alt={Alt} />
        </Col>
      </Row>
    );
  }
}
