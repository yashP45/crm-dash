"use client";
import { useState } from "react";
import { ArrowRight, X, Plus } from "lucide-react";
import { mockCustomers } from "@/lib/mockData";
import AddCustomerModal from "./AddCustomerModal";

interface Customer {
  id: string;
  name: string;
  email: string;
  imageUrl?: string;
}

interface SelectCustomerPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (customer: Customer) => void;
}

export default function SelectCustomerPanel({ isOpen, onClose, onSelect }: SelectCustomerPanelProps) {
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-navy/30 backdrop-blur-sm px-4">
      <div className="bg-white rounded-[12px] w-full max-w-[370px] max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EAEEF4]">
          <h2 className="text-[18px] font-bold text-brand-navy">Select Customer</h2>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowAddCustomer(true)}
              className="text-brand-blue font-semibold text-sm flex items-center gap-1 hover:underline">
              <Plus className="w-4 h-4" /> Add New
            </button>
            <button 
              onClick={onClose}
              className="w-7 h-7 bg-grey-50/70 hover:bg-grey-50 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Customer List */}
        <div className="flex flex-col py-2">
          {mockCustomers.map((customer) => (
            <button
              key={customer.id}
              onClick={() => { onSelect(customer); onClose(); }}
              className="flex items-center justify-between px-6 py-4 hover:bg-[#F6FAFD] transition-colors group w-full text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-grey-10 overflow-hidden shrink-0">
                  <img
                    src={customer.imageUrl || `https://api.dicebear.com/7.x/notionists/svg?seed=${customer.name}`}
                    alt={customer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-[15px] leading-tight">{customer.name}</p>
                  <p className="text-grey-50 text-[13px]">{customer.email}</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-brand-blue opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </button>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center py-4 border-t border-[#EAEEF4]">
          <button className="text-brand-blue font-semibold text-sm hover:underline">Load More</button>
        </div>

      </div>

      <AddCustomerModal isOpen={showAddCustomer} onClose={() => setShowAddCustomer(false)} />
    </div>
  );
}
