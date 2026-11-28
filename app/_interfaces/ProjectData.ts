interface ProjectData {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  created_at: string;
  updated_at: string;
  homepage: string | null;
  topics: string[];
}

export default ProjectData;
