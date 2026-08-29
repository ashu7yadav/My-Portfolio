import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import type { ToastMessage } from '../types';

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full px-4 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => {
          const isSuccess = toast.type === 'success';
          const isWarning = toast.type === 'warning';

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`pointer-events-auto border-3 border-carbon p-4 shadow-neo-lg flex items-start gap-3 ${
                isSuccess
                  ? 'bg-neon-lime text-carbon'
                  : isWarning
                  ? 'bg-coral text-white'
                  : 'bg-white text-carbon'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isSuccess && <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />}
                {isWarning && <AlertCircle className="w-5 h-5 stroke-[2.5]" />}
                {!isSuccess && !isWarning && <Info className="w-5 h-5 stroke-[2.5]" />}
              </div>

              <div className="flex-1">
                <h4 className="font-display font-bold text-sm tracking-wide uppercase">
                  {toast.title}
                </h4>
                <p className="font-mono text-xs mt-1 leading-relaxed opacity-95">
                  {toast.message}
                </p>
              </div>

              <button
                onClick={() => onDismiss(toast.id)}
                className="p-1 hover:bg-carbon/10 transition-colors shrink-0"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
