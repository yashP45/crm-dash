import Modal from "./Modal";

interface AddCustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const inputCls = "w-full h-11 sm:h-14 rounded-xl border border-grey-10 bg-grey-bg px-3 sm:px-4 text-sm sm:text-base outline-none focus:border-brand-blue transition-colors";
const labelCls = "block text-brand-navy font-bold text-[13px] sm:text-[15px] mb-1.5 sm:mb-2";

export default function AddCustomerModal({ isOpen, onClose }: AddCustomerModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Customer">
      <form className="flex flex-col gap-5 sm:gap-6 w-full" onSubmit={(e) => { e.preventDefault(); onClose(); }}>

        <div>
          <label className={labelCls}>Avatar</label>
          <button type="button" className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] bg-grey-bg border border-grey-10 hover:border-brand-blue rounded-xl flex items-center justify-center text-grey-50 font-medium text-xs sm:text-sm transition-colors">
            ADD
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          <div>
            <label className={labelCls}>First Name</label>
            <input type="text" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Last Name</label>
            <input type="text" className={inputCls} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          <div>
            <label className={labelCls}>Email</label>
            <input type="email" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Phone</label>
            <input type="tel" className={inputCls} />
          </div>
        </div>

        <div>
          <label className={labelCls}>Address</label>
          <input type="text" placeholder="Street Address" className={`${inputCls} mb-3 placeholder:text-grey-50`} />
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <input type="text" placeholder="City" className={`${inputCls} placeholder:text-grey-50`} />
            <input type="text" placeholder="State" className={`${inputCls} placeholder:text-grey-50`} />
            <input type="text" placeholder="Zip" className={`${inputCls} placeholder:text-grey-50`} />
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 sm:gap-6 mt-2 sm:mt-6">
          <button type="button" onClick={onClose} className="text-brand-navy font-semibold hover:text-grey-50 transition-colors text-sm sm:text-base">
            Cancel
          </button>
          <button type="submit" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold h-10 sm:h-14 px-5 sm:px-8 rounded-[14px] transition-colors shadow-lg shadow-brand-blue/20 text-sm sm:text-base">
            Save Customer
          </button>
        </div>

      </form>
    </Modal>
  );
}
