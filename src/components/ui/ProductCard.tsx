"use client";

import React from 'react';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Heading, Text } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    description?: string;
    isNew?: boolean;
}

export const ProductCard = ({
    id,
    name,
    price,
    category,
    image,
    isNew
}: ProductCardProps) => {
    return (
        <div className="group relative w-full cursor-pointer">
            {/* Image Container with Hover Effect */}
            <div className="relative aspect-[3/4] overflow-hidden bg-accent-stone/10 w-full mb-4">
                {isNew && (
                    <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest font-medium text-primary-charcoal">
                        New
                    </span>
                )}

                {/* Placeholder Image Logic: In a real app, use next/image with actual src */}
                <div className="absolute inset-0 bg-gray-200 transition-transform duration-700 ease-out group-hover:scale-105">
                    {/* 
              Using a colored div as placeholder if image fails, 
              but typically: <Image src={image} alt={name} fill className="object-cover" />
           */}
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-opacity duration-300"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>

                {/* Quick Add Button - Slide up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <Button className="w-full shadow-lg" variant="default">
                        Quick Add — ${price}
                    </Button>
                </div>
            </div>

            {/* Product Details */}
            <div className="space-y-1 text-center md:text-left">
                <Text size="sm" className="text-primary-charcoal/60 uppercase tracking-widest text-xs">
                    {category}
                </Text>
                <Heading level="h3" className="text-lg md:text-xl font-medium group-hover:text-accent-terracotta transition-colors duration-300">
                    {name}
                </Heading>
                <Text size="default" weight="medium">
                    ${price.toFixed(2)}
                </Text>
            </div>
        </div>
    );
};
