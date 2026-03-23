import NextAppointmentCard from "@/components/NextAppointmentCard";
import RecentDealsCard from "@/components/RecentDealsCard";
import CustomersListCard from "@/components/CustomersListCard";
import TasksCard from "@/components/TasksCard";
import StatsCard from "@/components/StatsCard";
import ProjectTimelineCard from "@/components/ProjectTimelineCard";

import Header from "@/components/Header";

export default function Dashboard() {
  return (
    <>
      <Header title="Dashboard" />
      <div className="p-8 max-w-[1400px] mx-auto 2xl:ml-0 2xl:max-w-none w-full">
      {/* 
        Dashboard Layout Grid 
        Matches the 12-column grid concept from Style Guide
        Left Main Area (approx 8 cols) | Right Sidebar Area (approx 4 cols)
      */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN AREA (8 cols) */}
        <div className="xl:col-span-8 flex flex-col gap-8">
          
          {/* Top Row: Next Appt + Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full">
              <NextAppointmentCard />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <StatsCard title="Customers" value={78} type="customers" />
              <StatsCard title="Deals" value={136} type="deals" />
            </div>
          </div>

          {/* Middle Row: Recent Deals */}
          <div className="w-full">
            <RecentDealsCard />
          </div>

          {/* Bottom Row: Project Timeline / Activity */}
          <div className="w-full">
            <ProjectTimelineCard />
          </div>
          
        </div>

        {/* RIGHT COLUMN AREA (4 cols) */}
        <div className="xl:col-span-4 flex flex-col gap-8">
          
          {/* Right Top: Customers */}
          <div className="h-[430px]">
            <CustomersListCard />
          </div>

          {/* Right Bottom: Tasks To Do */}
          <div className="flex-1 min-h-[500px]">
            <TasksCard />
          </div>
          
        </div>
        
      </div>
      </div>
    </>
  );
}
