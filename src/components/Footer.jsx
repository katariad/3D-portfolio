import { FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-primary">
      <hr />
      <div className="flex justify-center align-middle p-1 gap-1">
        <Link
          to={"https://www.linkedin.com/in/dkataria007/"}
          target="new_blank"
        >
          <IoLogoLinkedin />
        </Link>
        <Link to={"https://github.com/katariad"} target="new_blank">
          <FaGithubSquare />
        </Link>

        <Link to={"mailto:katariad2018@gmail.com"}>
          <SiGmail />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
