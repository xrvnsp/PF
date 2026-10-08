import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Lanyard from './react_src/Lanyard';

const LanyardDemo = () => {
  const [finish, setFinish] = useState('holographic');
  const [interactive, setInteractive] = useState(true);
  const [slotClearance, setSlotClearance] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw' }}>
      <header style={{
        padding: '14px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(255,255,255,0.03)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        zIndex: 10
      }}>
        <div>
          <h1 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.4px', color: '#00f2fe' }}>
            React Bits — &lt;Lanyard /&gt; Interactive Preview
          </h1>
          <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '3px' }}>
            Physics-driven 3D ID Card Simulation with custom Three.js cloth strap &amp; holographic shaders
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button
            onClick={() => setSlotClearance(!slotClearance)}
            style={{
              background: slotClearance ? 'rgba(34, 197, 94, 0.15)' : 'rgba(255,255,255,0.05)',
              color: slotClearance ? '#4ade80' : '#94a3b8',
              border: slotClearance ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(255,255,255,0.15)',
              borderRadius: '6px',
              padding: '6px 12px',
              fontSize: '0.82rem',
              cursor: 'pointer'
            }}
          >
            {slotClearance ? '🛡️ Hook Safe Fit: ON' : 'Hook Safe Fit: OFF'}
          </button>
          <label style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Finish:</label>
          <select
            value={finish}
            onChange={(e) => setFinish(e.target.value)}
            style={{
              background: '#0f172a',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '6px',
              padding: '6px 12px',
              fontSize: '0.82rem',
              cursor: 'pointer'
            }}
          >
            <option value="holographic">Holographic Foil</option>
            <option value="glossy">Glossy</option>
            <option value="metallic">Metallic Sheen</option>
            <option value="matte">Matte</option>
          </select>
          <button
            onClick={() => setInteractive(!interactive)}
            style={{
              background: interactive ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255,255,255,0.05)',
              color: interactive ? '#00f2fe' : '#94a3b8',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              borderRadius: '6px',
              padding: '6px 14px',
              cursor: 'pointer',
              fontSize: '0.82rem'
            }}
          >
            {interactive ? '🖐️ Interactive: ON' : 'Interactive: OFF'}
          </button>
        </div>
      </header>

      <main style={{ flex: 1, position: 'relative', width: '100%', height: 'calc(100vh - 66px)' }}>
        <Lanyard
          frontImage="/assets/id_card_front.png"
          backImage="/assets/id_card_back.png"
          strapImage="/assets/hepl_lanyard.png"
          finish={finish}
          orientation="portrait"
          slotClearance={slotClearance}
          interactive={interactive}
          breeze={0.35}
          size={0.65}
        />
        <div style={{
          position: 'absolute',
          bottom: '22px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(8px)',
          padding: '8px 18px',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.1)',
          fontSize: '0.8rem',
          color: '#cbd5e1',
          pointerEvents: 'none'
        }}>
          💡 Drag &amp; toss the card to swing, or click quickly to flip it over!
        </div>
      </main>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<LanyardDemo />);
