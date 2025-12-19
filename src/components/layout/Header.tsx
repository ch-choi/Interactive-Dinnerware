"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Shop', href: '/shop' },
        { name: 'Collections', href: '/collections' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
                isScrolled
                    ? "bg-primary-cream/95 backdrop-blur-sm py-3 shadow-sm border-color-border"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-primary-charcoal"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Logo */}
                <Link href="/" className="text-2xl font-serif font-bold text-primary-charcoal tracking-tighter">
                    PALMER
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-primary-charcoal hover:text-accent-terracotta transition-colors text-sm uppercase tracking-widest font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Utilities */}
                <div className="flex items-center space-x-2 md:space-x-4">
                    <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                        <Search size={20} />
                    </Button>
                    <Button variant="ghost" size="icon" className="relative">
                        <ShoppingBag size={20} />
                        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-accent-terracotta block md:hidden" />
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-primary-cream z-40 flex flex-col pt-24 px-6 transition-transform duration-300 md:hidden",
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <nav className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-3xl font-serif text-primary-charcoal"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};
