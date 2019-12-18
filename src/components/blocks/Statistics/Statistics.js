import React from "react";
import PropTypes from "prop-types";
import Section from "../../organisms/Section/Section";
import Row from "react-bootstrap/Row";
import IconStats from "../../molecules/IconStats/IconStats";

export default class StatisticsCounter extends React.Component {
  static propTypes = {
    stats: PropTypes.array.isRequired,
  };
  static defaultProps = {
    stats: [],
  };
  render() {
    const { stats } = this.props;

    return (
      <>
        <Row>
          {stats.map((statistic) => (
            <IconStats
              key={statistic.text}
              text={statistic.text}
              statistic={statistic.statistic}
              icon={statistic.icon}
            />
          ))}
        </Row>
      </>
    );
  }
}
