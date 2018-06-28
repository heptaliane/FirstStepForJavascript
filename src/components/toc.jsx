import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Collapse} from 'antd';

import TOCItem from './toc_item.jsx';
import {
  category,
  toc_label as tocLabel,
} from '../constant.json';


const titleText = {
  fontSize: '30px',
  fontWeight: 'bold',
};

const iconStyle = {
  color: 'cyan',
  margin: '10px',
};


const TOC = function({routeList}) {
  return (
    <div>
      <div>
        <Avatar
          icon="bars"
          style={iconStyle}
        />
        <span style={titleText}>
          {tocLabel}
        </span>
      </div>
      <Collapse accodion={true}>
        <TOCItem
          label={category.notice.label}
          routeList={routeList.filter((data) => {
            return data.query.category === category.notice.id;
          })}
        />
        <TOCItem
          label={category.js.label}
          routeList={routeList.filter((data) => {
            return data.query.category === category.js.id;
          })}
        />
        <TOCItem
          label={category.react.label}
          routeList={routeList.filter((data) => {
            return data.query.category === category.react.id;
          })}
        />
      </Collapse>
    </div>
  );
};

TOC.propTypes = {
  routeList: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.arrayOf(PropTypes.number).isRequired,
    query: PropTypes.objectOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default TOC;
