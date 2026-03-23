"use client";
import { Briefcase, Calendar, Bell, LayoutDashboard, Settings, User, ListTodo } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();
  const iconClasses = "w-6 h-6 text-grey-50 group-hover:text-brand-blue transition-colors relative z-10";
  const activeIconClasses = "w-6 h-6 text-white relative z-10";

  const isDashboard = pathname === "/";
  const isDeals = pathname.startsWith("/deals");
  const isCustomers = pathname.startsWith("/customers");

  return (
    <aside className="w-[100px] bg-white border-r border-grey-10 h-[100dvh] fixed left-0 top-0 flex flex-col items-center py-6 gap-8 z-50">
      {/* Brand Logo Placeholder */}
      <div className="w-12 h-12 bg-brand-navy rounded-lg flex items-center justify-center text-white mb-4 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </div>

      <nav className="flex flex-col gap-6 w-full items-center">
        
        {/* Dashboard Link */}
        <Link href="/" className="w-12 h-12 bg-white hover:border-brand-blue border border-transparent rounded-full flex items-center justify-center group transition-all relative">
           {isDashboard && <div className="absolute inset-0 bg-brand-blue rounded-full shadow-brand-blue/30 shadow-lg"></div>}
           <LayoutDashboard className={isDashboard ? activeIconClasses : iconClasses} />
        </Link>

        {/* Deals Link */}
        <Link href="/deals" className="w-12 h-12 bg-white border border-transparent hover:border-brand-blue rounded-full flex items-center justify-center group transition-all relative">
           {isDeals && <div className="absolute inset-0 bg-brand-blue rounded-full shadow-brand-blue/30 shadow-lg"></div>}
           <Briefcase className={isDeals ? activeIconClasses : iconClasses} />
        </Link>

        {/* Customers Link */}
        <Link href="/customers" className="w-12 h-12 bg-white border border-transparent hover:border-brand-blue rounded-full flex items-center justify-center group transition-all relative">
          {isCustomers && <div className="absolute inset-0 bg-brand-blue rounded-full shadow-brand-blue/30 shadow-lg"></div>}
          <User className={isCustomers ? activeIconClasses : iconClasses} />
        </Link>

        <button className="w-12 h-12 bg-white border border-transparent hover:border-brand-blue rounded-full flex items-center justify-center group transition-colors">
          <ListTodo className={iconClasses} />
        </button>

        <button className="w-12 h-12 bg-white border border-transparent hover:border-brand-blue rounded-full flex items-center justify-center group transition-colors">
          <Calendar className={iconClasses} />
        </button>

        <button className="w-12 h-12 bg-white border border-transparent hover:border-brand-blue rounded-full flex items-center justify-center group transition-colors relative">
          <Bell className={iconClasses} />
          <span className="absolute top-3 right-3 w-2 h-2 bg-brand-pink rounded-full border-2 border-white z-20"></span>
        </button>

        <button className="w-12 h-12 bg-white border border-transparent hover:border-brand-blue rounded-full flex items-center justify-center group transition-colors mt-auto">
          <Settings className={iconClasses} />
        </button>
      </nav>
    </aside>
  );
}
