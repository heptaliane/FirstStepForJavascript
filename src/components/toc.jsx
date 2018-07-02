import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Collapse} from 'antd';

import TOCLink from './toc_link.jsx';

import {
  category,
  toc_label as tocLabel,
} from '../constant.json';


const titleText = {
  fontSize: '30px',
  fontWeight: 'bold',
  margin: '10px',
};

const iconStyle = {
  backgroundColor: 'rgba(0,0,0,0)',
  color: 'navy',
  margin: '10px',
  marginTop: '0px',
};

const containerStyle = {
  backgroundColor: 'rgba(128, 128, 128, 0.2)',
  fontSize: '20px',
  padding: '20px',
};


const TOC = function({routeList}) {
  return (
    <div>
      <div>
        <Avatar
          icon="bars"
          size="large"
          style={iconStyle}
        />
        <span style={titleText}>
          {tocLabel}
        </span>
      </div>
      <Collapse accordion={true}>
        {Object.keys(category).map((key) => {
          return (
            <Collapse.Panel
              key={`container-${key}`}
              header={category[key].label}
            >
              <TOCLink
                key={`link-${key}`}
                style={containerStyle}
                routeList={routeList.filter((data) => {
                  return data.query.category === category[key].id;
                })}
              />
            </Collapse.Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

TOC.propTypes = {
  routeList: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.arrayOf(PropTypes.number).isRequired,
    query: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])).isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default TOC;
