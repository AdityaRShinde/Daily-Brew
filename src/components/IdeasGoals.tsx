import React from 'react';
import { ArrowLeft, Plus, Lightbulb, Trash2 } from 'lucide-react';
import { Goal } from '../types';

interface IdeasGoalsProps {
  onBack: () => void;
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
  onOpenAddGoalModal: () => void;
}

export const IdeasGoals: React.FC<IdeasGoalsProps> = ({
  onBack,
  goals,
  onDeleteGoal,
  onOpenAddGoalModal,
}) => {
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
          <h2 className="font-heading font-bold text-2xl text-[#111111]">Ideas, Goals & Ambition</h2>
        </div>

        <button
          onClick={onOpenAddGoalModal}
          className="bg-[#FFDD00] hover:bg-yellow-400 border-2 border-black p-2.5 rounded-xl flex items-center gap-1 font-heading font-bold text-xs shadow-[2px_2px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
        >
          <Plus className="w-4 h-4" /> Add Idea
        </button>
      </div>

      {/* Goals List */}
      <div className="space-y-3">
        {goals.length === 0 ? (
          <div className="text-xs font-semibold text-gray-500 py-6 text-center bg-white border-2 border-black rounded-2xl">
            No ideas or goals logged yet.
          </div>
        ) : (
          goals.map((g) => (
            <div
              key={g.id}
              className="bg-white border-2 border-black shadow-[4px_4px_0px_#111111] p-4 rounded-2xl space-y-2 relative"
            >
              <button
                onClick={() => onDeleteGoal(g.id)}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700 p-1"
                aria-label="Delete goal"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                <span className="text-xl">💡</span>
                <h4 className="font-heading font-bold text-base text-[#111111]">{g.title}</h4>
              </div>

              <p className="text-xs font-semibold text-gray-700 leading-relaxed pr-6">{g.desc}</p>

              <span className="text-[9px] font-extrabold uppercase bg-yellow-100 text-yellow-900 border border-black px-2.5 py-0.5 rounded-full inline-block">
                {g.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
