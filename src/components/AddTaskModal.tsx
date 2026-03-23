import Modal from "./Modal";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddTaskModal({ isOpen, onClose }: AddTaskModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Task">
      <form className="flex flex-col gap-6 w-full" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
        
        <div>
           <textarea 
             placeholder="Enter task description" 
             className="w-full h-[120px] rounded-xl border border-grey-10 bg-grey-bg p-4 outline-none focus:border-brand-blue transition-colors text-grey-50 resize-none placeholder:text-grey-50"
           />
        </div>

        <div>
           <label className="block text-brand-navy font-bold text-[15px] mb-3">Due Date</label>
           <input 
             type="text" 
             placeholder="Due date" 
             className="w-full h-14 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors text-grey-50 placeholder:text-grey-50" 
           />
        </div>

        <div className="flex items-center justify-center gap-8 mt-4 pt-4 border-t border-transparent">
          <button 
            type="button" 
            onClick={onClose} 
            className="text-brand-navy font-semibold hover:text-brand-navy/80 transition-colors px-6 py-3"
          >
            Cancel
          </button>
          
          <button 
            type="submit" 
            className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold h-12 px-10 rounded-full transition-colors shadow-lg shadow-brand-blue/20"
          >
            Save Task
          </button>
        </div>

      </form>
    </Modal>
  );
}
