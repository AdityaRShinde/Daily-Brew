import React, { useState } from 'react';
import { ArrowLeft, Bookmark, Trash2 } from 'lucide-react';
import { JournalEntry } from '../types';

interface GratitudeJournalProps {
  onBack: () => void;
  entries: JournalEntry[];
  onSaveEntry: (entry: { mood: string; prompt: string; text: string }) => void;
  onDeleteEntry: (id: number) => void;
}

export const GratitudeJournal: React.FC<GratitudeJournalProps> = ({
  onBack,
  entries,
  onSaveEntry,
  onDeleteEntry,
}) => {
  const [selectedMood, setSelectedMood] = useState<string>('🙂');
  const [prompt, setPrompt] = useState<string>('What went well today?');
  const [text, setText] = useState<string>('');

  const moods = ['😍', '🙂', '😐', '😔', '😤'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSaveEntry({ mood: selectedMood, prompt, text: text.trim() });
    setText('');
  };

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
        <h2 className="font-heading font-bold text-2xl text-[#111111]">Gratitude & Reflection</h2>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border-2 border-black shadow-[4px_4px_0px_#111111] p-5 rounded-3xl space-y-4"
      >
        <div>
          <label className="font-heading font-bold text-sm block mb-2 text-[#111111]">
            How are you feeling today?
          </label>
          <div className="flex justify-between gap-1.5">
            {moods.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setSelectedMood(m)}
                className={`p-3 border-2 border-black rounded-2xl text-2xl flex-1 text-center transition-all shadow-[2px_2px_0px_#111111] ${
                  selectedMood === m ? 'bg-[#FFDD00] scale-105' : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <label className="font-heading font-bold text-sm block text-[#111111]">
            Reflection Prompt
          </label>
          <select
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-2.5 border-2 border-black rounded-xl font-semibold bg-[#F9F9F8] text-xs shadow-[1px_1px_0px_#111111]"
          >
            <option value="What went well today?">What went well today?</option>
            <option value="What am I grateful for right now?">
              What am I grateful for right now?
            </option>
            <option value="What lesson did I learn today?">What lesson did I learn today?</option>
          </select>
        </div>

        <textarea
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your reflection..."
          className="w-full p-3 rounded-2xl border-2 border-black bg-[#F9F9F8] font-body text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-black resize-none"
        />

        <button
          type="submit"
          className="w-full bg-black hover:bg-gray-800 text-[#FFDD00] border-2 border-black shadow-[3px_3px_0px_#111111] py-3.5 rounded-2xl font-heading font-bold text-base flex items-center justify-center gap-2 active:translate-x-0.5 active:translate-y-0.5 transition-transform"
        >
          <Bookmark className="w-5 h-5" />
          <span>Save Reflection Entry</span>
        </button>
      </form>

      {/* History Log */}
      <div className="space-y-3">
        <h4 className="font-heading font-bold text-lg text-[#111111]">Journal Log</h4>
        {entries.length === 0 ? (
          <div className="text-xs font-semibold text-gray-500 py-4 text-center bg-white border-2 border-black rounded-2xl">
            No gratitude entries logged yet.
          </div>
        ) : (
          entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-white border-2 border-black shadow-[4px_4px_0px_#111111] p-4 rounded-2xl space-y-1 relative"
            >
              <button
                onClick={() => onDeleteEntry(entry.id)}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700 p-1"
                aria-label="Delete journal entry"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>

              <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase pr-6">
                <span>
                  {entry.date} • {entry.mood || '🙂'}
                </span>
                <span>GRATITUDE LOG</span>
              </div>

              <div className="text-xs font-bold text-purple-700">{entry.prompt}</div>
              <p className="text-xs font-semibold text-gray-800 leading-relaxed">{entry.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
