import { Menu, Search, Sparkles } from "lucide-react";
import Link from "next/link";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">MemeVault</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Trending
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Categories
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Create
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative w-40 lg:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search memes..."
              className="w-full pl-8"
            />
          </div>
          <Button>Sign In</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
