import React from 'react';
import PropTypes from 'prop-types';

import {Row, Col, Button} from 'antd';

import {title, subtitle} from '../constant.json';


const headerStyle = {
  background: 'linear-gradient(30deg, #23CDC7, #F000C8)',
  boxShadow: '1px 0px 2px rgba(0, 0, 0, 0.75)',
  height: '150px',
  padding: '10px',
  paddingBottom: '70px',
  position: 'fixed',
  textAlign: 'center',
  textShadow: '0px 2px 0px rgba(0, 0, 0, 0.8)',
  width: '100%',
  zIndex: 20,
};

const controlStyle = {
  background: 'linear-gradient(20deg, #F7FE2E, #FACC2E)',
  border: '1px #B18904',
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.25)',
  marginTop: '120px',
  marginRight: '30%',
  padding: '10px',
  position: 'fixed',
  textAlign: 'center',
  width: '70%',
  zIndex: 30,
};

const titleStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  border: 'none',
  color: '#fff',
  fontSize: '48px',
  fontWeight: 'bold',
  font: '"Copse", "Helvetica Neue", Helvetica',
  textShadow: '0px 2px 0px rgba(0, 0, 0, 0.8)',
  height: '100%',
};

const subtitleStyle = {
  color: 'rgba(255, 255, 255, 0.8)',
  margin: 'auto',
};

const sectionStyle = {
  color: '#119',
  font: '"Copse", "Helvetica Neue", Helvetica',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: 'auto',
  textShadow: '0px 1px 0px rgba(0, 0, 0, 0.8)',
};

const buttonStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  border: '1px solid rgba(0, 0, 0, 0.5)',
};


export default class TitleHeader extends React.Component {

  constructor(props) {
    super(props);

    this.title = title;
    this.subtitle = subtitle;
    this.section = props.section;
    this.nextUrl = props.nextUrl;
    this.prevUrl = props.prevUrl;

    this.handleTop = this.handleTop.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  shouldComponentUpdate() {
    // Static component
    return false;
  }

  handlePrev() {
    location.href = this.prevUrl;
  }

  handleNext() {
    location.href = this.nextUrl;
  }

  handleTop() {
    location.href = location.origin;
  }

  render() {
    return (
      <div>
        <div style={headerStyle}>
          <Row
            style={{margin: 'auto'}}
          >
            <Button
              onClick={this.handleTop}
              style={titleStyle}
            >
              {this.title}
            </Button>
          </Row>
          <Row>
            <h3 style={subtitleStyle}>
              {this.subtitle}
            </h3>
          </Row>
        </div>
        <Row style={controlStyle}>
          <Col span={4}>
            <Button
              disabled={this.prevUrl === ''}
              icon="arrow-left"
              onClick={this.handlePrev}
              style={buttonStyle}
            >
              <strong>
                {' prev'}
              </strong>
            </Button>
          </Col>
          <Col span={16}>
            <div style={sectionStyle}>
              {this.section}
            </div>
          </Col>
          <Col span={4}>
            <Button
              disabled={this.nextUrl === ''}
              icon="arrow-right"
              onClick={this.handleNext}
              style={buttonStyle}
            >
              <strong>
                {' next'}
              </strong>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }

}

TitleHeader.propTypes = {
  nextUrl: PropTypes.string,
  prevUrl: PropTypes.string,
  section: PropTypes.string,
};

TitleHeader.defaultProps = {
  nextUrl: '',
  prevUrl: '',
  section: '',
};
