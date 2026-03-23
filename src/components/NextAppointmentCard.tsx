import { mockNextAppointment } from "@/lib/mockData";

export default function NextAppointmentCard() {
  const data = mockNextAppointment;
  
  return (
    <div className="bg-[#605BFF] rounded-[12px] border border-white/20 p-[28px] text-white min-h-[392px] h-full flex flex-col relative overflow-hidden shadow-lg shadow-brand-blue/30 transition-all hover:shadow-brand-blue/40">
      
      {/* Decorative Background Curve */}
      <div className="absolute -bottom-[20%] -right-[30%] w-[380px] h-[350px] bg-white/10 rounded-full pointer-events-none"></div>
      
      {/* Top Row */}
      <div className="relative z-10 flex justify-between items-center mb-[28px]">
        <h2 className="text-[18px] font-bold tracking-tight">Next Appointment</h2>
        <div className="w-[8px] h-[8px] rounded-full bg-white shrink-0"></div>
      </div>
      
      {/* Avatar & Address Row */}
      <div className="relative z-10 flex items-center gap-4 mb-[28px]">
        <div className="w-[50px] h-[50px] bg-[#EEEDFF] rounded-full shrink-0"></div>
        <div className="flex flex-col gap-1">
          <h3 className="text-white font-bold text-[15px]">{data.addressTitle}</h3>
          <p className="text-white/80 font-normal text-[13px] tracking-wide">{data.addressSub}</p>
        </div>
      </div>
      
      {/* Appointment Date Row */}
      <div className="relative z-10 flex flex-col gap-1 mb-[28px]">
        <p className="text-white/80 font-normal text-[13px] tracking-wide">Appointment Date</p>
        <p className="font-bold text-white text-[15px]">{data.dateStr}</p>
      </div>
      
      {/* Stats Grids (Room Area / People) */}
      <div className="relative z-10 flex justify-start gap-12 mb-[28px]">
        <div className="flex flex-col gap-1">
          <p className="text-white/80 font-normal text-[13px] tracking-wide">Room Area</p>
          <div className="flex items-center gap-1">
             <p className="font-bold text-white text-[15px]">{data.roomArea}</p>
             <span className="font-bold text-white text-[13px] tracking-tight">M²</span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-white/80 font-normal text-[13px] tracking-wide">People</p>
          <p className="font-bold text-white text-[15px]">{data.people}</p>
        </div>
      </div>
      
      {/* Bottom Footer (Price / Button) */}
      <div className="relative z-10 flex justify-between items-center mt-auto">
        <div className="flex flex-col gap-1">
          <p className="text-white/80 font-normal text-[13px] tracking-wide">Price</p>
          <p className="font-bold text-white text-[15px]">${data.price}</p>
        </div>
        
        <button className="bg-white text-[#1E293B] font-bold text-[14px] px-8 py-3 rounded-[70px] shadow-sm hover:scale-105 transition-transform flex items-center justify-center">
          See Detail
        </button>
      </div>

    </div>
  );
}
