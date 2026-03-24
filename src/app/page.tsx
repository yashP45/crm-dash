import NextAppointmentCard from "@/components/NextAppointmentCard";
import RecentDealsCard from "@/components/RecentDealsCard";
import CustomersListCard from "@/components/CustomersListCard";
import TasksCard from "@/components/TasksCard";
import StatsCard from "@/components/StatsCard";
import ProjectTimelineCard from "@/components/ProjectTimelineCard";
import Header from "@/components/Header";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-full bg-[#F6FAFD]">
      <Header title="Dashboard" leftBg="bg-[#F6FAFD]" rightBg="bg-[#EEF6FB]" />

      {/* On mobile/tablet: single scrollable column.
          On xl+: side-by-side two-column layout with independent scroll. */}
      <div className="flex flex-col xl:flex-row xl:flex-1 xl:overflow-hidden">

        {/* LEFT/MIDDLE MAIN AREA */}
        <div className="flex-1 flex flex-col p-4 md:p-10 xl:overflow-y-auto">
          <div className="flex flex-col gap-6 md:gap-8">

            {/* Row 1: Next Appointment | Recent Deals */}
            <div className="grid grid-cols-1 xl:grid-cols-[268px_1fr] gap-6 md:gap-8 items-start">
              <NextAppointmentCard />
              <RecentDealsCard />
            </div>

            {/* Row 2: Stats Cards | Project Timeline */}
            <div className="grid grid-cols-1 xl:grid-cols-[268px_1fr] gap-6 md:gap-8 items-start">
              <div className="grid grid-cols-2 xl:grid-cols-1 gap-4 md:gap-8">
                <StatsCard title="Customers" value={78} type="customers" />
                <StatsCard title="Deals" value={136} type="deals" />
              </div>
              <ProjectTimelineCard />
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN — stacks below on mobile, fixed 417px sidebar on xl+ */}
        <div className="w-full xl:w-[417px] shrink-0 bg-[#EEF6FB] p-4 md:p-10 flex flex-col gap-4 xl:overflow-y-auto">

          <div className="xl:h-[316px] shrink-0">
            <CustomersListCard />
          </div>

          <div className="flex-1">
            <TasksCard />
          </div>

        </div>

      </div>
    </div>
  );
}
