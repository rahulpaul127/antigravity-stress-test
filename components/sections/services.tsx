"use client";

import { motion } from "framer-motion";
import { Code, Layout, Smartphone, Zap } from "lucide-react";

const services = [
    {
        icon: <Layout className="w-8 h-8" />,
        title: "Web Design",
        description:
            "Stunning, user-centric designs that tell your brand's story and captivate your audience.",
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: "Development",
        description:
            "Clean, scalable code using modern frameworks like Next.js and React for optimal performance.",
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Mobile Apps",
        description:
            "Responsive and native mobile applications that provide seamless experiences across all devices.",
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Optimization",
        description:
            "Speed optimization and SEO best practices to ensure your site ranks high and loads fast.",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-muted/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                        My Services
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I offer a comprehensive range of digital services to help you achieve
                        your business goals.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors shadow-sm"
                        >
                            <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
