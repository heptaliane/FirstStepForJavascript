import React from 'react';
import {render} from 'react-dom';

import PageLayout from './components/page_layout.jsx';
import ContentBox from './components/content_box.jsx';
import queryRouter from './utils/query_router.js';
import {content_id as contentId} from './constant.json';


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
  }

  componentDidMount() {
    queryRouter().then((data) => {
      if (data === null) {
        // show 404 content

      } else if (data.content === contentId.toc) {
        // show toc

      } else {
        // set content
        this.setState({
          next: data.next,
          prev: data.prev,
          title: data.title,
          body: data.body,
          content: null,
        });
      }
    });
  }

  render() {
    return (
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
    );
  }

}

render(
  <DefaultApp />,
  document.getElementById('content')
);
