import React, { useEffect } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { toast, ToastContainer, Zoom } from "react-toastify";

interface ToastProps {
  type: "success" | "fail";
  message: string;
}

const CustomCloseButton = ({ closeToast }: any) => (
  <IoCloseOutline
    onClick={closeToast}
    className=" my-auto right-2 cursor-pointer hover:text-black size-5"
  />
);

export const showToast = ({ type, message }: ToastProps) => {
  toast(message, {
    icon:
      type === "success" ? (
        <CiCircleCheck className="size-8 text-green-500" />
      ) : (
        <IoIosCloseCircleOutline className="size-8 text-red-500" />
      ),
    autoClose: 6000,
    hideProgressBar: true,
    progressClassName: "!bg-green-500 !h-1",
  });
};

const CustomToast = () => (
  <ToastContainer
    transition={Zoom}
    className="absolute top-4 right-4"
    toastClassName={() =>
      "text-nowrap flex p-1 mb-2 min-h-10 w-fit px-2 ml-auto rounded-md shadow-lg bg-white text-gray-700 h-fit z-[1000] overflow-hidden"
    }
    bodyClassName="flex items-center"
    closeButton={CustomCloseButton}
  />
);

export default CustomToast;
