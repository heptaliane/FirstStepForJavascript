import React from 'react';
import PropTypes from 'prop-types';

import fetchJson from '../utils/fetch_json.js';


const JsonLoader = ({jsonUrl, onLoad}) => {
  fetchJson(jsonUrl).then(onLoad);
  return <div />;
};

JsonLoader.propTypes = {
  jsonUrl: PropTypes.string.isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default JsonLoader;
