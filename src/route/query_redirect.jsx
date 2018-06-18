import React from 'react';
import {Redirect} from 'react-router-dom';


const QueryRedirect = function({match}) {

  return (
    <Redirect
      to={match.param.query}
    />
  );
};

export default QueryRedirect;
