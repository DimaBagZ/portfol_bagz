"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface AvatarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AvatarModal = ({ isOpen, onClose }: AvatarModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-2xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия */}
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-card rounded-full flex items-center justify-center shadow-lg hover:bg-primary/10 transition-colors"
            >
              <X size={20} className="text-muted" />
            </button>

            {/* Увеличенное изображение */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/avatar/avatar.png"
                alt="Дмитрий Багинский - увеличенное фото"
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              {/* Информация о фото */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Дмитрий Багинский</h3>
                <p className="text-white/80 text-sm">Fullstack Developer</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AvatarModal;
