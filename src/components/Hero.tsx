import React from 'react';
import hero from '../assets/hero.png';

const Hero: React.FC = () => {
    return (
        <section className="relative py-40 bg-gray-100 overflow-hidden">
            
            <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center">
                <img src={hero} alt="Imagem de fundo" className="object-cover h-full" />
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-8 leading-tight font-sans">
                        Tratamento estético ou odontológico pagando no boleto parcelado
                    </h1>

                    <p className="text-2xl font-normal text-gray-700 mb-8 font-sans">
                        Sem burocracia, sem cartão de crédito e com aprovação rápida.
                        A forma mais simples e acessível de cuidar da sua saúde e autoestima.
                    </p>

                    <a 
                        href="#planos"
                        className="inline-block btn-primary hover:transform hover:scale-105 hover:shadow-xl hover:bg-yellow-investmoney-500 transition-all duration-300 px-8 py-4 rounded-full font-semibold"
                    >
                        Descubra agora a melhor clínica para você!
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;