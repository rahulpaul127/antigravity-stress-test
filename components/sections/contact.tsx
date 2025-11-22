"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                            Let's Work Together
                        </h2>
                        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                            Have a project in mind? I'd love to hear about it. Send me a message
                            and let's create something amazing together.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">Email</h3>
                                        <a
                                            href="mailto:hello@alex.dev"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            hello@alex.dev
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">Phone</h3>
                                        <a
                                            href="tel:+1234567890"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            +1 (234) 567-890
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">Location</h3>
                                        <p className="text-muted-foreground">San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card border border-border rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-sm"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-background/50 border border-input rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-background/50 border border-input rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    placeholder="Project Inquiry"
                                    className="w-full bg-background/50 border border-input rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-background/50 border border-input rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none text-foreground placeholder:text-muted-foreground"
                                />
                            </div>

                            <Button className="w-full h-12 text-base rounded-lg">
                                Send Message
                                <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
