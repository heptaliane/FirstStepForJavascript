import React from 'react';
import Async from 'react-promise';
import {render} from 'react-dom';

import JsonControlledView from './json_controlled_view.jsx';
import fetchJson from './utils/fetch_json.js';
import constant from './constant.json';


class DefaultApp extends React.Component {

  render() {
    return (
      <Async
        promise={fetchJson(constant.route_json_url)}
        then={(routeList) => {
          return (
            <JsonControlledView
              routeList={routeList}
            />
          );
        }}
      />
    );
  }
};

render(
  <DefaultApp />,
  document.getElementById('content')
);
