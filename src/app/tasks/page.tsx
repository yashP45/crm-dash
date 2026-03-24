import Header from "@/components/Header";
import { ListTodo } from "lucide-react";

export default function TasksPage() {
  return (
    <div className="flex flex-col min-h-full bg-[#F6FAFD]">
      <Header title="Tasks" primaryAction="none" leftBg="bg-[#F6FAFD]" rightBg="bg-[#F6FAFD]" />
      <main className="flex-1 p-8 flex items-center justify-center">
        <div className="text-center flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center">
            <ListTodo className="w-8 h-8 text-brand-blue" />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Tasks</h2>
          <p className="text-grey-50 text-[15px]">Task management coming soon.</p>
        </div>
      </main>
    </div>
  );
}
