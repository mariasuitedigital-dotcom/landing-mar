import React, { useState, useRef } from 'react';
import { Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

// --- Componentes necesarios para la Landing ---
const LATAM_COUNTRIES = [
  { code: '+51', name: 'Perú', flag: '🇵🇪' },
  { code: '+57', name: 'Colombia', flag: '🇨🇴' },
  { code: '+52', name: 'México', flag: '🇲🇽' },
];

export default function App() {
  const [step, setStep] = useState<'landing' | 'register' | 'payment' | 'success'>('landing');
  
  if (step === 'landing') {
    return (
      <div className="min-h-screen bg-white font-sans overflow-x-hidden">
        <section className="relative pt-24 pb-32 px-6 flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 text-zinc-900">MAR</h1>
          <p className="text-xl md:text-2xl font-medium text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-12">
            Tu asistente personal inteligente.
          </p>
          <button 
            onClick={() => setStep('register')}
            className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-800 transition-all shadow-lg"
          >
            Comenzar Ahora
          </button>
        </section>
      </div>
    );
  }
  
  return <div className="p-10 text-center">Registro y Pago (Lógica simplificada para Landing)</div>;
}
