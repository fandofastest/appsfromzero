import { ReactNode } from 'react';

interface ProductCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  onViewDetails: () => void;
}

export function ProductCard({ icon, title, description, onViewDetails }: ProductCardProps) {
  return (
    <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-8 hover:border-[#38BDF8] transition-all duration-300">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2563EB]/10 text-[#38BDF8] mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">{title}</h3>
      <p className="text-[#94A3B8] mb-6 leading-relaxed">{description}</p>
      <button
        onClick={onViewDetails}
        className="text-[#38BDF8] hover:text-[#2563EB] font-medium transition-colors"
      >
        View Details →
      </button>
    </div>
  );
}
