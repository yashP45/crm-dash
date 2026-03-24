"use client";
import { useState } from "react";
import { Pencil, Filter, ChevronDown } from "lucide-react";
import Link from "next/link";
import EditDealModal from "./EditDealModal";

const dealsData = [
  { id: 1, name: "475 Spruce Drive, Pittsburgh, PA 23592",    address: "475 Spruce Drive",    city: "Pittsburgh", state: "PA", zip: "23592", area: "100 M²", roomArea: "100", people: 4,  date: "Nov 14, 2021 07:00 AM", appointmentDate: "Nov 14, 2021 07:00", price: "$6000", priceNum: 6000, status: "IN PROGRESS", progress: "In Progress", roomAccess: "Keys with doorman", specialInstructions: "" },
  { id: 2, name: "1952 Chicago Avenue, Fresno, CA 93711",     address: "1952 Chicago Avenue",  city: "Fresno",     state: "CA", zip: "93711", area: "100 M²", roomArea: "100", people: 6,  date: "Nov 15, 2021 08:00 AM", appointmentDate: "Nov 15, 2021 08:00", price: "$6000", priceNum: 6000, status: "CLOSED",      progress: "Completed",   roomAccess: "Smart Lock",         specialInstructions: "" },
  { id: 3, name: "4409 Haul Road, Saint Paul, MN 55102",     address: "4409 Haul Road",       city: "Saint Paul", state: "MN", zip: "55102", area: "100 M²", roomArea: "100", people: 8,  date: "Nov 16, 2021 09:00 AM", appointmentDate: "Nov 16, 2021 09:00", price: "$6000", priceNum: 6000, status: "IN PROGRESS", progress: "In Progress", roomAccess: "Keys with doorman", specialInstructions: "" },
  { id: 4, name: "579 Godfrey Street, Monitor, OR 97071",    address: "579 Godfrey Street",   city: "Monitor",    state: "OR", zip: "97071", area: "100 M²", roomArea: "100", people: 3,  date: "Nov 17, 2021 10:00 AM", appointmentDate: "Nov 17, 2021 10:00", price: "$6000", priceNum: 6000, status: "CLOSED",      progress: "Completed",   roomAccess: "Building Reception", specialInstructions: "" },
  { id: 5, name: "2705 Cantebury Drive, New York, NY 10011", address: "2705 Cantebury Drive", city: "New York",   state: "NY", zip: "10011", area: "100 M²", roomArea: "100", people: 10, date: "Nov 20, 2021 07:00 AM", appointmentDate: "Nov 20, 2021 07:00", price: "$6000", priceNum: 6000, status: "IN PROGRESS", progress: "In Progress", roomAccess: "Smart Lock",         specialInstructions: "" },
  { id: 6, name: "579 Godfrey Street, Monitor, OR 97071",    address: "579 Godfrey Street",   city: "Monitor",    state: "OR", zip: "97071", area: "100 M²", roomArea: "100", people: 5,  date: "Nov 17, 2021 10:00 AM", appointmentDate: "Nov 17, 2021 10:00", price: "$6000", priceNum: 6000, status: "CLOSED",      progress: "Completed",   roomAccess: "Keys with doorman",  specialInstructions: "" },
  { id: 7, name: "2705 Cantebury Drive, New York, NY 10011", address: "2705 Cantebury Drive", city: "New York",   state: "NY", zip: "10011", area: "100 M²", roomArea: "100", people: 7,  date: "Nov 20, 2021 07:00 AM", appointmentDate: "Nov 20, 2021 07:00", price: "$6000", priceNum: 6000, status: "IN PROGRESS", progress: "In Progress", roomAccess: "Building Reception", specialInstructions: "" },
];

