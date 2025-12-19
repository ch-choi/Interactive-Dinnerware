import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from "@/lib/utils";

const headingVariants = cva(
    "font-serif tracking-tight text-primary-charcoal",
    {
        variants: {
            level: {
                h1: "text-4xl md:text-5xl lg:text-6xl font-medium leading-tight",
                h2: "text-3xl md:text-4xl font-medium",
                h3: "text-2xl md:text-3xl font-normal",
                h4: "text-xl md:text-2xl font-normal",
            },
            align: {
                left: "text-left",
                center: "text-center",
                right: "text-right",
            }
        },
        defaultVariants: {
            level: "h1",
            align: "left",
        },
    }
);

interface HeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, level, align, as, ...props }, ref) => {
        const Component = as || (level as any) || 'h1';
        return (
            <Component
                className={cn(headingVariants({ level, align, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Heading.displayName = "Heading";

const textVariants = cva(
    "font-sans text-primary-charcoal/80 leading-relaxed",
    {
        variants: {
            size: {
                default: "text-base",
                sm: "text-sm",
                lg: "text-lg",
                xl: "text-xl font-light",
            },
            weight: {
                default: "font-normal",
                light: "font-light",
                medium: "font-medium",
            },
            align: {
                left: "text-left",
                center: "text-center",
                right: "text-right",
            }
        },
        defaultVariants: {
            size: "default",
            weight: "default",
            align: "left",
        },
    }
);

interface TextProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
    as?: 'p' | 'span' | 'div';
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
    ({ className, size, weight, align, as = 'p', ...props }, ref) => {
        const Component = as;
        return (
            <Component
                className={cn(textVariants({ size, weight, align, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Text.displayName = "Text";

export { Heading, Text, headingVariants, textVariants };
