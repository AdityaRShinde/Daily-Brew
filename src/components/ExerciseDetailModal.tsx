import React from 'react';
import { X, CheckCircle, Flame, Dumbbell, AlertTriangle, ListOrdered, BarChart3, Clock, Sparkles } from 'lucide-react';
import { ExerciseDetail } from '../types';

interface ExerciseDetailModalProps {
  exercise: ExerciseDetail | null;
  onClose: () => void;
  onLogExercise: (exercise: ExerciseDetail) => void;
}

export const ExerciseDetailModal: React.FC<ExerciseDetailModalProps> = ({
  exercise,
  onClose,
  onLogExercise,
}) => {
  if (!exercise) return null;

  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800 border-green-300',
    Intermediate: 'bg-amber-100 text-amber-800 border-amber-300',
    Advanced: 'bg-red-100 text-red-800 border-red-300',
    'All Levels': 'bg-blue-100 text-blue-800 border-blue-300',
  };

  return (
    <div className="fixed inset-0 bg-black/75 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto animate-fade">
      <div className="bg-[#F9F9F8] border-t-4 sm:border-4 border-[#111111] shadow-[0px_-8px_0px_#111111] sm:shadow-[8px_8px_0px_#111111] rounded-t-[32px] sm:rounded-3xl w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden relative transition-all">
        
        {/* Sticky Header */}
        <div className="bg-white border-b-4 border-[#111111] p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-[#FFDD00] border-2 border-black rounded-2xl flex items-center justify-center text-3xl shadow-[3px_3px_0px_#111111] shrink-0">
              {exercise.emoji}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-1.5 mb-1">
                <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border border-black ${difficultyColors[exercise.difficulty] || 'bg-gray-100'}`}>
                  {exercise.difficulty}
                </span>
                <span className="text-[10px] font-extrabold uppercase bg-purple-100 text-purple-900 border border-black px-2.5 py-0.5 rounded-full">
                  {exercise.subCategory}
                </span>
                {exercise.relatedProgram && (
                  <span className="text-[10px] font-extrabold uppercase bg-amber-100 text-amber-900 border border-black px-2.5 py-0.5 rounded-full">
                    {exercise.relatedProgram}
                  </span>
                )}
              </div>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#111111] leading-tight">
                {exercise.name}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 bg-white hover:bg-gray-100 border-2 border-black shadow-[2px_2px_0px_#111111] rounded-xl flex items-center justify-center font-bold text-lg active:translate-x-0.5 active:translate-y-0.5 transition-transform shrink-0"
            aria-label="Close detail modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto flex-1">
          
          {/* Quick Overview Card */}
          <div className="bg-white border-2 border-black shadow-[4px_4px_0px_#111111] rounded-2xl p-4 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><Dumbbell className="w-4 h-4 text-amber-600" /> Target Group</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-blue-600" /> {exercise.durationOrReps}</span>
            </div>
            <p className="font-heading font-bold text-base text-[#111111]">
              {exercise.targetMuscleGroup}
            </p>
            <p className="text-xs font-semibold text-gray-600 leading-relaxed">
              {exercise.description}
            </p>
          </div>

          {/* Scientific Muscle Activation Chart */}
          <div className="bg-white border-2 border-black shadow-[4px_4px_0px_#111111] rounded-2xl p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold text-base flex items-center gap-2 text-[#111111]">
                <BarChart3 className="w-5 h-5 text-purple-600" /> Scientific Muscle Activation
              </h3>
              <span className="text-[10px] font-extrabold bg-purple-50 text-purple-700 border border-black px-2 py-0.5 rounded-full">
                EMG DATA
              </span>
            </div>

            <div className="space-y-3 pt-1">
              {exercise.muscles.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-[#111111]">
                    <span>{m.muscle}</span>
                    <span className="text-purple-700 font-extrabold">{m.percentage}% Hit</span>
                  </div>
                  <div className="w-full bg-gray-100 h-3.5 rounded-full border-2 border-black overflow-hidden relative">
                    <div
                      className="bg-gradient-to-r from-amber-400 via-[#FFDD00] to-purple-500 h-full transition-all duration-500 rounded-full border-r-2 border-black"
                      style={{ width: `${m.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How To Do It - Step-By-Step */}
          <div className="bg-white border-2 border-black shadow-[4px_4px_0px_#111111] rounded-2xl p-4 sm:p-5 space-y-3">
            <h3 className="font-heading font-bold text-base flex items-center gap-2 text-[#111111]">
              <ListOrdered className="w-5 h-5 text-blue-600" /> How To Do It — Step-By-Step
            </h3>

            <ol className="space-y-2.5 pt-1">
              {exercise.steps.map((step, idx) => (
                <li key={idx} className="flex gap-3 text-xs font-semibold text-gray-800 leading-relaxed items-start">
                  <span className="w-6 h-6 bg-[#FFDD00] border-2 border-black font-heading font-bold rounded-lg flex items-center justify-center text-xs shrink-0 shadow-[1px_1px_0px_#111111]">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* What To Avoid — Warning Red Flags */}
          {exercise.whatToAvoid && exercise.whatToAvoid.length > 0 && (
            <div className="bg-red-50 border-2 border-black shadow-[4px_4px_0px_#111111] rounded-2xl p-4 sm:p-5 space-y-3">
              <h3 className="font-heading font-bold text-base flex items-center gap-2 text-red-900">
                <AlertTriangle className="w-5 h-5 text-red-600" /> What To Avoid (Form Red Flags)
              </h3>

              <ul className="space-y-2">
                {exercise.whatToAvoid.map((warning, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs font-bold text-red-950 bg-white/80 border border-red-200 p-2.5 rounded-xl">
                    <span className="text-red-600 shrink-0">⚠️</span>
                    <span>{warning}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Standards & Prescriptions */}
          <div className="bg-amber-50 border-2 border-black shadow-[4px_4px_0px_#111111] rounded-2xl p-4 sm:p-5 space-y-3">
            <h3 className="font-heading font-bold text-base flex items-center gap-2 text-amber-950">
              <Sparkles className="w-5 h-5 text-amber-600" /> Standards & Progression Notes
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-bold">
              {exercise.standards.sets && (
                <div className="bg-white border border-black p-2 rounded-xl shadow-[2px_2px_0px_#111111]">
                  <span className="text-[10px] text-gray-500 uppercase block">Sets</span>
                  <span className="text-amber-900">{exercise.standards.sets}</span>
                </div>
              )}
              {exercise.standards.reps && (
                <div className="bg-white border border-black p-2 rounded-xl shadow-[2px_2px_0px_#111111]">
                  <span className="text-[10px] text-gray-500 uppercase block">Reps / Duration</span>
                  <span className="text-amber-900">{exercise.standards.reps}</span>
                </div>
              )}
              {exercise.standards.rest && (
                <div className="bg-white border border-black p-2 rounded-xl shadow-[2px_2px_0px_#111111]">
                  <span className="text-[10px] text-gray-500 uppercase block">Rest</span>
                  <span className="text-amber-900">{exercise.standards.rest}</span>
                </div>
              )}
              {exercise.standards.tempo && (
                <div className="bg-white border border-black p-2 rounded-xl shadow-[2px_2px_0px_#111111]">
                  <span className="text-[10px] text-gray-500 uppercase block">Tempo</span>
                  <span className="text-amber-900">{exercise.standards.tempo}</span>
                </div>
              )}
            </div>

            {exercise.standards.progression && (
              <div className="text-xs font-semibold text-gray-800 bg-white/90 border border-amber-200 p-2.5 rounded-xl mt-2">
                <span className="font-bold text-amber-900">Progression Path: </span>
                {exercise.standards.progression}
              </div>
            )}
          </div>

        </div>

        {/* Action Footer */}
        <div className="bg-white border-t-4 border-[#111111] p-4 sm:p-5 flex gap-3 shrink-0">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 border-2 border-black rounded-xl font-heading font-bold text-xs shadow-[3px_3px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          >
            Close Detail
          </button>
          
          <button
            onClick={() => onLogExercise(exercise)}
            className="flex-[2] py-3 bg-[#FFDD00] hover:bg-yellow-400 border-2 border-black rounded-xl font-heading font-bold text-sm shadow-[3px_3px_0px_#111111] flex items-center justify-center gap-2 active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          >
            <CheckCircle className="w-5 h-5 fill-black text-[#FFDD00]" />
            <span>Mark Completed / Log Set</span>
          </button>
        </div>

      </div>
    </div>
  );
};
