import React from 'react';
import {render} from 'react-dom';

import PageLayout from './components/page_layout.jsx';
import ContentBox from './components/content_box.jsx';
import queryHandler from './utils/query_handler.js';
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
    queryHandler().then((data) => {
      if (data.content === contentId.toc) {
        // Show toc

      } else {
        // Set content
        this.setState({
          next: data.next,
          prev: data.prev,
          title: data.title,
          body: data.body,
          content: null,
        });
      }
    }).
      catch((err) => {
      // Redirect to 404 page
        console.error(err);
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
