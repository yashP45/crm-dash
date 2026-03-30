import Header from "@/components/Header";
import TaskListView from "@/components/TaskListView";

export default function TasksPage() {
  return (
    <div className="flex flex-col min-h-full bg-[#F6FAFD]">
      <Header title="Tasks" primaryAction="task" leftBg="bg-[#F6FAFD]" rightBg="bg-[#F6FAFD]" />
      <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 w-full">
        <div className="w-full">
          <TaskListView />
        </div>
      </main>
    </div>
  );
}
