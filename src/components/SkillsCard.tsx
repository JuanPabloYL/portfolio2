type SkillsCardProps = {
  activity: {
    name: string;
    icon: string;
    content: string;
  };
};

export const SkillsCard = ({ activity }: SkillsCardProps) => {
  const { name, icon, content } = activity;

  return (
    <div className="flex items-center gap-5 bg-zinc-600 px-4 py-4 rounded-2xl h-[12rem]">
      <div>
        <img className="w-20" src={icon} alt="Icon" />
      </div>

      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};
