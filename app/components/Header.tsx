import Link from "next/link";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors tracking-wide">
            ANIK-DEV
          </Link>
          <ul className="flex items-center gap-4 md:gap-8 list-none m-0 p-0 text-sm md:text-base">
            <li><Link href="/#home" className="text-white hover:text-purple-400 transition-colors">Home</Link></li>
            <li><Link href="/#about" className="text-white hover:text-purple-400 transition-colors">About</Link></li>
            <li><Link href="/#experience" className="text-white hover:text-purple-400 transition-colors">Services</Link></li>
            <li><Link href="/#contact" className="text-white hover:text-purple-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
