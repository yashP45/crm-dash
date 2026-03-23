import Header from "@/components/Header";
import DealsListView from "@/components/DealsListView";

export default function DealsPage() {
  return (
    <>
      <Header title="Deals" primaryAction="deal" />
      <main className="flex-1 overflow-x-hidden p-8 max-w-[1400px] mx-auto w-full">
         <DealsListView />
      </main>
    </>
  );
}
