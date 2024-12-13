import React from "react";

const Footer = () => {
  return (
    <div className="flex py-6 justify-center bg-black w-full">
      <p className="text-gray-100 text-sm">
        &copy; {new Date().getFullYear()} Good Shepherd Lutheran Church, All
        rights reserved.
      </p>
    </div>
  );
};

export default Footer;
