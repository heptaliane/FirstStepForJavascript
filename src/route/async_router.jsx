import React from 'react';
import PropTypes from 'prop-types';
import Async from 'react-promise';

import JsonRouter from './json_router.jsx';
import fetchJson from '../utils/fetch_json.js';
import {route_json_url as jsonUrl} from '../constant.json';


export default class AsyncRouter extends React.Component {

  static getDerivedStateFromProps() {
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {};

    this.handleLoad = props.onLoad;
    this.handleLoad = this.handleLoad.bind(this);
  }

  getRouter(json) {
    return (
      <JsonRouter
        onLoad={this.handleLoad}
        routeList={json}
      />
    );
  }

  render() {
    return (
      <Async
        promise={fetchJson(jsonUrl)}
        then={this.getRouter}
      />
    );
  }

}

AsyncRouter.propTypes = {onLoad: PropTypes.func};

AsyncRouter.defaultProps = {
  onLoad: (args) => {
    console.log(args);
  },
};
