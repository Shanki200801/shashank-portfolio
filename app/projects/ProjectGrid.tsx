"use client";
import React from "react";

const ProjectGrid = (projects: any) => {
  //   console.log(JSON.stringify(projects));
  const [userRepos, setUserRepos] = React.useState(projects["projects"]);
  console.log(JSON.stringify(userRepos) + " repo state");
  return (
    <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"></div>
  );
};

export default ProjectGrid;
