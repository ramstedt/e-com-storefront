import {
  IoSearchOutline,
  IoBagOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { AiOutlineGlobal } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';
import './navbar.css';
import Image from 'next/image';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function Navbar({ logo }) {
  return (
    <nav>
      <Link href='/' className={quicksand.className}>
        <Image src={logo} height='40' width='40' alt='logo' />
        Loom
      </Link>
      <div className='navLinks'>
        <AiOutlineGlobal />
        <IoSearchOutline />
        <IoPersonOutline />
        <IoBagOutline />
        <RxHamburgerMenu />
      </div>
    </nav>
  );
}
