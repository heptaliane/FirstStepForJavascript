import React from 'react';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '10px',
};

const iconStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  color: 'deeppink',
  margin: '10px',
  marginTop: '0px',
};


const TOCHeader = function({title}) {
  return (
    <div>
      <Avatar
        icon="tags"
        size="large"
        style={iconStyle}
      />
      <span style={titleStyle}>
        {title}
      </span>
    </div>
  );
};

TOCHeader.propTypes = {title: PropTypes.string.isRequired};

export default TOCHeader;
