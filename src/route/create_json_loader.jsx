import React from 'react';
import PropTypes from 'prop-types';

import fetchJson from '../utils/fetch_json.js';
import NotFound from './not_found.jsx';
import {title} from '../constant.json';


const createJsonLoader = function({routeList, onLoad}) {
  const JsonLoader = function({match}) {
    const data = routeList.filter(({route}) => {
      return route === match.params.path;
    });

    console.log(match);
    console.log(data);

    // Page not found
    if (match.path === '/404') {
      onLoad({content: <NotFound />});
      window.title = `${title}: 404`;

    } else if (data.length > 0) {
      fetchJson(data[0].jsonUrl).then((json) => {
        onLoad(Object.assign(json, {content: null}));
        window.title = `${title}: ${json.title}`;
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

  JsonLoader.propTypes = {match: PropTypes.any.isRequired};

  return JsonLoader;
};

createJsonLoader.propTypes = {
  routeList: PropTypes.arrayOf(PropTypes.shape({
    jsonUrl: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  })).isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default createJsonLoader;
