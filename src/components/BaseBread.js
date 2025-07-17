import React from 'react';

const BaseBread = () => {
  return (
    <div style={{
      width: '192px',
      height: '32px',
      backgroundColor: '#d97706',
      borderRadius: '0 0 8px 8px',
      border: '2px solid #b45309',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      margin: '0 auto'
    }}>
      <div style={{
        position: 'absolute',
        top: '4px',
        left: '32px',
        width: '4px',
        height: '4px',
        backgroundColor: '#92400e',
        borderRadius: '50%'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '8px',
        left: '64px',
        width: '8px',
        height: '8px',
        backgroundColor: '#92400e',
        borderRadius: '50%'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '4px',
        right: '40px',
        width: '4px',
        height: '4px',
        backgroundColor: '#92400e',
        borderRadius: '50%'
      }}></div>
    </div>
  );
};

export default BaseBread;