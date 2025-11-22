import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <Link href="/" className="text-2xl font-bold font-display tracking-tighter text-foreground">
                            ALEX<span className="text-primary">.DEV</span>
                        </Link>
                        <p className="text-muted-foreground text-sm mt-2">
                            © {new Date().getFullYear()} Alex.Dev. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 text-muted-foreground">
                        <a href="#" aria-label="GitHub" className="hover:text-foreground transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-foreground transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
