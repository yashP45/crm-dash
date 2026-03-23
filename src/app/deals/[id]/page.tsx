"use client";
import Header from "@/components/Header";
import { Trash2, Pencil, Calendar } from "lucide-react";

export default function DealDetailPage({ params }: { params: { id: string } }) {
  // In a real app we would fetch the specific Deal's data using the ID
  // For now we use the mock project timeline data
  return (
    <>
      <Header title="Deal Details" primaryAction="none" />
      <main className="flex-1 overflow-x-hidden p-8 max-w-[1400px] mx-auto w-full">
        
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-8">
          
          {/* Left Column: Deal Information */}
          <div className="bg-white rounded-[24px] shadow-sm border border-grey-10/50 overflow-hidden">
            
            {/* Customer Info Header */}
            <div className="flex items-center gap-12 px-10 py-8 border-b border-grey-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-grey-10 rounded-full shrink-0"></div>
                <div>
                  <p className="text-sm text-grey-50 mb-0.5">Customer</p>
                  <p className="font-bold text-brand-navy">Deanna Annis</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-grey-50 mb-0.5">Email</p>
                <p className="font-bold text-brand-navy">brodrigues@gmail.com</p>
              </div>

              <div>
                <p className="text-sm text-grey-50 mb-0.5">Phone</p>
                <p className="font-bold text-brand-navy">617-952-4069</p>
              </div>
            </div>

            {/* Title & Actions */}
            <div className="px-10 py-8 border-b border-grey-10">
              <div className="flex justify-between items-start">
                <h2 className="text-[28px] font-bold text-brand-navy leading-tight max-w-lg">
                  2893 Austin Secret Lane,<br/>Parowan, UT 12413
                </h2>
                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-full border border-grey-10 flex items-center justify-center text-grey-50 hover:text-brand-pink hover:border-brand-pink transition-colors">
                     <Trash2 className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full border border-grey-10 flex items-center justify-center text-grey-50 hover:text-brand-blue hover:border-brand-blue transition-colors">
                     <Pencil className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Deal Metrics & Details */}
            <div className="px-10 py-8 flex gap-8">
               <div className="flex-1 grid grid-cols-2 gap-y-8 gap-x-6">
                 <div>
                   <p className="text-sm text-grey-50 mb-1">Progress</p>
                   <p className="font-bold text-brand-navy">In Progress</p>
                 </div>
                 <div>
                   <p className="text-sm text-grey-50 mb-1">Appointment Date</p>
                   <p className="font-bold text-brand-navy">Nov 17, 2021 08:00</p>
                 </div>
                 
                 <div>
                   <p className="text-sm text-grey-50 mb-1">Room Area</p>
                   <p className="font-bold text-brand-navy">25 M²</p>
                 </div>
                 <div>
                   <p className="text-sm text-grey-50 mb-1">Number of people</p>
                   <p className="font-bold text-brand-navy">10</p>
                 </div>

                 <div>
                   <p className="text-sm text-grey-50 mb-1">Price</p>
                   <p className="font-bold text-brand-navy">$ 6000</p>
                 </div>
                 <div>
                   <p className="text-sm text-grey-50 mb-1">Room Access</p>
                   <p className="font-bold text-brand-navy">Keys with doorman</p>
                 </div>

                 <div className="col-span-2 pt-2">
                   <p className="text-sm text-grey-50 mb-3">Special Instructions</p>
                   <p className="text-brand-navy/80 text-[15px] leading-relaxed">
                     At risus viverra adipiscing at in tellus. Blandit massa enim nec dui nunc mattis. Lacus vel facilisis volutpat est velit.
                   </p>
                 </div>
               </div>
               
               {/* Right side gray box (Image Placeholder) */}
               <div className="w-[280px] h-[320px] bg-grey-10 rounded-2xl shrink-0">
               </div>
            </div>

          </div>

          {/* Right Column: Record Activity & Activity Log */}
          <div className="flex flex-col gap-8">
            
            {/* Record Activity Card */}
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-grey-10/50">
              <h3 className="text-[19px] font-bold text-brand-navy mb-6">Record Activity</h3>
              
              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-brand-navy font-bold text-[15px] mb-2">Description</label>
                  <input type="text" placeholder="Write your notes" className="w-full h-12 rounded-xl border border-grey-10 bg-grey-bg px-4 outline-none focus:border-brand-blue transition-colors text-sm placeholder:text-grey-50" />
                </div>
                
                <div className="relative">
                  <input type="text" defaultValue="Nov 14 2021, 10:00" className="w-full h-12 rounded-xl border border-grey-10 bg-grey-bg pl-4 pr-10 outline-none focus:border-brand-blue transition-colors text-sm text-grey-50" />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-50 pointer-events-none" />
                </div>

                <div>
                  <label className="block text-brand-navy font-bold text-[15px] mb-2">Images</label>
                  <button type="button" className="w-full h-14 bg-white border border-grey-10 hover:border-brand-blue rounded-xl flex items-center justify-center text-grey-50 font-medium text-sm transition-colors uppercase tracking-wide">
                    ADD
                  </button>
                </div>

                <div className="flex justify-end mt-2">
                   <button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold h-12 px-8 rounded-[12px] transition-colors shadow-md shadow-brand-blue/20">
                     Save
                   </button>
                </div>
              </div>
            </div>

            {/* Activity Log */}
            <div>
              <h3 className="text-[19px] font-bold text-brand-navy mb-6">Activity Log</h3>
              
              <div className="relative border-l-2 border-grey-10 ml-4 pb-4">
                 
                 {/* Activity 1 with Image */}
                 <div className="relative pl-8 mb-10 group">
                    <div className="absolute -left-[11px] top-1 w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center border-[3px] border-grey-bg">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <p className="text-sm text-grey-50 mb-1">17 Nov 2021</p>
                    <p className="font-semibold text-brand-navy text-[15px] mb-3 group-hover:text-brand-blue cursor-pointer transition-colors">Installation or inspection of your thermostat</p>
                    {/* Image placeholder */}
                    <div className="w-full h-32 bg-grey-30 rounded-xl"></div>
                 </div>

                 {/* Activity 2 */}
                 <div className="relative pl-8 mb-10 group">
                    <div className="absolute -left-[11px] top-1 w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center border-[3px] border-grey-bg">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <p className="text-sm text-grey-50 mb-1">16 Nov 2021</p>
                    <p className="font-semibold text-brand-navy text-[15px] group-hover:text-brand-blue cursor-pointer transition-colors">Installation of the new air conditioning system</p>
                 </div>

                 {/* Activity 3 */}
                 <div className="relative pl-8 mb-6 group">
                    <div className="absolute -left-[11px] top-1 w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center border-[3px] border-grey-bg">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <p className="text-sm text-grey-50 mb-1">16 Nov 2021</p>
                    <p className="font-semibold text-brand-navy text-[15px] group-hover:text-brand-blue cursor-pointer transition-colors">Evaluation and removal of the old system</p>
                 </div>

              </div>
              
              <div className="text-center mt-2">
                <button className="text-brand-blue font-semibold text-sm hover:underline">
                  Load More
                </button>
              </div>
            </div>

          </div>

        </div>
      </main>
    </>
  );
}
