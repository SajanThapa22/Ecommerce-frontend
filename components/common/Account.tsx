"use client";

import {
  IconCancel,
  IconLogout,
  IconMallbag,
  IconReviews,
  IconUser,
} from "@/assets/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Account = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const showHideMenu = () => setIsMenuVisible(!isMenuVisible);

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* overlay */}
      <div
        onClick={() => setIsMenuVisible(false)}
        className={cn(
          "fixed inset-0 hidden z-[99999] backdrop-blur-sm bg-white/30",
          isMenuVisible && "block"
        )}
      ></div>

      <div className="relative z-[999999]">
        {/* Menu Icon button */}
        <button
          onClick={showHideMenu}
          className={cn(
            "text-black rounded-full p-1 group",
            isMenuVisible && "bg-foundation-red-500 text-white"
          )}
        >
          <IconUser className="w-7" />
        </button>

        {/* Menu */}
        <div
          className={cn(
            "absolute bottom-0 translate-y-full right-0 p-4 w-fit flex flex-col gap-y-3 rounded-lg backdrop-blur-md backdrop-saturate-150 bg-black/40 transition-opacity duration-200 z-[999999]",
            isMenuVisible ? "visible opacity-100" : "invisible opacity-0"
          )}
        >
          <Link href={"/account"}>
            <div
              onClick={() => setIsMenuVisible(false)}
              className="flex items-center gap-4 cursor-pointer"
            >
              <IconUser className="text-white w-7" />

              <span className="text-white text-sm text-nowrap select-none">
                Manage My Account
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 cursor-pointer">
            <IconMallbag className="text-white" />
            <span className="text-white text-sm">My Order</span>
          </div>

          <div className="flex items-center gap-4 cursor-pointer">
            <IconCancel className="text-white" />
            <span className="text-white text-sm">My Cancellations</span>
          </div>

          <div className="flex items-center gap-4 cursor-pointer">
            <IconReviews className="text-white" />
            <span className="text-white text-sm">My Reviews</span>
          </div>

          <div className="flex items-center gap-4 cursor-pointer">
            <IconLogout className="text-white" />
            <span className="text-white text-sm"> Logout</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
