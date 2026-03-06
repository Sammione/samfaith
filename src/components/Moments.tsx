import { motion } from 'framer-motion';

const highlights = [
    {
        src: "/images/Snapchat-1164447846.mp4",
        type: "video",
        caption: "Laughter in the simplest things.",
        date: "Summer 2024"
    },
    {
        src: "/images/Snapchat-1224447431.jpg",
        type: "image",
        caption: "A look that says it all.",
        date: "Autumn 2024"
    },
    {
        src: "/images/Snapchat-1387849795.mp4",
        type: "video",
        caption: "The rhythm of our hearts.",
        date: "Winter 2024"
    }
];

export const Moments = () => {
    return (
        <section id="moments" className="bg-white">
            <div className="container">
                <header className="mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-accent-muted uppercase tracking-[0.4em] text-xs block mb-4"
                    >
                        Memories in Motion
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl"
                    >
                        Special <span className="font-serif italic text-accent-muted">Moments</span>
                    </motion.h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {highlights.map((moment, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-bg-secondary">
                                {moment.type === 'image' ? (
                                    <img src={moment.src} alt={moment.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                ) : (
                                    <video autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                                        <source src={moment.src} type="video/mp4" />
                                    </video>
                                )}
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-sm italic font-serif opacity-90">{moment.caption}</p>
                                </div>
                            </div>
                            <div className="px-2">
                                <span className="text-[10px] uppercase tracking-widest text-accent-muted block mb-2">{moment.date}</span>
                                <h3 className="text-xl font-light leading-snug">{moment.caption}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