export default function DealsListView() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<any>(null);

  const handleEdit = (deal: typeof dealsData[0]) => {
    setSelectedDeal({
      address: deal.address,
      city: deal.city,
      state: deal.state,
      zip: deal.zip,
      roomArea: deal.roomArea,
      people: deal.people,
      appointmentDate: deal.appointmentDate,
      specialInstructions: deal.specialInstructions,
      roomAccess: deal.roomAccess,
      price: deal.priceNum,
      progress: deal.progress,
    });
    setIsEditModalOpen(true);
  };

  return (
    <>
      <div className="w-full">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 md:mb-8">
          <h2 className="font-bold text-brand-navy text-[15px] md:text-base">Total: 136 deals</h2>

          <div className="flex items-center gap-3">
            <button className="flex items-center justify-between gap-2 h-[44px] md:h-[50px] px-4 md:pl-[25px] md:pr-[20px] w-auto md:w-[235px] rounded-[30px] border border-[#EAEEF4] bg-white hover:border-brand-blue text-brand-navy font-medium text-sm transition-colors shadow-sm">
              <span className="hidden sm:inline">Sort by: Date Created</span>
              <span className="sm:hidden">Sort</span>
              <ChevronDown className="w-4 h-4 text-grey-50 shrink-0" />
            </button>
            <button className="flex items-center justify-between gap-2 h-[44px] md:h-[50px] px-4 md:pl-[25px] md:pr-[20px] rounded-[30px] border border-[#EAEEF4] bg-white hover:border-brand-blue text-brand-navy font-medium text-sm transition-colors shadow-sm">
              <span>Filter</span>
              <Filter className="w-4 h-4 text-grey-50 shrink-0" />
            </button>
          </div>
        </div>

        {/* ── Desktop Table (md+) ── */}
        <div className="hidden md:block">
          {/* List Header */}
          <div className="grid grid-cols-[3fr_1fr_2fr_1fr_1.5fr_0.5fr] gap-4 mb-4 px-6 text-grey-50 font-medium text-[15px]">
            <div className="pl-14">Name</div>
            <div>Area</div>
            <div>Appointment Date</div>
            <div>Price</div>
            <div>Status</div>
            <div>Edit</div>
          </div>

          {/* List Rows */}
          <div className="flex flex-col">
            {dealsData.map((deal) => (
              <div key={deal.id} className="grid grid-cols-[3fr_1fr_2fr_1fr_1.5fr_0.5fr] gap-6 pl-3 pr-6 h-[79px] items-center border-b border-[#EAEEF4] hover:bg-brand-blue/5 transition-colors group">
                <div className="flex items-center gap-4">
                  <Link href={`/deals/${deal.id}`} className="w-10 h-10 rounded-full bg-grey-10 shrink-0 overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                    <img src={`/avatar${(deal.id % 3) + 1}.jpg`} alt="Thumb" className="w-full h-full object-cover" />
                  </Link>
                  <Link href={`/deals/${deal.id}`}>
                    <span className="text-brand-navy font-semibold text-[15px] hover:text-brand-blue transition-colors cursor-pointer">{deal.name}</span>
                  </Link>
                </div>
                <div className="text-brand-navy font-bold text-[15px]">{deal.area}</div>
                <div className="text-brand-navy font-semibold text-[15px]">{deal.date}</div>
                <div className="text-brand-navy font-bold text-[15px]">{deal.price}</div>
                <div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase ${deal.status === "IN PROGRESS" ? "bg-brand-blue/10 text-brand-blue" : "bg-brand-navy/5 text-brand-navy/60"}`}>
                    {deal.status}
                  </span>
                </div>
                <div>
                  <button
                    onClick={() => handleEdit(deal)}
                    className="w-10 h-10 rounded-full flex items-center border border-transparent justify-center text-grey-50 hover:text-brand-blue hover:bg-grey-10 transition-colors"
                  >
                    <Pencil className="w-[18px] h-[18px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile Card List (< md) ── */}
        <div className="flex flex-col gap-3 md:hidden">
          {dealsData.map((deal) => (
            <div key={deal.id} className="bg-white rounded-2xl border border-[#EAEEF4] p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <Link href={`/deals/${deal.id}`} className="w-11 h-11 rounded-full bg-grey-10 shrink-0 overflow-hidden">
                  <img src={`/avatar${(deal.id % 3) + 1}.jpg`} alt="Thumb" className="w-full h-full object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link href={`/deals/${deal.id}`}>
                    <p className="font-bold text-brand-navy text-[14px] hover:text-brand-blue transition-colors leading-snug">{deal.name}</p>
                  </Link>
                  <p className="text-grey-50 text-xs mt-1">{deal.date}</p>
                </div>
                <button
                  onClick={() => handleEdit(deal)}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-grey-50 hover:text-brand-blue hover:bg-grey-10 transition-colors shrink-0"
                >
                  <Pencil className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#EAEEF4]">
                <div>
                  <p className="text-grey-50 text-xs">Area</p>
                  <p className="font-bold text-brand-navy text-sm">{deal.area}</p>
                </div>
                <div>
                  <p className="text-grey-50 text-xs">Price</p>
                  <p className="font-bold text-brand-navy text-sm">{deal.price}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${deal.status === "IN PROGRESS" ? "bg-brand-blue/10 text-brand-blue" : "bg-brand-navy/5 text-brand-navy/60"}`}>
                  {deal.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-center">
          <button className="px-8 py-3 rounded-full border border-grey-10 bg-white hover:border-brand-blue hover:text-brand-blue text-brand-navy font-bold text-sm transition-colors shadow-sm">
            Load More
          </button>
        </div>
      </div>

      <EditDealModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        deal={selectedDeal}
      />
    </>
  );
}
