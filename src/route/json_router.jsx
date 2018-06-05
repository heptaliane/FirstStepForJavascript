import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import jsonLoaderGenerator from './json_loader.jsx';


const JsonRouter = ({routeList, onLoad}) => {
  const loaders = jsonLoaderGenerator({
    routeList: routeList,
    onLoad: onLoad,
  });

  return (
    <BrowserRouter>
      <Switch>
        {routeList.map(({route}, idx) => {
          return (
            <Route
              key={`match-${idx}`}
              exact={true}
              path={route}
              render={loaders[idx]}
            />
          );
        })}
        <Route
          path="*"
          render={loaders[0]}
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
