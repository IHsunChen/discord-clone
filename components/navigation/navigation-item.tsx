"use client"
import Image from "next/image"
import { ActionTooltip } from "../action-tooltip"
import { cn } from "@/lib/utils"
import { useParams, useRouter } from "next/navigation"

interface NavigationItemProps {
  id: string
  imageUrl: string
  name: string
}

export function NavigationItem({
  id,
  imageUrl,
  name
}: NavigationItemProps) {
  const params = useParams()
  const router = useRouter()

  const onClick = () => {
    router.push(`/servers/${id}`)
  }
  return (
    <ActionTooltip
      side="right"
      align="center"
      label={name}
    >
      <button 
        onClick={() => onClick()}
        className="group relative flex items-center duration-500"
      >
        <div className={cn(
          "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
          params?.serverId !== id && "group-hover:h-[20px]",
          params?.serverId === id ? "h-[36px]" : "h-[8px]"
        )} />
        <div className={cn(
          "relative group flex mx-3 h-[48px] w-[48px] rounded-full transition-all overflow-hidden",
          params?.serverId === id && "bg-primary/10 text-primary"
        )}>
          <Image 
            fill
            src={imageUrl}
            alt="Channel"
          />
        </div>
      </button>
    </ActionTooltip>
  )
}