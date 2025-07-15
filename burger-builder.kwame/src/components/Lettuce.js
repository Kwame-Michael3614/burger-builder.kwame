import React from 'react';

const Lettuce = () => {
  return (
    <div style={{
      width: '176px',
      height: '20px',
      backgroundColor: '#4ade80',
      borderRadius: '8px',
      border: '1px solid #22c55e',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      margin: '4px auto',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '0px',
        left: '8px',
        width: '24px',
        height: '8px',
        backgroundColor: '#86efac',
        borderRadius: '50%',
        transform: 'rotate(12deg)'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '4px',
        right: '16px',
        width: '16px',
        height: '8px',
        backgroundColor: '#86efac',
        borderRadius: '50%',
        transform: 'rotate(-12deg)'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '8px',
        left: '32px',
        width: '12px',
        height: '4px',
        backgroundColor: '#86efac',
        borderRadius: '50%'
      }}></div>
    </div>
  );
};
export default Lettuce;