import React, { useState } from 'react';
import Folder from './Folder';

const CERTIFICATIONS = [
  {
    id: 'microsoft-mr',
    badge: 'Microsoft',
    badgeClass: 'microsoft',
    title: 'Introduction to Mixed Reality',
    issuer: 'Microsoft Learn',
    date: 'Feb 2025',
    credId: 'ID: C2558DD477EF1EBB',
    skills: ['Mixed Reality', 'Spatial Anchors', 'HoloLens'],
    description: 'Foundational concepts in Mixed Reality, perception APIs, spatial mapping, and immersive experiences.',
    verifyUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/SaravanaPrakashR-4947/N29VQVPF?sharingId=C2558DD477EF1EBB',
    linkedinUrl: 'https://www.linkedin.com/in/srvnsp/overlay/Certifications/2036338817/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w'
  },
  {
    id: 'claude-101',
    badge: 'Anthropic',
    badgeClass: 'anthropic',
    title: 'Claude 101',
    issuer: 'Anthropic',
    date: 'Mar 2026',
    credId: 'Cert: uuy8y6ghve9v',
    skills: ['Anthropic Claude', 'Prompt Engineering'],
    description: 'Foundational knowledge in working with Claude, multi-turn AI interactions, context windows, and automated tasks.',
    verifyUrl: 'http://verify.skilljar.com/c/uuy8y6ghve9v',
    linkedinUrl: 'https://www.linkedin.com/in/srvnsp/overlay/Certifications/1377263598/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w'
  },
  {
    id: 'claude-code',
    badge: 'Anthropic',
    badgeClass: 'anthropic',
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: 'Mar 2026',
    credId: 'Cert: 7bdj5ooecz23',
    skills: ['AI Coding Assistants', 'Agentic Workflows'],
    description: 'Transforming software engineering productivity with AI coding assistants, terminal agents, and automated test loops.',
    verifyUrl: 'http://verify.skilljar.com/c/7bdj5ooecz23',
    linkedinUrl: 'https://www.linkedin.com/in/srvnsp/overlay/Certifications/1119111007/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w'
  },
  {
    id: 'chatgpt-how-it-works',
    badge: 'Simplilearn',
    badgeClass: 'simplilearn',
    title: 'Understanding ChatGPT: How It Works',
    issuer: 'Simplilearn',
    date: 'Mar 2026',
    credId: 'Cert: qmp4Jz3om1b',
    skills: ['Generative AI', 'NLP', 'Transformers'],
    description: 'Foundational architecture of transformer-based LLMs, token probability, attention mechanisms, and prompt generation.',
    verifyUrl: 'https://simpli-web.app.link/e/qmp4Jz3om1b',
    linkedinUrl: 'https://www.linkedin.com/in/srvnsp/overlay/Certifications/1363912282/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w'
  },
  {
    id: 'intro-prompt-eng',
    badge: 'Simplilearn',
    badgeClass: 'simplilearn',
    title: 'Introduction to Prompt Engineering',
    issuer: 'Simplilearn',
    date: 'Mar 2026',
    credId: 'Cert: HTn2dmSim1b',
    skills: ['Prompt Structuring', 'Few-Shot Optimization'],
    description: 'Advanced prompt design, instruction tuning, few-shot formatting, and systematic response steering across AI systems.',
    verifyUrl: 'https://simpli-web.app.link/e/HTn2dmSim1b',
    linkedinUrl: 'https://www.linkedin.com/in/srvnsp/overlay/Certifications/1358602910/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w'
  }
];

export default function CertificationsFolder() {
  const [activeIdx, setActiveIdx] = useState(0);

  const folderItems = CERTIFICATIONS.map((cert, idx) => ({
    title: cert.title,
    content: (
      <div className="cert-doc-card">
        <div className="cert-doc-header">
          <span className={`cert-doc-badge ${cert.badgeClass}`}>{cert.badge}</span>
          <span className="cert-doc-date">{cert.date}</span>
        </div>
        <div className="cert-doc-title">{cert.title}</div>
        <div className="cert-doc-issuer">{cert.issuer}</div>
        <div className="cert-doc-desc">{cert.description}</div>
        <div className="cert-doc-id">{cert.credId}</div>
        <div className="cert-doc-footer">
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-doc-link"
            onClick={(e) => e.stopPropagation()}
          >
            Verify Credential ↗
          </a>
        </div>
      </div>
    )
  }));

  const activeCert = CERTIFICATIONS[activeIdx];

  return (
    <div className="cert-interactive-container">
      <div className="cert-folder-column">
        <div className="cert-folder-hint">
          <span>Click folder to open • Drag or click cards to inspect</span>
        </div>
        <Folder
          label="Licenses & Certs"
          items={folderItems}
          mode="flap"
          variant="glass"
          color="#00f5ff"
          tabPosition="right"
          layout="spread"
          size={1.15}
          theme="dark"
          zoomOnClick={true}
          draggable={true}
          peek={true}
          onItemClick={(item, index) => setActiveIdx(index)}
        />
      </div>

      <div className="cert-details-column glass">
        <div className="cert-details-header">
          <span className={`cert-doc-badge ${activeCert.badgeClass}`}>{activeCert.badge}</span>
          <span className="cert-details-date">{activeCert.date}</span>
        </div>
        <h3 className="cert-details-title">{activeCert.title}</h3>
        <p className="cert-details-issuer">Issued by {activeCert.issuer}</p>
        <p className="cert-details-desc">{activeCert.description}</p>
        
        <div className="cert-details-skills">
          {activeCert.skills.map((skill, i) => (
            <span key={i} className="cert-skill-tag">#{skill}</span>
          ))}
        </div>

        <div className="cert-details-actions">
          <a
            href={activeCert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-btn-verify"
          >
            <span>Show Credential</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          <a
            href={activeCert.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-btn-linkedin"
          >
            LinkedIn Record
          </a>
        </div>

        <div className="cert-quick-selector">
          <span className="cert-quick-label">Browse Certifications:</span>
          <div className="cert-quick-pills">
            {CERTIFICATIONS.map((c, i) => (
              <button
                key={c.id}
                className={`cert-pill ${activeIdx === i ? 'active' : ''} ${c.badgeClass}`}
                onClick={() => setActiveIdx(i)}
              >
                {i + 1}. {c.title.split(':')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
