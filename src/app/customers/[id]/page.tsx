"use client";
import Header from "@/components/Header";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function CustomerDetailPage() {
  return (
    <div className="flex flex-col bg-[#F6FAFD]">
      <Header title="Customer Details" primaryAction="none" leftBg="bg-[#F6FAFD]" rightBg="bg-[#EEF6FB]" />

      {/* Body: Left content | Right sidebar */}
      <div className="flex items-stretch">

        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col min-w-0 p-8 gap-8">

          {/* Banner & Avatar */}
          <div
            className="relative w-full h-[180px] rounded-[12px] overflow-hidden"
            style={{ background: "#e4e9f2" }}
          >
            {/* Wave banner image */}
            <img
              src="/customer-banner.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Trash button */}
            <button className="absolute bottom-6 right-6 w-11 h-11 bg-white rounded-full flex items-center justify-center text-grey-50 hover:text-brand-pink transition-colors shadow-sm z-10">
              <Trash2 className="w-5 h-5" />
            </button>

            {/* Avatar — positioned left, overlapping banner bottom */}
            <div className="absolute -bottom-1 left-8 z-10">
              <div className="w-[120px] h-[120px] rounded-full bg-white relative shadow-md border-[4px] border-white">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Barbara" alt="Barbara Anderson" className="w-full h-full rounded-full object-cover bg-grey-bg" />
                <button className="absolute bottom-1 right-1 w-[28px] h-[28px] bg-brand-blue rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-brand-blue/90 transition-colors">
                  <Pencil className="w-[12px] h-[12px]" />
                </button>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="bg-white rounded-[12px] border border-[#EAEEF4] p-8 pt-16 mt-[-1px]">
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-brand-navy font-bold text-[15px] mb-3">First Name</label>
                <input type="text" defaultValue="Barbara" className="w-full h-12 rounded-xl border border-[#EAEEF4] bg-[#F6FAFD] px-4 outline-none focus:border-brand-blue transition-colors text-brand-navy font-medium" />
              </div>
              <div>
                <label className="block text-brand-navy font-bold text-[15px] mb-3">Last Name</label>
                <input type="text" defaultValue="Anderson" className="w-full h-12 rounded-xl border border-[#EAEEF4] bg-[#F6FAFD] px-4 outline-none focus:border-brand-blue transition-colors text-brand-navy font-medium" />
              </div>
              <div>
                <label className="block text-brand-navy font-bold text-[15px] mb-3">Email</label>
                <input type="email" defaultValue="banderson@gmail.com" className="w-full h-12 rounded-xl border border-[#EAEEF4] bg-[#F6FAFD] px-4 outline-none focus:border-brand-blue transition-colors text-brand-navy font-medium" />
              </div>
              <div>
                <label className="block text-brand-navy font-bold text-[15px] mb-3">Phone</label>
                <input type="text" defaultValue="310-685-3335" className="w-full h-12 rounded-xl border border-[#EAEEF4] bg-[#F6FAFD] px-4 outline-none focus:border-brand-blue transition-colors text-brand-navy font-medium" />
              </div>
            </div>

            <div>
              <label className="block text-brand-navy font-bold text-[15px] mb-3">Address</label>
              <input type="text" placeholder="Street Address" className="w-full h-12 rounded-xl border border-[#EAEEF4] bg-[#F6FAFD] px-4 outline-none focus:border-brand-blue transition-colors mb-4 placeholder:text-grey-50 text-brand-navy font-medium" />
              <div className="grid grid-cols-[2fr_2fr_1fr] gap-6">
                <input type="text" placeholder="City" className="w-full h-12 rounded-xl border border-[#EAEEF4] bg-[#F6FAFD] px-4 outline-none focus:border-brand-blue transition-colors placeholder:text-grey-50 text-brand-navy font-medium" />
                <input type="text" placeholder="State / Province" className="w-full h-12 rounded-xl border border-[#EAEEF4] bg-[#F6FAFD] px-4 outline-none focus:border-brand-blue transition-colors placeholder:text-grey-50 text-brand-navy font-medium" />
                <input type="text" placeholder="Zip Code" className="w-full h-12 rounded-xl border border-[#EAEEF4] bg-[#F6FAFD] px-4 outline-none focus:border-brand-blue transition-colors placeholder:text-grey-50 text-brand-navy font-medium" />
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold h-12 px-10 rounded-[12px] transition-colors shadow-md shadow-brand-blue/20">
                Save Changes
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-[417px] shrink-0 bg-[#EEF6FB] p-6 flex flex-col gap-6 min-h-screen">

          <div className="rounded-[12px] p-4 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[17px] font-bold text-brand-navy">Recent Deals</h3>
              <button className="w-9 h-9 bg-brand-blue text-white rounded-full flex items-center justify-center hover:bg-brand-blue/90 shadow-md shadow-brand-blue/20 transition-all">
                <Plus className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { seed: "319A", address: "319 Haul Road, Saint Paul, MN", img: undefined },
                { seed: "3290B", address: "3290 Levy Court, Lawrence, MA", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=150&q=80" },
                { seed: "416C", address: "416 Woodland Terra, New York, NY", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=150&q=80" },
              ].map((deal, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-[50px] h-[50px] rounded-full bg-grey-10 shrink-0 border border-[#EAEEF4] overflow-hidden">
                    <img src={deal.img ?? `https://api.dicebear.com/7.x/identicon/svg?seed=${deal.seed}`} alt="Property" className="w-full h-full object-cover" />
                  </div>
                  <div className="pt-0.5">
                    <p className="font-bold text-brand-navy text-[15px] leading-tight mb-1">{deal.address}</p>
                    <p className="text-sm text-grey-50 flex items-center gap-2">
                      Nov 14, 09:00 <span className="text-[10px]">•</span> $6000
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="text-brand-blue font-semibold text-sm hover:underline">Load More</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
