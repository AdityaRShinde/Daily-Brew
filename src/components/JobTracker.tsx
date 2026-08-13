import React from 'react';
import { ArrowLeft, Plus, Briefcase, Trash2 } from 'lucide-react';
import { Job } from '../types';

interface JobTrackerProps {
  onBack: () => void;
  jobs: Job[];
  jobFilter: string;
  onFilterJobs: (filter: string) => void;
  onUpdateJobStatus: (id: number, status: 'applied' | 'interview' | 'no_response') => void;
  onDeleteJob: (id: number) => void;
  onOpenAddJobModal: () => void;
}

export const JobTracker: React.FC<JobTrackerProps> = ({
  onBack,
  jobs,
  jobFilter,
  onFilterJobs,
  onUpdateJobStatus,
  onDeleteJob,
  onOpenAddJobModal,
}) => {
  const filteredJobs = jobs.filter((j) => {
    if (jobFilter !== 'all') return j.status === jobFilter;
    return true;
  });

  const statusBadges = {
    applied: 'bg-blue-100 text-blue-800 border-blue-300',
    interview: 'bg-green-100 text-green-800 border-green-300',
    no_response: 'bg-red-100 text-red-800 border-red-300',
  };

  const statusLabels = {
    applied: 'Applied Job',
    interview: 'Interview Scheduled',
    no_response: 'Not Responded',
  };

  return (
    <div className="space-y-5 animate-fade">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 bg-white rounded-xl border-2 border-black shadow-[2px_2px_0px_#111111] hover:bg-gray-100 md:hidden active:translate-x-0.5 active:translate-y-0.5 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="font-heading font-bold text-2xl text-[#111111]">Job Application Tracker</h2>
        </div>

        <button
          onClick={onOpenAddJobModal}
          className="bg-[#FFDD00] hover:bg-yellow-400 border-2 border-black p-2.5 rounded-xl flex items-center gap-1 font-heading font-bold text-xs shadow-[2px_2px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
        >
          <Plus className="w-4 h-4" /> Add Job
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 font-heading font-bold text-xs overflow-x-auto no-scrollbar pb-1">
        {[
          { key: 'all', label: 'All Jobs' },
          { key: 'applied', label: 'Applied' },
          { key: 'interview', label: 'Interview' },
          { key: 'no_response', label: 'No Response' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => onFilterJobs(tab.key)}
            className={`px-3.5 py-1.5 rounded-xl border-2 border-black shrink-0 transition-all shadow-[2px_2px_0px_#111111] ${
              jobFilter === tab.key ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Jobs List */}
      <div className="space-y-3">
        {filteredJobs.length === 0 ? (
          <div className="text-xs font-semibold text-gray-500 py-6 text-center bg-white border-2 border-black rounded-2xl">
            No job applications in this view.
          </div>
        ) : (
          filteredJobs.map((j) => (
            <div
              key={j.id}
              className="bg-white border-2 border-black shadow-[4px_4px_0px_#111111] p-4 rounded-2xl flex items-center justify-between"
            >
              <div>
                <div className="font-heading font-bold text-base text-[#111111]">{j.company}</div>
                <div className="text-xs font-semibold text-gray-600">{j.role}</div>
                <span
                  className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border border-black ${
                    statusBadges[j.status]
                  } mt-1.5 inline-block`}
                >
                  {statusLabels[j.status]}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={j.status}
                  onChange={(e) =>
                    onUpdateJobStatus(
                      j.id,
                      e.target.value as 'applied' | 'interview' | 'no_response'
                    )
                  }
                  className="text-xs font-bold border-2 border-black rounded-xl p-1.5 bg-[#F9F9F8] shadow-[1px_1px_0px_#111111]"
                >
                  <option value="applied">Applied</option>
                  <option value="interview">Interview</option>
                  <option value="no_response">No Response</option>
                </select>

                <button
                  onClick={() => onDeleteJob(j.id)}
                  className="text-red-500 hover:text-red-700 font-bold p-1"
                  aria-label="Delete job application"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
