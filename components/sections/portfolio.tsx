"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Web Design", "Development", "Mobile App"];

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Development",
        image: "/images/portfolio/project-1.jpg",
        description: "A full-featured online store built with Next.js and Stripe.",
    },
    {
        id: 2,
        title: "Fintech Dashboard",
        category: "Web Design",
        image: "/images/portfolio/project-2.jpg",
        description: "Modern dashboard interface for a financial technology startup.",
    },
    {
        id: 3,
        title: "Travel App",
        category: "Mobile App",
        image: "/images/portfolio/project-3.jpg",
        description: "Cross-platform mobile application for travel planning.",
    },
    {
        id: 4,
        title: "Portfolio V1",
        category: "Web Design",
        image: "/images/portfolio/project-4.jpg",
        description: "Previous version of my personal portfolio website.",
    },
    {
        id: 5,
        title: "SaaS Landing Page",
        category: "Development",
        image: "/images/portfolio/project-5.jpg",
        description: "High-converting landing page for a SaaS product.",
    },
    {
        id: 6,
        title: "Health & Fitness App",
        category: "Mobile App",
        image: "/images/portfolio/project-6.jpg",
        description: "Fitness tracking application with social features.",
    },
];

export function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    return (
        <section id="work" className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                        Selected Work
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        A collection of projects that demonstrate my expertise in design and
                        development.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4" role="group" aria-label="Project categories">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                aria-pressed={activeCategory === category}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative rounded-2xl overflow-hidden bg-card border border-border"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <Button
                                            size="icon"
                                            aria-label={`View ${project.title} live`}
                                            className="rounded-full bg-background text-foreground hover:bg-background/90"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </Button>
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            aria-label={`View ${project.title} code on GitHub`}
                                            className="rounded-full border-border text-foreground hover:bg-accent hover:text-accent-foreground"
                                        >
                                            <Github className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-medium text-primary-accent mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm">{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
