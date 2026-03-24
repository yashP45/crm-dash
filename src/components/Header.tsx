"use client";
import { useState, useRef, useEffect } from "react";
import { Search, Plus, Briefcase, Users, ArrowRight, X } from "lucide-react";
import AddCustomerModal from "./AddCustomerModal";
import AddDealModal from "./AddDealModal";

interface HeaderProps {
  title?: string;
  primaryAction?: "dropdown" | "deal" | "customer" | "none";
  leftBg?: string;
  rightBg?: string;
}

export default function Header({
  title = "Dashboard",
  primaryAction = "dropdown",
  leftBg = "bg-[#F6FAFD]",
  rightBg = "bg-white",
}: HeaderProps) {
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
    <header className="h-[70px] md:h-[90px] w-full flex items-center sticky top-0 z-40 shrink-0 border-b border-[#EAEEF4]">

      {/* Left: Title */}
      <div className={`flex-1 h-full flex items-center px-4 md:px-10 ${leftBg}`}>
        <h1 className="text-xl md:text-2xl font-bold text-brand-navy leading-tight">{title}</h1>
      </div>

      {/* Right: Actions */}
      <div className={`shrink-0 h-full flex items-center justify-end px-4 md:px-10 gap-3 ${rightBg} md:w-[417px]`}>

        {primaryAction === "deal" && (
          <button
            onClick={() => setIsDealModalOpen(true)}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white h-10 md:h-12 px-4 md:px-6 rounded-full flex items-center gap-2 transition-colors shadow-md shadow-brand-blue/20 text-sm md:text-base"
          >
            <span className="hidden sm:inline">Add New Deal</span>
            <Plus className="w-4 h-4 opacity-80" />
          </button>
        )}

        {primaryAction === "customer" && (
          <button
            onClick={() => setIsCustomerModalOpen(true)}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white h-10 md:h-12 px-4 md:px-6 rounded-full flex items-center gap-2 transition-colors shadow-md shadow-brand-blue/20 text-sm md:text-base"
          >
            <span className="hidden sm:inline">Add New Customer</span>
            <Plus className="w-4 h-4 opacity-80" />
          </button>
        )}

        {primaryAction === "dropdown" && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white h-10 md:h-12 px-4 md:px-6 rounded-full flex items-center gap-2 transition-colors shadow-md shadow-brand-blue/20 text-sm"
            >
              <span className="hidden sm:inline">Add New</span>
              <Plus className="w-4 h-4 opacity-80" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 top-14 w-[260px] md:w-[280px] bg-white border border-grey-10 rounded-2xl shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-4 duration-200">
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
                    onClick={() => { setIsDealModalOpen(true); setIsDropdownOpen(false); }}
                  >
                    <div className="flex items-center gap-4">
                      <Briefcase className="w-6 h-6 text-grey-50 group-hover:text-brand-blue transition-colors" />
                      <span className="font-semibold text-brand-navy text-[17px]">Deal</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-brand-blue" />
                  </button>

                  <button
                    className="flex items-center justify-between px-6 py-4 hover:bg-grey-10/50 transition-colors text-left group"
                    onClick={() => { setIsCustomerModalOpen(true); setIsDropdownOpen(false); }}
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

        <button className="w-10 h-10 md:w-12 md:h-12 bg-white border border-grey-10 rounded-full flex items-center justify-center text-grey-50 hover:border-brand-blue hover:text-brand-blue transition-all shrink-0">
          <Search className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white outline outline-2 outline-grey-10 overflow-hidden bg-brand-navy shrink-0 cursor-pointer">
          <img
            src="/avatar1.jpg"
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
