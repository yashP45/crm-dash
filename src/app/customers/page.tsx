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
      <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6 w-full">

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 md:mb-8 px-2 md:px-4">
          <h2 className="font-bold text-brand-navy text-[15px] md:text-[17px]">Total: 78 customers</h2>

          <div className="flex items-center gap-3">
            <button className="flex items-center justify-between gap-2 h-[44px] md:h-[50px] px-4 md:pl-[25px] md:pr-[20px] w-auto md:w-[235px] rounded-[30px] border border-[#EAEEF4] bg-white hover:border-brand-blue text-brand-navy font-medium text-sm transition-colors shadow-sm">
              <span className="hidden sm:inline">Sort by: Date Created</span>
              <span className="sm:hidden">Sort</span>
              <ChevronDown className="w-4 h-4 text-grey-50 shrink-0" />
            </button>
            <button className="flex items-center justify-between gap-2 h-[44px] md:h-[50px] px-4 md:pl-[25px] md:pr-[20px] w-auto rounded-[30px] border border-[#EAEEF4] bg-white hover:border-brand-blue text-brand-navy font-medium text-sm transition-colors shadow-sm">
              <span>Filter</span>
              <Filter className="w-4 h-4 text-grey-50 shrink-0" />
            </button>
          </div>
        </div>

        <div className="w-full pb-8">

          {/* ── Desktop Table (md+) ── */}
          <div className="hidden md:block">
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

            {/* Table Rows */}
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
          </div>

          {/* ── Mobile Card List (< md) ── */}
          <div className="flex flex-col gap-3 md:hidden">
            {listData.map((customer) => (
              <div key={customer.id} className="bg-white rounded-2xl border border-[#EAEEF4] p-4 shadow-sm flex items-start gap-4">
                <Link href={`/customers/${customer.id}`} className="w-12 h-12 rounded-full bg-grey-10 shrink-0 overflow-hidden">
                  <img src={customer.avatar} alt={customer.name} className="w-full h-full object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link href={`/customers/${customer.id}`}>
                    <p className="font-bold text-brand-navy text-[15px] hover:text-brand-blue transition-colors">{customer.name}</p>
                  </Link>
                  <p className="text-grey-50 text-sm truncate">{customer.email}</p>
                  <p className="text-grey-50 text-sm mt-0.5">{customer.phone}</p>
                  <p className="text-grey-50 text-xs mt-1 truncate">{customer.address}</p>
                </div>
                <button className="w-9 h-9 rounded-full flex items-center justify-center text-grey-50 hover:text-brand-blue hover:bg-grey-10 transition-colors shrink-0">
                  <Pencil className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button className="px-10 py-3 rounded-full border border-grey-10 bg-white hover:border-brand-blue hover:text-brand-blue text-brand-navy font-bold text-sm transition-colors shadow-sm">
              Load More
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
