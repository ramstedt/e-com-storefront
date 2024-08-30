import "./footer.css";
import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer({}) {
  return (
    <footer>
      <div className=""></div>
      <div className="footerSocials">
        <FaTiktok />
        <FaFacebook />
        <FaInstagram />
      </div>
    </footer>
  );
}
