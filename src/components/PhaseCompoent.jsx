import React from 'react';

const PhaseComponent = ({ icon, title, description, isLast }) => {
  return (
    <div className="flex flex-row items-start mb-8 relative">
      <div className="flex-shrink-0 mb-4 md:mb-0">
        <div className="w-16 h-16 md:w-48 md:h-48 bg-violet-300 rounded-full flex items-center justify-center relative">
          <img src={icon} alt={`${title} icon`} className="w-8 h-8 md:w-24 md:h-24" />
          {!isLast && (
            <div className="absolute left-1/2 top-full w-0.5 border-l-2 border-dotted border-violet-300 h-full transform -translate-x-1/2 translate-y-4"></div>
          )}
        </div>
      </div>
      <div className="ml-6 mt-4 md:mt-0 md:ml-8 flex-1">
        <h2 className="text-xl md:text-3xl font-bold uppercase mb-2">{title}</h2>
        <div className="flex flex-col">
          {description.map((para, index) => (
            <p key={index} className="text-gray-800 leading-7 mb-4">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhaseComponent;
