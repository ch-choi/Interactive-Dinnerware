import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heading, Text } from '@/components/ui/typography';

export const Footer = () => {
    return (
        <footer className="bg-primary-cream pt-20 pb-10 border-t border-color-border">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">

                    {/* Brand & Newsletter */}
                    <div className="md:col-span-4 lg:col-span-5 space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-3xl font-serif font-bold text-primary-charcoal tracking-widest">
                                PALMER
                            </span>
                        </Link>
                        <Text className="max-w-xs">
                            Designed to elevate every dining experience, our rich colors and textured finishes turn meals into celebrations.
                        </Text>

                        <div className="pt-4">
                            <Heading level="h4" className="mb-4 text-sm uppercase tracking-widest">Subscribe</Heading>
                            <div className="flex gap-2 max-w-sm">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="bg-transparent border-b border-primary-charcoal/30 py-2 px-0 w-full focus:outline-none focus:border-primary-charcoal transition-colors font-sans text-sm"
                                />
                                <Button variant="outline" size="sm" rounded="default">
                                    Join
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Column 1 */}
                        <div className="space-y-6">
                            <Heading level="h4" className="text-sm uppercase tracking-widest font-bold">Shop</Heading>
                            <ul className="space-y-3">
                                <li><Link href="#" className="text-primary-charcoal/70 hover:text-accent-terracotta transition-colors text-sm">All Products</Link></li>
                                <li><Link href="#" className="text-primary-charcoal/70 hover:text-accent-terracotta transition-colors text-sm">New Arrivals</Link></li>
                                <li><Link href="#" className="text-primary-charcoal/70 hover:text-accent-terracotta transition-colors text-sm">Best Sellers</Link></li>
                                <li><Link href="#" className="text-primary-charcoal/70 hover:text-accent-terracotta transition-colors text-sm">Gift Cards</Link></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-6">
                            <Heading level="h4" className="text-sm uppercase tracking-widest font-bold">About</Heading>
                            <ul className="space-y-3">
                                <li><Link href="#" className="text-primary-charcoal/70 hover:text-accent-terracotta transition-colors text-sm">Our Story</Link></li>
                                <li><Link href="#" className="text-primary-charcoal/70 hover:text-accent-terracotta transition-colors text-sm">Sustainability</Link></li>
                                <li><Link href="#" className="text-primary-charcoal/70 hover:text-accent-terracotta transition-colors text-sm">Careers</Link></li>
                                <li><Link href="#" className="text-primary-charcoal/70 hover:text-accent-terracotta transition-colors text-sm">Press</Link></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-6">
                            <Heading level="h4" className="text-sm uppercase tracking-widest font-bold">Support</Heading>
                            <ul className="space-y-3">
                                <li><Link href="#" className="text-primary-charcoal/70 hover:text-accent-terracotta transition-colors text-sm">Contact Us</Link></li>
                                <li><Link href="#" className="text-primary-charcoal/70 hover:text-accent-terracotta transition-colors text-sm">Shipping & Returns</Link></li>
                                <li><Link href="#" className="text-primary-charcoal/70 hover:text-accent-terracotta transition-colors text-sm">FAQ</Link></li>
                                <li><Link href="#" className="text-primary-charcoal/70 hover:text-accent-terracotta transition-colors text-sm">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-color-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <Text size="sm" className="text-primary-charcoal/50">
                        © {new Date().getFullYear()} Palmer Clone. All rights reserved.
                    </Text>
                    <div className="flex gap-4">
                        {/* Social Icons Placeholder */}
                        <div className="h-5 w-5 bg-primary-charcoal/10 rounded-full"></div>
                        <div className="h-5 w-5 bg-primary-charcoal/10 rounded-full"></div>
                        <div className="h-5 w-5 bg-primary-charcoal/10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
