import Image from "next/image";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import AuthButton from "./auth-buton";

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-center border-b bg-background/95 backdrop-blur">
      <div className="container flex justify-between">
        {/* logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center gap-2">
            <Image src="/bocchi_right.png" alt="logo" height={30} width={30} />
            <div className="text-xl font-bold text-primary">eder3232</div>
          </div>
        </Link>

        <div className="flex gap-2">
          <AuthButton />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
