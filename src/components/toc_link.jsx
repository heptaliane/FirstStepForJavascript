import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Icon, Row, Col} from 'antd';

import setUrlQuery from '../utils/set_url_query.js';


const iconStyle = {
  backgroundColor: 'green',
  margin: 'auto',
};

const titleStyle = {
  fontSize: '20px',
  textAlign: 'left',
};

const dateStyle = {
  fontSize: '20px',
  textAlign: 'right',
  marginRight: '10px',
};

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
    setUrlQuery(query);
  }

  render() {
    return (
      <div>
        {this.routeList.map(({date, title}, idx) => {
          return (
            <Row
              key={`container-${idx}`}
              className="selectablePanel"
              id={idx}
              onClick={this.handleClick}
            >
              <Col
                key={`spacer-${idx}`}
                span={1}
              />
              <Col
                key={`icon-${idx}`}
                span={2}
              >
                <Avatar
                  key={`avatar-${idx}`}
                  icon="message"
                  size="large"
                  style={iconStyle}
                />
              </Col>
              <Col
                key={`title-${idx}`}
                span={13}
                style={titleStyle}
              >
                {title}
              </Col>
              <Col
                key={`date-${idx}`}
                span={7}
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
