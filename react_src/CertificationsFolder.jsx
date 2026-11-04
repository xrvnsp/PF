import React, { useState } from 'react';
import Folder from './Folder';

const CERTIFICATIONS = [
  {
    id: 'microsoft-mr',
    logo: 'assets/logos/microsoft.png',
    badge: 'Microsoft',
    badgeClass: 'microsoft',
    title: 'Introduction to Mixed Reality',
    issuer: 'Microsoft Learn',
    date: 'Feb 2025',
    credId: 'ID: C2558DD477EF1EBB',
    skills: ['Mixed Reality', 'Spatial Anchors', 'HoloLens', 'Perception APIs'],
    shortDesc: 'Foundational concepts in Mixed Reality, spatial mapping, perception APIs & immersive experiences.',
    description: 'Foundational concepts in Mixed Reality, perception APIs, spatial mapping, and immersive experiences.',
    pdfUrl: 'assets/certificates/Introduction to mixed reality - Microsoft.pdf',
    verifyUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/SaravanaPrakashR-4947/N29VQVPF?sharingId=C2558DD477EF1EBB',
    linkedinUrl: 'https://www.linkedin.com/in/srvnsp/overlay/Certifications/2036338817/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w'
  },
  {
    id: 'claude-101',
    logo: 'assets/logos/anthropic.png',
    badge: 'Anthropic',
    badgeClass: 'anthropic',
    title: 'Claude 101',
    issuer: 'Anthropic',
    date: 'Mar 2026',
    credId: 'Cert: uuy8y6ghve9v',
    skills: ['Anthropic Claude', 'Prompt Engineering', 'AI Automation'],
    shortDesc: 'Foundational knowledge in AI assistants, prompt engineering & automating tasks with Claude.',
    description: 'Completed the Claude 101 certification, gaining foundational knowledge in working with AI assistants and prompt engineering. Learned how to effectively interact with Claude to generate content, analyze information, and automate tasks using natural language.',
    pdfUrl: 'assets/certificates/certificate-uuy8y6ghve9v-1773051032.pdf',
    verifyUrl: 'http://verify.skilljar.com/c/uuy8y6ghve9v',
    linkedinUrl: 'https://www.linkedin.com/in/srvnsp/overlay/Certifications/1377263598/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w'
  },
  {
    id: 'claude-code',
    logo: 'assets/logos/anthropic.png',
    badge: 'Anthropic',
    badgeClass: 'anthropic',
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: 'Mar 2026',
    credId: 'Cert: 7bdj5ooecz23',
    skills: ['Anthropic Claude', 'AI Coding Assistants', 'Agentic Workflows'],
    shortDesc: 'Transforming software engineering productivity with AI coding assistants & agentic workflows.',
    description: 'Excited to see how AI coding assistants are transforming software development, automation, and engineering productivity.',
    pdfUrl: 'assets/certificates/Claude Code in Action.pdf',
    verifyUrl: 'http://verify.skilljar.com/c/7bdj5ooecz23',
    linkedinUrl: 'https://www.linkedin.com/in/srvnsp/overlay/Certifications/1119111007/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w'
  },
  {
    id: 'chatgpt-how-it-works',
    logo: 'assets/logos/simplilearn-skillup.png',
    badge: 'Simplilearn',
    badgeClass: 'simplilearn',
    title: 'Understanding ChatGPT: How It Works',
    issuer: 'Simplilearn',
    date: 'Mar 2026',
    credId: 'Cert: qmp4Jz3om1b',
    skills: ['Generative AI', 'NLP', 'Transformers', 'ChatGPT'],
    shortDesc: 'Foundational architecture of transformer models, token prediction, NLP & generative AI.',
    description: 'Completed Understanding ChatGPT: How It Works, gaining foundational knowledge of how generative AI models process language, generate responses, and assist in various tasks using natural language processing.',
    pdfUrl: 'assets/certificates/Understanding ChatGPT - How It Works.pdf',
    verifyUrl: 'https://simpli-web.app.link/e/qmp4Jz3om1b',
    linkedinUrl: 'https://www.linkedin.com/in/srvnsp/overlay/Certifications/1363912282/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w'
  },
  {
    id: 'intro-prompt-eng',
    logo: 'assets/logos/simplilearn-skillup.png',
    badge: 'Simplilearn',
    badgeClass: 'simplilearn',
    title: 'Introduction to Prompt Engineering',
    issuer: 'Simplilearn',
    date: 'Mar 2026',
    credId: 'Cert: HTn2dmSim1b',
    skills: ['Prompt Engineering', 'Few-Shot Steering', 'Instruction Tuning'],
    shortDesc: 'Designing effective prompts, instruction optimization, structuring & response steering.',
    description: 'Successfully completed the Introduction to Prompt Engineering certification, gaining foundational knowledge in designing effective prompts for AI systems. The program covered prompt structuring, instruction optimization, and techniques for improving AI-generated responses across various use cases.',
    pdfUrl: 'assets/certificates/Introduction to Prompt Engineering certification.pdf',
    verifyUrl: 'https://simpli-web.app.link/e/HTn2dmSim1b',
    linkedinUrl: 'https://www.linkedin.com/in/srvnsp/overlay/Certifications/1358602910/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w'
  }
];

