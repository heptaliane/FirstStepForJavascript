import React from 'react';
import PropTypes from 'prop-types';

import JsonRouter from './json_router.jsx';
import fetchJson from '../utils/fetch_json.js';
import {route_json_url as jsonUrl} from '../constant.json';


export default class AsyncRouter extends React.Component {

  static getDerivedStateFromProps(nextProps) {
    return nextProps;
  }

  constructor(props) {
    super(props);

    this.state = {
      hasLoad: false,
      routeList: [],
    };

    this.handleLoad = props.onLoad;
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    fetchJson(jsonUrl).then((json) => {
      this.setState({
        hasLoad: true,
        routeList: json,
      });
    });
  }

  shouldComponentUpdate() {
    return !this.state.hasLoad;
  }

  render() {
    if (this.state.hasLoad) {
      return (
        <JsonRouter
          onLoad={this.handleLoad}
          routeList={this.state.routeList}
        />
      );
    }
    return <div />;

  }

}

AsyncRouter.propTypes = {onLoad: PropTypes.func};

AsyncRouter.defaultProps = {
  onLoad: (args) => {
    console.log(args);
  },
};
