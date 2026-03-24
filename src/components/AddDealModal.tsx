"use client";
import { useState } from "react";
import Modal from "./Modal";
import SelectCustomerPanel from "./SelectCustomerPanel";
import { Calendar } from "lucide-react";

interface AddDealModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SelectedCustomer {
  id: string;
  name: string;
  email: string;
  imageUrl?: string;
}

const defaultCustomer: SelectedCustomer = {
  id: "1",
  name: "Deanna Annis",
  email: "deannannis@gmail.com",
  imageUrl: undefined,
};

const inputCls = "w-full h-14 rounded-xl border border-[#EAEEF4] bg-[#F6FAFD] px-4 outline-none focus:border-brand-blue transition-colors text-brand-navy placeholder:text-grey-50";
const labelCls = "block text-brand-navy font-bold text-[15px] mb-2";

export default function AddDealModal({ isOpen, onClose }: AddDealModalProps) {
  const [selectedCustomer, setSelectedCustomer] = useState<SelectedCustomer>(defaultCustomer);
  const [showCustomerPanel, setShowCustomerPanel] = useState(false);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="Add New Deal">
        <form className="flex flex-col gap-8 w-full" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          
          {/* Customer Block */}
          <div className="bg-[#EEF6FB] -mx-8 -my-6 px-8 py-5 mb-2 border-b border-[#EAEEF4] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-grey-10 overflow-hidden shrink-0">
                <img
                  src={selectedCustomer.imageUrl || "/avatar1.jpg"}
                  alt={selectedCustomer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-grey-50 text-sm mb-0.5">Customer</p>
                <h3 className="font-bold text-brand-navy text-[17px]">{selectedCustomer.name}</h3>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowCustomerPanel(true)}
              className="bg-white border border-[#EAEEF4] text-brand-navy font-semibold px-5 py-2 rounded-full shadow-sm hover:border-brand-blue transition-colors text-sm"
            >
              Change Customer
            </button>
          </div>

          {/* Room Images */}
          <div>
            <label className={labelCls}>Room Images</label>
            <button type="button" className="w-[80px] h-[80px] bg-[#F6FAFD] border border-[#EAEEF4] hover:border-brand-blue rounded-xl flex items-center justify-center text-grey-50 font-medium text-sm transition-colors">
              ADD
            </button>
          </div>

          {/* Address */}
          <div>
            <label className={labelCls}>Address</label>
            <input type="text" placeholder="Street Address" className={`${inputCls} mb-4`} />
            <div className="grid grid-cols-3 gap-4">
              <input type="text" placeholder="City" className={inputCls} />
              <input type="text" placeholder="State" className={inputCls} />
              <input type="text" placeholder="Zip Code" className={inputCls} />
            </div>
          </div>

          {/* Room Area & People */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className={labelCls}>Room Area (m²)</label>
              <input type="text" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}># of People</label>
              <input type="number" className={inputCls} />
            </div>
          </div>

          {/* Appointment Date */}
          <div>
            <label className={labelCls}>Appointment Date</label>
            <div className="relative">
              <input type="text" placeholder="Nov 14, 2021" className={inputCls} />
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-grey-50 pointer-events-none" />
            </div>
          </div>

          {/* Special Instructions */}
          <div>
            <label className={labelCls}>Special Instructions</label>
            <textarea className="w-full h-24 rounded-xl border border-[#EAEEF4] bg-[#F6FAFD] p-4 outline-none focus:border-brand-blue transition-colors resize-none text-brand-navy" />
          </div>

          {/* Room Access & Price */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className={labelCls}>Room Access</label>
              <select className="w-full h-14 rounded-xl border border-[#EAEEF4] bg-[#F6FAFD] px-4 outline-none focus:border-brand-blue transition-colors text-grey-50 appearance-none">
                <option>Keys with doorman</option>
                <option>Smart Lock</option>
                <option>Building Reception</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Price ($)</label>
              <input type="number" className={inputCls} />
            </div>
          </div>

          {/* Progress & Actions */}
          <div className="grid grid-cols-2 gap-6 items-end">
            <div>
              <label className={labelCls}>Progress</label>
              <select className="w-full h-14 rounded-xl border border-[#EAEEF4] bg-[#F6FAFD] px-4 outline-none focus:border-brand-blue transition-colors text-grey-50 appearance-none">
                <option>In Progress</option>
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </div>

            <div className="flex items-center justify-end gap-6 h-14">
              <button type="button" onClick={onClose} className="text-brand-navy font-semibold hover:text-grey-50 transition-colors">
                Cancel
              </button>
              <button type="submit" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold h-14 px-8 rounded-[14px] transition-colors shadow-lg shadow-brand-blue/20">
                Save Deal
              </button>
            </div>
          </div>

        </form>
      </Modal>

      {/* Customer Selection Panel - layered above the main modal */}
      <SelectCustomerPanel
        isOpen={showCustomerPanel}
        onClose={() => setShowCustomerPanel(false)}
        onSelect={(c) => setSelectedCustomer(c)}
      />
    </>
  );
}
