"use client";
import Header from "@/components/Header";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function CustomerDetailPage() {
  return (
    <>
      <Header title="Customer Details" primaryAction="none" />
      <main className="flex-1 overflow-x-hidden p-8 max-w-[1400px] mx-auto w-full">
        
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-8">
          
          {/* Left Column: Customer Form Details */}
          <div className="flex flex-col gap-10">
            
            {/* Banner & Avatar Profile */}
            <div className="relative w-full h-[180px] rounded-[24px] bg-gradient-to-br from-grey-20 to-grey-10 shadow-sm overflow-hidden flex items-end">
              {/* Fake abstract waves via simple div positioning since no image provided */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
              
              {/* Trash button on bottom right */}
              <button className="absolute bottom-6 right-6 w-11 h-11 bg-white rounded-full flex items-center justify-center text-grey-50 hover:text-brand-pink transition-colors shadow-sm">
                 <Trash2 className="w-5 h-5" />
              </button>

              {/* Avatar overlapping bottom left */}
              <div className="absolute -bottom-10 left-10">
                 <div className="w-[100px] h-[100px] rounded-full bg-white relative shadow-sm border-[4px] border-white">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Barbara" alt="Barbara Anderson" className="w-full h-full rounded-full object-cover bg-grey-bg" />
                    
                    {/* Pencil Edit Icon */}
                    <button className="absolute bottom-0 right-0 w-[26px] h-[26px] bg-brand-blue rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-brand-blue/90 transition-colors">
                       <Pencil className="w-[11px] h-[11px]" />
                    </button>
                 </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="bg-white rounded-[24px] p-8 mt-4 shadow-sm border border-grey-10/50">
               
               <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-brand-navy font-bold text-[15px] mb-3">First Name</label>
                    <input type="text" defaultValue="Barbara" className="w-full h-12 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors text-grey-50 font-medium" />
                  </div>
                  <div>
                    <label className="block text-brand-navy font-bold text-[15px] mb-3">Last Name</label>
                    <input type="text" defaultValue="Anderson" className="w-full h-12 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors text-grey-50 font-medium" />
                  </div>
                  <div>
                    <label className="block text-brand-navy font-bold text-[15px] mb-3">Email</label>
                    <input type="email" defaultValue="banderson@gmail.com" className="w-full h-12 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors text-grey-50 font-medium" />
                  </div>
                  <div>
                    <label className="block text-brand-navy font-bold text-[15px] mb-3">Phone</label>
                    <input type="text" defaultValue="310-685-3335" className="w-full h-12 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors text-grey-50 font-medium" />
                  </div>
               </div>

               <div>
                 <label className="block text-brand-navy font-bold text-[15px] mb-3">Address</label>
                 <input type="text" placeholder="Street Address" className="w-full h-12 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors mb-4 placeholder:text-grey-50 text-grey-50 font-medium" />
                 
                 <div className="grid grid-cols-[2fr_2fr_1fr] gap-6">
                   <input type="text" placeholder="City" className="w-full h-12 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors placeholder:text-grey-50 text-grey-50 font-medium" />
                   <input type="text" placeholder="State / Province" className="w-full h-12 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors placeholder:text-grey-50 text-grey-50 font-medium" />
                   <input type="text" placeholder="Zip Code" className="w-full h-12 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors placeholder:text-grey-50 text-grey-50 font-medium" />
                 </div>
               </div>

            </div>
          </div>

          {/* Right Column: Recent Deals */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-8 px-2">
               <h3 className="text-xl font-bold text-brand-navy">Recent Deals</h3>
               <button className="w-9 h-9 bg-brand-blue text-white rounded-full flex items-center justify-center hover:bg-brand-blue/90 shadow-md shadow-brand-blue/20 transition-all">
                  <Plus className="w-5 h-5" />
               </button>
            </div>
            
            <div className="flex flex-col gap-6 pl-2">
              
              {/* Deal 1 */}
              <div className="flex items-start gap-4">
                 <div className="w-[50px] h-[50px] rounded-full bg-grey-10 shrink-0 border border-grey-10 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/identicon/svg?seed=319A" alt="Property" className="w-full h-full object-cover" />
                 </div>
                 <div className="pt-0.5">
                   <p className="font-bold text-brand-navy text-[15px] leading-tight mb-1">319 Haul Road, Saint Paul, MN</p>
                   <p className="text-sm text-grey-50 flex items-center gap-2">
                     Nov 14, 09:00 <span className="text-[10px]">•</span> $ 6000
                   </p>
                 </div>
              </div>

              {/* Deal 2 */}
              <div className="flex items-start gap-4">
                 <div className="w-[50px] h-[50px] rounded-full bg-grey-10 shrink-0 border border-grey-10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=150&q=80" alt="Property" className="w-full h-full object-cover" />
                 </div>
                 <div className="pt-0.5">
                   <p className="font-bold text-brand-navy text-[15px] leading-tight mb-1">3290 Levy Court, Lawrence, MA</p>
                   <p className="text-sm text-grey-50 flex items-center gap-2">
                     Nov 14, 09:00 <span className="text-[10px]">•</span> $ 6000
                   </p>
                 </div>
              </div>

              {/* Deal 3 */}
              <div className="flex items-start gap-4">
                 <div className="w-[50px] h-[50px] rounded-full bg-grey-10 shrink-0 border border-grey-10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=150&q=80" alt="Property" className="w-full h-full object-cover" />
                 </div>
                 <div className="pt-0.5">
                   <p className="font-bold text-brand-navy text-[15px] leading-tight mb-1">416 Woodland Terra, New York, NY</p>
                   <p className="text-sm text-grey-50 flex items-center gap-2">
                     Nov 14, 09:00 <span className="text-[10px]">•</span> $ 6000
                   </p>
                 </div>
              </div>

            </div>

            <div className="text-center mt-10">
               <button className="text-brand-blue font-semibold text-sm hover:underline transition-all">
                  Load More
               </button>
            </div>

          </div>

        </div>
      </main>
    </>
  );
}
