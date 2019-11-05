import React from "react"
import Row from "react-bootstrap/Row"
import EnhancedTiles from "../../molecules/EnhancedTiles/EnhancedTiles"
import { Tiles } from "../../../contents/HomePageCards"

export default function TilesBlock() {
  return (
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
  )
}
