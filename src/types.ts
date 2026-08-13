export type TimeMode = 'morning' | 'day' | 'evening';

export interface MuscleActivation {
  muscle: string;
  percentage: number;
}

export interface ExerciseDetail {
  id: string;
  name: string;
  emoji: string;
  category: 'warmup' | 'exercises' | 'yoga' | 'stretching' | 'calisthenics';
  subCategory: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  targetMuscleGroup: string;
  durationOrReps: string;
  description: string;
  steps: string[];
  muscles: MuscleActivation[];
  whatToAvoid: string[];
  standards: {
    sets?: string;
    reps?: string;
    rest?: string;
    tempo?: string;
    progression?: string;
  };
  relatedProgram?: string;
}

export interface Task {
  id: number;
  title: string;
  time: string;
  priority: 'High' | 'Med' | 'Low';
  completed: boolean;
}

export interface Habit {
  id: number;
  title: string;
  category: 'Morning' | 'Fitness' | 'Mindset' | 'Evening';
  completed: boolean;
  icon: string;
}

export interface Book {
  id: number;
  title: string;
  target: string;
  completed: boolean;
}

export interface Course {
  id: number;
  title: string;
  total: number;
  completedModules: number;
}

export interface Goal {
  id: number;
  title: string;
  desc: string;
  status: 'In Progress' | 'Planned' | 'Completed';
}

export interface Job {
  id: number;
  company: string;
  role: string;
  status: 'applied' | 'interview' | 'no_response';
}

export interface JournalEntry {
  id: number;
  date: string;
  mood: string;
  prompt: string;
  text: string;
}

export interface UserProfile {
  name: string;
  avatar: string;
  goals: string[];
  hasOnboarded: boolean;
}

export interface HubState {
  name: string;
  icon: string;
  visible: boolean;
}

export type HubsMap = Record<string, HubState>;
