import { useTimer } from "@/context/TimerContext";
import { cn } from "@/lib/utils";

const FlashSalesTimer = () => {
  const timeLeft = useTimer();

  return (
    <div className={cn("flex items-center gap-2 md:gap-4")}>
      <div className="flex flex-col">
        <span className={cn("text-[10px] lg:text-xs font-medium text-black")}>
          Days
        </span>
        <span
          className={cn(
            "mt-1 text-lg md-lg:text-xl xl:text-[32px] font-bold text-black"
          )}
        >
          {timeLeft.days}
        </span>
      </div>

      <span className="text-2xl text-foundation-red-500 font-extrabold self-end">
        :
      </span>

      <div className="flex flex-col">
        <span className={cn("text-[10px] lg:text-xs font-medium text-black")}>
          Hours
        </span>
        <span
          className={cn(
            "mt-1 text-lg md-lg:text-xl xl:text-[32px] font-bold text-black"
          )}
        >
          {timeLeft.hours}
        </span>
      </div>

      <span className="text-2xl text-foundation-red-500 font-extrabold self-end">
        :
      </span>

      <div className="flex flex-col">
        <span className={cn("text-[10px] lg:text-xs font-medium text-black")}>
          Minutes
        </span>
        <span
          className={cn(
            "mt-1 text-lg md-lg:text-xl xl:text-[32px] font-bold text-black"
          )}
        >
          {timeLeft.minutes}
        </span>
      </div>

      <span className="text-2xl text-foundation-red-500 font-extrabold self-end">
        :
      </span>

      <div className="flex flex-col">
        <span className={cn("text-[10px] lg:text-xs font-medium text-black")}>
          Seconds
        </span>
        <span
          className={cn(
            "mt-1 text-lg md-lg:text-xl xl:text-[32px] font-bold text-black"
          )}
        >
          {timeLeft.seconds}
        </span>
      </div>
    </div>
  );
};

export default FlashSalesTimer;
