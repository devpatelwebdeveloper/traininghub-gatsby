import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EnhancedTiles from '../../molecules/EnhancedTiles/EnhancedTiles';
import { Tiles } from '../../../contents/HomePageCards';

export default function TilesBlock() {
  return (
    <Row>
      {Tiles.map(tile => (
        <Col md={4} sm={12}>
          <EnhancedTiles
            key={tile.title}
            image={tile.image}
            alt={tile.alt}
            title={tile.title}
            text={tile.text}
          />
        </Col>
      ))}
    </Row>
  );
}
