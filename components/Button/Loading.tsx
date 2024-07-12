import React from "react";
import { BiLoaderCircle } from "react-icons/bi";
const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center mt-24 ">
      <BiLoaderCircle className="animate-spin text-white " size={64} />
    </div>
  );
};

export default Loading;
