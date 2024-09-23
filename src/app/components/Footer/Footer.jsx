import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
  FiInstagram,
} from "react-icons/fi";

import { FaTelegramPlane } from "react-icons/fa";
import { TbBrandTinder } from "react-icons/tb";
import { TbBrandLinktree } from "react-icons/tb";

const socialLinks = [
  {
    id: 1,
    icon: <FiTwitter />,
    url: "https://twitter.com/",
  },
  {
    id: 2,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/",
  },
  {
    id: 3,
    icon: <FiYoutube />,
    url: "https://www.youtube.com/c/",
  },
  {
    id: 4,
    icon: <FaTelegramPlane />,
    url: "https://www.youtube.com/c/",
  },
  {
    id: 5,
    icon: <TbBrandTinder />,
    url: "https://www.youtube.com/c/",
  },
  {
    id: 6,
    icon: <FiInstagram />,
    url: "https://www.youtube.com/c/",
  },
  {
    id: 7,
    icon: <TbBrandLinktree />,
    url: "https://www.youtube.com/c/",
  },
];

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
            You know what you have to do
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-600 cursor-pointer rounded-lg bg-[rgb(250,245,223)] hover:bg-[rgb(250,245,223)] shadow-sm p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl text-black">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
