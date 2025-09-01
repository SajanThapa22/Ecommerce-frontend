import Breadcrumbs from "@/components/ui/BreadCrumb";
import React from "react";

const Account = () => {
  return (
    <section className="section-mt section-margin-x">
      <div className="flex items-center justify-between gap-8">
        <Breadcrumbs />
        <span className="text-black text-sm">
          Welcome!
          <span className="text-foundation-red-500 "> John Smith</span>
        </span>
      </div>

      <div className="section-mt flex flex-col gap-6">
        <div>
          <h1 className="text-base font-medium mb-4 text-black">
            Manage my account{" "}
          </h1>
          <div className="flex flex-col ml-8 text-base text-gray-400 gap-y-2">
            <span>My profile</span>
            <span>Address Book</span>
            <span>My Payment options</span>
          </div>
        </div>

        <div>
          <h1 className="text-base font-medium mb-4 text-black">My Orders</h1>
          <div className="flex flex-col ml-8 text-base text-gray-400 gap-y-2">
            <span>My Returns</span>
            <span>My Cancellations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
