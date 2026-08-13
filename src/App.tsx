import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  TimeMode,
  ExerciseDetail,
  Task,
  Habit,
  Book,
  Course,
  Goal,
  Job,
  JournalEntry,
  UserProfile,
  HubsMap,
} from './types';
import {
  INITIAL_USER,
  INITIAL_HUBS,
  INITIAL_TASKS,
  INITIAL_HABITS,
  INITIAL_BOOKS,
  INITIAL_COURSES,
  INITIAL_GOALS,
  INITIAL_JOBS,
  INITIAL_JOURNAL,
} from './data/initialData';

import { HeaderNav } from './components/HeaderNav';
import { Dashboard } from './components/Dashboard';
import { FitnessSection } from './components/FitnessSection';
import { ExerciseDetailModal } from './components/ExerciseDetailModal';
import { FocusTimer } from './components/FocusTimer';
import { HabitTracker } from './components/HabitTracker';
import { MicroCoach } from './components/MicroCoach';
import { MindStudy } from './components/MindStudy';
import { IdeasGoals } from './components/IdeasGoals';
import { JobTracker } from './components/JobTracker';
import { GratitudeJournal } from './components/GratitudeJournal';
import { AnalyticsBadges } from './components/AnalyticsBadges';
import { Modals } from './components/Modals';

