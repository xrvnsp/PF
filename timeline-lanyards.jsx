import React from 'react';
import { createRoot } from 'react-dom/client';
import Lanyard from './react_src/Lanyard';
import GridScan from './react_src/GridScan';
import QuickMessageStepper from './react_src/QuickMessageStepper';
import ProfileCard from './react_src/ProfileCard';

function initReactComponents() {
  console.log('🚀 initReactComponents running...');

  // 1. Mount Digifox Studio Lanyard
  try {
    const heplEl = document.getElementById('lanyard-container');
    if (heplEl && !heplEl.dataset.lanyardMounted) {
      heplEl.dataset.lanyardMounted = 'true';
      heplEl.innerHTML = '';
      const rootHepl = createRoot(heplEl);
      rootHepl.render(
        <Lanyard
          frontImage="assets/id_card_front.png"
          backImage="assets/id_card_back.png"
          strapImage="assets/hepl_lanyard.png"
          finish="glossy"
          orientation="portrait"
          cardSize={[1.32, 2.25]}
          slotClearance={true}
          interactive={true}
          breeze={0.3}
          size={1.0}
          strapLength={0.3}
          style={{ width: '100%', height: '100%' }}
        />
      );
      console.log('✅ Digifox Lanyard mounted');
    }
  } catch (err) {
    console.error('❌ Failed mounting Digifox Lanyard:', err);
  }

  // 2. Mount Madras Mindworks Lanyard
  try {
    const mmwEl = document.getElementById('lanyard-container-mmw');
    if (mmwEl && !mmwEl.dataset.lanyardMounted) {
      mmwEl.dataset.lanyardMounted = 'true';
      mmwEl.innerHTML = '';
      const rootMmw = createRoot(mmwEl);
      rootMmw.render(
        <Lanyard
          frontImage="assets/mmw_id_front.png"
          backImage="assets/mmw_id_back.png"
          strapImage="assets/mmw_lanyard.png"
          finish="glossy"
          orientation="portrait"
          cardSize={[1.32, 2.25]}
          slotClearance={true}
          interactive={true}
          breeze={0.3}
          size={1.0}
          strapLength={0.3}
          style={{ width: '100%', height: '100%' }}
        />
      );
      console.log('✅ Madras Mindworks Lanyard mounted');
    }
  } catch (err) {
    console.error('❌ Failed mounting MMW Lanyard:', err);
  }

  // 3. Mount React Bits GridScan into Disclaimer & Professional Notice
  try {
    const disclaimerEl = document.getElementById('disclaimer-gridscan-mount');
    if (disclaimerEl && !disclaimerEl.dataset.gridScanMounted) {
      disclaimerEl.dataset.gridScanMounted = 'true';
      disclaimerEl.innerHTML = '';
      const rootDisclaimer = createRoot(disclaimerEl);
      rootDisclaimer.render(
        <GridScan
          linesColor="#2a4563"
          scanColor="#00f5ff"
          cells={10}
          depth={3.0}
          scanDuration={2.0}
          scanDelay={1.0}
          clickEffect="ping"
          points={true}
          glow={0.9}
          trail={0.65}
          interactive={true}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />
      );
      console.log('✅ GridScan mounted');
    }
  } catch (err) {
    console.error('❌ Failed mounting GridScan:', err);
  }

  // 4. Mount React Bits Stepper into Quick Message Contact Section
  try {
    const quickMessageEl = document.getElementById('contact-stepper-mount');
    console.log('🔍 Checking #contact-stepper-mount element:', quickMessageEl);
    if (quickMessageEl && !quickMessageEl.dataset.stepperMounted) {
      quickMessageEl.dataset.stepperMounted = 'true';
      quickMessageEl.innerHTML = '';
      const rootStepper = createRoot(quickMessageEl);
      rootStepper.render(<QuickMessageStepper />);
      console.log('✅ QuickMessageStepper mounted successfully');
    }
  } catch (err) {
    console.error('❌ Failed mounting QuickMessageStepper:', err);
  }

  // 5. Mount React Bits ProfileCard into About Me section
  try {
    const profileCardEl = document.getElementById('profile-card-mount');
    if (profileCardEl && !profileCardEl.dataset.profileCardMounted) {
      profileCardEl.dataset.profileCardMounted = 'true';
      profileCardEl.innerHTML = '';
      const rootProfile = createRoot(profileCardEl);
      rootProfile.render(
        <ProfileCard
          name="Saravana Prakash R"
          title="Engineer - Immersive Tech"
          handle="srvnsp"
          status="Online"
          statusColor="#00f5ff"
          contactText="Contact Me"
          avatarUrl="assets/profile_photoroom.png"
          miniAvatarUrl="assets/profile_photoroom.png"
          iconUrl="/assets/csharp-pattern.svg"
          holo={0.8}
          glare={0.5}
          tiltStrength={12}
          parallax={8}
          radius={20}
          enableTilt={true}
          intro={true}
          showUserInfo={true}
          theme="dark"
          onContactClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              const offset = 80;
              const targetPos = contactSection.offsetTop - offset;
              window.scrollTo({ top: targetPos, behavior: 'smooth' });
            }
          }}
        />
      );
      console.log('✅ ProfileCard mounted successfully');
    }
  } catch (err) {
    console.error('❌ Failed mounting ProfileCard:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReactComponents);
} else {
  initReactComponents();
}

