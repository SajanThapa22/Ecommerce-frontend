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
        className
      )}
    >
      <div
        className={cn(
          "p-2 aspect-square rounded-full bg-black text-white flex items-center justify-center border-[10px] border-solid border-gray-300",
          hoverEFfect &&
            "group-hover:bg-white group-hover:text-black group-hover:border-opacity-30"
        )}
      >
        <Icon />
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
