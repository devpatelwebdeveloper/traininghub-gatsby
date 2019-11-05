import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import BaseTile from '../../atoms/BaseTile/BaseTile';

const Card = styled.div`
  float: left;
  width: 100%;
  .wrapper {
    background-color: #fff;
    min-height: 540px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);
    &:hover .data {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  .data {
    position: absolute;
    bottom: 0;
    width: 100%;
    -webkit-transform: translateY(calc(70px + 1em));
    transform: translateY(calc(70px + 1em));
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
    .content {
        padding-top:1em;
        padding-left:1em;
        padding-right:1em;
      padding-bottom: 150px
      position: relative;
      z-index: 1;
    }
  }
  .author {
    font-size: 12px;
  }
  .title {
    margin-top: 10px;
  }
  .text {
    height: 70px;
    margin: 0;
  }
`;

const CourseCard = styled.div`
  font-weight: bold;
  .wrapper {
    background: url(https://images.unsplash.com/photo-1496979551903-46e46589a88b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cda12b505afa1beb06e49d89014cbd65&auto=format&fit=crop&w=634&q=80)
      20% 1% / cover no-repeat;
  }
  .content {
    background-color: #fff;
    box-shadow: 0 5px 30px 10px rgba(0, 0, 0, 0.3);
  }
  .title a {
    color: gray;
  }
`;

export default function CourseBlockTest(props) {
  return (
    <>
      <Col md={4}>
        <Card>
          <CourseCard>
            <div className="wrapper">
              <div className="data">
                <div className="content">
                  <span className="author">Jane Doe</span>
                  <h1 className="title">
                    <a href="#">Microsoft SQL Developer</a>
                  </h1>
                  <p className="text">
                    Build and maintain SQL Server databases, and gain meaningful
                    insight into enterprise data with Real World SQL Server
                    Training Curriculum.
                  </p>
                </div>
              </div>
            </div>
          </CourseCard>
        </Card>
      </Col>
    </>
  );
}

CourseBlockTest.propTypes = {
  children: PropTypes.string,
};
