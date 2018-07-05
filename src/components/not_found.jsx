import React from 'react';

const boxStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #000000',
  boxShadow: '1px 0px 2px rgba(0, 0, 0, 0.75)',
  padding: '20px',
  paddingLeft: '50px',
  paddingRight: '50px',
  margin: 'auto',
  textAlign: 'center',
  width: '60%',
};

const textStyle = {
  animation: 'FadeFlash 2s ease infinite',
  height: '70px',
  fontSize: '40px',
};


const NotFound = function() {

  return (
    <div style={boxStyle}>
      <div style={textStyle}>
        404 Page Not Found
      </div>
    </div>
  );
};

export default NotFound;
