import {
  IoSearchOutline,
  IoBagOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

import Link from "next/link";
import "./navbar.css";

export default function Navbar({ logo }) {
  return (
    <nav>
      <Link href="/">{logo}</Link>
      <div className="navLinks">
        <AiOutlineGlobal />
        <IoSearchOutline />
        <IoPersonOutline />
        <IoBagOutline />
        <RxHamburgerMenu />
      </div>
    </nav>
  );
}
