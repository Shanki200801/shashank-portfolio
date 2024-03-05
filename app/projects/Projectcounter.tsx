"use client";
import React from "react";

const ProjectCounter = () => {
  const [numProjects, setNumProjects] = React.useState(0);
  return (
    <div className="bg-gray-800 px-1 rounded text-xs ml-3 self-start">
      {numProjects}
    </div>
  );
};

export default ProjectCounter;
