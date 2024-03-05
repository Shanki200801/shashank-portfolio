import React from "react";
import PdfView from "./PdfView";

const page = () => {
  const file = "/Shashank-Backend.pdf";
  return (
    <div className="flex justify-center flex-col">
      <PdfView file={file} />
      <div className="w-full justify-center flex">
        <a href="/Shashank-Backend.pdf" download>
          <button className="bg-gray-300 text-black hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-3xl my-4 flex items-center">
            <span className=" font-normal">Download Resume</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default page;
