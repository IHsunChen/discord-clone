"use client"

import { Smile } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useTheme } from "next-themes"

interface EmojiPickerProps {
  onChange: (value: string) => void
}

export const EmojiPicker = ({
  onChange
}: EmojiPickerProps) => {
  const { resolvedTheme } = useTheme()
  console.log(resolvedTheme)
  return (
    <Popover>
      <PopoverTrigger>
        <Smile
          className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
        />
      </PopoverTrigger>
      <PopoverContent side="right" sideOffset={40} className="bg-transparent border-none shadow-none drop-shadow-none mb-16">
        <Picker data={data} onEmojiSelect={(emoji: any) => onChange(emoji.native)} theme={resolvedTheme}/>
      </PopoverContent>
    </Popover>
  )
}