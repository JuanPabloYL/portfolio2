type SkillsCardProps = {
  name: string;
  icon: string;
  content: string;
};

export const SkillsCard = ({ activity }: SkillsCardProps) => {
  const { name, icon, content } = activity;

  return (
    <div className="flex items-center gap-5 bg-zinc-600 p-2 rounded-2xl">
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
