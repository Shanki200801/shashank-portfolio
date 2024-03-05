import React from "react";
import ProjectCounter from "./Projectcounter";
import ProjectGrid from "./ProjectGrid";

async function getProjects() {
  const res = await fetch("https://api.github.com/users/Shanki200801/repos");
  return res.json();
}
async function getExcludedProjects() {
  const projects = [
    { full_name: "Shanki200801/" },
    { full_name: "Shanki200801/" },
    { full_name: "Shanki200801/" },
    { full_name: "Shanki200801/" },
    { full_name: "Shanki200801/" },
  ];
  return projects;
}
async function filterProjects() {
  const projects = await getProjects();
  const excludedProjects = await getExcludedProjects();
  // filter out excluded projects
  const filteredProjects = projects.filter(
    (project: any) =>
      !excludedProjects.some(
        (excludedProject) => project.full_name === excludedProject.full_name
      )
  );
  // filter out forked projects
  return filteredProjects.filter((project: any) => !project.fork);
}

async function getRelevantProjectData() {
  const projects = await filterProjects();
  const relevantProjectData = projects.map((project: any) => {
    return {
      name: project.name,
      description: project.description,
      url: project.html_url,
      language: project.language,
      created_at: project.created_at,
      updated_at: project.updated_at,
      homepage: project.homepage,
      topics: project.topics,
    };
  });
  // console.log(relevantProjectData);
  return relevantProjectData;
}

const page = async () => {
  const projects = await getRelevantProjectData();
  return (
    <article className="flex flex-col">
      <div className="flex">
        <h1 className="text-xl font-medium py-2">PROJECTS</h1>
        <ProjectCounter />
      </div>
      <ProjectGrid projects={projects} />
    </article>
  );
};

export default page;
