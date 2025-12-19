import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center font-serif transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none ring-offset-background transition-all active:scale-[0.98]",
    {
        variants: {
            variant: {
                default: "bg-primary-charcoal text-white hover:bg-black/90 shadow-md",
                outline: "border border-primary-charcoal text-primary-charcoal hover:bg-primary-charcoal hover:text-white",
                ghost: "hover:bg-accent-stone/10 text-primary-charcoal",
                link: "text-primary-charcoal underline-offset-4 hover:underline",
                terracotta: "bg-accent-terracotta text-white hover:bg-accent-terracotta/90",
            },
            size: {
                default: "h-11 px-8 py-2 text-base",
                sm: "h-9 px-4 text-sm",
                lg: "h-14 px-10 text-lg",
                icon: "h-11 w-11",
            },
            rounded: {
                default: "rounded-none", // Sharp edges for luxury feel
                full: "rounded-full",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            rounded: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, rounded, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, rounded, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
