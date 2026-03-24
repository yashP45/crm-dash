import Modal from "./Modal";
import { Calendar } from "lucide-react";

interface EditActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditActivityModal({ isOpen, onClose }: EditActivityModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Activity">
      <form className="flex flex-col gap-5 sm:gap-6 w-full" onSubmit={(e) => { e.preventDefault(); onClose(); }}>

        <div>
          <input
            type="text"
            defaultValue="Evaluation and removal of the old system"
            className="w-full h-11 sm:h-14 rounded-xl border border-grey-10 bg-white px-3 sm:px-4 text-sm sm:text-base outline-none focus:border-brand-blue transition-colors text-grey-50"
          />
        </div>

        <div className="relative">
          <input
            type="text"
            defaultValue="9:13 am 30 Nov 2021"
            className="w-full h-11 sm:h-14 rounded-xl border border-grey-10 bg-white pl-3 sm:pl-4 pr-10 sm:pr-12 text-sm sm:text-base outline-none focus:border-brand-blue transition-colors text-grey-50"
          />
          <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-50 pointer-events-none" />
        </div>

        <div>
          <label className="block text-brand-navy font-bold text-[13px] sm:text-[17px] mb-2 sm:mb-3">Images</label>
          <button
            type="button"
            className="w-full h-12 sm:h-16 bg-white border border-grey-10 hover:border-brand-blue rounded-xl flex items-center justify-center text-grey-50 font-medium text-xs sm:text-sm transition-colors uppercase tracking-wide"
          >
            Add
          </button>
        </div>

        <div className="flex items-center justify-between mt-4 sm:mt-8 h-11 sm:h-14">
          <button
            type="button"
            onClick={onClose}
            className="text-brand-pink font-semibold hover:text-brand-pink/80 transition-colors ml-4 sm:ml-12 text-sm sm:text-base"
          >
            Delete
          </button>
          <button
            type="submit"
            className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold h-10 sm:h-14 px-8 sm:px-14 rounded-[14px] transition-colors shadow-lg shadow-brand-blue/20 text-sm sm:text-lg"
          >
            Done
          </button>
        </div>

      </form>
    </Modal>
  );
}
