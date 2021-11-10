import { FunctionComponent } from "react";
import { IProjectsNav } from "../../../interface/types";
import NavItem from "./item";

const ProjectsNavbar: FunctionComponent<IProjectsNav> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="django" {...props} />
      <NavItem value="node" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
