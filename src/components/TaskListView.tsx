"use client";

import { AlertOctagon, Check, ChevronDown, Filter } from "lucide-react";
import { parse } from "date-fns";
import { useMemo, useState } from "react";
import AddTaskModal from "@/components/AddTaskModal";

type TaskRow = {
  id: number;
  dueDateLabel: string; // e.g. "14 Nov 2021"
  title: string;
};

const tasksData: TaskRow[] = [
  { id: 1, dueDateLabel: "14 Nov 2021", title: "Description goes here" },
  { id: 2, dueDateLabel: "24 Dec 2021", title: "Web conference agenda (overdue)" },
  { id: 3, dueDateLabel: "24 Nov 2026", title: "Meeting with partners" },
  { id: 4, dueDateLabel: "24 Nov 2026", title: "Add new services" },
  { id: 5, dueDateLabel: "24 Nov 2022", title: "Upload new legals (terms & conditions)" },
  { id: 6, dueDateLabel: "24 Nov 2022", title: "Sales report due" },
  { id: 7, dueDateLabel: "24 Nov 2026", title: "Description goes here" },
];

function isOverdue(dueDateLabel: string) {
  const due = parse(dueDateLabel, "dd MMM yyyy", new Date());
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return due.getTime() < today.getTime();
}

function CheckboxCell({
  checked,
  onCheckedChange,
}: {
  checked: boolean;
  onCheckedChange: (next: boolean) => void;
}) {
  return (
    <label className="inline-flex items-center justify-center cursor-pointer select-none border-grey">
      <input
        aria-label="Mark task complete"
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="sr-only"
      />
      <span
        className={[
          "h-[18px] w-[18px] rounded-[6px] border flex items-center justify-center transition-colors border-grey-10",
          "focus-within:ring-2 focus-within:ring-brand-green/30 focus-within:ring-offset-0 border",
          checked ? "bg-brand-green border-brand-green" : "bg-white border-grey-50",
        ].join(" ")}
      >
        {checked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </span>
    </label>
  );
}

function OverdueIcon() {
  return (
    <div className="w-6 h-6 rounded-md bg-brand-pink/15 flex items-center justify-center shrink-0">
      <AlertOctagon className="w-4 h-4 text-brand-pink" />
    </div>
  );
}

export default function TaskListView() {
  const initialChecked = useMemo(() => {
    // Default: non-overdue tasks start checked (as in the design)
    return new Set(tasksData.filter((t) => !isOverdue(t.dueDateLabel)).map((t) => t.id));
  }, []);
  const [checkedIds, setCheckedIds] = useState<Set<number>>(initialChecked);
  const [editOpen, setEditOpen] = useState(false);
  const [editValues, setEditValues] = useState<{ description: string; dueDateLabel: string } | undefined>(undefined);

  return (
    <div className="w-full">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 md:mb-8 px-2 md:px-4">
        <h2 className="font-bold text-brand-navy text-[15px] md:text-[17px]">
          Total: {tasksData.length} tasks
        </h2>

        <div className="flex items-center gap-3">
          <button className="flex items-center justify-between gap-2 h-[44px] md:h-[50px] px-4 md:pl-[25px] md:pr-[20px] w-auto md:w-[235px] rounded-[30px] border border-[#EAEEF4] bg-white hover:border-brand-blue text-brand-navy font-medium text-sm transition-colors shadow-sm">
            <span className="hidden sm:inline">Sort by: Due Date</span>
            <span className="sm:hidden">Sort</span>
            <ChevronDown className="w-4 h-4 text-grey-50 shrink-0" />
          </button>
          <button className="flex items-center justify-between gap-2 h-[44px] md:h-[50px] px-4 md:pl-[25px] md:pr-[20px] rounded-[30px] border border-[#EAEEF4] bg-white hover:border-brand-blue text-brand-navy font-medium text-sm transition-colors shadow-sm">
            <span>Filter</span>
            <Filter className="w-4 h-4 text-grey-50 shrink-0" />
          </button>
        </div>
      </div>

      {/* ── Desktop Table (md+) ── */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[44px_180px_1fr_80px] gap-4 mb-2 px-8 text-grey-50 font-medium text-[15px] pb-6 border-b border-grey-10">
          <div className="flex items-center justify-center">□</div>
          <div>Due Date</div>
          <div>Task</div>
          <div className="text-center">Edit</div>
        </div>

        <div className="flex flex-col">
          {tasksData.map((task) => {
            const overdue = isOverdue(task.dueDateLabel);
            const checked = checkedIds.has(task.id);
            const showOverdueWarning = overdue && !checked;
            return (
              <div
                key={task.id}
                className="grid grid-cols-[44px_180px_1fr_80px] gap-4 items-center px-4 h-[79px] border-b border-[#EAEEF4] group hover:bg-brand-blue/5 transition-colors"
              >
                <div className="flex items-center justify-center">
                  <CheckboxCell
                    checked={checked}
                    onCheckedChange={(next) => {
                      setCheckedIds((prev) => {
                        const copy = new Set(prev);
                        if (next) copy.add(task.id);
                        else copy.delete(task.id);
                        return copy;
                      });
                    }}
                  />
                </div>

                <div className="flex items-center gap-3">
                  {showOverdueWarning && <OverdueIcon />}
                  <div className={`font-medium text-[15px] ${showOverdueWarning ? "text-brand-pink" : "text-brand-navy"}`}>
                    {task.dueDateLabel}
                  </div>
                </div>

                <div className="text-brand-navy font-medium text-[15px] truncate pr-6">
                  {task.title}
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      setEditValues({ description: task.title, dueDateLabel: task.dueDateLabel });
                      setEditOpen(true);
                    }}
                    className="w-10 h-10 rounded-full flex items-center border border-transparent justify-center text-grey-50 hover:text-brand-blue hover:bg-grey-10 transition-colors"
                  >
                    <img src="/edit-icon.png" alt="Edit" className="w-[18px] h-[18px]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Mobile Cards (< md) ── */}
      <div className="flex flex-col gap-3 md:hidden">
        {tasksData.map((task) => {
          const overdue = isOverdue(task.dueDateLabel);
          const checked = checkedIds.has(task.id);
          const showOverdueWarning = overdue && !checked;
          return (
            <div
              key={task.id}
              className="bg-white rounded-2xl border border-[#EAEEF4] p-4 shadow-sm flex items-start gap-4"
            >
              <div className="pt-0.5">
                <CheckboxCell
                  checked={checked}
                  onCheckedChange={(next) => {
                    setCheckedIds((prev) => {
                      const copy = new Set(prev);
                      if (next) copy.add(task.id);
                      else copy.delete(task.id);
                      return copy;
                    });
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3">
                  {showOverdueWarning && <OverdueIcon />}
                  <p className={`text-sm font-semibold ${showOverdueWarning ? "text-brand-pink" : "text-grey-50"}`}>
                    {task.dueDateLabel}
                  </p>
                </div>
                <p className="font-semibold text-brand-navy text-[15px] mt-1 truncate">
                  {task.title}
                </p>
              </div>
              <button
                onClick={() => {
                  setEditValues({ description: task.title, dueDateLabel: task.dueDateLabel });
                  setEditOpen(true);
                }}
                className="w-9 h-9 rounded-full flex items-center justify-center text-grey-50 hover:text-brand-blue hover:bg-grey-10 transition-colors shrink-0"
              >
                <img src="/edit-icon.png" alt="Edit" className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="px-10 py-3 rounded-full border border-grey-10 bg-white hover:border-brand-blue hover:text-brand-blue text-brand-navy font-bold text-sm transition-colors shadow-sm">
          Load More
        </button>
      </div>

      <AddTaskModal
        isOpen={editOpen}
        onClose={() => setEditOpen(false)}
        initialValues={editValues}
        title="Edit Task"
      />
    </div>
  );
}
