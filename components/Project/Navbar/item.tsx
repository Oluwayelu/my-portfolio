import { FunctionComponent } from "react";
import { IProjectsNavItem } from "../../../interface/types";

export const ProjectsNavItem: FunctionComponent<IProjectsNavItem> = ({
  value,
  handlerFilterCategory,
  active,
}) => {
 
  return (
    <li
      className={`capitalize cursor-pointer hover:text-primary ${
        active === value && "text-primary"
      }`}
      onClick={() => handlerFilterCategory(value)}
    >
      {value}
    </li>
  );
};

export default ProjectsNavItem;
