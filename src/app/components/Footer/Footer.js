import Link from "next/link";
import "./footer.css";
import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer({}) {
  return (
    <footer>
      <div className="">
        <div className="footerTitle">we accept</div>
        <div className="">payment info</div>
      </div>
      <div className="footerLinks">
        <div className="footerTitle">need help?</div>
        <div className="links">
          <Link href="">FAQ</Link> |<Link href="">Delivery</Link> |
          <Link href="">Returns</Link> |<Link href="">Newsletter</Link> |
          <Link href="">Contact us</Link>
        </div>
      </div>
      <div className=""></div>
      <div className="footerSocials">
        <FaTiktok />
        <FaFacebook />
        <FaInstagram />
      </div>
    </footer>
  );
}
