import React from "react";
import Row from "react-bootstrap/Row";
import IconBullet from "../../atoms/IconBullets/IconBullets";
import { RecruitmentList } from "../../../contents/RecruitmentBullets";

export default function IconList() {
  return (
    <React.Fragment>
      <Row>
        {RecruitmentList.map((list) => (
          <IconBullet title={list.title} />
        ))}
      </Row>
    </React.Fragment>
  );
}
