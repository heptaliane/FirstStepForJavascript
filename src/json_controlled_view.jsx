import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route} from 'react-router-dom';

import fetchJson from './utils/fetch_json.js';
import PageLayout from './components/page_layout.jsx';
import ContentBox from './components/content_box.jsx';


export default class JsonControlledView extends React.Component {

  constructor(props) {
    super(props);

    this.routeList = props.routeList;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.dataJsonUrl !== prevState.dataJsonUrl) {
      return {
        dataJsonUrl: nextProps.dataJsonUrl,
      };
    }

    return null;
  }

  componentDidMount() {
    this._updateProfile();
  }

  componentWillReceiveProps() {
    this._updateProfile();
  }

  componentWillUpdate(nextProps) {
    this.jsonUrl = nextProps.jsonUrl;
  }

  _updateProfile() {
    fetchJson(this.state.dataJsonUrl).then((profile) => {
      this.setState({
        body: profile.body,
        nextUrl: profile.nextUrl,
        prevUrl: profile.prevUrl,
        title: profile.title,
      });

    }).catch((err) => {
      // TODO redirect to 404 page
    });
  }

  render() {
    return (
      <PageLayout
        nextUrl={this.state.nextUrl}
        prevUrl={this.state.prevUrl}
        title={this.state.title}
      >
        <BrowserRouter>
          {this.routeList.map(({jsonUrl, route}) => {
            return (
              <Route
                key={`route${route}`}
                path={route}
                render={() => {
                  this.setState({dataJsonUrl: jsonUrl});
                  return (
                    <ContentBox
                      body={this.state.body}
                    />
                  );
                }}
              />
            );
          })}
        </BrowserRouter>
        <ContentBox
          body={this.state.body}
        />
      </PageLayout>
    );
  }
};

JsonControlledView.propTypes = {
  routeList: PropTypes.arrayOf(PropTypes.shape({
    jsonUrl: PropTypes.string,
    route: PropTypes.string,
  })).isRequired,
};
