import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import GridScan from './react_src/GridScan';

const GridScanDemo = () => {
  const [linesColor, setLinesColor] = useState('#22334a');
  const [scanColor, setScanColor] = useState('#00f5ff');
  const [cells, setCells] = useState(8);
  const [depth, setDepth] = useState(3.5);
  const [scanDuration, setScanDuration] = useState(2.2);
  const [scanDelay, setScanDelay] = useState(1.4);
  const [clickEffect, setClickEffect] = useState('ping');
  const [points, setPoints] = useState(true);
  const [previewMode, setPreviewMode] = useState('disclaimer'); // 'disclaimer' or 'fullscreen'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* Top Header Control Toolbar */}
      <header style={{
        padding: '12px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(10, 15, 30, 0.95)',
        borderBottom: '1px solid rgba(0, 245, 255, 0.2)',
        zIndex: 30,
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div>
          <h1 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#00f5ff', letterSpacing: '0.5px' }}>
            React Bits — &lt;GridScan /&gt; Interactive Test Playground
          </h1>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px' }}>
            WebGL2 3D Holographic Room Scanner • Testing for Disclaimer &amp; Professional Notice
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Mode Switcher */}
          <div style={{ display: 'flex', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(0, 245, 255, 0.3)' }}>
            <button
              onClick={() => setPreviewMode('disclaimer')}
              style={{
                background: previewMode === 'disclaimer' ? '#00f5ff' : '#0d1527',
                color: previewMode === 'disclaimer' ? '#060810' : '#94a3b8',
                padding: '6px 14px',
                border: 'none',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              📋 Disclaimer Card Preview
            </button>
            <button
              onClick={() => setPreviewMode('fullscreen')}
              style={{
                background: previewMode === 'fullscreen' ? '#00f5ff' : '#0d1527',
                color: previewMode === 'fullscreen' ? '#060810' : '#94a3b8',
                padding: '6px 14px',
                border: 'none',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              🌌 Full-Screen Room
            </button>
          </div>

          {/* Theme Colors */}
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Laser:</span>
            <input
              type="color"
              value={scanColor}
              onChange={e => setScanColor(e.target.value)}
              style={{ width: '28px', height: '28px', border: 'none', borderRadius: '4px', cursor: 'pointer', background: 'transparent' }}
            />
          </div>

          {/* Click Effect */}
          <select
            value={clickEffect}
            onChange={e => setClickEffect(e.target.value)}
            style={{
              background: '#0f172a',
              color: '#38bdf8',
              border: '1px solid rgba(56,189,248,0.3)',
              borderRadius: '6px',
              padding: '6px 10px',
              fontSize: '0.8rem',
              cursor: 'pointer'
            }}
          >
            <option value="ping">💥 Click: Ping Wave</option>
            <option value="scan">⚡ Click: New Laser Sweep</option>
            <option value="none">Click: None</option>
          </select>

          {/* LiDAR Points */}
          <button
            onClick={() => setPoints(!points)}
            style={{
              background: points ? 'rgba(0, 245, 255, 0.15)' : 'rgba(255,255,255,0.05)',
              color: points ? '#00f5ff' : '#94a3b8',
              border: points ? '1px solid rgba(0, 245, 255, 0.4)' : '1px solid rgba(255,255,255,0.1)',
              borderRadius: '6px',
              padding: '6px 12px',
              fontSize: '0.8rem',
              cursor: 'pointer'
            }}
          >
            {points ? '✨ LiDAR Points: ON' : 'LiDAR Points: OFF'}
          </button>
        </div>
      </header>

      {/* Main Preview Area */}
      <main style={{
        flex: 1,
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 66px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at 50% 30%, #0d1527 0%, #04060d 100%)',
        overflow: 'hidden',
        padding: previewMode === 'disclaimer' ? '30px' : 0
      }}>
        {previewMode === 'fullscreen' ? (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <GridScan
              linesColor={linesColor}
              scanColor={scanColor}
              cells={cells}
              depth={depth}
              scanDuration={scanDuration}
              scanDelay={scanDelay}
              clickEffect={clickEffect}
              points={points}
              glow={0.8}
              trail={0.6}
              interactive={true}
            />
          </div>
        ) : (
          /* Disclaimer Card Preview with GridScan Integrated */
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '960px',
            minHeight: '260px',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid rgba(0, 245, 255, 0.35)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 0 30px rgba(0, 245, 255, 0.05)',
            background: 'rgba(6, 11, 25, 0.75)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            {/* The 3D GridScan Room Canvas (Inside Card) */}
            <div style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              opacity: 0.85
            }}>
              <GridScan
                linesColor={linesColor}
                scanColor={scanColor}
                cells={cells}
                depth={depth}
                scanDuration={scanDuration}
                scanDelay={scanDelay}
                clickEffect={clickEffect}
                points={points}
                glow={0.7}
                trail={0.5}
                interactive={true}
              />
            </div>

            {/* Subtle frosted glass gradient over the scanning room */}
            <div style={{
              position: 'absolute',
              inset: 0,
              zIndex: 2,
              background: 'radial-gradient(ellipse at center, rgba(6, 11, 25, 0.45) 0%, rgba(6, 11, 25, 0.85) 100%)',
              pointerEvents: 'none'
            }} />

            {/* Disclaimer Text Content (Floating Over Holographic Grid) */}
            <div style={{
              position: 'relative',
              zIndex: 3,
              padding: '32px 40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              textAlign: 'center',
              pointerEvents: 'none' // lets clicks pass to GridScan for ping effects
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(0, 245, 255, 0.15)',
                  border: '1px solid rgba(0, 245, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00f5ff'
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#00f5ff',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  margin: 0,
                  textShadow: '0 0 15px rgba(0, 245, 255, 0.4)'
                }}>
                  Disclaimer &amp; Professional Notice
                </h3>
              </div>

              <p style={{
                color: '#cbd5e1',
                fontSize: '0.92rem',
                lineHeight: 1.7,
                maxWidth: '820px',
                margin: 0
              }}>
                The projects and case studies showcased on this portfolio website are for illustrative purposes only.
                Some work is protected under Non-Disclosure Agreements (NDAs), and any proprietary information has been excluded or anonymized.
                All prototypes, applications, and technical demonstrations reflect my role, skills, and experience as an XR Developer and are presented solely to showcase my development capabilities.
                These materials are not intended for commercial use or redistribution.
              </p>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 245, 255, 0.08)',
                border: '1px solid rgba(0, 245, 255, 0.25)',
                padding: '4px 14px',
                borderRadius: '16px',
                fontSize: '0.78rem',
                color: '#7dd3fc',
                marginTop: '4px'
              }}>
                <span>💡 Click anywhere on the card to send a radar ping wave</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<GridScanDemo />);
