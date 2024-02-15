import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import NavBar from "./navbar";

const Header = () => {
  return (
    <div className="w-full h-[75px] bg-white dark:bg-black bg-opacity-10 dark:bg-opacity-15 px-[100px] flex items-center absolute">
      <div className="flex items-center gap-[303px] flex-1 h-full">
        <Link
          href="/"
          className="justify-start items-center gap-2.5 inline-flex"
        >
          <img className="w-5 h-5" src="/images/logo.png" />
          <div className="text-black dark:text-white text-lg font-semibold font-nav">
            SUMROV
          </div>
        </Link>
        <NavBar />
      </div>
      <ModeToggle />
    </div>
  );
};

export default Header;