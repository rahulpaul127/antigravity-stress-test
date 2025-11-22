"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-sm text-foreground mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Available for freelance work
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
                        Crafting Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Experiences
                        </span>
                    </h1>

                    <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                        I help startups and brands build premium, high-converting websites
                        and applications that leave a lasting impression.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <a href="#work">
                            <Button size="lg" className="rounded-full text-base h-12 px-8">
                                View My Work
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </a>
                        <a href="#contact">
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full text-base h-12 px-8 bg-transparent border-border hover:bg-accent hover:text-accent-foreground text-foreground"
                            >
                                Contact Me
                            </Button>
                        </a>
                    </div>

                    <div className="flex items-center gap-6 text-muted-foreground">
                        <a href="#" aria-label="GitHub" className="hover:text-foreground transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-foreground transition-colors">
                            <Twitter className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 w-full aspect-square bg-gradient-to-br from-white/10 to-transparent rounded-2xl border border-white/10 backdrop-blur-sm p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl opacity-50" />
                        {/* Realistic Code Snippet with Typing Animation */}
                        <div className="h-full w-full rounded-xl bg-[#1e1e1e] border border-white/10 p-4 font-mono text-xs sm:text-sm overflow-hidden shadow-2xl">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            </div>
                            <div className="text-gray-300 leading-relaxed">
                                <div>
                                    <span className="text-pink-500">const</span> <span className="text-blue-400">Developer</span> <span className="text-white">=</span> <span className="text-yellow-400">{`{`}</span>
                                </div>
                                <div className="pl-4">
                                    <span className="text-blue-300">name</span>: <span className="text-green-400">'Alex'</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-blue-300">skills</span>: <span className="text-yellow-400">[</span>
                                </div>
                                <div className="pl-8">
                                    <span className="text-green-400">'React'</span>, <span className="text-green-400">'Next.js'</span>,
                                </div>
                                <div className="pl-8">
                                    <span className="text-green-400">'Node.js'</span>, <span className="text-green-400">'Design'</span>
                                </div>
                                <div className="pl-4">
                                    <span className="text-yellow-400">]</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-blue-300">hardWorker</span>: <span className="text-pink-500">true</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-blue-300">problemSolver</span>: <span className="text-pink-500">true</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-purple-400">hireable</span>: <span className="text-pink-500">function</span>() <span className="text-yellow-400">{`{`}</span>
                                </div>
                                <div className="pl-8">
                                    <span className="text-pink-500">return</span> <span className="text-blue-400">this</span>.<span className="text-blue-300">hardWorker</span> <span className="text-white">&&</span>
                                </div>
                                <div className="pl-8">
                                    <span className="text-blue-400">this</span>.<span className="text-blue-300">problemSolver</span>;
                                </div>
                                <div className="pl-4">
                                    <span className="text-yellow-400">{'}'}</span>
                                </div>
                                <div>
                                    <span className="text-yellow-400">{'}'}</span>;
                                </div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="inline-block w-2 h-4 bg-blue-400 ml-1 align-middle"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-2xl -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
