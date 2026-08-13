import { Task, Habit, Book, Course, Goal, Job, JournalEntry, UserProfile, HubsMap } from '../types';

export const INITIAL_USER: UserProfile = {
  name: 'Aditya Ramesh Shinde',
  avatar: '👤',
  goals: ['Focus', 'Fitness', 'Self-Care'],
  hasOnboarded: true
};

export const INITIAL_HUBS: HubsMap = {
  'screen-timer': { name: 'Focus Sprint', icon: 'timer', visible: true },
  'screen-habits': { name: 'Habits & Routine', icon: 'check-square', visible: true },
  'screen-fitness': { name: 'Fitness Suite', icon: 'dumbbell', visible: true },
  'screen-mind': { name: 'Mind & Study', icon: 'graduation-cap', visible: true },
  'screen-goals': { name: 'Ideas & Goals', icon: 'lightbulb', visible: true },
  'screen-jobs': { name: 'Job Tracker', icon: 'briefcase', visible: true },
  'screen-microcoach': { name: 'Micro-Coach', icon: 'headphones', visible: true },
  'screen-journal': { name: 'Gratitude Log', icon: 'book-open', visible: true }
};

export const INITIAL_TASKS: Task[] = [
  { id: 1, title: 'Morning 2-Min Coaching Session', time: '08:00 AM', priority: 'High', completed: true },
  { id: 2, title: 'Deep Work Focus Sprint (Pomodoro)', time: '10:30 AM', priority: 'High', completed: false },
  { id: 3, title: 'Chest & Push Day Workout', time: '05:00 PM', priority: 'Med', completed: false }
];

export const INITIAL_HABITS: Habit[] = [
  { id: 1, title: 'Drink 20 oz Morning Water', category: 'Morning', completed: true, icon: '💧' },
  { id: 2, title: '10 Min Pre-Workout Warmup', category: 'Fitness', completed: false, icon: '🧘‍♂️' },
  { id: 3, title: '2-Min Micro-Coach Lesson', category: 'Mindset', completed: false, icon: '⚡' },
  { id: 4, title: 'Read 15 Pages Atomic Habits', category: 'Evening', completed: false, icon: '📖' }
];

export const INITIAL_BOOKS: Book[] = [
  { id: 1, title: 'Atomic Habits', target: 'Chapter 5 (20 pgs)', completed: false },
  { id: 2, title: 'Deep Work', target: 'Rule 1: Work Deeply', completed: true }
];

export const INITIAL_COURSES: Course[] = [
  { id: 1, title: 'Full-Stack React & Web Engineering', total: 10, completedModules: 7 },
  { id: 2, title: 'UG NX & Mechanical Design', total: 8, completedModules: 8 }
];

export const INITIAL_GOALS: Goal[] = [
  { id: 1, title: 'Launch PromptLib Web App', desc: 'Refactor prompt management card details, celebration animations, and manual transcript input.', status: 'In Progress' },
  { id: 2, title: 'Overhaul Fitness Suite', desc: 'Build encyclopedia-level exercise detail modal with scientific muscle activation charts.', status: 'Completed' }
];

export const INITIAL_JOBS: Job[] = [
  { id: 1, company: 'Maruti Suzuki', role: 'Assistant Manager', status: 'interview' },
  { id: 2, company: 'GMRT Khodad', role: 'Project Engineer-C', status: 'interview' },
  { id: 3, company: 'Accenture', role: 'Software Engineer', status: 'applied' },
  { id: 4, company: 'Eaton', role: 'Associate Mechanical Engineer', status: 'applied' },
  { id: 5, company: 'Honeywell', role: 'Mech Design Engr I', status: 'no_response' }
];

export const INITIAL_JOURNAL: JournalEntry[] = [
  {
    id: 1,
    date: 'Today',
    mood: '😍',
    prompt: 'What went well today?',
    text: 'Completed my chest workout and completed a 25-minute focus sprint uninterrupted!'
  }
];
