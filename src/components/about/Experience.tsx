import React from 'react';

interface Props {
  title: string;
  dates: string;
  description: string;
}

const Experience: React.FC<Props> = ({ title, dates, description }) => {
  return (
    <div className="flex gap-10 items-start">
      <div className="flex-1">
        <div className="flex justify-between items-baseline">
          <h3 className="font-bold text-xl w-6/12">{title}</h3>
          <p>{dates}</p>
        </div>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  );
};

export default Experience;
