import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

interface SocialLinksProps {
  linkedin: string;
  facebook: string;

  // Icon color
  iconColor?: string;

  // Background
  bgColor?: string;

  // Hover backgrounds
  linkedinHover?: string;
  facebookHover?: string;

  // Size
  size?: "sm" | "md" | "lg";
}

export default function SocialLinks({
  linkedin,
  facebook,
  iconColor = "text-white",
  bgColor = "bg-white/10",
  linkedinHover = "hover:bg-[#0A66C2]",
  facebookHover = "hover:bg-[#1877F2]",
  size = "sm",
}: SocialLinksProps) {
  const sizes = {
    sm: "h-10 w-10 text-lg",
    md: "h-12 w-12 text-xl",
    lg: "h-14 w-14 text-2xl",
  };

  return (
    <div className="flex items-center gap-4">
      <Link
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 ${sizes[size]} ${bgColor} ${linkedinHover}`}
      >
        <FaLinkedinIn
          className={`${iconColor} transition-transform duration-300 group-hover:scale-110`}
        />
      </Link>

      <Link
        href={facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 ${sizes[size]} ${bgColor} ${facebookHover}`}
      >
        <FaFacebookF
          className={`${iconColor} transition-transform duration-300 group-hover:scale-110`}
        />
      </Link>
    </div>
  );
}