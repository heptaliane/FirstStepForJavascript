import React from 'react';
import PropTypes from 'prop-types';

import fetchJson from '../utils/fetch_json.js';


const jsonLoaderGenerator = ({routeList, onLoad}) => {
  return routeList.map(({jsonUrl}) => {
    const JsonLoader = () => {
      fetchJson(jsonUrl).then((json) => {
        onLoad(json);
      });

      return <div />;
    };

    return JsonLoader;
  });
};

jsonLoaderGenerator.propTypes = {
  jsonUrl: PropTypes.string.isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default jsonLoaderGenerator;
