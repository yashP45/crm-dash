"use client";
import { useState } from "react";
import { Pencil, Filter, ChevronDown } from "lucide-react";
import Link from "next/link";
import EditDealModal from "./EditDealModal";

// Extracted from screenshot to replicate the exact table rows
const dealsData = [
  { id: 1, name: "475 Spruce Drive, Pittsburgh, PA 23592", area: "100 M²", date: "Nov 14, 2021 07:00 AM", price: "$6000", status: "IN PROGRESS" },
  { id: 2, name: "1952 Chicago Avenue, Fresno, CA 93711", area: "100 M²", date: "Nov 15, 2021 08:00 AM", price: "$6000", status: "CLOSED" },
  { id: 3, name: "4409 Haul Road, Saint Paul, MN 55102", area: "100 M²", date: "Nov 16, 2021 09:00 AM", price: "$6000", status: "IN PROGRESS" },
  { id: 4, name: "579 Godfrey Street, Monitor, OR 97071", area: "100 M²", date: "Nov 17, 2021 10:00 AM", price: "$6000", status: "CLOSED" },
  { id: 5, name: "2705 Cantebury Drive, New York, NY 10011", area: "100 M²", date: "Nov 20, 2021 07:00 AM", price: "$6000", status: "IN PROGRESS" },
  { id: 6, name: "579 Godfrey Street, Monitor, OR 97071", area: "100 M²", date: "Nov 17, 2021 10:00 AM", price: "$6000", status: "CLOSED" },
  { id: 7, name: "2705 Cantebury Drive, New York, NY 10011", area: "100 M²", date: "Nov 20, 2021 07:00 AM", price: "$6000", status: "IN PROGRESS" },
];

export default function DealsListView() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<any>(null);

  const handleEdit = (deal: any) => {
    setSelectedDeal(deal);
    setIsEditModalOpen(true);
  };

  return (
    <>
      <div className="w-full">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-bold text-brand-navy">Total: 136 deals</h2>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-between gap-2 px-6 h-12 rounded-full border border-grey-10 bg-white hover:border-brand-blue text-brand-navy font-medium text-sm transition-colors">
              <span>Sort by: Date Created</span>
              <ChevronDown className="w-4 h-4 text-grey-50" />
            </button>
            <button className="flex items-center justify-between gap-2 px-6 h-12 rounded-full border border-grey-10 bg-white hover:border-brand-blue text-brand-navy font-medium text-sm transition-colors">
              <span>Filter</span>
              <Filter className="w-4 h-4 text-grey-50" />
            </button>
          </div>
        </div>

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
        <div className="flex flex-col gap-4">
          {dealsData.map((deal) => (
            <div key={deal.id} className="grid grid-cols-[3fr_1fr_2fr_1fr_1.5fr_0.5fr] gap-4 bg-white rounded-2xl p-4 items-center border border-grey-10/50 shadow-sm hover:shadow-md transition-shadow">
              
              <div className="flex items-center gap-4">
                <Link href={`/deals/${deal.id}`} className="w-10 h-10 rounded-full bg-grey-10 shrink-0 overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                   <img src={`https://api.dicebear.com/7.x/identicon/svg?seed=${deal.id}A`} alt="Thumb" className="w-full h-full object-cover" />
                </Link>
                <Link href={`/deals/${deal.id}`}>
                   <span className="text-brand-navy font-semibold text-[15px] hover:text-brand-blue transition-colors cursor-pointer">{deal.name}</span>
                </Link>
              </div>
              
              <div className="text-brand-navy font-bold text-[15px]">{deal.area}</div>
              <div className="text-brand-navy font-semibold text-[15px]">{deal.date}</div>
              <div className="text-brand-navy font-bold text-[15px]">{deal.price}</div>
              
              <div>
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase ${deal.status === 'IN PROGRESS' ? 'bg-brand-blue/10 text-brand-blue' : 'bg-brand-navy/5 text-brand-navy/60'}`}>
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
