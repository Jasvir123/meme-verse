"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { FlameIcon, Sparkles, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";
import { Meme } from "../../../types";
import MemeCard from "@/components/MemeCard";
import { useState } from "react";

export default function TrendingMemes({ memes }: { memes: Meme[] }) {
  const [pagination, setPagination] = useState(1);

  if (!memes) {
    return <div>Loading...</div>;
  }

  function showMoreMemes() {
    setPagination((prev) => ++prev);
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Trending Right Now
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out what's making the internet laugh today.
            </p>
          </div>
        </div>

        <Tabs defaultValue="hot" className="mt-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="hot" className="flex items-center gap-1">
                <FlameIcon className="h-4 w-4" />
                Hot
              </TabsTrigger>
              <TabsTrigger value="trending" className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                Trending
              </TabsTrigger>
              <TabsTrigger value="new" className="flex items-center gap-1">
                <Sparkles className="h-4 w-4" />
                New
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="hot" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {memes.slice(0, pagination * 8).map((props, index) => (
                <MemeCard {...props} key={`meme-${index}`} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-8">
          <Button
            className="cursor-pointer bg-white p-2 text-black rounded-md"
            size="lg"
            onClick={showMoreMemes}
          >
            Load More Memes
          </Button>
        </div>
      </div>
    </section>
  );
}
