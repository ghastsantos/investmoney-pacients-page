import React from 'react';
import hero from '../assets/hero.png';
import { useFadeIn } from '../hooks/useFadeIn';

const Hero: React.FC = () => {
    const titleFade = useFadeIn({ delay: 200 });
    const subtitleFade = useFadeIn({ delay: 400 });
    const buttonFade = useFadeIn({ delay: 600 });
    const imageFade = useFadeIn({ delay: 800 });
    return (
        <section className="relative py-8 pb-2 md:py-40 md:h-[900px] bg-gray-100 overflow-hidden">
            {/* Desktop: Layout absoluto com imagem à direita */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2">
                <div className="flex items-center justify-center h-full">
                    <img src={hero} alt="Imagem de fundo" className="object-cover h-full" />
                </div>
            </div>
            
            {/* Container principal com layout flexível */}
            <div className="container mx-auto px-4 relative z-10 md:h-full">
                <div className="flex flex-col md:flex-row md:items-center md:h-full">
                    {/* Conteúdo de texto */}
                    <div className="w-full md:max-w-2xl mb-8 md:mb-0">
                        <h1 
                            ref={titleFade.ref}
                            style={titleFade.style}
                            className="text-4xl md:text-6xl font-semibold text-gray-800 mb-8 leading-tight font-sans"
                        >
                            Tratamento estético ou odontológico pagando no boleto parcelado
                        </h1>

                        <p 
                            ref={subtitleFade.ref}
                            style={subtitleFade.style}
                            className="text-xl md:text-2xl font-normal text-gray-700 mb-8 font-sans"
                        >
                            Sem burocracia, sem cartão de crédito e com aprovação rápida.
                            A forma mais simples e acessível de cuidar da sua saúde e autoestima.
                        </p>

                        <div
                            ref={buttonFade.ref}
                            style={buttonFade.style}
                        >
                            <a 
                                href="#planos"
                                className="inline-block btn-primary hover:transform hover:scale-105 hover:shadow-xl hover:bg-yellow-investmoney-500 transition-all duration-300 px-8 py-4 rounded-full font-semibold"
                            >
                                Descubra agora a melhor clínica para você!
                            </a>
                        </div>
                    </div>
                    
                    {/* Mobile: Imagem maior no final da seção */}
                    <div 
                        ref={imageFade.ref}
                        style={imageFade.style}
                        className="md:hidden w-full flex justify-center pt-4"
                    >
                        <img src={hero} alt="Imagem de fundo" className="w-full max-w-sm h-auto object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;