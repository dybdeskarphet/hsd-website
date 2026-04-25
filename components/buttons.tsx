import { IconType } from "react-icons";
import Link from "next/link";

interface SocialButtonProps {
  Icon: IconType;
  href: string;
  ariaLabel: string;
}

export const SocialButton = ({ Icon, href, ariaLabel }: SocialButtonProps) => {
  return (
    <Link href={href} aria-label={ariaLabel}>
      <button
        className="
      w-10 h-10
      md:w-13 md:h-13
      flex items-center justify-center
      bg-black dark:bg-[#262626] text-white
      border-2 border-black dark:border-white/20
      hover:scale-110 hover:border-hsd-accent dark:hover:border-hsd-accent
      transition-all duration-200
      shadow-[3px_3px_0_0_rgba(0,0,0,0.2)] dark:shadow-[3px_3px_0_0_rgba(255,255,255,0.1)]
      cursor-pointer
      "
      >
        <Icon className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </Link>
  );
};
