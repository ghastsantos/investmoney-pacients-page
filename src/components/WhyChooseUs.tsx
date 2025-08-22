import { gifSmile } from '@/assets';
import React from 'react';
import { DollarSign, CheckCircle, MapPin, Heart } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const WhyChooseUs: React.FC = () => {
    const titleFade = useFadeIn({ delay: 200 });
    const benefitsFade = useFadeIn({ delay: 400 });
    const imageFade = useFadeIn({ delay: 600 });
    const benefits = [
        {
            icon: DollarSign,
            title: "Acesso facilitado:",
            description: " Parcele sem entrada e sem cartão.",
            color: "text-yellow-investmoney-500"
        },
        {
            icon: CheckCircle,
            title: "Sem burocracia:",
            description: " Aprovação simplificada.",
            color: "text-yellow-investmoney-500"
        },
        {
            icon: MapPin,
            title: "Clínicas confiáveis e próximas de você.",
            description: "",
            color: "text-yellow-investmoney-500"
        },
        {
            icon: Heart,
            title: "Ideal para quem precisa cuidar da autoestima com tranquilidade.",
            description: "",
            color: "text-yellow-investmoney-500"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Imagem à esquerda */}
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                        <video 
                            src={gifSmile} 
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-auto scale-110 -translate-x-2 -translate-y-2"
                            style={{ 
                                clipPath: 'inset(8% 0)',
                                transform: 'scale(1.15) translate(-10px, -10px)'
                            }}
                        >
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                    </div>

                    {/* Conteúdo à direita */}
                    <div 
                        ref={titleFade.ref}
                        style={titleFade.style}
                        className="space-y-6"
                    >
                        {/* Badge */}
                        <div className="inline-block">
                            <span className="text-yellow-investmoney-400 text-sm font-semibold uppercase tracking-wide">
                                + DE 2500 CLÍNICAS NO BRASIL
                            </span>
                        </div>

                        {/* Título */}
                        <h2 className="text-4xl lg:text-5xl font-light text-gray-800 leading-tight">
                            Por que escolher a
                            <span className="block font-bold">Investmoney?</span>
                        </h2>

                        {/* Descrição */}
                        <div className="space-y-4 text-gray-600">
                            <p className="text-lg font-semibold text-gray-800">
                                A Investmoney SA é especialista em soluções financeiras para 
                                tratamentos odontológicos e estéticos desde 2015.
                            </p>
                            
                            <p className="text-base leading-relaxed">
                                Conectamos pacientes a clínicas parceiras com opções acessíveis de 
                                parcelamento no boleto, sem entrada e sem cartão.
                            </p>
                            
                            <p className="text-base leading-relaxed">
                                Com inovação e praticidade, facilitamos o acesso ao seu tratamento ou procedimento com 
                                segurança e agilidade.
                            </p>
                        </div>

                        {/* Lista de benefícios */}
                        <div 
                            ref={benefitsFade.ref}
                            style={benefitsFade.style}
                            className="space-y-4"
                        >
                            {benefits.map((benefit, index) => {
                                const IconComponent = benefit.icon;
                                return (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                                            <IconComponent className={`w-6 h-6 ${benefit.color}`} />
                                        </div>
                                        <div>
                                            <span className="font-semibold text-gray-800">{benefit.title}</span>
                                            {benefit.description && (
                                                <span className="text-gray-600">{benefit.description}</span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Botão CTA */}
                        <div className="pt-4">
                            <a 
                                href="#planos"
                                className="inline-block btn-primary hover:transform hover:scale-105 hover:shadow-xl hover:bg-yellow-investmoney-500 transition-all duration-300 px-8 py-4 rounded-full font-semibold text-lg"
                            >
                                Quero me cadastrar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
