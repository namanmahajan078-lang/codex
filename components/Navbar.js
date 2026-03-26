import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { href: '/', label: 'Home' },
  { href: '/workspace', label: 'Workspace' },
  { href: '/blog', label: 'Blog' }
];

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[92%] max-w-5xl -translate-x-1/2 rounded-2xl glass">
      <nav className="flex items-center justify-between px-4 py-3 md:px-8">
        <span className="font-bold tracking-[0.25em] text-luxeGold">NM</span>
        <div className="flex gap-2 md:gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`magnetic rounded-full px-3 py-1 text-sm transition ${
                router.pathname === link.href ? 'bg-white/20 text-luxeCyan' : 'text-white/90 hover:text-luxeCyan'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
