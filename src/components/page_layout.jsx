import React from 'react';
import {PropTypes} from 'prop-types';

import {Layout} from 'antd';
const {Content} = Layout;

import SignatureFooter from './signature_footer.jsx';
import TitleHeader from './title_header.jsx';


class PageLayout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      next: props.next,
      prev: props.prev,
      section: props.section,
      children: props.children,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      next: nextProps.next,
      prev: nextProps.prev,
      section: nextProps.section,
      children: nextProps.children,
    };
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.section !== this.state.section;
  }

  render() {
    return (
      <Layout>
        <TitleHeader
          next={this.state.next}
          prev={this.state.prev}
          section={this.state.section}
        />
        <Content style={{marginTop: '200px'}}>
          {this.state.children}
        </Content>
        <SignatureFooter />
      </Layout>
    );
  }

}

PageLayout.propTypes = {
  children: PropTypes.node,
  next: PropTypes.objectOf(PropTypes.string),
  prev: PropTypes.objectOf(PropTypes.string),
  section: PropTypes.string,
};

PageLayout.defaultProps = {
  children: '',
  next: {},
  prev: {},
  section: '',
};

export default PageLayout;
