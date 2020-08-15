import React from "react";
import Section from "../../organisms/Section/Section";
import Row from "react-bootstrap/Row";
import EnhancedTiles from "../../molecules/EnhancedTiles/EnhancedTiles";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";

export default function TilesBlock({ title, tiles }) {
  return (
    <Section marginTop="25px">
      <BaseTitle title={title} size="H1" center underline />
      <Row>
        {tiles.map((tile) => (
          <EnhancedTiles
            key={tile.title}
            image={tile.image}
            alt={tile.alt}
            title={tile.title}
            text={tile.text}
            key={tile.title}
          />
        ))}
      </Row>
    </Section>
  );
}
