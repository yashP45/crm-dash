import Header from "@/components/Header";
import DealsListView from "@/components/DealsListView";

export default function DealsPage() {
  return (
    <div className="flex flex-col min-h-full bg-[#F6FAFD]">
      <Header title="Deals" primaryAction="deal" leftBg="bg-[#F6FAFD]" rightBg="bg-[#F6FAFD]" />
      <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 w-full">
         <div className="w-full">
           <DealsListView />
         </div>
      </main>
    </div>
  );
}
