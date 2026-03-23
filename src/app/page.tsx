import NextAppointmentCard from "@/components/NextAppointmentCard";
import RecentDealsCard from "@/components/RecentDealsCard";
import CustomersListCard from "@/components/CustomersListCard";
import TasksCard from "@/components/TasksCard";
import StatsCard from "@/components/StatsCard";
import ProjectTimelineCard from "@/components/ProjectTimelineCard";

import Header from "@/components/Header";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full bg-[#F6FAFD]">
      <Header title="Dashboard" leftBg="bg-[#F6FAFD]" rightBg="bg-[#EEF6FB]" />
      
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT/MIDDLE MAIN AREA (Fluid) */}
        <div className="flex-1 flex flex-col p-10 overflow-x-hidden overflow-y-auto">
          
          <div className="flex flex-col gap-8">
            
            {/* Row 1: Next Appointment | Recent Deals */}
            <div className="grid grid-cols-1 xl:grid-cols-[268px_1fr] gap-8 items-start">
              <NextAppointmentCard />
              <RecentDealsCard />
            </div>

            {/* Row 2: Stats Cards | Project Timeline */}
            <div className="grid grid-cols-1 xl:grid-cols-[268px_1fr] gap-8 items-start">
              <div className="flex flex-col gap-8">
                <StatsCard title="Customers" value={78} type="customers" />
                <StatsCard title="Deals" value={136} type="deals" />
              </div>
              <ProjectTimelineCard />
            </div>

          </div>
          
        </div>

        {/* RIGHT COLUMN AREA (Fixed 417px width, matching header split) */}
        <div className="w-[417px] shrink-0 bg-[#EEF6FB] p-10 flex flex-col gap-4 overflow-y-auto">
          
          {/* Right Top: Customers */}
          <div className="h-[316px] shrink-0">
            <CustomersListCard />
          </div>

          {/* Right Bottom: Tasks To Do */}
          <div className="flex-1">
            <TasksCard />
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
