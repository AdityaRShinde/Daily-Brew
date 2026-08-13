import React from 'react';
import {
  Calendar,
  Plus,
  Trash2,
  Check,
  Eye,
  EyeOff,
  Timer,
  CheckSquare,
  Dumbbell,
  GraduationCap,
  Lightbulb,
  Briefcase,
  Headphones,
  BookOpen,
  Clock,
  Play,
  Zap,
  Moon,
  Edit3,
} from 'lucide-react';
import { TimeMode, Task, HubsMap, UserProfile } from '../types';

interface DashboardProps {
  timeMode: TimeMode;
  user: UserProfile;
  tasks: Task[];
  taskFilter: string;
  onFilterTasks: (filter: string) => void;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onOpenAddTaskModal: () => void;
  hubs: HubsMap;
  onToggleHubVisibility: (screenKey: string) => void;
  onNavigate: (screenKey: string) => void;
  completedHabitsCount: number;
  totalHabitsCount: number;
  jobSummary: string;
}

export const Dashboard: React.FC<DashboardProps> = ({
  timeMode,
  user,
  tasks,
  taskFilter,
  onFilterTasks,
  onToggleTask,
  onDeleteTask,
  onOpenAddTaskModal,
  hubs,
  onToggleHubVisibility,
  onNavigate,
  completedHabitsCount,
  totalHabitsCount,
  jobSummary,
}) => {
  const firstName = user.name.split(' ')[0] || 'Aditya';

  // Task filtering logic
  const filteredTasks = tasks.filter((t) => {
    if (taskFilter === 'pending') return !t.completed;
    if (taskFilter === 'completed') return t.completed;
    return true;
  });

  const priorityColors = {
    High: 'bg-red-100 text-red-700 border-red-300',
    Med: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    Low: 'bg-green-100 text-green-700 border-green-300',
  };

  const getHubIcon = (iconName: string) => {
    switch (iconName) {
      case 'timer': return <Timer className="w-6 h-6 text-red-600" />;
      case 'check-square': return <CheckSquare className="w-6 h-6 text-green-600" />;
      case 'dumbbell': return <Dumbbell className="w-6 h-6 text-orange-600" />;
      case 'graduation-cap': return <GraduationCap className="w-6 h-6 text-blue-600" />;
      case 'lightbulb': return <Lightbulb className="w-6 h-6 text-amber-600" />;
      case 'briefcase': return <Briefcase className="w-6 h-6 text-indigo-600" />;
      case 'headphones': return <Headphones className="w-6 h-6 text-yellow-600" />;
      case 'book-open': return <BookOpen className="w-6 h-6 text-purple-600" />;
      default: return <Timer className="w-6 h-6 text-black" />;
    }
  };

  const getHubBgColor = (iconName: string) => {
    switch (iconName) {
      case 'timer': return 'bg-red-100';
      case 'check-square': return 'bg-green-100';
      case 'dumbbell': return 'bg-orange-100';
      case 'graduation-cap': return 'bg-blue-100';
      case 'lightbulb': return 'bg-amber-100';
      case 'briefcase': return 'bg-indigo-100';
      case 'headphones': return 'bg-yellow-100';
      case 'book-open': return 'bg-purple-100';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="space-y-5 animate-fade">
      {/* Time-Adaptive Banner Header */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gray-500">
            {timeMode === 'morning' && '☀️ MORNING DASHBOARD'}
            {timeMode === 'day' && '⚡ DAYTIME DASHBOARD'}
            {timeMode === 'evening' && '🌙 EVENING DASHBOARD'}
          </span>
          <span className="text-xs font-bold text-gray-500">TODAY</span>
        </div>

        <h1 className="font-heading font-bold text-3xl sm:text-4xl leading-tight text-[#111111]">
          {timeMode === 'morning' && `Rise & Shine, ${firstName}! ☕`}
          {timeMode === 'day' && `Peak Focus & Energy, ${firstName}! 🚀`}
          {timeMode === 'evening' && `Reflect & Wind Down, ${firstName} 🧘`}
        </h1>

        <p className="text-xs font-semibold text-gray-600">
          {timeMode === 'morning' && 'Your daily mind brew is hot and ready.'}
          {timeMode === 'day' && 'Crush your high priority tasks and focus sprints.'}
          {timeMode === 'evening' && "Record gratitude, stretch, and review today's streak."}
        </p>
      </div>

      {/* Dynamic Hero Card */}
      <div
        className={`rounded-3xl border-4 border-[#111111] shadow-[6px_6px_0px_#111111] p-5 space-y-4 relative overflow-hidden transition-all ${
          timeMode === 'morning'
            ? 'bg-[#FFDD00]'
            : timeMode === 'day'
            ? 'bg-sky-300'
            : 'bg-purple-300'
        }`}
      >
        <div className="flex justify-between items-start">
          <span className="bg-black text-white text-[10px] font-heading font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {timeMode === 'morning' && '2-MIN MORNING BREW'}
            {timeMode === 'day' && 'HIGH-ENERGY SPRINT'}
            {timeMode === 'evening' && 'EVENING REFLECTION'}
          </span>
          <span className="font-heading font-bold text-xs text-black flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {timeMode === 'morning' && '2:00'}
            {timeMode === 'day' && '25:00'}
            {timeMode === 'evening' && 'LOG'}
          </span>
        </div>

        <div>
          <h2 className="font-heading font-bold text-2xl text-[#111111] leading-tight mb-1">
            {timeMode === 'morning' && 'Overcoming Friction with 10% Steps'}
            {timeMode === 'day' && 'Ready for a 25-Min Focus Sprint?'}
            {timeMode === 'evening' && 'How was your progress today?'}
          </h2>
          <p className="text-xs font-semibold text-gray-900 leading-relaxed">
            {timeMode === 'morning' && 'Learn how reducing friction by 10% creates exponential progress today.'}
            {timeMode === 'day' && 'Block out noise with Pomodoro & built-in ambient coffee shop soundscapes.'}
            {timeMode === 'evening' && 'Unwind with a 3-minute gratitude journal entry and evening stretch.'}
          </p>
        </div>

        <button
          onClick={() => {
            if (timeMode === 'morning') onNavigate('screen-microcoach');
            else if (timeMode === 'day') onNavigate('screen-timer');
            else onNavigate('screen-journal');
          }}
          className="w-full bg-white hover:bg-gray-50 text-[#111111] border-2 border-black shadow-[3px_3px_0px_#111111] py-3 px-4 rounded-xl font-heading font-bold text-base flex items-center justify-center gap-2 active:translate-x-0.5 active:translate-y-0.5 transition-transform"
        >
          {timeMode === 'morning' && (
            <>
              <Play className="w-5 h-5 fill-[#FFDD00] text-black" />
              <span>Listen to Morning Brew</span>
            </>
          )}
          {timeMode === 'day' && (
            <>
              <Zap className="w-5 h-5 fill-black" />
              <span>Start 25-Min Focus Sprint</span>
            </>
          )}
          {timeMode === 'evening' && (
            <>
              <Edit3 className="w-5 h-5" />
              <span>Log Gratitude Entry</span>
            </>
          )}
        </button>
      </div>

      {/* Daily Planner & Task Manager */}
      <div className="bg-white border-4 border-[#111111] shadow-[6px_6px_0px_#111111] rounded-3xl p-4 sm:p-5 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-heading font-bold text-lg flex items-center gap-2 text-[#111111]">
            <Calendar className="w-5 h-5 text-amber-500" /> Daily Schedule & Tasks
          </h3>
          <button
            onClick={onOpenAddTaskModal}
            className="bg-[#FFDD00] hover:bg-yellow-400 border-2 border-black px-3 py-1 rounded-xl text-xs font-heading font-bold shadow-[2px_2px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          >
            + Add Task
          </button>
        </div>

        <div className="flex gap-2 text-xs font-heading font-bold">
          {['all', 'pending', 'completed'].map((f) => (
            <button
              key={f}
              onClick={() => onFilterTasks(f)}
              className={`px-3 py-1 rounded-full border-2 border-black capitalize transition-all ${
                taskFilter === f ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="space-y-2 pt-1">
          {filteredTasks.length === 0 ? (
            <div className="text-xs font-semibold text-gray-500 py-3 text-center">
              No tasks found in this view.
            </div>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className={`p-3 rounded-2xl border-2 border-black flex items-center justify-between transition-all ${
                  task.completed ? 'bg-gray-100 opacity-70' : 'bg-[#F9F9F8]'
                }`}
              >
                <div
                  className="flex items-center gap-2.5 flex-1 cursor-pointer"
                  onClick={() => onToggleTask(task.id)}
                >
                  <div
                    className={`w-6 h-6 rounded-lg border-2 border-black flex items-center justify-center transition-colors ${
                      task.completed ? 'bg-black text-[#FFDD00]' : 'bg-white'
                    }`}
                  >
                    {task.completed && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                  <div>
                    <div
                      className={`font-heading font-bold text-xs ${
                        task.completed ? 'line-through text-gray-500' : 'text-[#111111]'
                      }`}
                    >
                      {task.title}
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500">{task.time}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border border-black ${
                      priorityColors[task.priority]
                    }`}
                  >
                    {task.priority}
                  </span>
                  <button
                    onClick={() => onDeleteTask(task.id)}
                    className="p-1 text-red-500 hover:text-red-700 active:scale-95 transition-transform"
                    aria-label="Delete task"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Expanded Power Hubs Grid */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-heading font-bold text-lg text-[#111111]">Power Hubs</h3>
          <span className="text-[10px] font-bold text-gray-600 bg-gray-200 border border-black px-2.5 py-0.5 rounded-full">
            Use 👁️ to toggle hubs
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {Object.keys(hubs).map((key) => {
            const hub = hubs[key];
            const isVisible = hub.visible;

            let summaryText = 'Open Hub';
            if (key === 'screen-habits') summaryText = `${completedHabitsCount}/${totalHabitsCount} Completed`;
            if (key === 'screen-jobs') summaryText = jobSummary;
            if (key === 'screen-fitness') summaryText = 'Warmup, Yoga & Calisthenics';
            if (key === 'screen-timer') summaryText = 'Pomodoro & Soundscape';

            return (
              <div
                key={key}
                className={`power-card border-4 border-[#111111] shadow-[4px_4px_0px_#111111] rounded-2xl p-4 flex flex-col justify-between relative group transition-all ${
                  isVisible ? 'bg-white hover:shadow-[6px_6px_0px_#111111]' : 'bg-gray-100 opacity-45'
                }`}
              >
                <button
                  onClick={() => onToggleHubVisibility(key)}
                  className="absolute top-2.5 right-2.5 p-1 text-gray-400 hover:text-black z-10"
                  title={isVisible ? 'Hide Hub' : 'Show Hub'}
                >
                  {isVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4 text-red-500" />}
                </button>

                <div
                  onClick={() => onNavigate(key)}
                  className="cursor-pointer flex flex-col items-center text-center gap-2 pt-2"
                >
                  <div
                    className={`w-12 h-12 rounded-xl border-2 border-black flex items-center justify-center group-hover:scale-105 transition-transform ${getHubBgColor(
                      hub.icon
                    )}`}
                  >
                    {getHubIcon(hub.icon)}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-base text-[#111111]">
                      {hub.name}
                    </div>
                    <div className="text-[11px] text-gray-500 font-semibold line-clamp-1">
                      {summaryText}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
