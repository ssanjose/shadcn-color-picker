'use client';

import React, { useEffect } from "react";
import { siteConfig } from "@/config/site";
import { ColorPicker, ColorPickerHex, ColorPickerInput } from "@/components/ui/color-picker";
import { ColorContext, useColorContext } from "@/hooks/use-color-context";
import { cn } from "@/lib/utils";
import Link from "next/link"

import { Inter } from 'next/font/google';
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [color, setColor] = React.useState("#FFFFFF");

  return (
    <ColorContext.Provider value={color}>
      <App color={color} setColor={setColor} />
    </ColorContext.Provider>
  );
}

const App = ({ color, setColor }: {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const colorContext = useColorContext();
  return (
    <div style={{ backgroundColor: `${colorContext}` }} className={cn("min-h-screen py-[2.5rem]", inter.className)}>
      <div className={cn(`container mx-auto max-w-[45rem] min-h-lvw space-y-4 bg-white p-4 py-12 rounded-lg bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90`)}>
        <header className="space-y-2 pb-[5rem] flex flex-col items-center">
          <div className="space-y-2 text-center mb-2">
            <h1 className="text-3xl sm:text-5xl font-bold pt-2">{siteConfig.name}</h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-[30rem]">
              {siteConfig.description}
            </p>
            <div>
              <Button asChild>
                <Link href="#color-picker" className="text-muted-foreground">
                  <span>Try it Out!</span>
                </Link>
              </Button>
            </div>
            <Button
              variant="link"
              asChild
              className="hover:font-semibold"
            >
              <Link href={siteConfig.links.github}>
                <span>Star on GitHub</span>
                <MoveRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ColorPicker className="w-1/5 min-w-[10rem] mx-auto bg-white border-2 border-gray-300 rounded-xl" id="color-picker">
            <ColorPickerHex
              color={color}
              onChange={setColor}
            />
            <ColorPickerInput
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="#000"
            />
          </ColorPicker>
        </header>
        <main>
          <Installation />
        </main>
        <footer>

        </footer>
      </div>
    </div>
  );
}

const Installation = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Installation</h2>
      <div className="space-y-2">
        <p className="text-muted-foreground">
          Install react-colorful from npm.
        </p>
        <pre className="bg-gray-200 p-2 rounded-lg">
          <code className="text-sm">
            npm install react-colorful
          </code>
        </pre>
      </div>
      <div className="space-y-2">
        <p className="text-accent-foreground">Copy the <a href="#color-picker" className="p-1 bg-muted rounded">Color Picker</a> component.</p>
        <pre className="bg-muted p-2 rounded-lg">
          <code className="text-muted-foreground bg-muted text-sm whitespace-pre-wrap">
            {`
"use client"

import * as React from "react"
import { HexColorPicker } from "react-colorful"
import { cn } from "@/lib/utils"

export type ColorPickerProps = React.ComponentProps<typeof HexColorPicker>

const ColorPicker = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-full h-[200px] rounded-md border shadow-sm", className)}
    {...props}
  >
    {children}
  </div>
))
ColorPicker.displayName = "ColorPicker"

const ColorPickerHex = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
  ColorPickerProps
>(({ className, ...props }, ref) => (
  <HexColorPicker
    className={cn("rounded-none", className)}
    style={{
      width: "100%",
      height: "85%",
      borderRadius: "0",
    }}
    {...props}
  />
))
ColorPickerHex.displayName = "ColorPickerHex"

const ColorPickerInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex w-full h-fit px-3 py-1 bg-transparent transition-colors uppercase text-base md:text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  />
));
ColorPickerInput.displayName = "ColorPickerInput"

export { ColorPicker, ColorPickerHex, ColorPickerInput }
            `}
          </code>
        </pre>
        <p className="text-accent-foreground">
          Update the import paths to match your project structure.
        </p>
      </div>
    </div>
  );
};
