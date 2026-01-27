import Link from 'next/link';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full border-t border-stone-800">
            {/* Top Section: Main Content */}
            <div className="bg-stone-900 py-12">
                <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                        {/* Brand Section */}
                        <div className="space-y-4 max-w-sm">
                            <div className="flex items-center gap-2 font-bold text-stone-50 text-xl">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fbd965] text-stone-900 shadow-sm border border-white/10">
                                    <span className="text-sm font-bold">C</span>
                                </div>
                                CreditMitra
                            </div>
                            <p className="text-sm leading-relaxed text-stone-400">
                                Empowering your financial journey with advanced analytics and seamless user management. Built for modern teams.
                            </p>
                        </div>

                        {/* Links Column */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-stone-400">
                            <div className="flex flex-col gap-3">
                                <h4 className="font-semibold text-stone-50">Product</h4>
                                <Link href="#" className="hover:text-[#fbd965] transition-colors">Features</Link>
                                <Link href="#" className="hover:text-[#fbd965] transition-colors">Integrations</Link>
                                <Link href="#" className="hover:text-[#fbd965] transition-colors">Pricing</Link>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="font-semibold text-stone-50">Company</h4>
                                <Link href="#" className="hover:text-[#fbd965] transition-colors">About</Link>
                                <Link href="#" className="hover:text-[#fbd965] transition-colors">Careers</Link>
                                <Link href="#" className="hover:text-[#fbd965] transition-colors">Blog</Link>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="font-semibold text-stone-50">Legal</h4>
                                <Link href="#" className="hover:text-[#fbd965] transition-colors">Privacy</Link>
                                <Link href="#" className="hover:text-[#fbd965] transition-colors">Terms</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Copyright & Socials */}
            <div className="bg-stone-950 py-6 border-t border-stone-800/50">
                <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
                        <p>© 2024 CreditMitra Inc. All rights reserved.</p>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-4">
                                <Link href="#" className="hover:text-[#fbd965] transition-colors p-2 hover:bg-stone-900 rounded-full">
                                    <Twitter className="h-4 w-4" />
                                </Link>
                                <Link href="#" className="hover:text-[#fbd965] transition-colors p-2 hover:bg-stone-900 rounded-full">
                                    <Github className="h-4 w-4" />
                                </Link>
                                <Link href="#" className="hover:text-[#fbd965] transition-colors p-2 hover:bg-stone-900 rounded-full">
                                    <Linkedin className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