export default function App() {
  // App state
  const [currentScreen, setCurrentScreen] = useState<string>('screen-dashboard');
  const [timeMode, setTimeMode] = useState<TimeMode>('morning');
  const [streak, setStreak] = useState<number>(3);
  const [user, setUser] = useState<UserProfile>(INITIAL_USER);
  const [hubs, setHubs] = useState<HubsMap>(INITIAL_HUBS);

  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [taskFilter, setTaskFilter] = useState<string>('all');

  const [habits, setHabits] = useState<Habit[]>(INITIAL_HABITS);
  const [habitFilter, setHabitFilter] = useState<string>('All');

  const [books, setBooks] = useState<Book[]>(INITIAL_BOOKS);
  const [courses, setCourses] = useState<Course[]>(INITIAL_COURSES);
  const [goals, setGoals] = useState<Goal[]>(INITIAL_GOALS);

  const [jobs, setJobs] = useState<Job[]>(INITIAL_JOBS);
  const [jobFilter, setJobFilter] = useState<string>('all');

  const [journal, setJournal] = useState<JournalEntry[]>(INITIAL_JOURNAL);
  const [focusMinutes, setFocusMinutes] = useState<number>(25);

  // Selected exercise for detail modal
  const [selectedExercise, setSelectedExercise] = useState<ExerciseDetail | null>(null);

  // Modal flag state
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('daily_brew_react_state_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.user) setUser(parsed.user);
        if (parsed.streak) setStreak(parsed.streak);
        if (parsed.hubs) setHubs(parsed.hubs);
        if (parsed.tasks) setTasks(parsed.tasks);
        if (parsed.habits) setHabits(parsed.habits);
        if (parsed.books) setBooks(parsed.books);
        if (parsed.courses) setCourses(parsed.courses);
        if (parsed.goals) setGoals(parsed.goals);
        if (parsed.jobs) setJobs(parsed.jobs);
        if (parsed.journal) setJournal(parsed.journal);
        if (parsed.focusMinutes) setFocusMinutes(parsed.focusMinutes);
      }
    } catch (e) {}

    // Auto-detect local time mode
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setTimeMode('morning');
    else if (hour >= 12 && hour < 18) setTimeMode('day');
    else setTimeMode('evening');
  }, []);

  // Save to localStorage on state changes
  useEffect(() => {
    try {
      localStorage.setItem(
        'daily_brew_react_state_v1',
        JSON.stringify({
          user,
          streak,
          hubs,
          tasks,
          habits,
          books,
          courses,
          goals,
          jobs,
          journal,
          focusMinutes,
        })
      );
    } catch (e) {}
  }, [user, streak, hubs, tasks, habits, books, courses, goals, jobs, journal, focusMinutes]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const triggerConfettiAnimation = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FFDD00', '#111111', '#FF4A4A', '#2ECC71', '#38BDF8'],
      });
    } catch (e) {}
  };

  const playTone = (freq = 523.25, type: OscillatorType = 'sine', duration = 0.15) => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  };

  // Cycle time mode manually for preview
  const handleCycleTimeMode = () => {
    const modes: TimeMode[] = ['morning', 'day', 'evening'];
    const nextIdx = (modes.indexOf(timeMode) + 1) % modes.length;
    setTimeMode(modes[nextIdx]);
    showToast(`Switched to ${modes[nextIdx].toUpperCase()} Mode`);
  };

  // Hub toggle visibility
  const handleToggleHubVisibility = (screenKey: string) => {
    if (hubs[screenKey]) {
      const updated = {
        ...hubs,
        [screenKey]: { ...hubs[screenKey], visible: !hubs[screenKey].visible },
      };
      setHubs(updated);
      showToast(
        updated[screenKey].visible
          ? `Restored ${updated[screenKey].name} Hub`
          : `Hidden ${updated[screenKey].name} Hub`
      );
    }
  };

  // Log / Mark exercise completed
  const handleLogExercise = (exercise: ExerciseDetail) => {
    triggerConfettiAnimation();
    playTone(659.25, 'sine', 0.2);
    setSelectedExercise(null);
    showToast(`Logged ${exercise.name}! +1 Set Complete 💪`);
  };

  // Task actions
  const handleToggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
    playTone(587.33, 'sine', 0.1);
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    showToast('Task deleted.');
  };

  const handleSaveTask = (newTask: {
    title: string;
    time: string;
    priority: 'High' | 'Med' | 'Low';
  }) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: newTask.title, time: newTask.time, priority: newTask.priority, completed: false },
    ]);
    showToast('Task added!');
  };

  // Habit actions
  const handleToggleHabit = (id: number) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, completed: !h.completed } : h))
    );
    playTone(659.25, 'sine', 0.12);
  };

  const handleDeleteHabit = (id: number) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
    showToast('Habit removed.');
  };

  const handleSaveHabit = (newHabit: {
    title: string;
    category: 'Morning' | 'Fitness' | 'Mindset' | 'Evening';
  }) => {
    const icons = { Morning: '☀️', Fitness: '🧘‍♂️', Mindset: '🧠', Evening: '🌙' };
    setHabits((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: newHabit.title,
        category: newHabit.category,
        completed: false,
        icon: icons[newHabit.category] || '📌',
      },
    ]);
    showToast('Habit created!');
  };

  // Book actions
  const handleToggleBook = (id: number) => {
    setBooks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, completed: !b.completed } : b))
    );
  };

  const handleDeleteBook = (id: number) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
    showToast('Book goal deleted.');
  };

  const handleSaveBook = (newBook: { title: string; target: string }) => {
    setBooks((prev) => [
      ...prev,
      { id: Date.now(), title: newBook.title, target: newBook.target, completed: false },
    ]);
    showToast('Book goal added!');
  };

  // Course actions
  const handleUpdateCourseProgress = (id: number, val: number) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, completedModules: Math.min(c.total, c.completedModules + val) } : c
      )
    );
  };

  const handleDeleteCourse = (id: number) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
    showToast('Course tracker removed.');
  };

  const handleSaveCourse = (newCourse: { title: string; total: number }) => {
    setCourses((prev) => [
      ...prev,
      { id: Date.now(), title: newCourse.title, total: newCourse.total, completedModules: 0 },
    ]);
    showToast('Course tracker added!');
  };

  // Goal actions
  const handleDeleteGoal = (id: number) => {
    setGoals((prev) => prev.filter((g) => g.id !== id));
    showToast('Idea deleted.');
  };

  const handleSaveGoal = (newGoal: { title: string; desc: string }) => {
    setGoals((prev) => [
      { id: Date.now(), title: newGoal.title, desc: newGoal.desc, status: 'In Progress' },
      ...prev,
    ]);
    showToast('Idea logged!');
  };

  // Job actions
  const handleUpdateJobStatus = (
    id: number,
    status: 'applied' | 'interview' | 'no_response'
  ) => {
    setJobs((prev) => prev.map((j) => (j.id === id ? { ...j, status } : j)));
    showToast('Job status updated!');
  };

  const handleDeleteJob = (id: number) => {
    setJobs((prev) => prev.filter((j) => j.id !== id));
    showToast('Job application removed.');
  };

  const handleSaveJob = (newJob: {
    company: string;
    role: string;
    status: 'applied' | 'interview' | 'no_response';
  }) => {
    setJobs((prev) => [
      { id: Date.now(), company: newJob.company, role: newJob.role, status: newJob.status },
      ...prev,
    ]);
    showToast('Job application logged!');
  };

  // Journal actions
  const handleSaveJournalEntry = (entry: { mood: string; prompt: string; text: string }) => {
    setJournal((prev) => [
      { id: Date.now(), date: 'Today', mood: entry.mood, prompt: entry.prompt, text: entry.text },
      ...prev,
    ]);
    triggerConfettiAnimation();
    showToast('Gratitude entry saved! ✨');
  };

  const handleDeleteJournalEntry = (id: number) => {
    setJournal((prev) => prev.filter((j) => j.id !== id));
    showToast('Entry deleted.');
  };

  // Focus Session complete
  const handleFocusSessionComplete = (mins: number) => {
    setFocusMinutes((prev) => prev + mins);
    triggerConfettiAnimation();
    showToast('🏆 Focus Sprint Complete! +25 Mins logged.');
  };

  // Micro Coach complete
  const handleCompleteCoachSession = () => {
    triggerConfettiAnimation();
    setStreak((prev) => prev + 1);
    showToast('🔥 +1 Streak! Micro Coaching Completed.');
    setTimeout(() => setCurrentScreen('screen-dashboard'), 1000);
  };

  const completedHabitsCount = habits.filter((h) => h.completed).length;
  const appliedJobsCount = jobs.filter((j) => j.status === 'applied').length;
  const interviewJobsCount = jobs.filter((j) => j.status === 'interview').length;
  const jobSummary = `${interviewJobsCount} Interviews, ${appliedJobsCount} Applied`;

  return (
    <div className="h-full flex justify-center items-center antialiased select-none bg-[#EFEFEF] sm:py-4">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#111111] text-[#FFDD00] border-2 border-black font-heading font-bold text-xs px-4 py-2.5 rounded-full shadow-[4px_4px_0px_#111111] z-50 animate-bounce flex items-center gap-2">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="w-full max-w-md md:max-w-4xl h-full min-h-screen sm:min-h-[860px] sm:max-h-[920px] sm:rounded-[36px] sm:border-[6px] sm:border-[#111111] sm:shadow-[12px_12px_0px_#111111] bg-[#F9F9F8] flex flex-col md:flex-row overflow-hidden relative border-t-0 border-b-0 sm:border-t-4 sm:border-b-4 transition-colors duration-500">
        
        {/* Navigation Sidebar & Top Header */}
        <HeaderNav
          currentScreen={currentScreen}
          onNavigate={(screen) => setCurrentScreen(screen)}
          timeMode={timeMode}
          onCycleTimeMode={handleCycleTimeMode}
          streak={streak}
          user={user}
          hubs={hubs}
          onToggleProfileModal={() => setActiveModal('profile')}
        />

        {/* Scrollable Content Body */}
        <main className="flex-1 overflow-y-auto no-scrollbar relative p-4 pb-24 md:pb-6">
          {currentScreen === 'screen-dashboard' && (
            <Dashboard
              timeMode={timeMode}
              user={user}
              tasks={tasks}
              taskFilter={taskFilter}
              onFilterTasks={(f) => setTaskFilter(f)}
              onToggleTask={handleToggleTask}
              onDeleteTask={handleDeleteTask}
              onOpenAddTaskModal={() => setActiveModal('add-task')}
              hubs={hubs}
              onToggleHubVisibility={handleToggleHubVisibility}
              onNavigate={(screen) => setCurrentScreen(screen)}
              completedHabitsCount={completedHabitsCount}
              totalHabitsCount={habits.length}
              jobSummary={jobSummary}
            />
          )}

          {currentScreen === 'screen-fitness' && (
            <FitnessSection
              onBack={() => setCurrentScreen('screen-dashboard')}
              onOpenDetail={(exercise) => setSelectedExercise(exercise)}
              onLogExercise={handleLogExercise}
            />
          )}

          {currentScreen === 'screen-timer' && (
            <FocusTimer
              onBack={() => setCurrentScreen('screen-dashboard')}
              onSessionComplete={handleFocusSessionComplete}
            />
          )}

          {currentScreen === 'screen-habits' && (
            <HabitTracker
              onBack={() => setCurrentScreen('screen-dashboard')}
              habits={habits}
              habitFilter={habitFilter}
              onFilterHabits={(f) => setHabitFilter(f)}
              onToggleHabit={handleToggleHabit}
              onDeleteHabit={handleDeleteHabit}
              onOpenAddHabitModal={() => setActiveModal('add-habit')}
            />
          )}

          {currentScreen === 'screen-microcoach' && (
            <MicroCoach
              onBack={() => setCurrentScreen('screen-dashboard')}
              onCompleteSession={handleCompleteCoachSession}
            />
          )}

          {currentScreen === 'screen-mind' && (
            <MindStudy
              onBack={() => setCurrentScreen('screen-dashboard')}
              books={books}
              onToggleBook={handleToggleBook}
              onDeleteBook={handleDeleteBook}
              onOpenAddBookModal={() => setActiveModal('add-book')}
              courses={courses}
              onUpdateCourseProgress={handleUpdateCourseProgress}
              onDeleteCourse={handleDeleteCourse}
              onOpenAddCourseModal={() => setActiveModal('add-course')}
            />
          )}

          {currentScreen === 'screen-goals' && (
            <IdeasGoals
              onBack={() => setCurrentScreen('screen-dashboard')}
              goals={goals}
              onDeleteGoal={handleDeleteGoal}
              onOpenAddGoalModal={() => setActiveModal('add-goal')}
            />
          )}

          {currentScreen === 'screen-jobs' && (
            <JobTracker
              onBack={() => setCurrentScreen('screen-dashboard')}
              jobs={jobs}
              jobFilter={jobFilter}
              onFilterJobs={(f) => setJobFilter(f)}
              onUpdateJobStatus={handleUpdateJobStatus}
              onDeleteJob={handleDeleteJob}
              onOpenAddJobModal={() => setActiveModal('add-job')}
            />
          )}

          {currentScreen === 'screen-journal' && (
            <GratitudeJournal
              onBack={() => setCurrentScreen('screen-dashboard')}
              entries={journal}
              onSaveEntry={handleSaveJournalEntry}
              onDeleteEntry={handleDeleteJournalEntry}
            />
          )}

          {currentScreen === 'screen-analytics' && (
            <AnalyticsBadges
              onBack={() => setCurrentScreen('screen-dashboard')}
              streak={streak}
              tasks={tasks}
              habits={habits}
              journal={journal}
              focusMinutes={focusMinutes}
              hasCoachTime={true}
            />
          )}
        </main>
      </div>

      {/* Exercise Detail Modal */}
      <ExerciseDetailModal
        exercise={selectedExercise}
        onClose={() => setSelectedExercise(null)}
        onLogExercise={handleLogExercise}
      />

      {/* Helper Modals (Task, Habit, Book, Course, Goal, Job, Profile) */}
      <Modals
        activeModal={activeModal}
        onCloseModal={() => setActiveModal(null)}
        user={user}
        onSaveProfile={(name, avatar) => setUser({ ...user, name, avatar })}
        onSaveTask={handleSaveTask}
        onSaveHabit={handleSaveHabit}
        onSaveBook={handleSaveBook}
        onSaveCourse={handleSaveCourse}
        onSaveGoal={handleSaveGoal}
        onSaveJob={handleSaveJob}
      />
    </div>
  );
}
