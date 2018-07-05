import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Collapse} from 'antd';

import TOCLink from './toc_link.jsx';
import TOCHeader from './toc_header.jsx';

import {
  category,
  toc_label as tocLabel,
} from '../constant.json';


const titleText = {
  fontSize: '36px',
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
      <div style={{margin: '20px'}}>
        <Avatar
          icon="bars"
          size="large"
          style={iconStyle}
        />
        <span style={titleText}>
          {tocLabel}
        </span>
      </div>
      <Collapse defaultActiveKey={Object.keys(category)}>
        {Object.keys(category).map((key) => {
          return (
            <Collapse.Panel
              key={key}
              header={<TOCHeader title={category[key].label} />}
            >
              <TOCLink
                key={`link-${key}`}
                routeList={routeList.filter((data) => {
                  return data.query.category === category[key].id;
                })}
                style={containerStyle}
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
