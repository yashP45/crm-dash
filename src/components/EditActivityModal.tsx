import Modal from "./Modal";
import { Calendar } from "lucide-react";

interface EditActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditActivityModal({ isOpen, onClose }: EditActivityModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Activity">
      <form className="flex flex-col gap-6 w-full" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
        
        <div>
           <input type="text" defaultValue="Evaluation and removal of the old system" className="w-full h-14 rounded-xl border border-grey-10 bg-white px-4 outline-none focus:border-brand-blue transition-colors text-grey-50" />
        </div>

        <div className="relative">
          <input type="text" defaultValue="9:13 am 30 Nov 2021" className="w-full h-14 rounded-xl border border-grey-10 bg-white pl-4 pr-12 outline-none focus:border-brand-blue transition-colors text-grey-50" />
          <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-grey-50 pointer-events-none" />
        </div>

        <div>
          <label className="block text-brand-navy font-bold text-[17px] mb-3">Images</label>
          <button type="button" className="w-full h-16 bg-white border border-grey-10 hover:border-brand-blue rounded-xl flex items-center justify-center text-grey-50 font-medium text-sm transition-colors uppercase tracking-wide">
            Add
          </button>
        </div>

        <div className="flex items-center justify-between mt-8 h-14">
          <button type="button" onClick={onClose} className="text-brand-pink font-semibold hover:text-brand-pink/80 transition-colors ml-12">
            Delete
          </button>
          
          <button type="submit" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold h-14 px-14 rounded-[14px] transition-colors shadow-lg shadow-brand-blue/20 text-lg">
            Done
          </button>
        </div>

      </form>
    </Modal>
  );
}
