import { FunctionComponent } from "react";
import Fade from "react-reveal/Fade";
import { IExperience } from "@/interface/types";

const Experience: FunctionComponent<IExperience> = ({
  value: { title, company, description },
}) => {
  return (
    <Fade left cascade>
      <div className="">
        <h5 className="my-2 text-xl font-bold text-primary">{title}</h5>
        <p className="font-semibold">{company}</p>
        <p className="my-3">{description}</p>
      </div>
    </Fade>
  );
};

export default Experience;
