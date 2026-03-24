"use client";
import Modal from "./Modal";
import { Calendar } from "lucide-react";

interface Deal {
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  roomArea?: string;
  people?: number;
  appointmentDate?: string;
  specialInstructions?: string;
  roomAccess?: string;
  price?: number;
  progress?: string;
}

interface EditDealModalProps {
  isOpen: boolean;
  onClose: () => void;
  deal?: Deal;
}

const inputCls = "w-full h-11 sm:h-14 rounded-xl border border-[#EAEEF4] bg-[#F6FAFD] px-3 sm:px-4 text-sm sm:text-base outline-none focus:border-brand-blue transition-colors text-brand-navy placeholder:text-grey-50";
const labelCls = "block text-brand-navy font-bold text-[13px] sm:text-[15px] mb-1.5 sm:mb-2";

export default function EditDealModal({ isOpen, onClose, deal }: EditDealModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Deal">
      <form className="flex flex-col gap-5 sm:gap-8 w-full" onSubmit={(e) => { e.preventDefault(); onClose(); }}>

        {/* Room Images */}
        <div>
          <label className={labelCls}>Room Images</label>
          <button type="button" className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] bg-[#F6FAFD] border border-[#EAEEF4] hover:border-brand-blue rounded-xl flex items-center justify-center text-grey-50 font-medium text-xs sm:text-sm transition-colors">
            ADD
          </button>
        </div>

        {/* Address */}
        <div>
          <label className={labelCls}>Address</label>
          <input type="text" defaultValue={deal?.address ?? ""} placeholder="Street Address" className={`${inputCls} mb-3`} />
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <input type="text" defaultValue={deal?.city ?? ""} placeholder="City" className={inputCls} />
            <input type="text" defaultValue={deal?.state ?? ""} placeholder="State" className={inputCls} />
            <input type="text" defaultValue={deal?.zip ?? ""} placeholder="Zip" className={inputCls} />
          </div>
        </div>

        {/* Room Area & People */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          <div>
            <label className={labelCls}>Room Area (m²)</label>
            <input type="text" defaultValue={deal?.roomArea ?? ""} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}># of People</label>
            <input type="number" defaultValue={deal?.people ?? ""} className={inputCls} />
          </div>
        </div>

        {/* Appointment Date */}
        <div>
          <label className={labelCls}>Appointment Date</label>
          <div className="relative">
            <input type="text" defaultValue={deal?.appointmentDate ?? ""} placeholder="Nov 14, 2021" className={inputCls} />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-50 pointer-events-none" />
          </div>
        </div>

        {/* Special Instructions */}
        <div>
          <label className={labelCls}>Special Instructions</label>
          <textarea
            defaultValue={deal?.specialInstructions ?? ""}
            placeholder="Leave special instructions…"
            className="w-full h-20 sm:h-24 rounded-xl border border-[#EAEEF4] bg-[#F6FAFD] p-3 sm:p-4 text-sm sm:text-base outline-none focus:border-brand-blue transition-colors resize-none text-brand-navy placeholder:text-grey-50"
          />
        </div>

        {/* Room Access & Price */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          <div>
            <label className={labelCls}>Room Access</label>
            <select defaultValue={deal?.roomAccess ?? "Keys with doorman"} className="w-full h-11 sm:h-14 rounded-xl border border-[#EAEEF4] bg-[#F6FAFD] px-3 sm:px-4 text-sm sm:text-base outline-none focus:border-brand-blue transition-colors text-brand-navy appearance-none">
              <option>Keys with doorman</option>
              <option>Smart Lock</option>
              <option>Building Reception</option>
            </select>
          </div>
          <div>
            <label className={labelCls}>Price ($)</label>
            <input type="number" defaultValue={deal?.price ?? ""} className={inputCls} />
          </div>
        </div>

        {/* Progress & Actions */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 items-end">
          <div>
            <label className={labelCls}>Progress</label>
            <select defaultValue={deal?.progress ?? "In Progress"} className="w-full h-11 sm:h-14 rounded-xl border border-[#EAEEF4] bg-[#F6FAFD] px-3 sm:px-4 text-sm sm:text-base outline-none focus:border-brand-blue transition-colors text-brand-navy appearance-none">
              <option>In Progress</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold h-10 sm:h-14 px-8 sm:px-12 rounded-[14px] transition-colors shadow-lg shadow-brand-blue/20 text-sm sm:text-base">
              Done
            </button>
          </div>
        </div>

      </form>
    </Modal>
  );
}