export default function CertificationsFolder() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const folderItems = CERTIFICATIONS.map((cert, idx) => ({
    title: cert.title,
    content: (
      <div className="cert-doc-card">
        <div className="cert-doc-header">
          <div className="cert-doc-logo-box">
            <img src={cert.logo} alt={cert.issuer} className="cert-doc-logo" />
          </div>
          <span className="cert-doc-date">{cert.date}</span>
        </div>
        <div className="cert-doc-title">{cert.title}</div>
        <div className="cert-doc-issuer">{cert.issuer}</div>
        <div className="cert-doc-desc">{cert.shortDesc || cert.description}</div>
        <div className="cert-doc-id">{cert.credId}</div>
        <div className="cert-doc-footer">
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-doc-link"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(cert.verifyUrl, '_blank', 'noopener,noreferrer');
            }}
            title="Verify credential online"
          >
            <span>Verify ↗</span>
          </a>
          {cert.pdfUrl && (
            <a
              href={encodeURI(cert.pdfUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-doc-pdf-link"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(encodeURI(cert.pdfUrl), '_blank', 'noopener,noreferrer');
              }}
              title="View PDF certificate"
            >
              <span>PDF 📄</span>
            </a>
          )}
        </div>
      </div>
    )
  }));

  const activeCert = CERTIFICATIONS[activeIdx];

  return (
    <div className="cert-interactive-container">
      <div className="cert-folder-column">
        <div className="cert-folder-hint">
          <span>{isOpen ? 'Click card to zoom • Drag to arrange' : 'Click folder to open • Drag or click cards'}</span>
        </div>
        <Folder
          label="Licenses & Certs"
          items={folderItems}
          mode="flap"
          variant="glass"
          color="#00f5ff"
          tabPosition="right"
          layout="spread"
          size={1.25}
          theme="dark"
          zoomOnClick={true}
          draggable={true}
          peek={true}
          onOpenChange={(open) => setIsOpen(open)}
          onItemClick={(item, index) => setActiveIdx(index)}
        />
      </div>

      <div className="cert-details-column glass">
        <div className="cert-details-header">
          <div className="cert-details-logo-badge">
            <img src={activeCert.logo} alt={activeCert.issuer} className="cert-details-logo-img" />
          </div>
          <span className="cert-details-date">{activeCert.date}</span>
        </div>
        <h3 className="cert-details-title">{activeCert.title}</h3>
        <p className="cert-details-issuer">Issued by {activeCert.issuer} • <span className="cert-details-cred-id">{activeCert.credId}</span></p>
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
          {activeCert.pdfUrl && (
            <a
              href={encodeURI(activeCert.pdfUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn-pdf"
            >
              <span>View PDF</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </a>
          )}
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
                {i + 1}. {c.title.length > 25 ? c.title.slice(0, 25) + '…' : c.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
