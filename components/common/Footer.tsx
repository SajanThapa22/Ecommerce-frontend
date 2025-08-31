"use client";

import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconSend,
  IconTwitter,
} from "@/assets/icons";
import { appQRCode, appStore, googlePlay } from "@/assets/images";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="section-mt">
      <div
        className={cn(
          "w-full bg-black text-white section-padding-x section-pt section-pb flex flex-col flex-nowrap lg:flex-row lg:flex-wrap justify-between gap-8"
        )}
      >
        <div className="flex flex-col gap-6">
          <Link href={"/"}>
            <h1 className="text-2xl font-bold">A2Z Shop</h1>
          </Link>

          <h2 className="text-xl font-medium ">Subscribe</h2>

          <div>
            <span className="text-base">Get 10% off your first order</span>
            <div className="mt-4 border-[2px] border-white flex gap-2 rounded-md p-3 w-[230px]">
              <input
                placeholder="Enter your email"
                type="text"
                className="placeholder-foundation-gray-300 bg-transparent text-white w-full focus:outline-none"
              />
              <button>
                <IconSend className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium ">Support</h2>
          <div className="flex flex-col gap-4">
            <p className="text-base">Bharatpur-10, Chiwan, Nepal</p>
            <p className="text-base">sajanthapa1888@gmail.com</p>
            <p className="text-base">+9779823402342</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium ">Account</h2>
          <div className="flex flex-col gap-4">
            <p className="text-base">My Account</p>
            <p className="text-base">Login / Register</p>
            <p className="text-base">Cart</p>
            <p className="text-base">Wishlist</p>
            <p className="text-base">Shop</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium ">Quick Link</h2>
          <div className="flex flex-col gap-4">
            <p className="text-base">Privacy Policy</p>
            <p className="text-base">Terms of use</p>
            <p className="text-base">FAQ</p>
            <p className="text-base">Contact</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium ">Download App</h2>

          <div>
            <h3 className="text-xs font-medium text-gray-400">
              Save $3 with App New User Only
            </h3>

            <div className="mt-2 flex items-center gap-[10px]">
              <div className="relative overflow-hidden">
                <Image className="w-[76px]" src={appQRCode} alt="QR code" />
              </div>

              <div>
                <Image
                  className="cursor-pointer"
                  src={googlePlay}
                  alt="Google Play Store"
                />
                <Image
                  className="cursor-pointer"
                  src={appStore}
                  alt="App Store"
                />
              </div>
            </div>

            <div className="flex gap-6 mt-6">
              <Link href={"https://facebook.com"} target="_blank">
                <IconFacebook className="text-white" />
              </Link>
              <Link href={"https://twitter.com"} target="_blank">
                <IconTwitter className="text-white" />
              </Link>
              <Link href={"https://instagram.com"} target="_blank">
                <IconInstagram className="text-white" />
              </Link>
              <Link href={"https://linkedin.com"} target="_blank">
                <IconLinkedin className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-t-gray-500 bg-black p-4 text-center text-sm lg:text-base text-gray-400">
        &copy; Copyright Sajan 2025. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
