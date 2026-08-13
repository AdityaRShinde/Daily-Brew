import React, { useState } from 'react';
import { Dumbbell, ArrowLeft, Play, Flame, Sparkles, ChevronRight, Check } from 'lucide-react';
import { FITNESS_DATA } from '../data/fitnessData';
import { ExerciseDetail } from '../types';

interface FitnessSectionProps {
  onBack: () => void;
  onOpenDetail: (exercise: ExerciseDetail) => void;
  onLogExercise: (exercise: ExerciseDetail) => void;
}

export const FitnessSection: React.FC<FitnessSectionProps> = ({
  onBack,
  onOpenDetail,
  onLogExercise,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('warmup');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('5-Min Warmup');

  // Map default subcategories when switching main category
  const defaultSubCategories: Record<string, string> = {
    warmup: '5-Min Warmup',
    exercises: 'Chest Day',
    yoga: 'Surya Namaskar A',
    stretching: 'Upper Body',
    calisthenics: 'Beginner',
  };

  // Subcategory list per main category
  const subCategoryOptions: Record<string, string[]> = {
    warmup: ['5-Min Warmup', '10-Min Warmup', 'Full Body', 'Pre-Chest', 'Pre-Back', 'Pre-Legs'],
    exercises: ['Chest Day', 'Back Day', 'Leg Day', 'Shoulder Day', 'Arms Day', 'Core Day', 'Full Body'],
    yoga: ['Surya Namaskar A', 'Surya Namaskar B', 'Beginner Flow', 'Flexibility Flow', 'Advanced Asanas'],
    stretching: ['Upper Body', 'Lower Body', 'Core', 'Full Body', 'Post-Workout'],
    calisthenics: ['Beginner', 'Intermediate', 'Advanced'],
  };

  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    const sub = defaultSubCategories[cat] || subCategoryOptions[cat]?.[0] || '';
    setActiveSubCategory(sub);
  };

  // Get current list of exercises
  const currentExercises: ExerciseDetail[] =
    FITNESS_DATA[activeCategory]?.[activeSubCategory] || [];

  return (
    <div className="space-y-5 animate-fade">
      {/* Top Bar Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 bg-white rounded-xl border-2 border-black shadow-[2px_2px_0px_#111111] hover:bg-gray-100 md:hidden active:translate-x-0.5 active:translate-y-0.5 transition-transform"
            aria-label="Back to dashboard"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <span className="text-[10px] font-extrabold uppercase bg-amber-100 text-amber-900 border border-black px-2.5 py-0.5 rounded-full inline-block mb-1">
              ENCYCLOPEDIA SUITE
            </span>
            <h2 className="font-heading font-bold text-2xl text-[#111111]">
              Fitness & Workouts
            </h2>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-yellow-100 border-2 border-black px-3 py-1.5 rounded-xl shadow-[2px_2px_0px_#111111]">
          <Flame className="w-4 h-4 text-amber-600 fill-amber-500" />
          <span className="font-heading font-bold text-xs text-black">
            Interactive Muscle Hit Data
          </span>
        </div>
      </div>

      {/* Row 1: Primary Category Tabs */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 font-heading font-bold text-xs">
        {[
          { key: 'warmup', label: '🔥 Warmup' },
          { key: 'exercises', label: '💪 Exercises' },
          { key: 'yoga', label: '🧘‍♂️ Yoga Flow' },
          { key: 'stretching', label: '🦵 Stretching' },
          { key: 'calisthenics', label: '🤸‍♂️ Calisthenics' },
        ].map((tab) => {
          const isActive = activeCategory === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => handleSelectCategory(tab.key)}
              className={`p-2.5 sm:p-3 border-2 border-black rounded-xl text-center transition-all shadow-[2px_2px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 ${
                isActive
                  ? 'bg-[#111111] text-[#FFDD00]'
                  : 'bg-white text-[#111111] hover:bg-yellow-50'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Row 2: Secondary Sub-Category Program Tabs */}
      <div className="bg-white border-2 border-black shadow-[4px_4px_0px_#111111] rounded-2xl p-3 space-y-2">
        <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase tracking-wider px-1">
          <span>Program Library: {activeCategory.toUpperCase()}</span>
          <span className="text-amber-700 bg-amber-50 border border-black px-2 py-0.5 rounded-full text-[10px]">
            {subCategoryOptions[activeCategory]?.length || 0} Sub-Programs
          </span>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {subCategoryOptions[activeCategory]?.map((sub) => {
            const isSubActive = activeSubCategory === sub;
            return (
              <button
                key={sub}
                onClick={() => setActiveSubCategory(sub)}
                className={`px-3.5 py-1.5 rounded-xl border-2 border-black font-heading font-bold text-xs shrink-0 transition-all shadow-[2px_2px_0px_#111111] ${
                  isSubActive
                    ? 'bg-[#FFDD00] text-black font-extrabold'
                    : 'bg-[#F9F9F8] text-gray-700 hover:bg-gray-200'
                }`}
              >
                {sub}
              </button>
            );
          })}
        </div>
      </div>

      {/* Exercises Cards Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="font-heading font-bold text-base text-[#111111] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            {activeSubCategory} Exercises ({currentExercises.length})
          </h3>
          <span className="text-[11px] font-semibold text-gray-500">
            Click any card to open full science detail modal
          </span>
        </div>

        {currentExercises.length === 0 ? (
          <div className="bg-white border-2 border-black rounded-2xl p-6 text-center font-bold text-gray-500">
            No routines found in this sub-category.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentExercises.map((ex) => (
              <div
                key={ex.id}
                onClick={() => onOpenDetail(ex)}
                className="bg-white border-2 border-black rounded-2xl p-4 shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between space-y-3 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-100 group-hover:bg-[#FFDD00] border-2 border-black rounded-xl flex items-center justify-center text-2xl shadow-[2px_2px_0px_#111111] transition-colors shrink-0">
                      {ex.emoji}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-[#111111] group-hover:text-amber-700 transition-colors">
                        {ex.name}
                      </h4>
                      <p className="text-xs text-gray-500 font-semibold line-clamp-1">
                        {ex.targetMuscleGroup}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border border-black bg-gray-50 shrink-0">
                    {ex.durationOrReps}
                  </span>
                </div>

                {/* Muscle activation preview bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-extrabold text-gray-600">
                    <span>Primary: {ex.muscles[0]?.muscle}</span>
                    <span className="text-purple-700">{ex.muscles[0]?.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full border border-black overflow-hidden">
                    <div
                      className="bg-[#FFDD00] h-full"
                      style={{ width: `${ex.muscles[0]?.percentage || 70}%` }}
                    />
                  </div>
                </div>

                {/* Footer action buttons */}
                <div className="flex items-center justify-between pt-1 border-t border-gray-100">
                  <span className="text-xs font-bold text-amber-600 flex items-center gap-1 group-hover:underline">
                    View Science & Steps <ChevronRight className="w-4 h-4" />
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onLogExercise(ex);
                    }}
                    className="px-3 py-1 bg-black text-[#FFDD00] hover:bg-gray-800 border-2 border-black rounded-lg text-xs font-heading font-bold flex items-center gap-1 shadow-[1px_1px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
                  >
                    <Check className="w-3.5 h-3.5" /> Log
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
