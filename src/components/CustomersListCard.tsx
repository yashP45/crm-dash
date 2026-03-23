import { mockCustomers } from "@/lib/mockData";
import { Pencil } from "lucide-react";
import Link from "next/link";

export default function CustomersListCard() {
  return (
    <div className="h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-brand-navy">Customers</h2>
        <button className="text-brand-blue text-sm font-semibold hover:underline">View All</button>
      </div>

      <div className="flex flex-col gap-6 mt-6">
        {mockCustomers.map((customer) => (
          <div key={customer.id} className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <Link href={`/customers/${customer.id}`}>
                <div className="w-10 h-10 rounded-full bg-grey-10 overflow-hidden shrink-0 hover:scale-105 transition-transform">
                  <img 
                    src={customer.imageUrl || `https://api.dicebear.com/7.x/notionists/svg?seed=${customer.name}`} 
                    alt={customer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div>
                <Link href={`/customers/${customer.id}`}>
                  <p className="font-bold text-brand-navy text-[15px] leading-tight hover:text-brand-blue transition-colors">{customer.name}</p>
                </Link>
                <p className="text-sm font-medium text-grey-50">{customer.email}</p>
              </div>
            </div>
            
            <button className="w-8 h-8 rounded-full border border-grey-10 flex items-center justify-center text-grey-50 hover:bg-grey-10 hover:text-brand-blue transition-colors outline-none shrink-0">
              <Pencil className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
