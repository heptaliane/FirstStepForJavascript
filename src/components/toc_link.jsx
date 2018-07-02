import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Icon, Row, Col} from 'antd';


const iconStyle = {
  backgroundColor: 'green',
  margin: 'auto',
};

const titleStyle = {textAlign: 'left'};

const dateStyle = {textAlign: 'right'};

const maxDepth = 3;


export default class TOCLink extends React.Component {

  constructor(props) {
    super(props);

    this.routeList = props.routeList;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let target = e.target;

    for (let i = 0; i < maxDepth && target.id === ''; i += 1) {
      target = target.parentNode;
    }

    const query = this.routeList[target.id].query;
    console.log(query);
  }

  render() {
    return (
      <div>
        {this.routeList.map(({date, title}, idx) => {
          return (
            <Row
              key={`container-${idx}`}
              id={idx}
              onClick={this.handleClick}
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
                key={`title-${idx}`}
                span={16}
                style={titleStyle}
              >
                {title}
              </Col>
              <Col
                key={`date-${idx}`}
                span={6}
                style={dateStyle}
              >
                <Icon
                  key={`date_icon-${idx}`}
                  style={{marginRight: '10px'}}
                  type="clock-circle"
                />
                {date.join('/')}
              </Col>
            </Row>
          );
        })}
      </div>
    );
  }

}

TOCLink.propTypes = {
  routeList: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.arrayOf(PropTypes.number).isRequired,
    query: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])).isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};
