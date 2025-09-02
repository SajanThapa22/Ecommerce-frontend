import { IconFacebook, IconLinkedin, IconTwitter } from "@/assets/icons";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  employee: {
    image: StaticImageData;
    name: string;
    position: string;
    socials: {
      twitter?: string;
      instagram?: string;
      linkedin?: string;
    };
  };
}

const TeamCard = ({ employee }: Props) => {
  return (
    <div className="max-w-[450px]">
      <div className="relative w-full aspect-[6/7] pt-[33px] px-[20px] bg-foundation-gray-200">
        <Image
          className="w-full h-full object-cover"
          src={employee.image}
          alt="employee image"
        />
      </div>

      <div className="mt-4 lg:mt-8 text-black">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {employee.name}
          </h1>
          <h2 className="text-sm md:text-base mt-2">{employee.position}</h2>
        </div>

        <div className="flex gap-4 mt-4">
          {employee.socials.twitter && (
            <Link target="_blank" href={employee.socials.twitter}>
              <IconTwitter className="text-black" />
            </Link>
          )}
          {employee.socials.instagram && (
            <Link target="_blank" href={employee.socials.instagram}>
              <IconFacebook className="text-black" />
            </Link>
          )}
          {employee.socials.linkedin && (
            <Link target="_blank" href={employee.socials.linkedin}>
              <IconLinkedin className="text-black" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
