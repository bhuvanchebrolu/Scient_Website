import React, { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const Countdown = () => {
  const targetDate = new Date("2025-11-19T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
      <div
        className="rounded-3xl px-6 py-4 md:px-8 md:py-6 border-2 border-yellow-400/40 
        bg-[#0a0a1a]/70 backdrop-blur-md text-white shadow-[0_0_25px_rgba(250,204,21,0.3)]
        hover:shadow-[0_0_35px_rgba(250,204,21,0.6)] transition-shadow duration-300
        max-w-[95vw] md:max-w-sm"
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
            <Clock className="w-5 h-5 text-yellow-400" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-yellow-400 uppercase tracking-wider">
              Registration Ends
            </h3>
            <p className="text-xs text-yellow-200/80">November 19, 2025</p>
          </div>
        </div>

        {/* Countdown timer */}
        <div className="grid grid-cols-4 gap-3 mb-3 md:mb-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="text-2xl font-black text-yellow-400 mb-1">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-yellow-200/70 font-medium">
                {unit}
              </div>
            </div>
          ))}
        </div>

        {/* Message */}
        <p className="text-xs text-center text-yellow-300 font-semibold">
          Don’t miss out!
        </p>
      </div>
    </div>
  );
};

export default Countdown;
