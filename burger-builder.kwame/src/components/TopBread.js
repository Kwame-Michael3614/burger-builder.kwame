import React from 'react';

const TopBread = () => {
  return (
    <div style={{
      width: '192px',
      height: '48px',
      backgroundColor: '#d97706',
      borderRadius: '100px 100px 20px 20px',
      border: '2px solid #b45309',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      margin: '0 auto'
    }}>
      {/* Sesame seeds */}
      <div style={{
        position: 'absolute',
        top: '8px',
        left: '24px',
        width: '8px',
        height: '8px',
        backgroundColor: '#92400e',
        borderRadius: '50%'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '12px',
        left: '48px',
        width: '4px',
        height: '4px',
        backgroundColor: '#92400e',
        borderRadius: '50%'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '8px',
        right: '32px',
        width: '8px',
        height: '8px',
        backgroundColor: '#92400e',
        borderRadius: '50%'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '64px',
        width: '4px',
        height: '4px',
        backgroundColor: '#92400e',
        borderRadius: '50%'
      }}></div>
    </div>
  );
};

export default TopBread;