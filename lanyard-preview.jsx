import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Lanyard from './react_src/Lanyard';

const LanyardDemo = () => {
  const isEmbedded = typeof window !== 'undefined' && (window.self !== window.top || new URLSearchParams(window.location.search).get('embed') === '1');
  const [viewMode, setViewMode] = useState('both'); // 'both', 'hepl', 'mmw'
  const [finish, setFinish] = useState('glossy');
  const [interactive, setInteractive] = useState(true);
  const [slotClearance, setSlotClearance] = useState(true);
  const [cardWidth, setCardWidth] = useState(1.32);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', minHeight: isEmbedded ? '560px' : '100vh', overflow: 'hidden' }}>
      <header style={{
        padding: isEmbedded ? '8px 16px' : '12px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(15,23,42,0.95)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        zIndex: 30,
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        <div>
          <h1 style={{ fontSize: isEmbedded ? '1rem' : '1.15rem', fontWeight: 700, letterSpacing: '0.4px', color: '#00f2fe' }}>
            React Bits — Dual &lt;Lanyard /&gt; Interactive Badges
          </h1>
          <p style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '2px' }}>
            Real-time Three.js cloth strap &amp; physics ID badges • HEPL &amp; Madras MindWorks
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <label style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Display:</label>
          <select
            value={viewMode}
            onChange={(e) => setViewMode(e.target.value)}
            style={{
              background: '#0f172a',
              color: '#38bdf8',
              border: '1px solid rgba(56,189,248,0.4)',
              borderRadius: '6px',
              padding: '6px 10px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <option value="both">👥 Both Cards Side-by-Side</option>
            <option value="hepl">🏢 HEPL ID Only</option>
            <option value="mmw">🚀 Madras MindWorks Only</option>
          </select>

          <label style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Width:</label>
          <select
            value={cardWidth}
            onChange={(e) => setCardWidth(parseFloat(e.target.value))}
            style={{
              background: '#0f172a',
              color: '#38bdf8',
              border: '1px solid rgba(56,189,248,0.3)',
              borderRadius: '6px',
              padding: '6px 10px',
              fontSize: '0.82rem',
              cursor: 'pointer'
            }}
          >
            <option value="1.32">Realistic (1.32 — Fitted)</option>
            <option value="1.42">CR80 (1.42)</option>
            <option value="1.60">Wide (1.60)</option>
          </select>

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
            {slotClearance ? '🛡️ Hook Safe: ON' : 'Hook Safe: OFF'}
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
            <option value="glossy">Glossy (Clean Laminate)</option>
            <option value="matte">Matte</option>
            <option value="metallic">Metallic Sheen</option>
            <option value="holographic">Holographic Foil</option>
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

      <main style={{
        flex: 1,
        position: 'relative',
        width: '100%',
        height: isEmbedded ? 'calc(100% - 52px)' : 'calc(100vh - 66px)',
        minHeight: isEmbedded ? '520px' : 'calc(100vh - 66px)',
        display: 'grid',
        gridTemplateColumns: viewMode === 'both' ? '1fr 1fr' : '1fr',
        background: 'radial-gradient(circle at 50% 20%, #0d1527 0%, #050811 100%)',
        overflow: 'hidden'
      }}>
        {/* HEPL Lanyard Card */}
        {(viewMode === 'both' || viewMode === 'hepl') && (
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRight: viewMode === 'both' ? '1px solid rgba(255,255,255,0.06)' : 'none'
          }}>
            <div style={{
              position: 'absolute',
              top: '16px',
              left: '20px',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(8px)',
              padding: '6px 14px',
              borderRadius: '20px',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              pointerEvents: 'none'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8' }}></span>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f8fafc', letterSpacing: '0.3px' }}>
                HEPL • Helping Enterprises Level Up
              </span>
            </div>

            <Lanyard
              frontImage="/assets/id_card_front.png"
              backImage="/assets/id_card_back.png"
              strapImage="/assets/hepl_lanyard.png"
              finish={finish}
              orientation="portrait"
              cardSize={[cardWidth, 2.25]}
              slotClearance={slotClearance}
              interactive={interactive}
              breeze={0.35}
              size={0.65}
            />
          </div>
        )}

        {/* Madras MindWorks Lanyard Card */}
        {(viewMode === 'both' || viewMode === 'mmw') && (
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div style={{
              position: 'absolute',
              top: '16px',
              left: '20px',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(8px)',
              padding: '6px 14px',
              borderRadius: '20px',
              border: '1px solid rgba(249, 115, 22, 0.3)',
              pointerEvents: 'none'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f97316' }}></span>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f8fafc', letterSpacing: '0.3px' }}>
                Madras MindWorks • XR &amp; Spatial Labs
              </span>
            </div>

            <Lanyard
              frontImage="/assets/mmw_id_front.png"
              backImage="/assets/mmw_id_back.png"
              strapImage="/assets/mmw_lanyard.png"
              finish={finish}
              orientation="portrait"
              cardSize={[cardWidth, 2.25]}
              slotClearance={slotClearance}
              interactive={interactive}
              breeze={0.35}
              size={0.65}
            />
          </div>
        )}

        {/* Floating Controls / Hint Pill */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(10px)',
          padding: '8px 22px',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.12)',
          fontSize: '0.82rem',
          color: '#cbd5e1',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          zIndex: 20
        }}>
          <span>💡</span>
          <span>Both cards hang live on screen — drag &amp; toss either card to swing, or click quickly to flip front &amp; back!</span>
        </div>
      </main>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<LanyardDemo />);
