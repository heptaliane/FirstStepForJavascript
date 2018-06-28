import React from 'react';
import {PropTypes} from 'prop-types';

import {Layout} from 'antd';
const {Content} = Layout;

import SignatureFooter from './signature_footer.jsx';
import TitleHeader from './title_header.jsx';


const PageLayout = (props) => {
  return (
    <Layout>
      <TitleHeader
        next={props.next}
        prev={props.prev}
        section={props.section}
      />
      <Content style={{marginTop: '200px'}}>
        {props.children}
      </Content>
      <SignatureFooter />
    </Layout>
  );
};

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
