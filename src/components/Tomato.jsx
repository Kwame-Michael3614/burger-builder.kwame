import React from 'react';

const Tomato = () => {
  return (
    <div style={{
      width: '176px',
      height: '16px',
      backgroundColor: '#ef4444',
      borderRadius: '8px',
      border: '1px solid #dc2626',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      margin: '4px auto',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '4px',
        left: '16px',
        width: '12px',
        height: '8px',
        backgroundColor: '#f87171',
        borderRadius: '50%',
        opacity: '0.7'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '4px',
        right: '24px',
        width: '8px',
        height: '8px',
        backgroundColor: '#f87171',
        borderRadius: '50%',
        opacity: '0.7'
      }}></div>
    </div>
  );
};

export default Tomato;