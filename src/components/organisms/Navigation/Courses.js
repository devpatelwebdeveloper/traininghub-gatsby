import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styled from "styled-components";

const StyledTabs = styled(Tabs)`
  color: #ffffff;
`;

export default function CourseListNav(props) {
  return (
    <div
      id={props.id}
      style={props.style}
      aria-labelledby={props.ariaLabelledby}>
      <StyledTabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <p>Tab 1</p>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <p>Tab 2</p>
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <p>Tab 3</p>
        </Tab>
      </StyledTabs>
    </div>
  );
}
