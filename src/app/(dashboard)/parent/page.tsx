import Announcements from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import React from "react";

const ParentPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* Left Section */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
  
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
