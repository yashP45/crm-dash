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
  const isTasks = pathname.startsWith("/tasks");
  const isCalendar = pathname.startsWith("/calendar");
  const isNotifications = pathname.startsWith("/notifications");
  const isSettings = pathname.startsWith("/settings");

  return (
    <aside className="w-[90px] bg-white border-r border-[#EAEEF4] h-[100dvh] fixed left-0 top-0 flex flex-col items-center z-50">
      
      {/* Logo Block - Explicit 90x90 to align with Header's 90px height */}
      <div className="w-[90px] h-[90px] flex items-center justify-center shrink-0 border-b border-[#EAEEF4]">
        <div className="w-11 h-11 bg-brand-navy rounded-xl flex items-center justify-center text-white shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
      </div>

      <nav className="flex flex-col gap-5 w-full items-center pt-8">
        
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

        <Link href="/tasks" className="w-12 h-12 bg-white border border-transparent hover:border-brand-blue rounded-full flex items-center justify-center group transition-all relative">
          {isTasks && <div className="absolute inset-0 bg-brand-blue rounded-full shadow-brand-blue/30 shadow-lg"></div>}
          <ListTodo className={isTasks ? activeIconClasses : iconClasses} />
        </Link>

        <Link href="/calendar" className="w-12 h-12 bg-white border border-transparent hover:border-brand-blue rounded-full flex items-center justify-center group transition-all relative">
          {isCalendar && <div className="absolute inset-0 bg-brand-blue rounded-full shadow-brand-blue/30 shadow-lg"></div>}
          <Calendar className={isCalendar ? activeIconClasses : iconClasses} />
        </Link>

        <Link href="/notifications" className="w-12 h-12 bg-white border border-transparent hover:border-brand-blue rounded-full flex items-center justify-center group transition-all relative">
          {isNotifications && <div className="absolute inset-0 bg-brand-blue rounded-full shadow-brand-blue/30 shadow-lg"></div>}
          <Bell className={isNotifications ? activeIconClasses : iconClasses} />
          {!isNotifications && <span className="absolute top-3 right-3 w-2 h-2 bg-brand-pink rounded-full border-2 border-white z-20"></span>}
        </Link>

        <Link href="/settings" className="w-12 h-12 bg-white border border-transparent hover:border-brand-blue rounded-full flex items-center justify-center group transition-all relative mt-auto">
          {isSettings && <div className="absolute inset-0 bg-brand-blue rounded-full shadow-brand-blue/30 shadow-lg"></div>}
          <Settings className={isSettings ? activeIconClasses : iconClasses} />
        </Link>
      </nav>
    </aside>
  );
}
