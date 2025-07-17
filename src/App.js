import React, { useState } from 'react';
import TopBread from './components/TopBread';
import Tomato from './components/Tomato';
import Meat from './components/Meat';
import Lettuce from './components/Lettuce';
import BaseBread from './components/BaseBread';

const App = () => {
  const [ingredients, setIngredients] = useState({
    tomato: true,
    meat: true,
    lettuce: true
  });

  const toggleIngredient = (ingredient) => {
    setIngredients(prev => ({
      ...prev,
      [ingredient]: !prev[ingredient]
    }));
  };

  return (
   <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fed7aa, #fef3c7)',
      padding: '32px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '448px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '32px',
          color: '#92400e'
        }}>
          🍔 Burger Builder
        </h1>
        
        {/* Burger Display */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          padding: '32px',
          marginBottom: '32px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px'
          }}>
            <TopBread />
            {ingredients.lettuce && <Lettuce />}
            {ingredients.tomato && <Tomato />}
            {ingredients.meat && <Meat />}
            <BaseBread />
          </div>
        </div>

        {/* Controls */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          padding: '24px'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '16px',
            color: '#374151'
          }}>
            Customize Your Burger
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{
                fontSize: '1.125rem',
                fontWeight: '500',
                color: '#374151'
              }}>
                🍅 Tomato
              </span>
              <button
                onClick={() => toggleIngredient('tomato')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: ingredients.tomato ? '#ef4444' : '#e5e7eb',
                  color: ingredients.tomato ? 'white' : '#6b7280',
                  transition: 'all 0.2s'
                }}
              >
                {ingredients.tomato ? 'Remove' : 'Add'}
              </button>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{
                fontSize: '1.125rem',
                fontWeight: '500',
                color: '#374151'
              }}>
                🥩 Meat Patty
              </span>
              <button
                onClick={() => toggleIngredient('meat')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: ingredients.meat ? '#b45309' : '#e5e7eb',
                  color: ingredients.meat ? 'white' : '#6b7280',
                  transition: 'all 0.2s'
                }}
              >
                {ingredients.meat ? 'Remove' : 'Add'}
              </button>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{
                fontSize: '1.125rem',
                fontWeight: '500',
                color: '#374151'
              }}>
                🥬 Lettuce
              </span>
              <button
                onClick={() => toggleIngredient('lettuce')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: ingredients.lettuce ? '#22c55e' : '#e5e7eb',
                  color: ingredients.lettuce ? 'white' : '#6b7280',
                  transition: 'all 0.2s'
                }}
              >
                {ingredients.lettuce ? 'Remove' : 'Add'}
              </button>
            </div>
          </div>

          <div style={{
            marginTop: '24px',
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
            <p style={{
              fontSize: '0.875rem',
              color: '#6b7280',
              textAlign: 'center'
            }}>
              Click the buttons above to customize your burger!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;