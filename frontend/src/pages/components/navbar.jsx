import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeString = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const dateString = time.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <nav
      className="
        fixed top-0 left-0 z-50
        w-full h-8
        flex items-center justify-between
        px-4
        bg-white/70
        backdrop-blur-xl
        border-b border-black/5
        text-[13px] text-black
        font-medium
        select-none
      "
    >
      <div className="flex items-center gap-4">
        <span className="text-[17px] font-semibold">
          AmishOS
        </span>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 text-[12px]">


        {/* Date */}
        <span className="hidden sm:block">
          {dateString}
        </span>

        {/* Time */}
        <span className="font-medium min-w-[65px] text-right">
          {timeString}
        </span>

        {/* Control Center */}
        <span className="text-sm cursor-pointer">
          ◉
        </span>
      </div>
    </nav>
  );
}