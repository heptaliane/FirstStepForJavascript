import React from 'react';

import {Layout} from 'antd';

import constant from '../constant.json';

const {Footer} = Layout;


const SignatureFooter = () => {
  return (
    <Footer style={{textAlign: 'center'}}>
      <p>
        This page is maintained by
        {' '}
        <a href={constant.author_url}>
          {constant.author}
        </a>
        .
      </p>
    </Footer>
  );
};

export default SignatureFooter;
