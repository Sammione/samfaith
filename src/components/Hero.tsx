import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden p-0">
            {/* Background Media */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/images/Snapchat-1355185705.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-4xl">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="uppercase tracking-[0.5em] text-[10px] md:text-xs font-light mb-6 block opacity-80"
                >
                    A Union of Souls & Faith
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-8xl font-serif italic mb-8 leading-tight"
                >
                    Samuel & Faith
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className="space-y-4"
                >
                    <p className="text-sm md:text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed opacity-90">
                        "Two lives, one path. A devotion that transcends the ordinary,
                        where every shared breath is a testament to a love nurtured by grace."
                    </p>
                    <div className="w-12 h-[1px] bg-white/30 mx-auto mt-8"></div>
                </motion.div>
            </div>
        </section>
    );
};
