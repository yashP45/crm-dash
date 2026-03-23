import { mockProjectProgress } from "@/lib/mockData";
import { ArrowRight } from "lucide-react";

export default function ProjectTimelineCard() {
  const data = mockProjectProgress;

  return (
    <div className="bg-white rounded-[24px] p-8 shadow-sm border border-grey-10/50 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6 border-b border-grey-10/50 pb-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-lightbg shrink-0">
             {data.imageUrl && (
                 <img src={`https://api.dicebear.com/7.x/identicon/svg?seed=${data.addressTitle}`} alt="Property" className="w-full h-full object-cover" />
             )}
          </div>
          <div>
            <h3 className="font-bold text-brand-navy">{data.addressTitle}</h3>
            <p className="text-grey-50 text-sm">{data.addressSub}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-brand-blue bg-brand-blue/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
            {data.status}
          </div>
          <button className="w-8 h-8 rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue/10 transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 px-2 pt-2 pb-4 relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-6 top-6 bottom-16 w-0.5 bg-grey-10"></div>
        
        <div className="flex flex-col gap-8 relative z-10">
          {data.steps.map((step, index) => (
            <div key={step.id} className="flex gap-4 group">
              {/* Timeline Dot */}
              <div className="w-8 h-8 bg-brand-blue rounded-full shrink-0 flex items-center justify-center border-4 border-white shadow-sm mt-0.5 z-10">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              <div>
                <p className="text-grey-50 text-sm mb-1">{step.dateStr}</p>
                <p className="font-semibold text-brand-navy text-[15px]">{step.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-center">
        <button className="text-brand-blue font-bold text-sm tracking-wide hover:underline">
          Load More
        </button>
      </div>
    </div>
  );
}
