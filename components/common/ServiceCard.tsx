"use client";

import { cn } from "@/lib/utils";

interface Props {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  className?: string;
  hoverEFfect?: boolean;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  className,
  hoverEFfect,
}: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-6 group",
        hoverEFfect &&
          "rounded-lg hover:bg-foundation-red-500 p-6 hover:shadow-sm border border-gray-400"
      )}
    >
      <div
        className={cn(
          "rounded-full bg-gray-300 p-[10px]",
          hoverEFfect && "group-hover:bg-white/30"
        )}
      >
        <div
          className={cn(
            "p-2 aspect-square rounded-full bg-black text-white flex items-center justify-center",
            hoverEFfect &&
              "group-hover:bg-white group-hover:text-black group-hover:border-white/10"
          )}
        >
          <Icon className="w-10" />
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col gap-2 text-center text-black",
          hoverEFfect && "group-hover:text-white"
        )}
      >
        <span className="uppercase text-xl font-semibold">{title}</span>
        <span className="text-sm">{description}</span>
      </div>
    </div>
  );
};

export default ServiceCard;
