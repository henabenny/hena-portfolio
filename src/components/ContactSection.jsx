import React, { useState } from 'react';
import { personalData } from '../data';
import { soundManager } from '../utils/sound';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
  Rocket,
  MessageSquare,
  Sparkles,
  Copy,
  Check,
} from 'lucide-react';

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  mail: Mail,
};

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalData.contact.email);
    setCopiedEmail(true);
    soundManager.playChirp();
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please tell me your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'An email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please drop a few words in your message.';
    } else if (formData.message.trim().length < 8) {
      newErrors.message = 'Message must be at least 8 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundManager.playPop();

    if (!validate()) return;

    setLoading(true);
    // Simulate instantaneous clean local submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      soundManager.playChirp();

      // Confetti burst in brand colors
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F7F08A', '#B9A8F0', '#6B5B95', '#F2EFEA'],
        });
      } catch (e) {}
    }, 500);
  };

  const scrollToTop = () => {
    soundManager.playChirp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#3B3355] via-[#4A3E6B] to-[#2B233D] text-[#F2EFEA] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F08A]/15 border border-[#F7F08A]/30 text-[#F7F08A] font-condensed tracking-widest text-xs uppercase mb-3">
            <MessageSquare size={14} /> LEVEL 05 : SIGNAL TRANSMISSION
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#F2EFEA]">
            {personalData.contact.heading}
          </h2>
          <div className="w-20 h-1.5 bg-[#F7F08A] my-4 rounded-full" />
          <p className="font-condensed text-base sm:text-xl text-[#D8CCE6] max-w-2xl leading-relaxed">
            {personalData.contact.subheading}
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-7 rounded-3xl bg-[#261F36]/90 border-3 border-[#261F36] shadow-[6px_6px_0px_#140E20]">
              <h3 className="font-display text-2xl font-bold uppercase text-[#F7F08A] mb-2">
                DIRECT CHANNELS
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#D8CCE6] mb-6">
                Feel free to email me directly or connect through social links.
              </p>

              <div className="space-y-4">
                <div
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#3B3355]/60 hover:bg-[#3B3355]/90 border border-[#8E7CC3]/30 transition-all group"
                >
                  <a
                    href={`mailto:${personalData.contact.email}`}
                    className="flex items-center gap-3 overflow-hidden text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#8E7CC3] group-hover:bg-[#F7F08A] text-[#261F36] flex items-center justify-center transition-colors shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="truncate">
                      <span className="font-condensed text-xs uppercase text-[#B9A8F0] block">Personal Email</span>
                      <span className="font-sans text-xs sm:text-sm font-semibold text-[#F2EFEA] hover:text-[#F7F08A] truncate transition-colors">
                        {personalData.contact.email}
                      </span>
                    </div>
                  </a>

                  {/* Copy Button */}
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-[#261F36] hover:bg-[#F7F08A] text-[#D8CCE6] hover:text-[#261F36] border border-[#8E7CC3]/40 transition-colors ml-2 shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-400">
                        <Check size={14} /> Copied!
                      </span>
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#3B3355]/60 border border-[#8E7CC3]/30">
                  <div className="w-10 h-10 rounded-xl bg-[#8E7CC3] text-[#261F36] flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="font-condensed text-xs uppercase text-[#B9A8F0] block">Campus / Base</span>
                    <span className="font-sans text-xs sm:text-sm font-medium">{personalData.contact.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="mt-8 pt-6 border-t border-[#8E7CC3]/20">
                <h4 className="font-condensed font-bold text-xs uppercase tracking-widest text-[#B9A8F0] mb-3">
                  CONNECT ON SOCIALS
                </h4>
                <div className="grid grid-cols-2 gap-2.5">
                  {personalData.contact.socialLinks.map((social) => {
                    const Icon = socialIcons[social.icon] || Mail;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-[#352B4D] hover:bg-[#F7F08A] hover:text-[#261F36] border border-[#8E7CC3]/30 transition-all font-condensed font-semibold text-xs uppercase"
                      >
                        <Icon size={15} />
                        <span>{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#231A33] border-3 border-[#261F36] shadow-[8px_8px_0px_#161022]">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#F7F08A] border-3 border-[#261F36] flex items-center justify-center text-[#261F36] mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-display text-3xl font-bold uppercase text-[#F7F08A]">
                    MESSAGE RECEIVED!
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#D8CCE6] max-w-md mt-2">
                    Thanks for reaching out, {formData.name || 'friend'}! I'll read your note and get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-[#8E7CC3] text-[#261F36] font-condensed font-bold uppercase text-xs tracking-wider border-2 border-[#261F36]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center justify-between border-b border-[#8E7CC3]/20 pb-3 mb-4">
                    <span className="font-display text-xl font-bold uppercase text-[#F2EFEA]">
                      Drop a Message
                    </span>
                    <span className="text-[11px] font-mono text-[#F7F08A]">
                      FAST RESPONSE GUARANTEED
                    </span>
                  </div>

                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block font-condensed font-semibold text-xs uppercase text-[#D8CCE6] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maya Sharma"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#1B1428] border-2 ${
                        errors.name ? 'border-rose-400' : 'border-[#8E7CC3]/30 focus:border-[#F7F08A]'
                      } text-[#F2EFEA] placeholder-[#8E7CC3]/50 font-sans text-sm focus:outline-none transition-colors`}
                    />
                    {errors.name && <p className="text-rose-300 text-xs mt-1 font-sans">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block font-condensed font-semibold text-xs uppercase text-[#D8CCE6] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. maya@example.com"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#1B1428] border-2 ${
                        errors.email ? 'border-rose-400' : 'border-[#8E7CC3]/30 focus:border-[#F7F08A]'
                      } text-[#F2EFEA] placeholder-[#8E7CC3]/50 font-sans text-sm focus:outline-none transition-colors`}
                    />
                    {errors.email && <p className="text-rose-300 text-xs mt-1 font-sans">{errors.email}</p>}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block font-condensed font-semibold text-xs uppercase text-[#D8CCE6] mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Hena, I'd love to chat about an AI project / internship..."
                      className={`w-full px-4 py-3 rounded-2xl bg-[#1B1428] border-2 ${
                        errors.message ? 'border-rose-400' : 'border-[#8E7CC3]/30 focus:border-[#F7F08A]'
                      } text-[#F2EFEA] placeholder-[#8E7CC3]/50 font-sans text-sm focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && <p className="text-rose-300 text-xs mt-1 font-sans">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-2xl bg-[#F7F08A] hover:bg-[#FFF89D] text-[#261F36] font-condensed font-bold uppercase tracking-wider text-base sm:text-lg border-3 border-[#261F36] shadow-[4px_4px_0px_#261F36] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>SENDING SIGNAL...</span>
                    ) : (
                      <>
                        <span>TRANSMIT MESSAGE</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Back to top rocket button */}
        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <button
            onClick={scrollToTop}
            type="button"
            className="group relative p-4 rounded-full bg-[#F7F08A] text-[#261F36] border-3 border-[#261F36] shadow-[4px_4px_0px_#261F36] hover:-translate-y-2 hover:shadow-[6px_6px_0px_#261F36] transition-all cursor-pointer"
            aria-label="Back to top rocket"
          >
            <Rocket size={26} className="transform -rotate-45 group-hover:-translate-y-1 transition-transform" />
            <span className="sr-only">Back to top</span>
          </button>
          <span className="font-condensed font-bold uppercase tracking-widest text-xs text-[#D8CCE6] mt-3">
            BACK TO TOP
          </span>
        </div>
      </div>
    </section>
  );
}

