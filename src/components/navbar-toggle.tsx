'use client'

import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";


export default function NavbarToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="pointer-events-none fixed right-0 bottom-0 z-30 m-6 flex origin-bottom h-full max-h-14 ">
      <div className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center transform-gpu">
        <Button
          variant="ghost"
          type="button"
          size="icon"
          className="px-2 border bg-white hover:bg-white"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden" />
          <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block" />
        </Button>
      </div>
    </div>
  );
}
