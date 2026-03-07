import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const BackButton = () => {
    const navigate = useNavigate();

    return (
        <motion.button
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed top-24 left-6 md:left-12 z-[40] flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-black/5 text-text-primary text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-sm"
        >
            <ArrowLeft size={14} />
            Back to Home
        </motion.button>
    );
};
