import React from 'react';
import PropTypes from 'prop-types';

import TOC from './toc.jsx';


const boxStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #000000',
  boxShadow: '1px 0px 2px rgba(0, 0, 0, 0.75)',
  padding: '20px',
  paddingLeft: '50px',
  paddingRight: '50px',
  margin: 'auto',
  textAlign: 'left',
  width: '60%',
};

const MapView = function({routeList}) {
  return (
    <div style={boxStyle}>
      <TOC routeList={routeList} />
    </div>
  );
};

MapView.propTypes = {
  routeList: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.arrayOf(PropTypes.number).isRequired,
    query: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])).isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default MapView;
