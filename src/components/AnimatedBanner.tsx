import { Zap } from "lucide-react";

export default function AnimatedBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 overflow-hidden">
      <div className="flex items-center justify-center h-12 md:h-14">
        {/* Animated banner text */}
        <div className="flex items-center gap-3 whitespace-nowrap animate-slide-banner">
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-neutral-900" />
            <span className="font-bold text-neutral-900">
              ⚡ LIMITED TIME OFFER: 30% OFF on Hoodies!
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-neutral-900" />
            <span className="font-bold text-neutral-900">
              📦 FREE Shipping on Orders Above ₹999!
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-neutral-900" />
            <span className="font-bold text-neutral-900">
              🎁 Exclusive Deals for New Customers!
            </span>
          </div>
        </div>

        {/* Duplicate for seamless loop */}
        <div className="flex items-center gap-3 whitespace-nowrap animate-slide-banner">
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-neutral-900" />
            <span className="font-bold text-neutral-900">
              ⚡ LIMITED TIME OFFER: 30% OFF on Hoodies!
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-neutral-900" />
            <span className="font-bold text-neutral-900">
              📦 FREE Shipping on Orders Above ₹999!
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-neutral-900" />
            <span className="font-bold text-neutral-900">
              🎁 Exclusive Deals for New Customers!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
