/** biome-ignore-all lint/performance/noNamespaceImport: test */
/** biome-ignore-all assist/source/organizeImports: test */
/** biome-ignore-all assist/source/useSortedAttributes: test */
/** biome-ignore-all lint/nursery/useSortedClasses: test */
"use client"

import type * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }