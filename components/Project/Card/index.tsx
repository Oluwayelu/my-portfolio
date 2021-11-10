import { FunctionComponent, useState } from "react";
import { ProjectCardType } from "../../../interface/types";
import CardDetails from "./details";

import Image from "next/image";

const ProjectCard: FunctionComponent<ProjectCardType> = ({
  project: {
    name,
    image_path,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="300"
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail && (
        <CardDetails
          name={name}
          image_path={image_path}
          deployed_url={deployed_url}
          description={description}
          github_url={github_url}
          key_techs={key_techs}
          setShowDetail={setShowDetail}
        />
      )}
    </div>
  );
};

export default ProjectCard;
