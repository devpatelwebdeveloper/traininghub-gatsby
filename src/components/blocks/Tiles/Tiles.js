import React from "react";
import Section from "../../organisms/Section/Section";
import Row from "react-bootstrap/Row";
import EnhancedTiles from "../../molecules/EnhancedTiles/EnhancedTiles";
import { Tiles } from "../../../contents/HomePageCards";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";

export default function TilesBlock() {
  return (
    <Section marginTop="25px">
      <BaseTitle
        title="Redifining future in IT Learning"
        size="H1"
        center
        underline
      />
      <Row>
        {Tiles.map((tile) => (
          <EnhancedTiles
            key={tile.title}
            image={tile.image}
            alt={tile.alt}
            title={tile.title}
            text={tile.text}
          />
        ))}
      </Row>
    </Section>
  );
}
