"use client"

import * as React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ColorPicker,
  ColorPickerHex,
  ColorPickerInput
} from "@/components/ui/color-picker";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ColorPickerButton = React.forwardRef<
  HTMLInputElement,
  Omit<React.ComponentProps<React.ElementType>, 'onChange'> & {
    color?: string;
    onChange?: React.Dispatch<React.SetStateAction<string>>
  }
>(({ className, color, onChange, ...props }, ref) => {
  const [colorValue, setColorValue] = React.useState("#58E1BE");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn("w-[2rem] h-[2rem] rounded border text-foreground self-center", className)}
          style={{ backgroundColor: color || colorValue }}
          {...props}>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <ColorPicker>
          <ColorPickerHex color={color || colorValue} onChange={onChange || setColorValue} />
          <ColorPickerInput
            type="text"
            value={color || colorValue}
            ref={ref}
            onChange={(e) => onChange ? onChange(e.target.value) : setColorValue(e.target.value)}
          />
        </ColorPicker>
      </PopoverContent>
    </Popover>
  );
});
ColorPickerButton.displayName = "ColorPickerButton";

export default ColorPickerButton;