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
        nextUrl={props.nextUrl}
        prevUrl={props.prevUrl}
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
  nextUrl: PropTypes.string,
  prevUrl: PropTypes.string,
  section: PropTypes.string,
};

PageLayout.defaultProps = {
  children: '',
  nextUrl: '',
  prevUrl: '',
  section: '',
};
