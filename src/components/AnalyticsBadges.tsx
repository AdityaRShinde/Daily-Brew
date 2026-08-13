import React from 'react';
import { ArrowLeft, Flame, Trophy } from 'lucide-react';
import { Task, Habit, JournalEntry } from '../types';

interface AnalyticsBadgesProps {
  onBack: () => void;
  streak: number;
  tasks: Task[];
  habits: Habit[];
  journal: JournalEntry[];
  focusMinutes: number;
  hasCoachTime: boolean;
}

export const AnalyticsBadges: React.FC<AnalyticsBadgesProps> = ({
  onBack,
  streak,
  habits,
  journal,
  focusMinutes,
  hasCoachTime,
}) => {
  const totalHabits = habits.length;
  const completedHabits = habits.filter((h) => h.completed).length;
  const habitPct = totalHabits === 0 ? 0 : Math.round((completedHabits / totalHabits) * 100);

  const badges = [
    { title: 'Early Bird', emoji: '☕', unlocked: true, desc: 'Morning setup complete' },
    { title: 'Focus Master', emoji: '⚡', unlocked: focusMinutes >= 25, desc: '25+ mins deep focus' },
    { title: 'Zen Flow', emoji: '🧘‍♂️', unlocked: habits.some((h) => h.completed), desc: 'Complete 1 habit' },
    { title: 'Streak Hero', emoji: '🔥', unlocked: streak >= 3, desc: '3+ Day Streak' },
    { title: 'Reflection Guru', emoji: '✍️', unlocked: journal.length >= 1, desc: '1+ Journal entry' },
    { title: 'Coach Graduate', emoji: '🎓', unlocked: hasCoachTime, desc: 'Listen to Micro-Coach' },
  ];

  return (
    <div className="space-y-5 animate-fade">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 bg-white rounded-xl border-2 border-black shadow-[2px_2px_0px_#111111] hover:bg-gray-100 md:hidden active:translate-x-0.5 active:translate-y-0.5 transition-transform"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="font-heading font-bold text-2xl text-[#111111]">Progress & Badges</h2>
      </div>

      {/* Streak Hero Card */}
      <div className="bg-[#FFDD00] border-4 border-[#111111] shadow-[6px_6px_0px_#111111] p-5 rounded-3xl flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-black bg-white px-2.5 py-0.5 rounded-full border border-black">
            CURRENT STREAK
          </span>
          <div className="font-heading font-bold text-4xl text-[#111111] mt-1">
            {streak} Days 🔥
          </div>
          <p className="text-xs font-semibold text-gray-900">You are on fire! Keep consistency going.</p>
        </div>
        <Trophy className="w-16 h-16 text-black stroke-[1.5]" />
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white border-2 border-black shadow-[4px_4px_0px_#111111] p-4 rounded-2xl">
          <div className="text-gray-500 font-semibold text-xs uppercase">Habit Completion</div>
          <div className="font-heading font-bold text-2xl text-[#111111] mt-1">{habitPct}%</div>
        </div>

        <div className="bg-white border-2 border-black shadow-[4px_4px_0px_#111111] p-4 rounded-2xl">
          <div className="text-gray-500 font-semibold text-xs uppercase">Focus Time</div>
          <div className="font-heading font-bold text-2xl text-[#111111] mt-1">{focusMinutes}m</div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="bg-white border-2 border-black shadow-[4px_4px_0px_#111111] rounded-3xl p-5 space-y-3">
        <h3 className="font-heading font-bold text-base text-[#111111]">Achievement Badges</h3>
        <div className="grid grid-cols-3 gap-3 text-center">
          {badges.map((b, idx) => (
            <div
              key={idx}
              className={`p-3 border-2 border-black rounded-2xl flex flex-col items-center shadow-[2px_2px_0px_#111111] transition-all ${
                b.unlocked ? 'bg-yellow-100' : 'bg-gray-100 opacity-45'
              }`}
            >
              <span className="text-3xl mb-1">{b.emoji}</span>
              <span className="font-heading font-bold text-xs text-[#111111]">{b.title}</span>
              <span className="text-[9px] font-semibold text-gray-600">
                {b.unlocked ? 'Unlocked' : 'Locked'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
