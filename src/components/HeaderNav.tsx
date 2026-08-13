import React from 'react';
import {
  Home,
  Timer,
  CheckSquare,
  Dumbbell,
  GraduationCap,
  Lightbulb,
  Briefcase,
  Headphones,
  BookOpen,
  Eye,
  EyeOff,
  Flame,
  User,
  Sun,
  Zap,
  Moon,
} from 'lucide-react';
import { TimeMode, UserProfile, HubsMap } from '../types';

interface HeaderNavProps {
  currentScreen: string;
  onNavigate: (screenKey: string) => void;
  timeMode: TimeMode;
  onCycleTimeMode: () => void;
  streak: number;
  user: UserProfile;
  hubs: HubsMap;
  onToggleProfileModal: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentScreen,
  onNavigate,
  timeMode,
  onCycleTimeMode,
  streak,
  user,
  hubs,
  onToggleProfileModal,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'timer': return <Timer className="w-5 h-5" />;
      case 'check-square': return <CheckSquare className="w-5 h-5" />;
      case 'dumbbell': return <Dumbbell className="w-5 h-5" />;
      case 'graduation-cap': return <GraduationCap className="w-5 h-5" />;
      case 'lightbulb': return <Lightbulb className="w-5 h-5" />;
      case 'briefcase': return <Briefcase className="w-5 h-5" />;
      case 'headphones': return <Headphones className="w-5 h-5" />;
      case 'book-open': return <BookOpen className="w-5 h-5" />;
      default: return <Home className="w-5 h-5" />;
    }
  };

  const getTimeModeIcon = () => {
    if (timeMode === 'morning') return <Sun className="w-4 h-4 text-amber-500 fill-amber-400" />;
    if (timeMode === 'day') return <Zap className="w-4 h-4 text-sky-500 fill-sky-400" />;
    return <Moon className="w-4 h-4 text-purple-500 fill-purple-400" />;
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r-4 border-[#111111] p-5 justify-between shrink-0 overflow-y-auto no-scrollbar">
        <div className="space-y-6">
          {/* Brand Logo Header */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('screen-dashboard')}>
            <div className="w-12 h-12 bg-[#FFDD00] rounded-2xl border-4 border-[#111111] shadow-[3px_3px_0px_#111111] flex items-center justify-center font-heading font-bold text-2xl">
              ☕
            </div>
            <div>
              <span className="font-heading font-bold text-xl leading-none block text-[#111111]">
                DAILY BREW
              </span>
              <span className="text-[10px] font-extrabold uppercase bg-black text-[#FFDD00] px-2 py-0.5 rounded-md mt-1 inline-block">
                {timeMode.toUpperCase()} MODE
              </span>
            </div>
          </div>

          {/* Sidebar Nav Buttons */}
          <nav className="space-y-2">
            <button
              onClick={() => onNavigate('screen-dashboard')}
              className={`w-full flex items-center gap-3 p-3 rounded-2xl font-heading font-bold text-sm transition-all shadow-[3px_3px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 ${
                currentScreen === 'screen-dashboard'
                  ? 'bg-[#FFDD00] border-4 border-[#111111] text-black'
                  : 'bg-white border-2 border-[#111111] text-[#111111] hover:bg-yellow-50'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </button>

            {Object.keys(hubs).map((key) => {
              if (!hubs[key].visible) return null;
              const isActive = currentScreen === key;
              return (
                <button
                  key={key}
                  onClick={() => onNavigate(key)}
                  className={`w-full flex items-center gap-3 p-3 rounded-2xl font-heading font-bold text-sm transition-all shadow-[2px_2px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 ${
                    isActive
                      ? 'bg-[#FFDD00] border-4 border-[#111111] text-black font-extrabold shadow-[3px_3px_0px_#111111]'
                      : 'bg-white border-2 border-[#111111] text-[#111111] hover:bg-gray-50'
                  }`}
                >
                  {getIcon(hubs[key].icon)}
                  <span>{hubs[key].name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Streak & Profile Widget */}
        <div className="bg-yellow-50 border-2 border-black rounded-2xl p-3.5 space-y-2.5 mt-4">
          <div className="flex items-center justify-between font-heading font-bold text-xs">
            <span className="text-gray-700">Active Streak</span>
            <span className="text-amber-700 font-extrabold flex items-center gap-1">
              🔥 {streak} Days
            </span>
          </div>
          <button
            onClick={onToggleProfileModal}
            className="w-full py-2 bg-white hover:bg-yellow-100 border-2 border-black rounded-xl font-heading font-bold text-xs shadow-[2px_2px_0px_#111111] flex items-center justify-center gap-1.5 active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          >
            <span>{user.avatar || '👤'}</span> Edit Profile
          </button>
        </div>
      </aside>

      {/* Top Header (Mobile View) */}
      <header className="w-full px-4 pt-3.5 pb-3 flex justify-between items-center bg-white border-b-4 border-[#111111] z-30 shrink-0">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('screen-dashboard')}>
          <div className="w-10 h-10 bg-[#FFDD00] rounded-xl border-2 border-black shadow-[2px_2px_0px_#111111] flex items-center justify-center font-heading font-bold text-lg md:hidden">
            ☕
          </div>
          <div>
            <span className="font-heading font-bold text-lg leading-tight block md:hidden text-[#111111]">
              DAILY BREW
            </span>
            <span className="text-[9px] font-extrabold uppercase bg-black text-[#FFDD00] px-1.5 py-0.5 rounded">
              {timeMode.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onCycleTimeMode}
            title="Switch Time Mode Preview"
            className="bg-[#F9F9F8] border-2 border-black p-2 rounded-xl text-xs font-bold flex items-center gap-1 shadow-[2px_2px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          >
            {getTimeModeIcon()}
          </button>

          <button
            onClick={() => onNavigate('screen-analytics')}
            className="bg-[#FFDD00] border-2 border-black shadow-[2px_2px_0px_#111111] px-3 py-1 rounded-full flex items-center gap-1 font-heading font-bold text-xs active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          >
            <Flame className="w-3.5 h-3.5 fill-black" />
            <span>{streak}</span>
          </button>

          <button
            onClick={onToggleProfileModal}
            className="w-9 h-9 bg-purple-200 border-2 border-black shadow-[2px_2px_0px_#111111] rounded-xl flex items-center justify-center text-sm font-bold active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          >
            <span>{user.avatar || '👤'}</span>
          </button>
        </div>
      </header>

      {/* Mobile Bottom Dock Bar */}
      <nav className="md:hidden absolute bottom-0 left-0 right-0 bg-white border-t-4 border-[#111111] z-30 flex items-center h-16">
        {/* Fixed Home Button */}
        <button
          onClick={() => onNavigate('screen-dashboard')}
          className={`flex flex-col items-center justify-center shrink-0 px-4 h-full border-r-2 border-gray-200 z-10 transition-colors ${
            currentScreen === 'screen-dashboard' ? 'text-black font-extrabold' : 'text-gray-500'
          }`}
        >
          <div
            className={`p-1.5 rounded-xl border-2 transition-all ${
              currentScreen === 'screen-dashboard'
                ? 'bg-[#FFDD00] border-black shadow-[2px_2px_0px_#111111]'
                : 'border-transparent'
            }`}
          >
            <Home className="w-5 h-5" />
          </div>
          <span className="font-heading font-bold text-[9px] mt-0.5">Home</span>
        </button>

        {/* Scrollable Hub Dock Links */}
        <div className="flex items-center overflow-x-auto no-scrollbar h-full px-2 gap-3 flex-1">
          {Object.keys(hubs).map((key) => {
            if (!hubs[key].visible) return null;
            const isActive = currentScreen === key;
            return (
              <button
                key={key}
                onClick={() => onNavigate(key)}
                className={`flex flex-col items-center justify-center shrink-0 px-2.5 h-full transition-colors ${
                  isActive ? 'text-black font-bold' : 'text-gray-500'
                }`}
              >
                <div
                  className={`p-1.5 rounded-xl border-2 transition-all ${
                    isActive
                      ? 'bg-[#FFDD00] border-black shadow-[2px_2px_0px_#111111]'
                      : 'border-transparent'
                  }`}
                >
                  {getIcon(hubs[key].icon)}
                </div>
                <span className="font-heading font-bold text-[9px] mt-0.5 whitespace-nowrap">
                  {hubs[key].name}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
