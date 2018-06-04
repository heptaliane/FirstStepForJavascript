import React from 'react';
import {render} from 'react-dom';

import PageLayout from './components/page_layout.jsx';
import ContentBox from './components/content_box.jsx';
import AsyncRouter from './route/async_router.jsx';


class DefaultApp extends React.Component {

  static getDerivedStateFromProps(nextProps) {
    return nextProps;
  }

  constructor(props) {
    super(props);

    this.state = {};

    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad(data) {
    this.setState(data);
  }

  render() {
    return (
      <div>
        <AsyncRouter
          onLoad={this.handleLoad}
        />
        <PageLayout
          nextUrl={this.state.next}
          prevUrl={this.state.prev}
          section={this.state.title}
        >
          <ContentBox
            body={this.state.body}
          />
        </PageLayout>
      </div>
    );
  }

}

render(
  <DefaultApp />,
  document.getElementById('content')
);
