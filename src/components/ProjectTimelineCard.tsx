import { mockProjectProgress } from "@/lib/mockData";
import { ArrowRight } from "lucide-react";

export default function ProjectTimelineCard() {
  const data = mockProjectProgress;

  return (
    <div className="bg-white rounded-[12px] border border-[#EAEEF4] p-4 sm:p-6 flex flex-col">
      {/* Header Row */}
      <div className="flex justify-between items-center gap-2 pb-4 sm:pb-5 border-b border-[#EAEEF4] mb-4 sm:mb-5">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-grey-10 shrink-0">
            <img src="/avatar2.jpg" alt="Property" className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-brand-navy text-[13px] sm:text-[15px] truncate">{data.addressTitle}</h3>
            <p className="text-grey-50 text-[11px] sm:text-[13px] truncate">{data.addressSub}</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <div className="text-brand-blue bg-brand-blue/10 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wide uppercase whitespace-nowrap">
            {data.status}
          </div>
          <button className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue/10 transition-colors">
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="relative pl-6">
        {/* Vertical Line */}
        <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-grey-10 rounded-full"></div>
        
        <div className="flex flex-col gap-6">
          {data.steps.map((step) => (
            <div key={step.id} className="flex gap-4 relative">
              {/* Timeline Dot — compact, matches screenshot */}
              <div className="w-[18px] h-[18px] bg-brand-blue rounded-full shrink-0 flex items-center justify-center border-[3px] border-white shadow-sm absolute -left-6 top-0.5 z-10">
                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              </div>
              
              <div className="pl-1">
                <p className="text-grey-50 text-[13px] mb-0.5">{step.dateStr}</p>
                <p className="font-medium text-brand-navy text-[14px]">{step.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More — pinned to bottom */}
      <div className="mt-auto pt-6 text-center">
        <button className="text-brand-blue font-bold text-sm hover:underline tracking-wide">
          Load More
        </button>
      </div>
    </div>
  );
}
