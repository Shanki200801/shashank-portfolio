import React from "react";
import ProjectData from "../_interfaces/ProjectData";
import Link from "next/link";

const ProjectCard = (projectData: ProjectData) => {
  return (
    <div className="transition duration-200 ease-in-out shadow-card rounded-md overflow-hidden bg-white text-black p-3 flex flex-col">
      <Link href={projectData.url}>
        <h1 className="text-lg font-semibold">{projectData.name}</h1>
      </Link>
      <div className="flex">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <div className="text-xs ">
          {projectData.created_at.substring(0, 10)}
        </div>
      </div>
      <div className="flex text-black overflow-auto my-2">
        {projectData.topics.map((topic) => (
          <div className="bg-gray-200 p-1 mx-1 px-2 rounded-2xl text-xs">
            {topic}
          </div>
        ))}
      </div>
      <div>
        <p>{projectData.description}</p>
      </div>
      <div className="flex justify-around text-sm my-3 ">
        {projectData.homepage && (
          <Link href={projectData.homepage}>
            <div className=" hover:bg-black hover:text-white text-black px-2 py-1 border-black border flex justify-end items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm-.847-9.766A.75.75 0 0 0 6 5.866v4.268a.75.75 0 0 0 1.153.633l3.353-2.134a.75.75 0 0 0 0-1.266L7.153 5.234Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="ml-2">Demo link</span>
            </div>
          </Link>
        )}
        <Link href={projectData.url}>
          <div className=" hover:bg-black hover:text-white text-black px-2 py-1 border-black border flex justify-end items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="ml-2">Source code</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
