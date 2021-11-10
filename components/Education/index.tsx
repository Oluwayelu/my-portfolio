import { FunctionComponent } from "react";
import Fade from "react-reveal/Fade";
import { IEducation } from "@/interface/types";

const Experience: FunctionComponent<IEducation> = ({
  value: { course, school, description },
}) => {
  return (
    <Fade left cascade>
      <div className="">
        <h5 className="my-2 text-xl font-bold text-primary">{course}</h5>
        <p className="font-semibold">{school}</p>
        <p className="my-3">{description}</p>
      </div>
    </Fade>
  );
};

export default Experience;
