import React from "react";
import {
  BellIcon,
  ListBulletIcon,
  Cog6ToothIcon,
  UserIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const ManageProfile = () => {
  return (
    <div className="bg-[#141414] text-center border rounded-xl border-[#808080] w-[200px] xl:w-[300px] min-h-min justify-center flex-col space-y-3 text-white absolute right-[30px] xl:right-[60px] top-16 xl:top-[82px] shadow-2xl p-3 py-4">
      <p className="mb-5">Manage Profile</p>
      <div className="bg-[#808080] flex items-center justify-between px-4 py-2 rounded-xl">
        <BellIcon className="w-[25px]" />
        <p> Notofications </p>
        <ChevronRightIcon className="w-[25px]" />
      </div>
      <div className="bg-[#808080] flex items-center justify-between px-4 py-2 rounded-xl">
        <ListBulletIcon className="w-[25px]" />
        <p> My List </p>
        <ChevronRightIcon className="w-[25px]" />
      </div>
      <div className="bg-[#808080] flex items-center justify-between px-4 py-2 rounded-xl">
        <Cog6ToothIcon className="w-[25px]" />
        <p> App Settings </p>
        <ChevronRightIcon className="w-[25px]" />
      </div>
      <div className="bg-[#808080] flex items-center justify-between px-4 py-2 rounded-xl">
        <UserIcon className="w-[25px]" />
        <p> Account </p>
        <ChevronRightIcon className="w-[25px]" />
      </div>
      <div className="bg-[#808080] flex items-center justify-between px-4 py-2 rounded-xl">
        <QuestionMarkCircleIcon className="w-[25px]" />
        <p> Help </p>
        <ChevronRightIcon className="w-[25px]" />
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-gray-700 text-center mt-5 flex items-center justify-between px-4 py-2 rounded-xl">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ManageProfile;
