"use client";
import { Briefcase, Calendar, Bell, LayoutDashboard, Settings, User, ListTodo } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();

  const isDashboard = pathname === "/";
  const isDeals = pathname.startsWith("/deals");
  const isCustomers = pathname.startsWith("/customers");
  const isTasks = pathname.startsWith("/tasks");
  const isCalendar = pathname.startsWith("/calendar");
  const isNotifications = pathname.startsWith("/notifications");
  const isSettings = pathname.startsWith("/settings");

  const navLinks = [
    { href: "/", icon: LayoutDashboard, active: isDashboard },
    { href: "/deals", icon: Briefcase, active: isDeals },
    { href: "/customers", icon: User, active: isCustomers },
    { href: "/tasks", icon: ListTodo, active: isTasks },
    { href: "/calendar", icon: Calendar, active: isCalendar },
    { href: "/notifications", icon: Bell, active: isNotifications, badge: true },
  ];

  const iconCls = "w-6 h-6 text-grey-50 group-hover:text-brand-blue transition-colors relative z-10";
  const activeIconCls = "w-6 h-6 text-white relative z-10";

  const NavLink = ({
    href,
    icon: Icon,
    active,
    badge,
  }: {
    href: string;
    icon: React.ElementType;
    active: boolean;
    badge?: boolean;
  }) => (
    <Link
      href={href}
      className="w-12 h-12 bg-white border border-transparent hover:border-brand-blue rounded-full flex items-center justify-center group transition-all relative"
    >
      {active && (
        <div className="absolute inset-0 bg-brand-blue rounded-full shadow-brand-blue/30 shadow-lg" />
      )}
      <Icon className={active ? activeIconCls : iconCls} />
      {badge && !active && (
        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-brand-pink rounded-full border-2 border-white z-20" />
      )}
    </Link>
  );

  return (
    <>
      {/* ── Desktop: vertical left rail (hidden on mobile) ── */}
      <aside className="hidden md:flex w-[90px] bg-white border-r border-[#EAEEF4] h-[100dvh] fixed left-0 top-0 flex-col items-center z-50">
        {/* Logo */}
        <div className="w-[90px] h-[90px] flex items-center justify-center shrink-0 border-b border-[#EAEEF4]">
          <div className="w-11 h-11 bg-brand-navy rounded-xl flex items-center justify-center text-white shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
        </div>

        <nav className="flex flex-col gap-5 w-full items-center pt-8 flex-1">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          <Link
            href="/settings"
            className="w-12 h-12 bg-white border border-transparent hover:border-brand-blue rounded-full flex items-center justify-center group transition-all relative mt-auto mb-6"
          >
            {isSettings && <div className="absolute inset-0 bg-brand-blue rounded-full shadow-brand-blue/30 shadow-lg" />}
            <Settings className={isSettings ? activeIconCls : iconCls} />
          </Link>
        </nav>
      </aside>

      {/* ── Mobile: bottom navigation bar (visible only on mobile) ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-[#EAEEF4] flex items-center justify-around z-50 px-2">
        {navLinks.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
        <Link
          href="/settings"
          className="w-12 h-12 bg-white border border-transparent hover:border-brand-blue rounded-full flex items-center justify-center group transition-all relative"
        >
          {isSettings && <div className="absolute inset-0 bg-brand-blue rounded-full shadow-brand-blue/30 shadow-lg" />}
          <Settings className={isSettings ? activeIconCls : iconCls} />
        </Link>
      </nav>
    </>
  );
}
