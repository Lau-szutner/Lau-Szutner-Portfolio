type ExperienceProps = {
  title: string;
  subject: string;
};

const Experience = ({ title, subject }: ExperienceProps) => {
  return (
    <div className="flex gap-5">
      <p>X</p>
      <div className="flex flex-col">
        <p className="font-bold">{title}</p>
        <p className="font-italic">{subject}</p>
      </div>
    </div>
  );
};

export default Experience;
