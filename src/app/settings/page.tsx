import Header from "@/components/Header";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-full bg-[#F6FAFD]">
      <Header title="Settings" primaryAction="none" leftBg="bg-[#F6FAFD]" rightBg="bg-[#F6FAFD]" />
      <main className="flex-1 p-8 flex items-center justify-center">
        <div className="text-center flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center">
            <Settings className="w-8 h-8 text-brand-blue" />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Settings</h2>
          <p className="text-grey-50 text-[15px]">App settings coming soon.</p>
        </div>
      </main>
    </div>
  );
}
