import React, { useState } from 'react';
import { Send, Mail, Check, Copy, MessageSquare, Phone, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from './Icons';
import confetti from 'canvas-confetti';

interface ContactProps {
  onShowToast: (type: 'success' | 'info' | 'warning', title: string, message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) errs.message = 'Please provide a message or inquiry.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      onShowToast('warning', 'FORM VALIDATION', 'Please fill in all required fields properly.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#C7FF2F', '#FF5964', '#4F63FF', '#11110F'],
        });
      } catch {
        // Safe fallback
      }

      onShowToast(
        'success',
        'MESSAGE COMPILED',
        'Your message is ready. Click "Send via Mail Client" to dispatch directly.'
      );
    }, 400);
  };

  const handleToggleReveal = () => {
    const nextState = !isRevealed;
    setIsRevealed(nextState);
    if (nextState) {
      onShowToast('info', 'CONTACT UNMASKED', 'Full phone and email are now visible.');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    onShowToast('success', 'EMAIL COPIED', `${personalInfo.email} copied to clipboard.`);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.rawPhone);
    setCopiedPhone(true);
    onShowToast('success', 'PHONE COPIED', `${personalInfo.phone} copied to clipboard.`);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(formData.subject || 'AI/ML Project Inquiry');
    const body = encodeURIComponent(
      `Hi Ashutosh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-b-3 border-carbon bg-cream relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-coral text-white font-mono text-xs font-bold uppercase px-3 py-1 border border-carbon shadow-[2px_2px_0px_#11110F] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONTACT // 08</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-carbon leading-[0.95]">
            LET'S BUILD SOMETHING INTELLIGENT.
          </h2>
          <p className="font-sans text-base sm:text-lg text-carbon/85 max-w-2xl mt-4 font-medium leading-relaxed">
            Have an AI/ML project, collaboration idea, internship opportunity, or interesting problem to solve? Let's connect.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Reach & Networks (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Action Card: Email & Phone (with Privacy Reveal Toggle) */}
            <div className="bg-white border-3 border-carbon p-6 shadow-neo space-y-4">
              <div className="flex items-center justify-between border-b-2 border-carbon pb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-electric-blue" />
                  <span className="font-mono text-xs font-bold text-muted-text uppercase">
                    DIRECT INBOX &amp; WHATSAPP
                  </span>
                </div>
                <button
                  onClick={handleToggleReveal}
                  className="font-mono text-[10px] font-bold uppercase px-2 py-1 bg-cream border border-carbon hover:bg-neon-lime flex items-center gap-1 shadow-[1px_1px_0px_#11110F] transition-all"
                  title="Toggle mask on contact details"
                >
                  {isRevealed ? <EyeOff className="w-3 h-3 text-coral" /> : <Eye className="w-3 h-3 text-carbon" />}
                  <span>{isRevealed ? 'HIDE' : 'REVEAL'}</span>
                </button>
              </div>

              {/* Email Block */}
              <div className="p-3.5 bg-cream border-2 border-carbon">
                <div className="font-mono text-[10px] text-muted-text uppercase mb-1">
                  OFFICIAL CONTACT EMAIL
                </div>
                <div className="font-mono font-bold text-sm sm:text-base text-carbon break-all select-all">
                  {isRevealed ? personalInfo.email : personalInfo.maskedEmail}
                </div>
                <div className="flex gap-2 mt-2.5">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="neo-btn-primary flex-1 py-2 text-xs flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>EMAIL DIRECT</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="neo-btn-secondary py-2 px-3 text-xs flex items-center justify-center gap-1"
                    title="Copy full email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-carbon" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
              </div>

              {/* WhatsApp / Phone Block */}
              <div className="p-3.5 bg-cream border-2 border-carbon">
                <div className="font-mono text-[10px] text-muted-text uppercase mb-1">
                  PHONE &amp; WHATSAPP
                </div>
                <div className="font-mono font-bold text-sm sm:text-base text-carbon select-all flex items-center gap-2">
                  <Phone className="w-4 h-4 text-coral" />
                  <span>{isRevealed ? personalInfo.phone : personalInfo.maskedPhone}</span>
                </div>
                <div className="flex gap-2 mt-2.5">
                  <a
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn-primary flex-1 py-2 text-xs flex items-center justify-center gap-1.5 bg-neon-lime hover:bg-white"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WHATSAPP CHAT</span>
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="neo-btn-secondary py-2 px-3 text-xs flex items-center justify-center gap-1"
                    title="Copy full phone to clipboard"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-carbon" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPhone ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Social Network Direct Buttons */}
            <div className="bg-white border-3 border-carbon p-6 shadow-neo space-y-3">
              <div className="font-mono text-xs font-bold text-muted-text uppercase mb-2">
                // PROFESSIONAL NETWORKS
              </div>

              {/* WhatsApp Button */}
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 bg-cream border-2 border-carbon shadow-neo-sm hover:bg-neon-lime hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-carbon text-neon-lime">
                    <WhatsAppIcon className="w-4 h-4 text-neon-lime" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-carbon">WHATSAPP</div>
                    <div className="font-mono text-xs text-muted-text">Chat on WhatsApp (Click to Connect)</div>
                  </div>
                </div>
                <span className="font-mono text-sm font-bold text-carbon group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              {/* LinkedIn Button */}
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 bg-cream border-2 border-carbon shadow-neo-sm hover:bg-electric-blue hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-carbon text-white">
                    <LinkedInIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-carbon group-hover:text-white">LINKEDIN</div>
                    <div className="font-mono text-xs text-muted-text group-hover:text-white/80">in/ashutosh-yadav-632540342</div>
                  </div>
                </div>
                <span className="font-mono text-sm font-bold text-carbon group-hover:text-white group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              {/* GitHub Button */}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 bg-cream border-2 border-carbon shadow-neo-sm hover:bg-carbon hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-carbon text-white">
                    <GitHubIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-carbon group-hover:text-white">GITHUB</div>
                    <div className="font-mono text-xs text-muted-text group-hover:text-white/80">github.com/ashu7yadav</div>
                  </div>
                </div>
                <span className="font-mono text-sm font-bold text-carbon group-hover:text-white group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              {/* Gmail Button */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center justify-between p-3.5 bg-cream border-2 border-carbon shadow-neo-sm hover:bg-coral hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-carbon text-white">
                    <Mail className="w-4 h-4 text-coral" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-carbon group-hover:text-white">GMAIL</div>
                    <div className="font-mono text-xs text-muted-text group-hover:text-white/80">Send Direct Message (Click to Launch)</div>
                  </div>
                </div>
                <span className="font-mono text-sm font-bold text-carbon group-hover:text-white group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>

            {/* Location & Availability Note */}
            <div className="p-4 bg-neon-lime border-2 border-carbon shadow-neo-sm">
              <div className="font-mono text-xs font-bold uppercase text-carbon">
                ⚡ CURRENT AVAILABILITY
              </div>
              <div className="font-sans text-sm text-carbon font-semibold mt-1">
                Open to AI/ML internships, research collaborations, and full-stack software development projects.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border-3 border-carbon p-6 sm:p-8 shadow-neo-lg relative">
              
              <div className="flex items-center justify-between border-b-2 border-carbon pb-3 mb-6">
                <span className="font-display font-extrabold text-lg uppercase tracking-tight text-carbon">
                  SEND A DIRECT INQUIRY
                </span>
                <span className="font-mono text-xs text-muted-text">
                  [VALIDATED FORM]
                </span>
              </div>

              {isSubmitted ? (
                <div className="p-6 bg-cream border-2 border-carbon space-y-4 text-center">
                  <div className="w-12 h-12 bg-neon-lime border-2 border-carbon mx-auto flex items-center justify-center shadow-neo-sm">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>

                  <h3 className="font-display font-black text-2xl uppercase text-carbon">
                    MESSAGE PREPARED!
                  </h3>

                  <p className="font-sans text-sm text-carbon/90 max-w-md mx-auto">
                    Thank you, <span className="font-bold">{formData.name}</span>! Your message has been formatted. Click below to launch your email client with all details pre-filled.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <a
                      href={generateMailtoLink()}
                      className="neo-btn-primary py-3 px-6 text-xs flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>DISPATCH VIA EMAIL CLIENT →</span>
                    </a>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="neo-btn-secondary py-3 px-4 text-xs"
                    >
                      EDIT MESSAGE
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-carbon mb-1"
                    >
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full p-3 bg-cream border-2 ${
                        errors.name ? 'border-coral bg-coral/5' : 'border-carbon'
                      } font-sans text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-neon-lime shadow-inner`}
                    />
                    {errors.name && (
                      <p className="font-mono text-xs text-coral mt-1 font-bold">
                        ! {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-carbon mb-1"
                    >
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. alex@company.com"
                      className={`w-full p-3 bg-cream border-2 ${
                        errors.email ? 'border-coral bg-coral/5' : 'border-carbon'
                      } font-sans text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-neon-lime shadow-inner`}
                    />
                    {errors.email && (
                      <p className="font-mono text-xs text-coral mt-1 font-bold">
                        ! {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-carbon mb-1"
                    >
                      SUBJECT / TOPIC *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      placeholder="e.g. AI/ML Collaboration or Internship Inquiry"
                      className={`w-full p-3 bg-cream border-2 ${
                        errors.subject ? 'border-coral bg-coral/5' : 'border-carbon'
                      } font-sans text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-neon-lime shadow-inner`}
                    />
                    {errors.subject && (
                      <p className="font-mono text-xs text-coral mt-1 font-bold">
                        ! {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-carbon mb-1"
                    >
                      MESSAGE DETAILS *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Describe your project, timeline, or inquiry..."
                      className={`w-full p-3 bg-cream border-2 ${
                        errors.message ? 'border-coral bg-coral/5' : 'border-carbon'
                      } font-sans text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-neon-lime shadow-inner resize-none`}
                    />
                    {errors.message && (
                      <p className="font-mono text-xs text-coral mt-1 font-bold">
                        ! {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full neo-btn-primary py-3.5 text-sm flex items-center justify-center gap-2 mt-4"
                  >
                    {isSubmitting ? (
                      <span className="font-mono font-bold animate-pulse">
                        FORMATTING MESSAGE...
                      </span>
                    ) : (
                      <>
                        <span>SEND INQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
