import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, RotateCcw, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface FocusTimerProps {
  onBack: () => void;
  onSessionComplete: (minutes: number) => void;
}

export const FocusTimer: React.FC<FocusTimerProps> = ({ onBack, onSessionComplete }) => {
  const [timerMode, setTimerMode] = useState<'focus' | 'short' | 'long'>('focus');
  const [remaining, setRemaining] = useState<number>(25 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Soundscape state
  const [activeSound, setActiveSound] = useState<string | null>(null);
  const [volume, setVolume] = useState<number>(0.2);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const durationMap = { focus: 25 * 60, short: 5 * 60, long: 15 * 60 };

  useEffect(() => {
    let interval: any = null;
    if (isRunning) {
      interval = setInterval(() => {
        setRemaining((prev) => {
          if (prev > 1) return prev - 1;
          // Completed timer
          setIsRunning(false);
          clearInterval(interval);
          if (timerMode === 'focus') {
            onSessionComplete(25);
          }
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timerMode, onSessionComplete]);

  const handleModeChange = (mode: 'focus' | 'short' | 'long') => {
    setIsRunning(false);
    setTimerMode(mode);
    setRemaining(durationMap[mode]);
  };

  const handleReset = () => {
    setIsRunning(false);
    setRemaining(durationMap[timerMode]);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const stopSound = () => {
    if (audioCtxRef.current) {
      try { audioCtxRef.current.close(); } catch (e) {}
      audioCtxRef.current = null;
    }
    setActiveSound(null);
  };

  const toggleSound = (type: string) => {
    if (activeSound === type) {
      stopSound();
      return;
    }

    stopSound();
    setActiveSound(type);

    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioCtxRef.current = ctx;

      if (type === 'binaural') {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        osc1.frequency.value = 200;
        osc2.frequency.value = 210;
        gain.gain.value = volume * 0.1;
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);
        osc1.start();
        osc2.start();
        gainNodeRef.current = gain;
      } else {
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = type === 'rain' ? 'lowpass' : 'bandpass';
        filter.frequency.value = type === 'rain' ? 800 : 400;

        const gain = ctx.createGain();
        gain.gain.value = volume * 0.1;

        whiteNoise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        whiteNoise.start();
        gainNodeRef.current = gain;
      }
    } catch (e) {}
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = newVol * 0.1;
    }
  };

  useEffect(() => {
    return () => stopSound();
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="space-y-5 animate-fade">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 bg-white rounded-xl border-2 border-black shadow-[2px_2px_0px_#111111] hover:bg-gray-100 md:hidden active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="font-heading font-bold text-2xl text-[#111111]">Focus Sprint</h2>
        </div>

        <button
          onClick={handleReset}
          className="p-2 bg-white rounded-xl border-2 border-black shadow-[2px_2px_0px_#111111] text-gray-700 hover:bg-gray-100 active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          title="Reset timer"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Mode Switcher */}
      <div className="bg-white border-2 border-black shadow-[4px_4px_0px_#111111] p-1.5 rounded-2xl grid grid-cols-3 gap-1 font-heading font-bold text-xs">
        {[
          { key: 'focus', label: 'Focus (25m)' },
          { key: 'short', label: 'Short (5m)' },
          { key: 'long', label: 'Long (15m)' },
        ].map((m) => (
          <button
            key={m.key}
            onClick={() => handleModeChange(m.key as any)}
            className={`py-2.5 rounded-xl transition-all ${
              timerMode === m.key
                ? 'bg-black text-white'
                : 'text-black hover:bg-gray-100'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Timer Display Card */}
      <div className={`bg-white rounded-3xl border-4 border-[#111111] shadow-[6px_6px_0px_#111111] p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-6 transition-all ${isRunning ? 'bg-amber-50/50' : ''}`}>
        <span className="bg-[#FFDD00] border-2 border-black font-heading font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-[2px_2px_0px_#111111]">
          {isRunning ? 'SPRINT IN PROGRESS' : 'READY TO SPRINT'}
        </span>

        <div className="font-heading font-bold text-7xl sm:text-8xl tracking-tighter text-[#111111]">
          {formatTime(remaining)}
        </div>

        <button
          onClick={toggleTimer}
          className="w-full bg-[#FFDD00] hover:bg-yellow-400 text-[#111111] border-4 border-[#111111] shadow-[4px_4px_0px_#111111] py-4 rounded-2xl font-heading font-bold text-2xl flex items-center justify-center gap-2 active:translate-x-0.5 active:translate-y-0.5 transition-transform"
        >
          {isRunning ? <Pause className="w-8 h-8 fill-black" /> : <Play className="w-8 h-8 fill-black" />}
          <span>{isRunning ? 'PAUSE SPRINT' : "LET'S GO"}</span>
        </button>
      </div>

      {/* Soundscapes Control */}
      <div className="bg-white border-2 border-black shadow-[4px_4px_0px_#111111] rounded-3xl p-4 sm:p-5 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-heading font-bold text-sm flex items-center gap-2 text-[#111111]">
            <Volume2 className="w-4 h-4 text-blue-600" /> Ambient Soundscapes
          </h3>
          <div className="flex items-center gap-2">
            <VolumeX className="w-3.5 h-3.5 text-gray-400" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-20 accent-black"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 font-heading font-bold text-xs">
          {[
            { key: 'rain', label: '🌧️ Rain Noise' },
            { key: 'waves', label: '🌊 Ocean Waves' },
            { key: 'coffee', label: '☕ Coffee Shop' },
            { key: 'binaural', label: '🧠 Alpha Waves' },
          ].map((snd) => {
            const isActive = activeSound === snd.key;
            return (
              <button
                key={snd.key}
                onClick={() => toggleSound(snd.key)}
                className={`p-3 rounded-xl border-2 border-black flex items-center justify-center gap-2 transition-all shadow-[2px_2px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 ${
                  isActive ? 'bg-[#FFDD00] text-black font-extrabold' : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
                }`}
              >
                {snd.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
