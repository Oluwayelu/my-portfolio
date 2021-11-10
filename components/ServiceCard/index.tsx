import { FunctionComponent } from "react";
import { IServiceCard } from "@/interface/types";
// import { motion } from 'framer-motion'

const ServiceCard: FunctionComponent<IServiceCard> = ({
  service: { Icon, title, about },
}) => {
  function createMarkup() {
    return {
      __html: about,
    };
  }

  return (
    <div className="flex items-center p-2 space-x-4 ">
      <Icon className="w-12 h-12 text-primary" />
      <div className="">
        <h6 className="font-bold">{title}</h6>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;