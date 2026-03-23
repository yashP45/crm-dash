"use client";
import { Plus, CheckCircle2, AlertCircle } from "lucide-react";
import { mockTasks } from "@/lib/mockData";
import { useState } from "react";
import AddTaskModal from "./AddTaskModal";

export default function TasksCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-white rounded-[24px] p-8 shadow-sm border border-grey-10/50 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-brand-navy">Tasks To Do</h2>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-8 h-8 rounded-full bg-brand-blue/5 hover:bg-brand-blue/10 flex items-center justify-center text-brand-blue transition-colors"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col gap-5 mt-4 flex-1">
        {mockTasks.map((task) => (
          <div key={task.id} className="grid grid-cols-[100px_1fr] items-center gap-4 group cursor-pointer hover:bg-grey-bg rounded-lg p-2 -mx-2 transition-colors">
            <div className="flex items-center justify-between pointer-events-none">
              <p className={`text-sm tracking-wide ${task.important ? 'text-brand-pink font-semibold' : 'text-grey-50'}`}>
                {task.dateStr}
              </p>
              {task.important && (
                <div className="w-4 h-4 bg-brand-pink/20 rounded flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-brand-pink rounded-full"></div>
                </div>
              )}
            </div>
            
            <div>
              <p className="text-brand-navy font-semibold text-[15px]">{task.title}</p>
            </div>
          </div>
        ))}
      </div>

      <AddTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
