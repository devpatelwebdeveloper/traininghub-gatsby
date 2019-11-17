import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
// import "./styles.css"; // // Icons made by Freepik from www.flaticon.com

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
// const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

const StyledDiv = styled.div`
  width: auto;
`;

const Card1 = styled(animated.div)`
  min-width: 100%;
  min-height: 60ch;

  max-width: 10ch;
  max-height: 10ch;
  background-image: url(https://www.spscanada.com/img/pradumayan.png);
  background-repeat: no-repeat;
`;

export default function FounderCard() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <StyledDiv
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <Card1
        className="card1"
        style={{ transform: props.xy.interpolate(trans1) }}
      />
    </StyledDiv>
  );
}
