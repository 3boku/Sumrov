"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ElementRef, useRef, useState } from "react";

const dataList = ["top", "bottom", "acc", "outer", "all"];

const ShopMenu = () => {
  const modalRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const resetWidth = () => {
    if (modalRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      modalRef.current.style.height = "100px";

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (modalRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      modalRef.current.style.height = "0";

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  return (
    <div>
      <div
        className="text-black dark:text-white text-xl font-bold font-nav cursor-pointer"
        onClick={isCollapsed ? resetWidth : collapse}
      >
        Shop
      </div>
      <div
        ref={modalRef}
        className={cn(
          "w-[91px] h-0 flex flex-col pl-[9px] overflow-hidden mt-2",
          isResetting && "transition-all ease-in-out duration-300"
        )}
      >
        {dataList.map((args, i) => (
          <Link
            key={i}
            href={{ pathname: "/mobile/shop", query: { category: args } }}
            className="text-black dark:text-white text-[13px] font-semibold font-nav"
          >
            {args.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopMenu;
