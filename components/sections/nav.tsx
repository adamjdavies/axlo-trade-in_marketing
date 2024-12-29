import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import axloLogo from "@/public/axlo_logo.svg";

export function SiteNav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <Link
          href="/"
          className="flex items-center space-x-2"
          aria-label="Home"
        >
          <Image
            src={axloLogo}
            alt="Axlo Logo"
            width={100}
            height={100}
            priority
          />
        </Link>
        <nav className="hidden gap-8 md:flex"></nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild className="hidden md:inline-flex">
            <Link href="#demo">Book a demo</Link>
          </Button>
          <Button asChild>
            <Link href="#waitlist" className="gap-2 group">
              Early access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
