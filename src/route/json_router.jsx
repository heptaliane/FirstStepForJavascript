import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import JsonLoader from './json_loader.jsx';


const JsonRouter = function({routeList, onLoad}) {
  return (
    <BrowserRouter>
      <Switch>
        {routeList.map(({jsonUrl, route}, idx) => {
          return (
            <Route
              key={`match-${idx}`}
              component={
                <JsonLoader
                  jsonUrl={jsonUrl}
                  onLoad={onLoad}
                />
              }
              exact={true}
              path={route}
            />
          );
        })}
        <Route
          component={
            <JsonLoader
              jsonUrl={routeList[0].jsonUrl}
              onLoad={onLoad}
            />
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

JsonRouter.propTypes = {
  routeList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default JsonRouter;
