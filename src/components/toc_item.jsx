import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Collapse, Icon, Row, Col} from 'antd';


const iconStyle = {
  color: 'green',
  margin: '10px',
};

const titleStyle = {textAlign: 'left'};

const dateStyle = {textAlign: 'right'};

const containerStyle = {
  backgroundColor: 'rgba(128, 128, 128, 0.5)',
  margin: '20px',
  padding: '10px',
  borderRadius: '5px',
};

export default class TOCItem extends React.Component {

  constructor(props) {
    super(props);

    this.routeList = props.routeList;
    this.label = props.label;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({target}) {
    console.log(target.query);
  }

  render() {
    return (
      <Collapse.Panel
        header={this.label}
        style={containerStyle}
      >
        <div>
          {this.routeList.map(({query, title, date}, idx) => {
            return (
              <Row
                key={`row-${idx}`}
                onClick={this.handleClick}
                query={query}
              >
                <Col
                  key={`icon-${idx}`}
                  span={2}
                >
                  <Avatar
                    key={`avatar-${idx}`}
                    icon="message"
                    style={iconStyle}
                  />
                </Col>
                <Col
                  span={16}
                  style={titleStyle}
                >
                  {title}
                </Col>
                <Col
                  span={6}
                  style={dateStyle}
                >
                  <Icon
                    type="clock-circle"
                  />
                  {date.join('/')}
                </Col>
              </Row>
            );
          })}
        </div>
      </Collapse.Panel>
    );
  }

}

TOCItem.propTypes = {
  label: PropTypes.string.isRequired,
  routeList: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.arrayOf(PropTypes.number).isRequired,
    query: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])).isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};
