import { mockNextAppointment } from "@/lib/mockData";

export default function NextAppointmentCard() {
  const data = mockNextAppointment;
  
  return (
    <div className="bg-brand-blue rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-brand-blue/20">
      {/* Decorative Background Elements */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 -left-10 w-40 h-40 bg-[#7B6FF9] rounded-full blur-3xl opacity-50"></div>
      
      <div className="relative z-10 flex justify-between items-start mb-6">
        <h2 className="text-xl font-semibold tracking-wide">Next Appointment</h2>
        <div className="w-2 h-2 rounded-full bg-white mt-2"></div>
      </div>
      
      <div className="relative z-10 flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-white/20 rounded-full shrink-0 flex items-center justify-center backdrop-blur-sm">
          {/* Avatar Placeholder */}
          <div className="w-12 h-12 bg-white rounded-full"></div>
        </div>
        <div>
          <h3 className="text-lg font-bold">{data.addressTitle}</h3>
          <p className="text-white/70 text-sm mt-0.5">{data.addressSub}</p>
        </div>
      </div>
      
      <div className="relative z-10 mb-8">
        <p className="text-white/70 text-sm mb-1">Appointment Date</p>
        <p className="font-bold text-lg">{data.dateStr}</p>
      </div>
      
      <div className="relative z-10 flex justify-between items-end">
        <div className="flex gap-8">
          <div>
            <p className="text-white/70 text-xs mb-1">Room Area</p>
            <p className="font-bold">{data.roomArea}</p>
          </div>
          <div>
            <p className="text-white/70 text-xs mb-1">People</p>
            <p className="font-bold">{data.people}</p>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-white/70 text-xs mb-1">Price</p>
          <p className="font-bold text-xl">${data.price}</p>
        </div>
      </div>
      
      <div className="relative z-10 mt-8 text-center pt-2">
        <button className="bg-white text-brand-blue font-semibold py-3 px-8 rounded-full hover:bg-grey-10 transition-colors shadow-lg">
          See Detail
        </button>
      </div>
    </div>
  );
}
