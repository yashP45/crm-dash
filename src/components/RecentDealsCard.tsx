import { mockRecentDeals } from "@/lib/mockData";
import { Building2 } from "lucide-react";
import Link from "next/link";

export default function RecentDealsCard() {
  return (
    <div className="bg-white rounded-[12px] border border-[#EAEEF4] p-6 min-h-[392px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-brand-navy">Recent Deals</h2>
        <Link href="/deals" className="text-brand-blue text-sm font-semibold hover:underline">View All</Link>
      </div>

      <div className="flex flex-col gap-6 mt-4">
        {mockRecentDeals.map((deal) => (
          <div key={deal.id} className="flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-grey-10 shrink-0 border border-grey-10/50 flex items-center justify-center text-grey-50">
                {/* Fallback icon if imageUrl doesn't load a real image */}
                <img src={`/avatar${(Number(deal.id) % 3) + 1}.jpg`} alt="Property" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy group-hover:text-brand-blue transition-colors cursor-pointer">{deal.addressTitle}</h3>
                <p className="text-grey-50 text-sm">{deal.addressSub}</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="font-bold text-brand-navy">${deal.price}</p>
              <p className="text-grey-50 text-xs mt-0.5">{deal.dateStr}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
