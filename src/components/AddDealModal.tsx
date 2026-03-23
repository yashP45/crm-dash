import Modal from "./Modal";
import { Calendar } from "lucide-react";

interface AddDealModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddDealModal({ isOpen, onClose }: AddDealModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Deal">
      <form className="flex flex-col gap-8 w-full" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
        
        {/* Customer Block Overlay */}
        <div className="bg-brand-lightbg -mx-8 -my-6 px-8 py-6 mb-2 border-b border-grey-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-grey-30 rounded-full shrink-0"></div>
            <div>
              <p className="text-grey-50 text-sm mb-0.5">Customer</p>
              <h3 className="font-bold text-brand-navy text-lg">Deanna Annis</h3>
            </div>
          </div>
          <button type="button" className="bg-white border border-grey-10 text-brand-navy font-semibold px-6 py-2.5 rounded-full shadow-sm hover:border-brand-blue transition-colors text-sm">
            Change Customer
          </button>
        </div>
        
        <div className="mt-2">
          <label className="block text-brand-navy font-bold text-sm mb-3">Room Images</label>
          <button type="button" className="w-[80px] h-[80px] bg-grey-bg border border-grey-10 hover:border-brand-blue rounded-xl flex items-center justify-center text-grey-50 font-medium text-sm transition-colors">
            ADD
          </button>
        </div>

        <div>
          <label className="block text-brand-navy font-bold text-[15px] mb-2">Address</label>
          <input type="text" placeholder="Street Address" className="w-full h-14 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors mb-4 placeholder:text-grey-50" />
          
          <div className="grid grid-cols-3 gap-6">
            <input type="text" placeholder="City" className="w-full h-14 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors placeholder:text-grey-50" />
            <input type="text" placeholder="State / Province" className="w-full h-14 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors placeholder:text-grey-50" />
            <input type="text" placeholder="Zip Code" className="w-full h-14 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors placeholder:text-grey-50" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-brand-navy font-bold text-[15px] mb-2">Room Area (m2)</label>
            <input type="text" className="w-full h-14 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors" />
          </div>
          <div>
            <label className="block text-brand-navy font-bold text-[15px] mb-2"># of People</label>
            <input type="number" className="w-full h-14 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors" />
          </div>
        </div>

        <div>
          <label className="block text-brand-navy font-bold text-[15px] mb-2">Appointment Date</label>
          <div className="relative">
            <input type="text" placeholder="Nov 14, 2021" className="w-full h-14 rounded-xl border border-grey-10 bg-grey-bg pl-4 pr-12 outline-none focus:border-brand-blue transition-colors placeholder:text-grey-50" />
            <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-grey-50 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-brand-navy font-bold text-[15px] mb-2">Special Instructions</label>
          <textarea className="w-full h-24 rounded-xl border border-grey-10 bg-grey-bg p-4 outline-none focus:border-brand-blue transition-colors resize-none"></textarea>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-brand-navy font-bold text-[15px] mb-2">Room Access</label>
            <select className="w-full h-14 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors text-grey-50 appearance-none">
              <option>Keys with doorman</option>
              <option>Smart Lock</option>
              <option>Building Reception</option>
            </select>
          </div>
          <div>
            <label className="block text-brand-navy font-bold text-[15px] mb-2">Price ($)</label>
            <input type="number" className="w-full h-14 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 items-end">
          <div>
             <label className="block text-brand-navy font-bold text-[15px] mb-2">Progress</label>
             <select className="w-full h-14 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors text-grey-50 appearance-none">
              <option>In Progress</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </div>
          
          <div className="flex items-center justify-end gap-6 h-14">
            <button type="button" onClick={onClose} className="text-brand-navy font-semibold hover:text-grey-50 transition-colors">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold h-14 px-8 rounded-[14px] transition-colors shadow-lg shadow-blue-600/20">
              Save Deal
            </button>
          </div>
        </div>

      </form>
    </Modal>
  );
}
