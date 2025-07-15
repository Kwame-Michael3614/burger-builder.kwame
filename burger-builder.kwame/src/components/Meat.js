import React from 'react';

const Meat = () => {
  return (
    <div style={{
      width: '184px',
      height: '32px',
      backgroundColor: '#78350f',
      borderRadius: '8px',
      border: '2px solid #451a03',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      margin: '4px auto',
      position: 'relative',
      background: 'linear-gradient(to bottom, #92400e, #78350f)'
    }}>
      {/* Grill marks */}
      <div style={{
        position: 'absolute',
        top: '6px',
        left: '16px',
        width: '32px',
        height: '2px',
        backgroundColor: '#451a03',
        borderRadius: '2px'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '14px',
        left: '32px',
        width: '24px',
        height: '2px',
        backgroundColor: '#451a03',
        borderRadius: '2px'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '22px',
        left: '24px',
        width: '28px',
        height: '2px',
        backgroundColor: '#451a03',
        borderRadius: '2px'
      }}></div>
      {/* Texture details */}
      <div style={{
        position: 'absolute',
        top: '6px',
        right: '32px',
        width: '8px',
        height: '8px',
        backgroundColor: '#92400e',
        borderRadius: '50%'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '18px',
        right: '48px',
        width: '6px',
        height: '6px',
        backgroundColor: '#92400e',
        borderRadius: '50%'
      }}></div>
    </div>
  );
};
export default Meat;