import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} MemeVault. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </Link>
        </nav>
      </div>
    </footer>
  );
}
