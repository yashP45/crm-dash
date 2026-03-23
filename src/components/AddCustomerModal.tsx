import Modal from "./Modal";

interface AddCustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddCustomerModal({ isOpen, onClose }: AddCustomerModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Customer">
      <form className="flex flex-col gap-6 w-full" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
        
        <div>
          <label className="block text-brand-navy font-bold text-sm mb-3">Avatar</label>
          <button type="button" className="w-[80px] h-[80px] bg-grey-bg border border-grey-10 hover:border-brand-blue rounded-xl flex items-center justify-center text-grey-50 font-medium text-sm transition-colors">
            ADD
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-brand-navy font-bold text-[15px] mb-2">First Name</label>
            <input type="text" className="w-full h-14 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors" />
          </div>
          <div>
            <label className="block text-brand-navy font-bold text-[15px] mb-2">Last Name</label>
            <input type="text" className="w-full h-14 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-brand-navy font-bold text-[15px] mb-2">Email</label>
            <input type="email" className="w-full h-14 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors" />
          </div>
          <div>
            <label className="block text-brand-navy font-bold text-[15px] mb-2">Phone</label>
            <input type="tel" className="w-full h-14 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors" />
          </div>
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

        <div className="flex items-center justify-end gap-6 mt-6">
          <button type="button" onClick={onClose} className="text-brand-navy font-semibold hover:text-grey-50 transition-colors">
            Cancel
          </button>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold h-14 px-8 rounded-[14px] transition-colors shadow-lg shadow-blue-600/20">
            Save Customer
          </button>
        </div>

      </form>
    </Modal>
  );
}
