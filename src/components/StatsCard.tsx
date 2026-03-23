import { Users, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: number;
  type: "customers" | "deals";
}

export default function StatsCard({ title, value, type }: StatsCardProps) {
  const isCustomers = type === "customers";
  
  return (
    <div className="bg-white rounded-[24px] p-8 shadow-sm border border-grey-10/50 flex flex-col justify-between h-full relative overflow-hidden">
      <p className="text-grey-50 font-medium text-lg relative z-10">{title}</p>
      
      <div className="flex items-end justify-between mt-6 relative z-10 w-full">
        <h2 className="text-5xl font-bold tracking-tight text-brand-navy">{value}</h2>
        
        <div className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center shrink-0 shadow-lg",
          isCustomers 
            ? "bg-gradient-to-br from-brand-green/20 to-brand-green/5 text-brand-green shadow-brand-green/10" 
            : "bg-gradient-to-br from-brand-pink/20 to-brand-pink/5 text-brand-pink shadow-brand-pink/10"
        )}>
          {isCustomers ? (
            <Users className="w-7 h-7" strokeWidth={2.5} />
          ) : (
             <Briefcase className="w-7 h-7" strokeWidth={2.5} />
          )}
        </div>
      </div>
      
      {/* Soft decorative blur circles */}
      <div className={cn(
        "absolute -right-6 -bottom-6 w-32 h-32 rounded-full blur-2xl opacity-40 mix-blend-multiply",
        isCustomers ? "bg-brand-green/30" : "bg-brand-pink/30"
      )}></div>
    </div>
  );
}
