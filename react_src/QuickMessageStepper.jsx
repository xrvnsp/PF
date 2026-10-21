import React, { useState } from 'react';
import Stepper, { Step } from './Stepper';

const INTENT_OPTIONS = [
  { id: 'Project Inquiry', label: '💼 Project / Freelance Work', icon: '💼' },
  { id: 'Job Opportunity', label: '🚀 Full-Time / Contract Role', icon: '🚀' },
  { id: 'Request NDA Demo', label: '🔒 Private Demos & Builds (NDA)', icon: '🔒' },
  { id: 'Technical Consultation', label: '⚡ Technical Advice', icon: '⚡' },
  { id: 'Casual Connect', label: '☕ Say Hello / Networking', icon: '☕' }
];

export default function QuickMessageStepper() {
  const [activeStep, setActiveStep] = useState(1);
  const [email, setEmail] = useState('');
  const [intent, setIntent] = useState('Project Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Email format validation
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleSend = async () => {
    if (!isValidEmail) {
      setError('Please enter a valid email address.');
      setActiveStep(1);
      return;
    }
    setError('');
    setIsSubmitting(true);

    try {
      if (!window.PortfolioAnalytics || typeof window.PortfolioAnalytics.submitLead !== 'function') {
        throw new Error('Analytics engine initializing. Please try again in a moment.');
      }

      const result = await window.PortfolioAnalytics.submitLead({
        email: email.trim(),
        type: 'direct_inquiry',
        intent,
        message: message.trim()
      });

      if (result && result.success) {
        setActiveStep(4); // Advance to completedContent
      } else {
        throw new Error((result && result.error) || 'Failed to send message. Please retry.');
      }
    } catch (err) {
      setError(err.message || 'Error transmitting message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setEmail('');
    setIntent('Project Inquiry');
    setMessage('');
    setError('');
    setActiveStep(1);
  };

  return (
    <div className="stepper-quick-message-container">
      <div className="stepper-qm-header">
        <div className="stepper-qm-badge">
          <span className="pulse-dot-cyan"></span>
          <span>Send a Quick Message</span>
        </div>
        <p className="stepper-qm-subtitle">
          Leave your email and message below. I usually reply within a few hours.
        </p>
      </div>

      <Stepper
        step={activeStep}
        onStepChange={step => {
          setError('');
          setActiveStep(step);
        }}
        indicator="bars"
        transition="slide"
        accentColor="#00f5ff"
        theme="dark"
        frame={true}
        radius={20}
        width={680}
        backButtonText="Back"
        nextButtonText="Continue"
        completeButtonText={isSubmitting ? "Sending..." : "Send Message ✉️"}
        nextButtonProps={{
          disabled: (activeStep === 1 && !isValidEmail) || isSubmitting
        }}
        onFinalStepCompleted={handleSend}
        completedContent={
          <div className="stepper-complete-card">
            <div className="stepper-complete-icon">✔</div>
            <h3 className="stepper-complete-title">Message Sent!</h3>
            <p className="stepper-complete-desc">
              Thank you for reaching out. I've received your note and will reply to{' '}
              <strong style={{ color: '#00f5ff' }}>{email}</strong> shortly.
            </p>
            <button type="button" className="stepper-reset-btn" onClick={handleReset}>
              Send Another Message
            </button>
          </div>
        }
      >
        {/* STEP 1: EMAIL */}
        <Step title="Email">
          <div className="step-pane-content">
            <h3 className="step-title">Where should I reply?</h3>
            <p className="step-desc">Enter your work or personal email address.</p>

            <div className="step-input-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                autoFocus
                onChange={e => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                className="step-text-input"
              />
            </div>
            {!isValidEmail && email.length > 0 && (
              <span className="step-field-hint error">Please enter a valid email address</span>
            )}
            {isValidEmail && (
              <span className="step-field-hint success">✔ Valid email address</span>
            )}
          </div>
        </Step>

        {/* STEP 2: TOPIC & MESSAGE */}
        <Step title="Details">
          <div className="step-pane-content">
            <h3 className="step-title">What is this regarding?</h3>
            <p className="step-desc">Choose a topic and share any details or questions.</p>

            <div className="intent-pills-grid">
              {INTENT_OPTIONS.map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  className={`intent-pill ${intent === opt.id ? 'active' : ''}`}
                  onClick={() => setIntent(opt.id)}
                >
                  <span className="intent-pill-label">{opt.label}</span>
                </button>
              ))}
            </div>

            <div className="step-message-box">
              <label className="step-message-label">
                Your Message <span style={{ opacity: 0.6, fontWeight: 400 }}>(Optional)</span>
              </label>
              <textarea
                rows={3}
                placeholder="Tell me a bit about your project, timeline, or headset target..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="step-textarea"
              />
            </div>
          </div>
        </Step>

        {/* STEP 3: REVIEW & SEND */}
        <Step title="Review">
          <div className="step-pane-content">
            <h3 className="step-title">Ready to transmit</h3>
            <p className="step-desc">Review your message before sending.</p>

            <div className="review-summary-card">
              <div className="review-row">
                <span className="review-label">Your Email:</span>
                <span className="review-value cyan">{email}</span>
              </div>
              <div className="review-row">
                <span className="review-label">Topic:</span>
                <span className="review-value">{intent}</span>
              </div>
              {message ? (
                <div className="review-row column">
                  <span className="review-label">Message:</span>
                  <p className="review-quote">"{message}"</p>
                </div>
              ) : (
                <div className="review-row">
                  <span className="review-label">Message:</span>
                  <span className="review-value muted">No extra note attached</span>
                </div>
              )}
            </div>

            {error && (
              <div className="step-error-banner">
                <span>⚠ {error}</span>
              </div>
            )}
          </div>
        </Step>
      </Stepper>
    </div>
  );
}
