import React from 'react';
import { ArrowLeft, BookMarked, Award, Plus, Check, Trash2 } from 'lucide-react';
import { Book, Course } from '../types';

interface MindStudyProps {
  onBack: () => void;
  books: Book[];
  onToggleBook: (id: number) => void;
  onDeleteBook: (id: number) => void;
  onOpenAddBookModal: () => void;
  courses: Course[];
  onUpdateCourseProgress: (id: number, val: number) => void;
  onDeleteCourse: (id: number) => void;
  onOpenAddCourseModal: () => void;
}

export const MindStudy: React.FC<MindStudyProps> = ({
  onBack,
  books,
  onToggleBook,
  onDeleteBook,
  onOpenAddBookModal,
  courses,
  onUpdateCourseProgress,
  onDeleteCourse,
  onOpenAddCourseModal,
}) => {
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
        <h2 className="font-heading font-bold text-2xl text-[#111111]">Mind & Study Hub</h2>
      </div>

      {/* Reading List Section */}
      <div className="bg-white border-2 border-black shadow-[4px_4px_0px_#111111] rounded-3xl p-5 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-heading font-bold text-base flex items-center gap-2 text-[#111111]">
            <BookMarked className="w-5 h-5 text-blue-600" /> Reading & Deep Learning
          </h3>
          <button
            onClick={onOpenAddBookModal}
            className="bg-[#FFDD00] hover:bg-yellow-400 border-2 border-black px-2.5 py-1 rounded-xl text-xs font-heading font-bold shadow-[2px_2px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          >
            + Add Book
          </button>
        </div>

        <div className="space-y-2">
          {books.length === 0 ? (
            <div className="text-xs font-semibold text-gray-500 py-2">No active reading goals.</div>
          ) : (
            books.map((b) => (
              <div
                key={b.id}
                className={`p-3 rounded-2xl border-2 border-black flex items-center justify-between transition-colors ${
                  b.completed ? 'bg-gray-100 opacity-60' : 'bg-[#F9F9F8]'
                }`}
              >
                <div
                  className="flex items-center gap-2.5 cursor-pointer flex-1"
                  onClick={() => onToggleBook(b.id)}
                >
                  <div
                    className={`w-5 h-5 rounded-md border-2 border-black flex items-center justify-center font-bold text-xs ${
                      b.completed ? 'bg-black text-[#FFDD00]' : 'bg-white'
                    }`}
                  >
                    {b.completed ? '✓' : ''}
                  </div>
                  <div>
                    <div
                      className={`font-heading font-bold text-xs ${
                        b.completed ? 'line-through text-gray-500' : 'text-[#111111]'
                      }`}
                    >
                      {b.title}
                    </div>
                    <div className="text-[10px] text-gray-500">{b.target}</div>
                  </div>
                </div>

                <button
                  onClick={() => onDeleteBook(b.id)}
                  className="text-red-500 hover:text-red-700 text-xs font-bold p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Course Tracker Section */}
      <div className="bg-white border-2 border-black shadow-[4px_4px_0px_#111111] rounded-3xl p-5 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-heading font-bold text-base flex items-center gap-2 text-[#111111]">
            <Award className="w-5 h-5 text-purple-600" /> Course Progress Tracker
          </h3>
          <button
            onClick={onOpenAddCourseModal}
            className="bg-[#FFDD00] hover:bg-yellow-400 border-2 border-black px-2.5 py-1 rounded-xl text-xs font-heading font-bold shadow-[2px_2px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          >
            + Add Course
          </button>
        </div>

        <div className="space-y-3">
          {courses.length === 0 ? (
            <div className="text-xs font-semibold text-gray-500 py-2">No course trackers.</div>
          ) : (
            courses.map((c) => {
              const pct = Math.round((c.completedModules / c.total) * 100);
              return (
                <div
                  key={c.id}
                  className="p-3.5 rounded-2xl border-2 border-black bg-[#F9F9F8] space-y-2 shadow-[2px_2px_0px_#111111]"
                >
                  <div className="flex justify-between items-center font-heading font-bold text-xs text-[#111111]">
                    <span>{c.title}</span>
                    <span className="text-purple-700 font-extrabold">{pct}% Done</span>
                  </div>

                  <div className="w-full bg-gray-200 h-3 rounded-full border border-black overflow-hidden relative">
                    <div className="bg-[#FFDD00] h-full" style={{ width: `${pct}%` }} />
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-gray-600 font-semibold pt-1">
                    <span>
                      {c.completedModules} / {c.total} Modules Completed
                    </span>
                    <div className="flex gap-1">
                      <button
                        onClick={() => onUpdateCourseProgress(c.id, 1)}
                        className="px-2 py-0.5 bg-black text-white rounded font-bold hover:bg-gray-800"
                      >
                        + Module
                      </button>
                      <button
                        onClick={() => onDeleteCourse(c.id)}
                        className="px-1.5 py-0.5 bg-red-100 text-red-600 rounded font-bold hover:bg-red-200"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
