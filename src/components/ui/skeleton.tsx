import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef } from "react"

const skeletonVariants = cva(
  "animate-pulse rounded-md bg-muted",
  {
    variants: {
      variant: {
        default: "",
        circle: "rounded-full",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(skeletonVariants({ variant, className }))}
      {...props}
    />
  )
)

export { Skeleton } 