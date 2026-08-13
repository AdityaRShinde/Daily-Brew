import React from 'react';
import { ArrowLeft, Plus, Check, Trash2 } from 'lucide-react';
import { Habit } from '../types';

interface HabitTrackerProps {
  onBack: () => void;
  habits: Habit[];
  habitFilter: string;
  onFilterHabits: (filter: string) => void;
  onToggleHabit: (id: number) => void;
  onDeleteHabit: (id: number) => void;
  onOpenAddHabitModal: () => void;
}

export const HabitTracker: React.FC<HabitTrackerProps> = ({
  onBack,
  habits,
  habitFilter,
  onFilterHabits,
  onToggleHabit,
  onDeleteHabit,
  onOpenAddHabitModal,
}) => {
  const filteredHabits = habits.filter((h) => {
    if (habitFilter !== 'All') return h.category === habitFilter;
    return true;
  });

  const total = habits.length;
  const completedCount = habits.filter((h) => h.completed).length;
  const pct = total === 0 ? 0 : Math.round((completedCount / total) * 100);

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
          <h2 className="font-heading font-bold text-2xl text-[#111111]">Habit Routine</h2>
        </div>

        <button
          onClick={onOpenAddHabitModal}
          className="bg-[#FFDD00] hover:bg-yellow-400 border-2 border-black p-2.5 rounded-xl flex items-center gap-1 font-heading font-bold text-xs shadow-[2px_2px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
        >
          <Plus className="w-4 h-4" /> Add Habit
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 text-xs font-heading font-bold">
        {['All', 'Morning', 'Fitness', 'Mindset', 'Evening'].map((cat) => (
          <button
            key={cat}
            onClick={() => onFilterHabits(cat)}
            className={`px-3.5 py-1.5 rounded-xl border-2 border-black shrink-0 transition-all shadow-[2px_2px_0px_#111111] ${
              habitFilter === cat ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            {cat === 'Morning' && '☀️ '}
            {cat === 'Fitness' && '🧘‍♂️ '}
            {cat === 'Mindset' && '🧠 '}
            {cat === 'Evening' && '🌙 '}
            {cat}
          </button>
        ))}
      </div>

      {/* Progress Card */}
      <div className="bg-white border-2 border-black shadow-[4px_4px_0px_#111111] p-4 sm:p-5 rounded-3xl space-y-2">
        <div className="flex justify-between items-center font-heading font-bold text-sm">
          <span>Today's Routine Completion</span>
          <span className="text-green-600 font-extrabold">{pct}%</span>
        </div>
        <div className="w-full bg-gray-100 h-4 rounded-full border-2 border-black overflow-hidden relative">
          <div
            className="bg-[#FFDD00] h-full transition-all duration-300 rounded-full border-r-2 border-black"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Habits List */}
      <div className="space-y-3">
        {filteredHabits.length === 0 ? (
          <div className="text-xs font-semibold text-gray-500 py-6 text-center bg-white border-2 border-black rounded-2xl">
            No habits found in this category.
          </div>
        ) : (
          filteredHabits.map((habit) => (
            <div
              key={habit.id}
              className={`p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_#111111] flex items-center justify-between transition-colors ${
                habit.completed ? 'bg-[#FFDD00]' : 'bg-white'
              }`}
            >
              <div
                className="flex items-center gap-3 flex-1 cursor-pointer"
                onClick={() => onToggleHabit(habit.id)}
              >
                <span className="text-2xl">{habit.icon || '📌'}</span>
                <div>
                  <div
                    className={`font-heading font-bold text-sm ${
                      habit.completed ? 'line-through text-black' : 'text-[#111111]'
                    }`}
                  >
                    {habit.title}
                  </div>
                  <span className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                    {habit.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onDeleteHabit(habit.id)}
                  className="p-1 text-red-600 hover:text-red-800"
                  aria-label="Delete habit"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                <div
                  onClick={() => onToggleHabit(habit.id)}
                  className={`w-8 h-8 rounded-lg border-2 border-black flex items-center justify-center cursor-pointer transition-colors ${
                    habit.completed ? 'bg-black text-[#FFDD00]' : 'bg-white'
                  }`}
                >
                  {habit.completed && <Check className="w-5 h-5 stroke-[3]" />}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
