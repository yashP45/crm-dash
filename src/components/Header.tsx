"use client";
import { useState, useRef, useEffect } from "react";
import { Search, Plus, Briefcase, Users, ArrowRight, X } from "lucide-react";
import AddCustomerModal from "./AddCustomerModal";
import AddDealModal from "./AddDealModal";

interface HeaderProps {
  title?: string;
  primaryAction?: "dropdown" | "deal" | "customer" | "none";
}

export default function Header({ title = "Dashboard", primaryAction = "dropdown" }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);
  const [isDealModalOpen, setIsDealModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-[100px] w-full flex items-center justify-between px-10 bg-white border-b border-grey-10 sticky top-0 z-40 shrink-0">
      <h1 className="text-[28px] font-bold text-brand-navy tracking-tight">
        {title}
      </h1>

      <div className="flex items-center gap-4 text-sm font-medium">
        
        {primaryAction === "deal" && (
          <button 
            onClick={() => setIsDealModalOpen(true)}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white h-12 px-6 rounded-full flex items-center gap-2 transition-colors shadow-md shadow-brand-blue/20"
          >
            Add New Deal <Plus className="w-4 h-4 ml-1 opacity-80" />
          </button>
        )}

        {primaryAction === "customer" && (
          <button 
            onClick={() => setIsCustomerModalOpen(true)}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white h-12 px-6 rounded-full flex items-center gap-2 transition-colors shadow-md shadow-brand-blue/20"
          >
            Add New Customer <Plus className="w-4 h-4 ml-1 opacity-80" />
          </button>
        )}

        {primaryAction === "dropdown" && (
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white h-12 px-6 rounded-full flex items-center gap-2 transition-colors shadow-md shadow-brand-blue/20"
            >
              Add New <Plus className="w-4 h-4 ml-1 opacity-80" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 top-14 w-[280px] bg-white border border-grey-10 rounded-2xl shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-4 duration-200">
                <div className="flex items-center justify-between px-6 py-4 border-b border-grey-10 bg-grey-bg/50">
                  <span className="font-semibold text-brand-navy text-lg">Add New</span>
                  <button 
                    onClick={() => setIsDropdownOpen(false)}
                    className="w-6 h-6 bg-grey-50/20 hover:bg-grey-50/40 rounded-full flex items-center justify-center text-grey-70 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" strokeWidth={3} />
                  </button>
                </div>
                
                <div className="flex flex-col">
                  <button 
                    className="flex items-center justify-between px-6 py-4 border-b border-grey-10 hover:bg-grey-10/50 transition-colors text-left group"
                    onClick={() => {
                      setIsDealModalOpen(true);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <Briefcase className="w-6 h-6 text-grey-50 group-hover:text-brand-blue transition-colors" />
                      <span className="font-semibold text-brand-navy text-[17px]">Deal</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-brand-blue" />
                  </button>
                  
                  <button 
                    className="flex items-center justify-between px-6 py-4 hover:bg-grey-10/50 transition-colors text-left group"
                    onClick={() => {
                      setIsCustomerModalOpen(true);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <Users className="w-6 h-6 text-grey-50 group-hover:text-brand-blue transition-colors" />
                      <span className="font-semibold text-brand-navy text-[17px]">Customer</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-brand-blue" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        <button className="w-12 h-12 bg-white border border-grey-10 rounded-full flex items-center justify-center text-grey-50 hover:border-brand-blue hover:text-brand-blue transition-all">
          <Search className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full border-2 border-white outline outline-2 outline-grey-10 overflow-hidden bg-brand-navy ml-2 shrink-0 cursor-pointer">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=4F46E5" 
            alt="User avatar" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <AddCustomerModal isOpen={isCustomerModalOpen} onClose={() => setIsCustomerModalOpen(false)} />
      <AddDealModal isOpen={isDealModalOpen} onClose={() => setIsDealModalOpen(false)} />
      
    </header>
  );
}
