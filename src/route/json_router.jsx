import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import createJsonLoader from './create_json_loader.jsx';
import {repo} from '../constant.json';


const JsonRouter = ({routeList, onLoad}) => {
  const loader = createJsonLoader({
    routeList: routeList,
    onLoad: onLoad,
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={`/${repo}/404`}
          render={loader}
        />
        <Route
          path={`/${repo}/:path`}
          render={loader}
        />
      </Switch>
    </BrowserRouter>
  );
};

JsonRouter.propTypes = {
  routeList: PropTypes.arrayOf(PropTypes.shape({
    jsonUrl: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  })).isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default JsonRouter;
