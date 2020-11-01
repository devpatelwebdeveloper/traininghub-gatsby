import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import IconBullet from "../../atoms/IconBullets/IconBullets";
import { RecruitmentList } from "../../../contents/RecruitmentBullets";

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
