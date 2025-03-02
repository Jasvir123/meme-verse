import Link from "next/link";

import {
  FlameIcon as Fire,
  TrendingUp,
  Award,
  Sparkles,
  Menu,
} from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function MemeWebsite() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Hero />
    </div>
  );
}

/** sparkle: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(0.9) rotate(-3deg)" },
          "50%": { transform: "scale(1.1) rotate(3deg)" },
          "75%": { transform: "scale(0.95) rotate(-1deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "bounce-slow": "bounce-slow 3s ease-in-out infinite",
        sparkle: "sparkle 2s ease-in-out infinite", */
