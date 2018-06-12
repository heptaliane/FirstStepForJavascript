import React from 'react';
import PropTypes from 'prop-types';

import fetchJson from '../utils/fetch_json.js';
import NotFound from './not_found.jsx';


const createJsonLoader = function({routeList, onLoad}) {
  return function({match}) {
    const data = routeList.filter(({route}) => {
      return route === match.path;
    });

    // Page not found
    if (match.path === '/404') {
      onLoad({content: <NotFound />});

    } else if (data.length > 0) {
      fetchJson(data.jsonUrl).then((json) => {
        onLoad(Object.assign(json, {content: null}));
      }).
        catch(() => {
          onLoad(null);
        });

    // Page json is not found
    } else {
      onLoad(null);
    }

    return <div />;
  };

};

createJsonLoader.propTypes = {
  routeList: PropTypes.arrayOf(PropTypes.shape({
    jsonUrl: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  })).isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default createJsonLoader;
