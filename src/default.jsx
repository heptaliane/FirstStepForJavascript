import React from 'react';
import {render} from 'react-dom';
import {Redirect} from 'react-router-dom';

import PageLayout from './components/page_layout.jsx';
import ContentBox from './components/content_box.jsx';
import AsyncRouter from './route/async_router.jsx';
import getUrlQuery from './utils/get_url_query.js';


class DefaultApp extends React.Component {

  static getDerivedStateFromProps(nextProps) {
    return nextProps;
  }

  constructor(props) {
    super(props);

    this.state = {
      next: undefined,
      prev: undefined,
      title: undefined,
      body: undefined,
      content: null,
    };

    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad(data) {
    if (data !== null) {
      this.setState(data);
    }
  }

  getRedirectPath() {
    const query = getUrlQuery();
    return query.p;
  }

  render() {
    const path = getRedirectPath();

    return (
      <div>
        {
          path !== undefined &&
          <Redirect to={path} />
        }
        <AsyncRouter
          onLoad={this.handleLoad}
        />
        <PageLayout
          nextUrl={this.state.next}
          prevUrl={this.state.prev}
          section={this.state.title}
        >
          {this.state.content}
          {
            this.state.content === null &&
            <ContentBox
              body={this.state.body}
            />
          }
        </PageLayout>
      </div>
    );
  }

}

render(
  <DefaultApp />,
  document.getElementById('content')
);
