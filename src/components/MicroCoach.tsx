import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Pause, RotateCcw, CheckCircle, FileText } from 'lucide-react';

interface MicroCoachProps {
  onBack: () => void;
  onCompleteSession: () => void;
}

export const MicroCoach: React.FC<MicroCoachProps> = ({ onBack, onCompleteSession }) => {
  const lessons = [
    {
      title: 'Overcoming Friction with 10% Steps',
      transcript:
        "Welcome to today's Daily Brew! Today we talk about friction. When you want to build a habit, don't focus on the entire 60-minute workout. Focus on putting your shoes on. Reducing the initial friction by 10% tricks your brain past resistance. Once you start, momentum takes over.",
    },
    {
      title: 'Building a Deep Work Shield',
      transcript:
        'Distractions are momentum killers. Before starting your focus sprint, clear your workspace, turn on an ambient audio soundscape, and set a single goal for the next 25 minutes.',
    },
  ];

  const [lessonIdx, setLessonIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const duration = 120; // 2 minutes

  const currentLesson = lessons[lessonIdx];

  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev < duration) return prev + 1;
          setIsPlaying(false);
          clearInterval(interval);
          return duration;
        });
      }, 1000 / playbackRate);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackRate]);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
      }
    } else {
      setIsPlaying(true);
      if ('speechSynthesis' in window && window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      } else if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(currentLesson.transcript);
        u.rate = playbackRate;
        u.onend = () => setIsPlaying(false);
        window.speechSynthesis.speak(u);
      }
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setCurrentTime(0);
  };

  const cycleSpeed = () => {
    const speeds = [1.0, 1.25, 1.5, 2.0];
    const nextIdx = (speeds.indexOf(playbackRate) + 1) % speeds.length;
    setPlaybackRate(speeds[nextIdx]);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div className="space-y-5 animate-fade">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 bg-white rounded-xl border-2 border-black shadow-[2px_2px_0px_#111111] hover:bg-gray-100 md:hidden active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="font-heading font-bold text-2xl text-[#111111]">2-Min Micro Coach</h2>
        </div>

        <select
          value={lessonIdx}
          onChange={(e) => {
            setLessonIdx(parseInt(e.target.value));
            handleReset();
          }}
          className="p-2 border-2 border-black rounded-xl font-heading font-bold text-xs bg-white shadow-[2px_2px_0px_#111111]"
        >
          <option value={0}>Lesson 1: Micro-Steps & Friction</option>
          <option value={1}>Lesson 2: Deep Work Shield</option>
        </select>
      </div>

      {/* Vinyl Audio Player Card */}
      <div className="bg-white rounded-3xl border-4 border-[#111111] shadow-[6px_6px_0px_#111111] p-6 flex flex-col items-center text-center space-y-5">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div
            className={`w-32 h-32 bg-[#111111] rounded-full border-4 border-black flex items-center justify-center relative shadow-md transition-all ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '8s' }}
          >
            <div className="w-12 h-12 bg-[#FFDD00] rounded-full border-2 border-black flex items-center justify-center text-xl">
              ☕
            </div>
          </div>
        </div>

        <div>
          <span className="text-[10px] font-extrabold bg-purple-100 text-purple-800 border border-black px-2.5 py-0.5 rounded-full uppercase">
            DAILY MOTIVATION
          </span>
          <h3 className="font-heading font-bold text-2xl text-[#111111] mt-2 leading-tight">
            {currentLesson.title}
          </h3>
        </div>

        {/* Progress Bar */}
        <div className="w-full space-y-1">
          <div className="w-full bg-gray-100 h-3 rounded-full border-2 border-black overflow-hidden relative">
            <div
              className="bg-[#FFDD00] h-full transition-all duration-200 border-r-2 border-black"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs font-bold text-gray-500">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 w-full">
          <button
            onClick={handleReset}
            className="p-3 bg-gray-100 border-2 border-black rounded-xl hover:bg-gray-200 active:translate-x-0.5 active:translate-y-0.5 transition-transform"
            title="Reset Audio"
          >
            <RotateCcw className="w-5 h-5 text-black" />
          </button>

          <button
            onClick={togglePlay}
            className="w-20 h-20 bg-[#FFDD00] border-4 border-[#111111] shadow-[4px_4px_0px_#111111] rounded-full flex items-center justify-center active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 fill-black text-black" />
            ) : (
              <Play className="w-10 h-10 fill-black text-black ml-1" />
            )}
          </button>

          <button
            onClick={cycleSpeed}
            className="px-3.5 py-2 bg-gray-100 border-2 border-black rounded-xl font-heading font-bold text-xs hover:bg-gray-200 active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          >
            {playbackRate}x
          </button>
        </div>
      </div>

      {/* Transcript Card */}
      <div className="bg-white rounded-3xl border-2 border-black shadow-[4px_4px_0px_#111111] p-5 space-y-2">
        <div className="flex justify-between items-center">
          <h4 className="font-heading font-bold text-base flex items-center gap-1.5 text-[#111111]">
            <FileText className="w-4 h-4 text-purple-600" /> Lesson Transcript
          </h4>
          <span className="text-[10px] font-bold bg-yellow-100 border border-black px-2 py-0.5 rounded-full">
            AUDIO SYNC
          </span>
        </div>
        <p className="text-xs font-semibold text-gray-700 leading-relaxed max-h-36 overflow-y-auto pr-1">
          "{currentLesson.transcript}"
        </p>
      </div>

      <button
        onClick={onCompleteSession}
        className="w-full bg-[#FFDD00] hover:bg-yellow-400 border-4 border-[#111111] shadow-[4px_4px_0px_#111111] py-3.5 rounded-2xl font-heading font-bold text-lg flex items-center justify-center gap-2 active:translate-x-0.5 active:translate-y-0.5 transition-transform"
      >
        <span>Complete Session & Claim +1 Streak</span>
        <CheckCircle className="w-6 h-6 text-black" />
      </button>
    </div>
  );
};
