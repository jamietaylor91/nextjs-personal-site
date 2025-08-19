'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { Navbar } from '@/components/ui/nav'
import { usePathname } from "next/navigation";

  /*
    Refactor: Move navbr to the main layout page
  */
export function Header() {
    const pathname = usePathname();
    const hideNav = pathname === "/side-project";

  return (
    <div>
            <Navbar />
                <header className="mb-8 flex items-center justify-between">
      {
        !hideNav && <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Jamie L. Taylor
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Software Engineer
        </TextEffect>
      </div>
      }
    </header>
    </div>

  )
}
