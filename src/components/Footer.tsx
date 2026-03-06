import { Heart } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="py-20 bg-text-primary text-white text-center">
            <div className="container">
                <Heart size={32} className="mx-auto mb-6 text-accent-soft" fill="currentColor" />
                <h3 className="font-serif text-3xl mb-8 italic">Samuel & Faith</h3>
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-12">
                    Designed with love for a beautiful journey
                </p>

                <div className="flex justify-center gap-12 text-[10px] uppercase tracking-widest text-white/60">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Vimeo</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 text-[10px] text-white/20 uppercase tracking-widest">
                    © 2026 Samuel & Faith. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
