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
import { PopoverProps } from '@radix-ui/react-popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ColorPickerButton = React.forwardRef<
  HTMLElement,
  Omit<React.ComponentProps<React.ElementType>, 'onChange'> & {
    color?: string;
    onChange?: React.Dispatch<React.SetStateAction<string>>
  }
>(({ className, color, onChange, ...props }, ref) => {
  const [colorValue, setColorValue] = (color && onChange) ? [color, onChange] : React.useState("#58E1BE");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn("w-[2rem] h-[2rem] rounded border text-foreground self-center", className)}
          style={{ backgroundColor: colorValue }}
          {...props}>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <ColorPicker>
          <ColorPickerHex color={colorValue} onChange={setColorValue} />
          <ColorPickerInput
            type="text"
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
          />
        </ColorPicker>
      </PopoverContent>
    </Popover>
  );
});

export default ColorPickerButton;