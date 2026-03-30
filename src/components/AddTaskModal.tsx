import Modal from "./Modal";
import { useEffect, useState } from "react";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialValues?: {
    description: string;
    dueDateLabel: string;
  };
  title?: string;
}

export default function AddTaskModal({
  isOpen,
  onClose,
  initialValues,
  title = "Add New Task",
}: AddTaskModalProps) {
  const [description, setDescription] = useState("");
  const [dueDateLabel, setDueDateLabel] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    setDescription(initialValues?.description ?? "");
    setDueDateLabel(initialValues?.dueDateLabel ?? "");
  }, [isOpen, initialValues?.description, initialValues?.dueDateLabel]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <form
        className="flex flex-col gap-5 sm:gap-6 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          onClose();
        }}
      >

        <div>
          <textarea
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-[100px] sm:h-[120px] rounded-xl border border-grey-10 bg-grey-bg p-3 sm:p-4 text-sm sm:text-base outline-none focus:border-brand-blue transition-colors text-grey-50 resize-none placeholder:text-grey-50"
          />
        </div>

        <div>
          <label className="block text-brand-navy font-bold text-[13px] sm:text-[15px] mb-1.5 sm:mb-3">Due Date</label>
          <input
            type="text"
            placeholder="Due date"
            value={dueDateLabel}
            onChange={(e) => setDueDateLabel(e.target.value)}
            className="w-full h-11 sm:h-14 rounded-xl border border-grey-10 bg-grey-bg px-3 sm:px-4 text-sm sm:text-base outline-none focus:border-brand-blue transition-colors text-grey-50 placeholder:text-grey-50"
          />
        </div>

        <div className="flex items-center justify-center gap-6 sm:gap-8 mt-2 pt-2 sm:mt-4 sm:pt-4">
          <button
            type="button"
            onClick={onClose}
            className="text-brand-navy font-semibold hover:text-brand-navy/80 transition-colors px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold h-10 sm:h-12 px-8 sm:px-10 rounded-full transition-colors shadow-lg shadow-brand-blue/20 text-sm sm:text-base"
          >
            Save Task
          </button>
        </div>

      </form>
    </Modal>
  );
}
