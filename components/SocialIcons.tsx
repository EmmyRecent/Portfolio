import { socialIcons } from "@/app/constants";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <div className="flex items-start gap-4 lg:flex-col">
      {socialIcons.map((icons, i) => (
        <Link href={icons.href} key={i} className="social-icon">
          <i className={`${icons.className} z-10`}></i>
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
