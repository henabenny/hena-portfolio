/**
 * Web Audio API synthesizer for soft ambient soundscapes and tactile UI sounds.
 * Generates audio natively without any external audio asset dependencies.
 */

class SoundController {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.ambientGain = null;
    this.oscillators = [];
    this.timer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound(onStateChange) {
    this.init();
    if (!this.ctx) return false;

    if (this.isPlaying) {
      this.stopAmbient();
      this.isPlaying = false;
    } else {
      this.startAmbient();
      this.isPlaying = true;
    }

    if (onStateChange) onStateChange(this.isPlaying);
    return this.isPlaying;
  }

  startAmbient() {
    if (!this.ctx) return;
    this.stopAmbient();

    // Ambient Master Gain
    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.ambientGain.gain.exponentialRampToValueAtTime(0.06, this.ctx.currentTime + 3);
    this.ambientGain.connect(this.ctx.destination);

    // Soft warm chords (Ab major / Db dreamy tones: F3, Ab3, C4, Eb4)
    const freqs = [174.61, 207.65, 261.63, 311.13, 392.00];

    freqs.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = index % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Lowpass filter for dreamy mellow warmth
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450 + index * 60, this.ctx.currentTime);

      // Slow gentle LFO pulse
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.15 + index * 0.05, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      lfo.connect(gain.gain);
      lfo.start();

      gain.gain.setValueAtTime(0.02, this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ambientGain);

      osc.start();
      this.oscillators.push(osc, lfo);
    });

    // Occasional subtle sparkle chime (every few seconds)
    this.scheduleChime();
  }

  scheduleChime() {
    if (!this.isPlaying || !this.ctx) return;
    const chimeFreqs = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    const randomFreq = chimeFreqs[Math.floor(Math.random() * chimeFreqs.length)];

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(randomFreq, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.012, this.ctx.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.8);

    osc.connect(gain);
    gain.connect(this.ambientGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 2);

    const nextDelay = 3500 + Math.random() * 4000;
    this.timer = setTimeout(() => this.scheduleChime(), nextDelay);
  }

  stopAmbient() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.ambientGain && this.ctx) {
      try {
        this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
      } catch (e) {
        // fallback
      }
    }
    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try { osc.stop(); osc.disconnect(); } catch (e) {}
      });
      this.oscillators = [];
    }, 900);
  }

  playPop() {
    if (!this.isPlaying || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch (e) {}
  }

  playChirp() {
    if (!this.isPlaying || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, this.ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.16);
    } catch (e) {}
  }
}

export const soundManager = new SoundController();

