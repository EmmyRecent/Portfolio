import { socialIcons } from "@/app/constants";

const SocialIcons = () => {
  return (
    <div className="flex items-start gap-4 lg:flex-col">
      {socialIcons.map((icons, i) => (
        <i
          key={i}
          className={`${icons.className} text-textColor border-textColor grid cursor-pointer place-items-center rounded-full border p-3 text-lg lg:text-xl`}
        ></i>
      ))}
    </div>
  );
};

export default SocialIcons;
