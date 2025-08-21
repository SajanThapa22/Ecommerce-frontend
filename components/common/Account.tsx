"use client";

import {
  IconCancel,
  IconLogout,
  IconMallbag,
  IconReviews,
  IconUser,
} from "@/assets/icons";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const Account = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  return (
    <div className="relative">
      <button className="hover:bg-foundation-red-500 active:bg-foundation-red-600 rounded-full p-2 group">
        <IconUser className="text-black group-hover:text-white" />
      </button>

      <div
        className={cn(
          " absolute bottom-0 translate-y-full right-0 p-4 flex flex-col gap-y-3 w-fit rounded-lg backdrop-blur-sm bg-white/70",
          isMenuVisible ? "visible" : "invisible"
        )}
      >
        <div className="flex items-center gap-4">
          <IconUser className="text-white" />
          <span className="text-white text-sm text-nowrap">
            Manage My Account
          </span>
        </div>

        <div className="flex items-center gap-4">
          <IconMallbag className="text-white" />
          <span className="text-white text-sm">My Order</span>
        </div>

        <div className="flex items-center gap-4">
          <IconCancel className="text-white" />
          <span className="text-white text-sm">My Cancellations</span>
        </div>

        <div className="flex items-center gap-4">
          <IconReviews className="text-white" />
          <span className="text-white text-sm">My Reviews</span>
        </div>

        <div className="flex items-center gap-4">
          <IconLogout className="text-white" />
          <span className="text-white text-sm"> Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Account;
