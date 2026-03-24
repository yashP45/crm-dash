"use client";
import Header from "@/components/Header";
import { ChevronDown, Filter, UserRound, Pencil } from "lucide-react";
import Link from "next/link";

const listData = [
  { id: 1, name: "Deanna Annis", email: "deannannis@gmail.com", phone: "999-999-9999", address: "475 Spruce Drive, Pittsburgh, PA 23592", avatar: "/avatar1.jpg" },
  { id: 2, name: "George Gamble", email: "goeorgegamble@gmail.com", phone: "999-999-9999", address: "2213 Thorn Street, Glenrock, WY 12345", avatar: "/avatar2.jpg" },
  { id: 3, name: "Andrea Willis", email: "andreawillis@gmail.com", phone: "999-999-9999", address: "1952 Chicago Avenue, Fresno, PA 93711", avatar: "/avatar3.jpg" },
  { id: 4, name: "Andrea Willis", email: "andreawillis@gmail.com", phone: "999-999-9999", address: "1952 Chicago Avenue, Fresno, PA 93711", avatar: "/avatar1.jpg" },
  { id: 5, name: "Andrea Willis", email: "andreawillis@gmail.com", phone: "999-999-9999", address: "1952 Chicago Avenue, Fresno, PA 93711", avatar: "/avatar2.jpg" },
  { id: 6, name: "Andrea Willis", email: "andreawillis@gmail.com", phone: "999-999-9999", address: "1952 Chicago Avenue, Fresno, PA 93711", avatar: "/avatar3.jpg" },
  { id: 7, name: "Andrea Willis", email: "andreawillis@gmail.com", phone: "999-999-9999", address: "1952 Chicago Avenue, Fresno, PA 93711", avatar: "/avatar1.jpg" },
];

export default function CustomersPage() {
  return (
    <div className="flex flex-col min-h-full bg-[#F6FAFD]">
      <Header title="Customers" primaryAction="customer" leftBg="bg-[#F6FAFD]" rightBg="bg-[#F6FAFD]" />
      <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 w-full">
        
        <div className="flex items-center justify-between mb-8 px-4">
          <h2 className="font-bold text-brand-navy text-[17px]">Total: 78 customers</h2>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-between gap-[13px] w-[235px] h-[50px] rounded-[30px] border border-[#EAEEF4] bg-white pt-[10px] pr-[20px] pb-[10px] pl-[25px] hover:border-brand-blue text-brand-navy font-medium text-sm transition-colors shadow-sm">
              <span>Sort by: Date Created</span>
              <ChevronDown className="w-4 h-4 text-grey-50" />
            </button>
            <button className="flex items-center justify-between gap-[13px] w-[116px] h-[50px] rounded-[30px] border border-[#EAEEF4] bg-white pt-[10px] pr-[20px] pb-[10px] pl-[25px] hover:border-brand-blue text-brand-navy font-medium text-sm transition-colors shadow-sm">
              <span>Filter</span>
              <Filter className="w-4 h-4 text-grey-50" />
            </button>
          </div>
        </div>

        <div className="w-full pb-8">
          
          {/* Header Row */}
          <div className="grid grid-cols-[3fr_2fr_2fr_3fr_0.5fr] gap-4 mb-2 px-8 text-grey-50 font-medium text-[15px] pb-6 border-b border-grey-10">
            <div className="flex items-center gap-4">
               <UserRound className="w-[18px] h-[18px]" />
               <span>Name</span>
            </div>
            <div>Email</div>
            <div>Phone</div>
            <div>Address</div>
            <div className="text-center">Edit</div>
          </div>

          {/* List Rows */}
          <div className="flex flex-col">
            {listData.map((customer) => (
              <div key={customer.id} className="grid grid-cols-[3fr_2fr_2fr_3fr_0.5fr] gap-6 items-center px-4 h-[79px] border-b border-[#EAEEF4] group hover:bg-brand-blue/5 transition-colors">
                
                <div className="flex items-center gap-6">
                  <Link href={`/customers/${customer.id}`} className="w-11 h-11 rounded-full bg-grey-10 shrink-0 overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                    <img src={customer.avatar} alt={customer.name} className="w-full h-full object-cover" />
                  </Link>
                  <Link href={`/customers/${customer.id}`}>
                    <span className="text-brand-navy font-medium text-[15px] hover:text-brand-blue transition-colors cursor-pointer">{customer.name}</span>
                  </Link>
                </div>
                
                <div className="text-brand-navy font-medium text-[15px]">{customer.email}</div>
                <div className="text-brand-navy font-medium text-[15px]">{customer.phone}</div>
                <div className="text-brand-navy font-medium text-[15px] truncate pr-8">{customer.address}</div>
                
                <div className="flex justify-center">
                  <button className="w-10 h-10 rounded-full flex items-center border border-transparent justify-center text-grey-50 hover:text-brand-blue hover:bg-grey-10 transition-colors">
                    <Pencil className="w-[18px] h-[18px]" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="px-10 py-3 rounded-full border border-grey-10 bg-white hover:border-brand-blue hover:text-brand-blue text-brand-navy font-bold text-sm transition-colors shadow-sm">
              Load More
            </button>
          </div>

        </div>

      </main>
    </div>
  );
}
