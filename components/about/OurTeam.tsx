"use client";

import { johnSmith, johnWick, willSmith } from "@/assets/images";
import React from "react";
import TeamCard from "./TeamCard";

const team = [
  {
    name: "John Smith",
    image: johnSmith,
    position: "Founder & Chairman",
    socials: {
      twitter: "https://twitter.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    name: "John Wick",
    image: johnWick,
    position: "Managing Director",
    socials: {
      twitter: "https://twitter.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    name: "Will Smith",
    image: willSmith,
    position: "Product Designer",
    socials: {
      twitter: "https://twitter.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com",
    },
  },
];

const OurTeam = () => {
  return (
    <section className="section-mt section-margin-x">
      <div className="grid grid-cols-1 min-[390px]:grid-cols-2 md:grid-cols-3 gap-[35px]">
        {team.map((em, index) => (
          <TeamCard key={index} employee={em} />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
