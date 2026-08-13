import React, { useState } from 'react';
import { X, User, Check, Plus } from 'lucide-react';
import { UserProfile, Task, Habit, Book, Course, Goal, Job } from '../types';

interface ModalsProps {
  // Modal visibility flags
  activeModal: string | null;
  onCloseModal: () => void;

  // Profile Modal
  user: UserProfile;
  onSaveProfile: (name: string, avatar: string) => void;

  // Add Task Modal
  onSaveTask: (task: { title: string; time: string; priority: 'High' | 'Med' | 'Low' }) => void;

  // Add Habit Modal
  onSaveHabit: (habit: { title: string; category: 'Morning' | 'Fitness' | 'Mindset' | 'Evening' }) => void;

  // Add Book Modal
  onSaveBook: (book: { title: string; target: string }) => void;

  // Add Course Modal
  onSaveCourse: (course: { title: string; total: number }) => void;

  // Add Goal Modal
  onSaveGoal: (goal: { title: string; desc: string }) => void;

  // Add Job Modal
  onSaveJob: (job: { company: string; role: string; status: 'applied' | 'interview' | 'no_response' }) => void;
}

export const Modals: React.FC<ModalsProps> = ({
  activeModal,
  onCloseModal,
  user,
  onSaveProfile,
  onSaveTask,
  onSaveHabit,
  onSaveBook,
  onSaveCourse,
  onSaveGoal,
  onSaveJob,
}) => {
  // Form local states
  const [profileName, setProfileName] = useState(user.name);
  const [profileAvatar, setProfileAvatar] = useState(user.avatar || '👤');

  const [taskTitle, setTaskTitle] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [taskPriority, setTaskPriority] = useState<'High' | 'Med' | 'Low'>('High');

  const [habitTitle, setHabitTitle] = useState('');
  const [habitCategory, setHabitCategory] = useState<'Morning' | 'Fitness' | 'Mindset' | 'Evening'>('Morning');

  const [bookTitle, setBookTitle] = useState('');
  const [bookTarget, setBookTarget] = useState('');

  const [courseTitle, setCourseTitle] = useState('');
  const [courseModules, setCourseModules] = useState('10');

  const [goalTitle, setGoalTitle] = useState('');
  const [goalDesc, setGoalDesc] = useState('');

  const [jobCompany, setJobCompany] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [jobStatus, setJobStatus] = useState<'applied' | 'interview' | 'no_response'>('applied');

  if (!activeModal) return null;

  return (
    <>
      {/* 1. PROFILE & SETTINGS MODAL */}
      {activeModal === 'profile' && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade">
          <div className="bg-white border-4 border-[#111111] shadow-[6px_6px_0px_#111111] rounded-3xl p-6 w-full max-w-xs space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-heading font-bold text-xl text-[#111111]">Profile & Settings</h3>
              <button onClick={onCloseModal} className="p-1 font-bold text-lg hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-[#FFDD00] border-2 border-black shadow-[3px_3px_0px_#111111] rounded-full flex items-center justify-center text-3xl mx-auto">
                {profileAvatar}
              </div>

              <div>
                <input
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="font-heading font-bold text-lg text-center border-b-2 border-black focus:outline-none w-full"
                />
                <span className="text-[10px] font-extrabold uppercase bg-purple-100 text-purple-800 border border-black px-2 py-0.5 rounded-full mt-1.5 inline-block">
                  AUTHENTICATED USER
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                onSaveProfile(profileName, profileAvatar);
                onCloseModal();
              }}
              className="w-full py-2.5 bg-[#FFDD00] border-2 border-black shadow-[2px_2px_0px_#111111] rounded-xl font-heading font-bold text-xs hover:bg-yellow-400 active:translate-x-0.5 active:translate-y-0.5 transition-transform"
            >
              Save Profile Changes
            </button>
          </div>
        </div>
      )}

      {/* 2. ADD TASK MODAL */}
      {activeModal === 'add-task' && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade">
          <div className="bg-white border-4 border-[#111111] shadow-[6px_6px_0px_#111111] rounded-3xl p-6 w-full max-w-xs space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-heading font-bold text-xl text-[#111111]">New Task</h3>
              <button onClick={onCloseModal} className="p-1 font-bold text-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold uppercase text-gray-500">Task Name</label>
                <input
                  type="text"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  placeholder="e.g. Review morning emails"
                  className="w-full mt-1 p-3 border-2 border-black rounded-xl font-bold bg-[#F9F9F8] text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-gray-500">Time Slot</label>
                <input
                  type="text"
                  value={taskTime}
                  onChange={(e) => setTaskTime(e.target.value)}
                  placeholder="e.g. 09:30 AM"
                  className="w-full mt-1 p-3 border-2 border-black rounded-xl font-bold bg-[#F9F9F8] text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-gray-500">Priority</label>
                <select
                  value={taskPriority}
                  onChange={(e) => setTaskPriority(e.target.value as any)}
                  className="w-full mt-1 p-3 border-2 border-black rounded-xl font-bold bg-[#F9F9F8] text-sm focus:outline-none"
                >
                  <option value="High">🔥 High Priority</option>
                  <option value="Med">⚡ Medium Priority</option>
                  <option value="Low">🟢 Low Priority</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => {
                if (taskTitle.trim()) {
                  onSaveTask({ title: taskTitle.trim(), time: taskTime.trim() || '12:00 PM', priority: taskPriority });
                  setTaskTitle('');
                  setTaskTime('');
                  onCloseModal();
                }
              }}
              className="w-full bg-[#FFDD00] hover:bg-yellow-400 border-2 border-black shadow-[3px_3px_0px_#111111] py-3 rounded-xl font-heading font-bold text-base active:translate-x-0.5 active:translate-y-0.5 transition-transform"
            >
              Save Task
            </button>
          </div>
        </div>
      )}

      {/* 3. ADD HABIT MODAL */}
      {activeModal === 'add-habit' && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade">
          <div className="bg-white border-4 border-[#111111] shadow-[6px_6px_0px_#111111] rounded-3xl p-6 w-full max-w-xs space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-heading font-bold text-xl text-[#111111]">New Habit</h3>
              <button onClick={onCloseModal} className="p-1 font-bold text-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold uppercase text-gray-500">Habit Title</label>
                <input
                  type="text"
                  value={habitTitle}
                  onChange={(e) => setHabitTitle(e.target.value)}
                  placeholder="e.g. Read 15 Pages"
                  className="w-full mt-1 p-3 border-2 border-black rounded-xl font-bold bg-[#F9F9F8] text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-gray-500">Category</label>
                <select
                  value={habitCategory}
                  onChange={(e) => setHabitCategory(e.target.value as any)}
                  className="w-full mt-1 p-3 border-2 border-black rounded-xl font-bold bg-[#F9F9F8] text-sm focus:outline-none"
                >
                  <option value="Morning">☀️ Morning</option>
                  <option value="Fitness">🧘‍♂️ Fitness & Yoga</option>
                  <option value="Mindset">🧠 Mindset</option>
                  <option value="Evening">🌙 Evening</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => {
                if (habitTitle.trim()) {
                  onSaveHabit({ title: habitTitle.trim(), category: habitCategory });
                  setHabitTitle('');
                  onCloseModal();
                }
              }}
              className="w-full bg-[#FFDD00] hover:bg-yellow-400 border-2 border-black shadow-[3px_3px_0px_#111111] py-3 rounded-xl font-heading font-bold text-base active:translate-x-0.5 active:translate-y-0.5 transition-transform"
            >
              Save Habit
            </button>
          </div>
        </div>
      )}

      {/* 4. ADD BOOK MODAL */}
      {activeModal === 'add-book' && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade">
          <div className="bg-white border-4 border-[#111111] shadow-[6px_6px_0px_#111111] rounded-3xl p-6 w-full max-w-xs space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-heading font-bold text-xl text-[#111111]">Add Book Goal</h3>
              <button onClick={onCloseModal} className="p-1 font-bold text-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold uppercase text-gray-500">Book Title</label>
                <input
                  type="text"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  placeholder="e.g. Atomic Habits"
                  className="w-full mt-1 p-3 border-2 border-black rounded-xl font-bold bg-[#F9F9F8] text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-gray-500">Target Pages / Chapter</label>
                <input
                  type="text"
                  value={bookTarget}
                  onChange={(e) => setBookTarget(e.target.value)}
                  placeholder="e.g. Chapter 4 (25 pgs)"
                  className="w-full mt-1 p-3 border-2 border-black rounded-xl font-bold bg-[#F9F9F8] text-sm"
                />
              </div>
            </div>

            <button
              onClick={() => {
                if (bookTitle.trim()) {
                  onSaveBook({ title: bookTitle.trim(), target: bookTarget.trim() || 'Daily Target' });
                  setBookTitle('');
                  setBookTarget('');
                  onCloseModal();
                }
              }}
              className="w-full bg-[#FFDD00] hover:bg-yellow-400 border-2 border-black shadow-[3px_3px_0px_#111111] py-3 rounded-xl font-heading font-bold text-base active:translate-x-0.5 active:translate-y-0.5 transition-transform"
            >
              Save Book
            </button>
          </div>
        </div>
      )}

      {/* 5. ADD COURSE MODAL */}
      {activeModal === 'add-course' && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade">
          <div className="bg-white border-4 border-[#111111] shadow-[6px_6px_0px_#111111] rounded-3xl p-6 w-full max-w-xs space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-heading font-bold text-xl text-[#111111]">Add Course Tracker</h3>
              <button onClick={onCloseModal} className="p-1 font-bold text-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold uppercase text-gray-500">Course Name</label>
                <input
                  type="text"
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                  placeholder="e.g. Full-Stack Web Engineering"
                  className="w-full mt-1 p-3 border-2 border-black rounded-xl font-bold bg-[#F9F9F8] text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-gray-500">Total Modules</label>
                <input
                  type="number"
                  value={courseModules}
                  onChange={(e) => setCourseModules(e.target.value)}
                  placeholder="10"
                  className="w-full mt-1 p-3 border-2 border-black rounded-xl font-bold bg-[#F9F9F8] text-sm"
                />
              </div>
            </div>

            <button
              onClick={() => {
                if (courseTitle.trim()) {
                  onSaveCourse({
                    title: courseTitle.trim(),
                    total: parseInt(courseModules) || 10,
                  });
                  setCourseTitle('');
                  onCloseModal();
                }
              }}
              className="w-full bg-[#FFDD00] hover:bg-yellow-400 border-2 border-black shadow-[3px_3px_0px_#111111] py-3 rounded-xl font-heading font-bold text-base active:translate-x-0.5 active:translate-y-0.5 transition-transform"
            >
              Save Course
            </button>
          </div>
        </div>
      )}

      {/* 6. ADD GOAL MODAL */}
      {activeModal === 'add-goal' && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade">
          <div className="bg-white border-4 border-[#111111] shadow-[6px_6px_0px_#111111] rounded-3xl p-6 w-full max-w-xs space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-heading font-bold text-xl text-[#111111]">New Idea / Ambition</h3>
              <button onClick={onCloseModal} className="p-1 font-bold text-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold uppercase text-gray-500">Goal / Idea Title</label>
                <input
                  type="text"
                  value={goalTitle}
                  onChange={(e) => setGoalTitle(e.target.value)}
                  placeholder="e.g. Build PromptLib Dashboard"
                  className="w-full mt-1 p-3 border-2 border-black rounded-xl font-bold bg-[#F9F9F8] text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-gray-500">Description / Action Plan</label>
                <textarea
                  rows={3}
                  value={goalDesc}
                  onChange={(e) => setGoalDesc(e.target.value)}
                  placeholder="Break down key steps..."
                  className="w-full mt-1 p-3 border-2 border-black rounded-xl font-bold bg-[#F9F9F8] text-sm resize-none"
                />
              </div>
            </div>

            <button
              onClick={() => {
                if (goalTitle.trim()) {
                  onSaveGoal({ title: goalTitle.trim(), desc: goalDesc.trim() });
                  setGoalTitle('');
                  setGoalDesc('');
                  onCloseModal();
                }
              }}
              className="w-full bg-[#FFDD00] hover:bg-yellow-400 border-2 border-black shadow-[3px_3px_0px_#111111] py-3 rounded-xl font-heading font-bold text-base active:translate-x-0.5 active:translate-y-0.5 transition-transform"
            >
              Save Idea
            </button>
          </div>
        </div>
      )}

      {/* 7. ADD JOB MODAL */}
      {activeModal === 'add-job' && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade">
          <div className="bg-white border-4 border-[#111111] shadow-[6px_6px_0px_#111111] rounded-3xl p-6 w-full max-w-xs space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-heading font-bold text-xl text-[#111111]">Add Job Application</h3>
              <button onClick={onCloseModal} className="p-1 font-bold text-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold uppercase text-gray-500">Company Name</label>
                <input
                  type="text"
                  value={jobCompany}
                  onChange={(e) => setJobCompany(e.target.value)}
                  placeholder="e.g. Eaton / Accenture"
                  className="w-full mt-1 p-3 border-2 border-black rounded-xl font-bold bg-[#F9F9F8] text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-gray-500">Role Title</label>
                <input
                  type="text"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  placeholder="e.g. Design Engineer"
                  className="w-full mt-1 p-3 border-2 border-black rounded-xl font-bold bg-[#F9F9F8] text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-gray-500">Status</label>
                <select
                  value={jobStatus}
                  onChange={(e) => setJobStatus(e.target.value as any)}
                  className="w-full mt-1 p-3 border-2 border-black rounded-xl font-bold bg-[#F9F9F8] text-sm"
                >
                  <option value="applied">Applied Jobs</option>
                  <option value="interview">Interview Scheduled</option>
                  <option value="no_response">Not Responded</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => {
                if (jobCompany.trim() && jobRole.trim()) {
                  onSaveJob({ company: jobCompany.trim(), role: jobRole.trim(), status: jobStatus });
                  setJobCompany('');
                  setJobRole('');
                  onCloseModal();
                }
              }}
              className="w-full bg-[#FFDD00] hover:bg-yellow-400 border-2 border-black shadow-[3px_3px_0px_#111111] py-3 rounded-xl font-heading font-bold text-base active:translate-x-0.5 active:translate-y-0.5 transition-transform"
            >
              Save Application
            </button>
          </div>
        </div>
      )}
    </>
  );
};
