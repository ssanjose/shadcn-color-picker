import { SiteConfig } from "@/lib/types/site";

export const siteConfig: SiteConfig = {
  name: "Shadcn Color Picker",
  author: "Kurt San Jose",
  description: "An implementation of color-picker made using shadcn/ui and react-colorful ",
  keywords: [
    "Next.js",
    "React",
    "TailwindCSS",
    "shadcn/ui",
    "Next15",
    "React Colorful",
    "Color Picker",
    "Color",
    "Picker",
  ],
  url: {
    base: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    author: "https://kurtsanjose.dev",
  },
  links: {
    github: "https://github.com/ssanjose/shadcn-color-picker",
  },
}