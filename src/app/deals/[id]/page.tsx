"use client";
import { useState } from "react";
import Header from "@/components/Header";
import EditDealModal from "@/components/EditDealModal";
import { Trash2, Pencil, Calendar } from "lucide-react";

const dealData = {
  address: "2893 Austin Secret Lane",
  city: "Parowan",
  state: "UT",
  zip: "12413",
  roomArea: "25",
  people: 10,
  appointmentDate: "Nov 17, 2021 08:00",
  specialInstructions: "At risus viverra adipiscing at in tellus. Blandit massa enim nec dui nunc mattis. Lacus vel facilisis volutpat est velit.",
  roomAccess: "Keys with doorman",
  price: 6000,
  progress: "In Progress",
};

export default function DealDetailPage({ params }: { params: { id: string } }) {
  const [editOpen, setEditOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col bg-[#F6FAFD]">
        <Header title="Deal Details" primaryAction="none" leftBg="bg-[#F6FAFD]" rightBg="bg-[#EEF6FB]" />

        {/* Body: flex-col on mobile, flex-row on lg+ */}
        <div className="flex flex-col lg:flex-row lg:items-stretch">

          {/* LEFT COLUMN */}
          <div className="flex-1 flex flex-col min-w-0">

            {/* Customer Info Strip */}
            <div className="flex flex-wrap items-center gap-6 md:gap-16 px-4 md:px-8 py-5 bg-[#F6FAFD] border-b border-[#EAEEF4] shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-grey-10 rounded-full shrink-0 overflow-hidden">
                  <img src="/avatar1.jpg" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[13px] text-grey-50">Customer</p>
                  <p className="font-bold text-brand-navy text-[15px]">Deanna Annis</p>
                </div>
              </div>
              <div>
                <p className="text-[13px] text-grey-50">Email</p>
                <p className="font-bold text-brand-navy text-[15px]">brodrigues@gmail.com</p>
              </div>
              <div>
                <p className="text-[13px] text-grey-50">Phone</p>
                <p className="font-bold text-brand-navy text-[15px]">617-952-4069</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-8">
              {/* Address + Action Buttons */}
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <h2 className="text-[22px] md:text-[28px] font-bold text-brand-navy leading-tight">
                  {dealData.address},<br />{dealData.city}, {dealData.state} {dealData.zip}
                </h2>
                <div className="flex gap-3 mt-1 shrink-0">
                  <button className="w-10 h-10 rounded-full border border-[#EAEEF4] flex items-center justify-center text-grey-50 hover:text-brand-pink hover:border-brand-pink transition-colors bg-white">
                    <Trash2 className="w-[18px] h-[18px]" />
                  </button>
                  <button
                    onClick={() => setEditOpen(true)}
                    className="w-10 h-10 rounded-full border border-[#EAEEF4] flex items-center justify-center text-grey-50 hover:text-brand-blue hover:border-brand-blue transition-colors bg-white"
                  >
                    <Pencil className="w-[18px] h-[18px]" />
                  </button>
                </div>
              </div>

              {/* Deal Info Grid + Image */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex-1 grid grid-cols-2 gap-y-6 md:gap-y-8 gap-x-6">
                  <div>
                    <p className="text-[13px] text-grey-50 mb-1">Progress</p>
                    <p className="font-bold text-brand-navy text-[15px]">{dealData.progress}</p>
                  </div>
                  <div>
                    <p className="text-[13px] text-grey-50 mb-1">Appointment Date</p>
                    <p className="font-bold text-brand-navy text-[15px]">{dealData.appointmentDate}</p>
                  </div>
                  <div>
                    <p className="text-[13px] text-grey-50 mb-1">Room Area</p>
                    <p className="font-bold text-brand-navy text-[15px]">{dealData.roomArea} M²</p>
                  </div>
                  <div>
                    <p className="text-[13px] text-grey-50 mb-1">Number of people</p>
                    <p className="font-bold text-brand-navy text-[15px]">{dealData.people}</p>
                  </div>
                  <div>
                    <p className="text-[13px] text-grey-50 mb-1">Price</p>
                    <p className="font-bold text-brand-navy text-[15px]">$ {dealData.price}</p>
                  </div>
                  <div>
                    <p className="text-[13px] text-grey-50 mb-1">Room Access</p>
                    <p className="font-bold text-brand-navy text-[15px]">{dealData.roomAccess}</p>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-[#EAEEF4]">
                    <p className="text-[13px] text-grey-50 mb-3">Special Instructions</p>
                    <p className="text-brand-navy/80 text-[15px] leading-relaxed">{dealData.specialInstructions}</p>
                  </div>
                </div>
                {/* Property Image */}
                <div className="w-full md:w-[240px] h-[200px] md:h-[280px] bg-[#EAEEF4] rounded-[12px] shrink-0" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR — full width on mobile, fixed 417px on lg+ */}
          <div className="lg:w-[417px] shrink-0 bg-[#EEF6FB] p-4 md:p-6 flex flex-col gap-6 lg:min-h-screen">

            {/* Record Activity Card */}
            <div className="bg-white rounded-[12px] border border-[#EAEEF4] p-6">
              <h3 className="text-[17px] font-bold text-brand-navy mb-5">Record Activity</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-brand-navy font-bold text-[14px] mb-2">Description</label>
                  <input type="text" placeholder="Write your notes" className="w-full h-12 rounded-[10px] border border-[#EAEEF4] bg-[#F6FAFD] px-4 outline-none focus:border-brand-blue transition-colors text-sm placeholder:text-grey-50" />
                </div>
                <div className="relative">
                  <input type="text" defaultValue="Nov 14 2021, 10:00" className="w-full h-12 rounded-[10px] border border-[#EAEEF4] bg-[#F6FAFD] pl-4 pr-10 outline-none focus:border-brand-blue transition-colors text-sm text-grey-50" />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-50 pointer-events-none" />
                </div>
                <div>
                  <label className="block text-brand-navy font-bold text-[14px] mb-2">Images</label>
                  <button type="button" className="w-full h-12 bg-[#F6FAFD] border border-[#EAEEF4] hover:border-brand-blue rounded-[10px] flex items-center justify-center text-grey-50 font-medium text-sm transition-colors uppercase tracking-wide">ADD</button>
                </div>
                <div className="flex justify-end">
                  <button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold h-11 px-8 rounded-[70px] transition-colors shadow-md shadow-brand-blue/20 text-[14px]">Save</button>
                </div>
              </div>
            </div>

            {/* Activity Log */}
            <div className="bg-white rounded-[12px] border border-[#EAEEF4] p-6 flex flex-col">
              <h3 className="text-[17px] font-bold text-brand-navy mb-5">Activity Log</h3>
              <div className="relative border-l-2 border-[#EAEEF4] ml-2">
                <div className="relative pl-7 mb-8 group">
                  <div className="absolute -left-[11px] top-1 w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center border-[3px] border-white shadow-sm">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  <p className="text-[13px] text-grey-50 mb-1">17 Nov 2021</p>
                  <p className="font-semibold text-brand-navy text-[14px] mb-3 group-hover:text-brand-blue cursor-pointer transition-colors">Installation or inspection of your thermostat</p>
                  <div className="w-full h-28 bg-[#EAEEF4] rounded-[10px]" />
                </div>
                <div className="relative pl-7 mb-8 group">
                  <div className="absolute -left-[11px] top-1 w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center border-[3px] border-white shadow-sm">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  <p className="text-[13px] text-grey-50 mb-1">16 Nov 2021</p>
                  <p className="font-semibold text-brand-navy text-[14px] group-hover:text-brand-blue cursor-pointer transition-colors">Installation of the new air conditioning system</p>
                </div>
                <div className="relative pl-7 group">
                  <div className="absolute -left-[11px] top-1 w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center border-[3px] border-white shadow-sm">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  <p className="text-[13px] text-grey-50 mb-1">16 Nov 2021</p>
                  <p className="font-semibold text-brand-navy text-[14px] group-hover:text-brand-blue cursor-pointer transition-colors">Evaluation and removal of the old system</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <button className="text-brand-blue font-semibold text-sm hover:underline">Load More</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <EditDealModal isOpen={editOpen} onClose={() => setEditOpen(false)} deal={dealData} />
    </>
  );
}
