import { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy/30 backdrop-blur-sm px-3 sm:px-4">
      <div className="bg-white rounded-[12px] w-full max-w-[620px] max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 border-b border-grey-10">
          <h2 className="text-[17px] sm:text-[22px] font-bold text-brand-navy tracking-tight">{title}</h2>
          <button
            onClick={onClose}
            className="w-7 h-7 bg-grey-50/70 hover:bg-grey-50 rounded-full flex items-center justify-center text-white transition-colors shrink-0"
          >
            <X className="w-4 h-4" strokeWidth={3} />
          </button>
        </div>

        <div className="px-4 sm:px-8 py-4 sm:py-6">
          {children}
        </div>
      </div>
    </div>
  );
}
