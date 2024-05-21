import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/g-sampath-reddy/"><FaLinkedin /></a>
        <a href="https://github.com/sampathr0007"><FaGithub /></a>
        <a href="https://www.instagram.com/saaammmmmxd/"><FaInstagram /></a>
        <a href="https://x.com/saaammmmmxd"><FaSquareXTwitter /></a>
        <a href="https://leetcode.com/u/LUCIFER007OG/"><SiLeetcode/></a>
      </div>
    </nav>
  );
};

export default Navbar;
