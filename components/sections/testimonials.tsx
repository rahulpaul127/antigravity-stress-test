"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO at TechStart",
        image: "/images/testimonials/client-1.jpg",
        content:
            "Working with Alex was a game-changer for our business. The new website has increased our conversion rate by 150%. Highly recommended!",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Product Manager",
        image: "/images/testimonials/client-2.jpg",
        content:
            "Exceptional attention to detail and great communication throughout the project. The final result exceeded our expectations.",
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Marketing Director",
        image: "/images/testimonials/client-3.jpg",
        content:
            "A true professional who understands both design and development. Delivered on time and within budget.",
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-24 bg-muted/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                        Client Stories
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Don't just take my word for it. Here's what my clients have to say
                        about working with me.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-primary/20">
                        <Quote size={120} />
                    </div>

                    <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-sm">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col md:flex-row gap-8 items-center"
                            >
                                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                                    <Image
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        fill
                                        sizes="(max-width: 768px) 96px, 128px"
                                        className="object-cover rounded-full border-2 border-primary"
                                    />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <p className="text-lg md:text-xl leading-relaxed mb-6 italic text-foreground">
                                        "{testimonials[currentIndex].content}"
                                    </p>
                                    <div>
                                        <h3 className="text-lg font-bold text-primary-accent">
                                            {testimonials[currentIndex].name}
                                        </h3>
                                        <p className="text-muted-foreground text-sm">
                                            {testimonials[currentIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex justify-center md:justify-end gap-4 mt-8 md:mt-0 md:absolute md:bottom-12 md:right-12">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={prev}
                                aria-label="Previous testimonial"
                                className="rounded-full border-border hover:bg-accent hover:text-accent-foreground text-foreground"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={next}
                                aria-label="Next testimonial"
                                className="rounded-full border-border hover:bg-accent hover:text-accent-foreground text-foreground"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
