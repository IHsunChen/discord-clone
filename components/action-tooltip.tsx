"use client"
import { ReactNode } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "./ui/tooltip"

interface ActionTooltipProps {
  label: string
  children: ReactNode
  side?: "top" | "left" | "right" | "bottom"
  align?: "start" | "center" | "end"
}

export function ActionTooltip({
  label,
  children,
  side,
  align
}: ActionTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p className="font-semibold text-sm capitalize">
            {label.toLocaleLowerCase()}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}