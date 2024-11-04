import React, { Suspense } from "react";
import { skillsModelsFromBlender, skillsModelsThreeJS } from "../constants";
import { FrontendPrismCanvas } from "./canvas";


const ServiceCardGrid = () => {
  return (
    <div className="flex justify-center items-center" style={{ height: '80vh', marginBottom: '150px', position: 'relative' }}>
      <div className={`mt-20 grid grid-cols-1 sm:grid-cols-2 gap-20`}>
        {skillsModelsThreeJS.map((service, index) => (
          <ServiceCard key={service.title} index={index} title={service.title} object={service.object} props={service.props} />
        ))}
        {skillsModelsFromBlender.map((service, index) => (
          <ServiceCard key={service.title} index={index} title={service.title} object={service.object} />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ title, object: IconComponent, props }) => (
  <div className="xs:w-[350px] w-full">
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-[#915EFF] text-[30px] font-bold text-center mb-4">
        {title}
      </h3>
      {IconComponent && (
        <div>
          {React.createElement(IconComponent, props)}
        </div>
      )}
    </div>
  </div>
);

const ServiceCardFromBlender = ({title, model}) => (
  <div className="xs:w-[350px] w-full">
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-[#915EFF] text-[30px] font-bold text-center mb-4">
        {title}
      </h3>
      {model && (
        <div>
          {React.createElement(model)}
        </div>
      )}
    </div>
  </div>
);

export default ServiceCardGrid;
