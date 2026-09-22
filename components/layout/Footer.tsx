import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full border-t border-stone-800 bg-stone-950 text-stone-300">
            <div className="container mx-auto px-4 py-12 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1 space-y-4">
                        <div className="flex items-center gap-2 font-bold text-stone-50 text-xl">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fbd965] text-stone-950 shadow-sm">
                                <span className="text-sm font-bold">C</span>
                            </div>
                            CreditMitra
                        </div>
                        <p className="text-sm leading-relaxed text-stone-400">
                            Empowering your financial journey with advanced analytics.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div className="flex flex-col gap-3">
                            <h4 className="font-semibold text-stone-50">Product</h4>
                            <Link href="#" className="hover:text-[#fbd965] transition-colors text-sm">Features</Link>
                            <Link href="#" className="hover:text-[#fbd965] transition-colors text-sm">Integrations</Link>
                            <Link href="#" className="hover:text-[#fbd965] transition-colors text-sm">Pricing</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="font-semibold text-stone-50">Company</h4>
                            <Link href="#" className="hover:text-[#fbd965] transition-colors text-sm">About</Link>
                            <Link href="#" className="hover:text-[#fbd965] transition-colors text-sm">Careers</Link>
                            <Link href="#" className="hover:text-[#fbd965] transition-colors text-sm">Blog</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="font-semibold text-stone-50">Legal</h4>
                            <Link href="#" className="hover:text-[#fbd965] transition-colors text-sm">Privacy</Link>
                            <Link href="#" className="hover:text-[#fbd965] transition-colors text-sm">Terms</Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
                    <p>© {new Date().getFullYear()} CreditMitra Inc. All rights reserved.</p>

                    <div className="flex items-center gap-4">
                        <Link href="#" className="hover:text-[#fbd965] transition-colors"><Twitter className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-[#fbd965] transition-colors"><Github className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-[#fbd965] transition-colors"><Linkedin className="h-5 w-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
