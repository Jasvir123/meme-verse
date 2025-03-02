import Image from "next/image";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Sparkles, TrendingUp, Upload, FlameIcon, Award } from "lucide-react";
import Link from "next/link";
import TrendingMemes from "../TrendingMemes";
import { Meme } from "../../../types";

export default async function Hero() {
  const res = await fetch("https://api.memegen.link/templates");
  const memes: Meme[] = await res.json();

  const randomMemes: Meme[] = memes.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Where Memes Come to Life
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover, create, and share the internet's funniest memes.
                  Join the largest meme community on the web.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="gap-1 flex items-center bg-secondary rounded-[8px] p-2"
                >
                  <Sparkles className="h-4 w-4" />
                  Explore Memes
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-1 flex items-center bg-secondary rounded-[8px] p-2"
                >
                  <Upload className="h-4 w-4" />
                  Upload Yours
                </Button>
              </div>
            </div>
            <div className="mx-auto grid max-w-[400px] grid-cols-2 gap-3 lg:max-w-none">
              <div className="grid gap-3">
                {randomMemes.slice(0, 2).map((meme, index) => (
                  <div
                    key={`randomMeme-${index}`}
                    className="overflow-hidden rounded-lg"
                  >
                    <img
                      src={meme.example.url}
                      alt={`Trending meme ${meme.id}`}
                      className="aspect-square object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="grid gap-3 pt-6">
                {randomMemes.slice(2, 4).map((meme, index) => (
                  <div
                    key={`randomMeme-${index}`}
                    className="overflow-hidden rounded-lg"
                  >
                    <img
                      src={meme.example.url}
                      alt={`Trending meme ${meme.id}`}
                      className="aspect-square object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Everything You Need for Meme Mastery
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                MemeVault gives you all the tools to discover, create, and share
                the internet's best memes.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Trending Memes</h3>
              <p className="text-center text-muted-foreground">
                Stay updated with the latest viral content and trending memes
                from around the web.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FlameIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Meme Generator</h3>
              <p className="text-center text-muted-foreground">
                Create your own memes with our easy-to-use meme generator. No
                design skills required.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Community Voting</h3>
              <p className="text-center text-muted-foreground">
                Vote for your favorite memes and see what's popular in the
                community.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TrendingMemes memes={memes} />
      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Join the Meme Revolution?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up today and become part of the internet's largest meme
                community.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button type="submit">Join Now</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link href="#" className="underline underline-offset-2">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
