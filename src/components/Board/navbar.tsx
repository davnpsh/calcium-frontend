import Logo from "../../../public/logo.png";
import LogoDark from "../../../public/logo-dark.png";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="h-14 w-full px-8 border-b border-gray-200 dark:border-white dark:border-opacity-10">
      <div className="mx-auto max-w-screen-xl flex items-center h-full justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="block dark:hidden">
              <Image src={Logo} className="h-[40px] w-[40px]" alt="Logo" />
            </div>
            <div className="hidden dark:block">
              <Image src={LogoDark} className="h-[40px] w-[40px]" alt="Logo" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}