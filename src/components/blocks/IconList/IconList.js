import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import IconBullet from "../../atoms/IconBullets/IconBullets";

export default function IconList({ lists, icon }) {
  return (
    <React.Fragment>
      <Row>
        {lists.map((list) => (
          <IconBullet title={list.title} icon={icon} />
        ))}
      </Row>
    </React.Fragment>
  );
}
