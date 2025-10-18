import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return ( <>
<nav className="flex items-center justify-center w-full px-6 relative mt-6">
  {/* Left: Logo — fixed size, not flexing */}
  <div className="absolute left-6 flex items-center">
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="Design by Prachiti logo"
        width={200}   // increase size here
        height={200}
        className="h-45 w-auto"  // display size control only
      />
    </Link>
  </div>

  {/* Center: Links — perfectly centered */}
  <ul className="flex gap-12 items-center font-[300]">
    <li><Link href="/">HOME</Link></li>
    <li><Link href="/about">ABOUT</Link></li>
    <li><Link href="/blog">BLOGS</Link></li>
    <li><Link href="/contact">CONTACT</Link></li>
  </ul>
</nav>


  </>
  );
}