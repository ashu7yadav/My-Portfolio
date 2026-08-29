import React, { useState, useCallback } from 'react';
import './index.css';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Toast } from './components/Toast';
import type { ToastMessage } from './types';
import confetti from 'canvas-confetti';

export const App: React.FC = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    (type: 'success' | 'info' | 'warning', title: string, message: string) => {
      const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      setToasts((prev) => [...prev, { id, type, title, message }]);

      // Auto dismiss after 4.5 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4500);
    },
    []
  );

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleDownloadResume = () => {
    addToast(
      'success',
      'DOWNLOADING RESUME',
      'Ashutosh_Yadav_Resume.pdf download initiated successfully.'
    );

    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.2 },
        colors: ['#C7FF2F', '#FF5964', '#4F63FF', '#11110F'],
      });
    } catch {
      // Safe fallback
    }
  };

  const handleCopyEmail = () => {
    addToast(
      'info',
      'EMAIL COPIED',
      'ashutoshyadav.dev@example.com copied to clipboard.'
    );
  };

  return (
    <div className="min-h-screen bg-cream text-carbon flex flex-col font-sans selection:bg-neon-lime selection:text-carbon relative">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating Notifications */}
      <Toast toasts={toasts} onDismiss={dismissToast} />

      {/* Sticky Header Navigation */}
      <Navbar onDownloadResume={handleDownloadResume} />

      {/* Main Single Page Content */}
      <main className="flex-grow">
        <Hero
          onDownloadResume={handleDownloadResume}
          onCopyEmail={handleCopyEmail}
        />
        <About onShowToast={addToast} />
        <Expertise />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Contact onShowToast={addToast} />
      </main>

      {/* Footer */}
      <Footer onDownloadResume={handleDownloadResume} />
    </div>
  );
};

export default App;
