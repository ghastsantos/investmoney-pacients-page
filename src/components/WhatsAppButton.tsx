import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import WhatsAppIcon from './WhatsAppIcon';

const WhatsAppButton: React.FC = () => {
    const buttonFade = useFadeIn({ delay: 1000 });

    const handleWhatsAppClick = () => {
        const phoneNumber = '+5511976631571';
        const message = 'Oi, tudo bem? Vi o site de vocês e gostaria de mais informações.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div 
            ref={buttonFade.ref}
            style={buttonFade.style}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
        >
            {/* Efeito de pulsação */}
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
            
            <button
                onClick={handleWhatsAppClick}
                className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
                aria-label="Contatar via WhatsApp"
                title="Fale conosco no WhatsApp"
            >
                <WhatsAppIcon className="w-6 h-6 md:w-6 md:h-6" />
            </button>
        </div>
    );
};

export default WhatsAppButton;
