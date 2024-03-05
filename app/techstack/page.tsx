import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import TechStack from "./TechStack";

const page = () => {
  return (
    <div>
      <TechStack />
    </div>
  );
};

export default page;
