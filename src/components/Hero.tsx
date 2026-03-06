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
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="uppercase tracking-[0.3em] text-sm font-light mb-4 block"
                >
                    A Journey of Love
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="text-6xl md:text-9xl font-serif italic mb-8"
                >
                    Samuel & Faith
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="flex flex-col items-center"
                >
                    <div className="w-[1px] h-20 bg-white/50 mb-4"></div>
                    <span className="text-xs uppercase tracking-widest font-light opacity-70">
                        Scroll to explore
                    </span>
                </motion.div>
            </div>
        </section>
    );
};
