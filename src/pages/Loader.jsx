import React from 'react';

const Loader = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#212122',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img style={{ height: '8rem' }} src='./DCLoader2.gif' />
    </div>
  );
};

export default Loader;
