import { featuresBg } from '@/assets';
import React, { useState } from 'react';
import { UserPlus, Link, Smile, Search, Star, Gift } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const Features: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'free' | 'premium'>('free');
    
    const titleFade = useFadeIn({ delay: 200 });
    const cardsFade = useFadeIn({ delay: 400 });
    const stepsFade = useFadeIn({ delay: 600 });
    const buttonFade = useFadeIn({ delay: 800 });

    const freeContent = {
        title: "Como funciona na prática? - Sem Plano",
        subtitle: "Processo simples e direto para começar seu tratamento",
        steps: [
            {
                title: "Cadastro de usuário",
                description: "Preencha seus dados básicos em nosso formulário rápido.",
                icon: UserPlus,
                label: "Cadastro"
            },
            {
                title: "Encontramos sua clínica",
                description: "Nossa equipe verifica suas informações e retorna a clínica ideal para você.",
                icon: Link,
                label: "Conexão"
            },
            {
                title: "Tratamento com parcelamento",
                description: "Com tudo aprovado, você realiza seu tratamento ou procedimento, com parcelamento no boleto e sem complicações.",
                icon: Smile,
                label: "Tratamento"
            }
        ]
    };

    const premiumContent = {
        title: "Como funciona na prática? - Plano Premium",
        subtitle: "Experiência completa com benefícios exclusivos e total autonomia",
        steps: [
            {
                title: "Acesso à plataforma",
                description: "Entre na nossa plataforma exclusiva e explore todas as clínicas parceiras da sua região.",
                icon: Search,
                label: "Plataforma"
            },
            {
                title: "Escolha sua clínica",
                description: "Veja informações detalhadas das clínicas, doutores, especialidades e avaliações de outros pacientes.",
                icon: Star,
                label: "Escolha"
            },
            {
                title: "Tratamento + Benefícios",
                description: "Realize seu tratamento com parcelamento no boleto e tenha acesso a diversos benefícios.",
                icon: Gift,
                label: "Benefícios"
            }
        ]
    };

    const currentContent = activeTab === 'free' ? freeContent : premiumContent;

    return (
        <>
            {/* Versão Mobile - Fundo escuro */}
            <section className="block md:hidden relative py-20 bg-gray-900">
                <div className="container mx-auto px-4 relative z-10">
                    {/* Switch Toggle */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
                            <div className="flex">
                                <button
                                    onClick={() => setActiveTab('free')}
                                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                        activeTab === 'free'
                                            ? 'bg-yellow-investmoney-400 text-gray-800 shadow-lg'
                                            : 'text-white hover:text-yellow-investmoney-200'
                                    }`}
                                >
                                    Sem Plano
                                </button>
                                <button
                                    onClick={() => setActiveTab('premium')}
                                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                        activeTab === 'premium'
                                            ? 'bg-yellow-investmoney-400 text-gray-800 shadow-lg'
                                            : 'text-white hover:text-yellow-investmoney-200'
                                    }`}
                                >
                                    Plano Premium
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Título e descrição */}
                    <div 
                        ref={titleFade.ref}
                        style={titleFade.style}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {currentContent.title}
                        </h2>
                        <p className="text-xl text-white max-w-2xl mx-auto">
                            {currentContent.subtitle}
                        </p>
                    </div>

                    {/* Cards das etapas */}
                    <div 
                        ref={cardsFade.ref}
                        style={cardsFade.style}
                        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12"
                    >
                        {currentContent.steps.map((step, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                                <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-white leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Indicadores das etapas com ícones */}
                    <div className="flex justify-center items-center space-x-8 md:space-x-16 mb-12">
                        {currentContent.steps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <React.Fragment key={index}>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-yellow-investmoney-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                                            <IconComponent className="w-8 h-8 text-gray-800" />
                                        </div>
                                        <h4 className="text-white font-semibold">Etapa {String(index + 1).padStart(2, '0')}</h4>
                                        <p className="text-white text-sm">{step.label}</p>
                                    </div>
                                    
                                    {/* Linha conectora - não mostrar após o último item */}
                                    {index < currentContent.steps.length - 1 && (
                                        <div className="hidden md:block w-12 h-0.5 bg-yellow-investmoney-400"></div>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>

                    {/* Botão CTA */}
                    <div className="text-center">
                        {activeTab === 'free' ? (
                            <a 
                                href="#cadastro"
                                className="inline-block btn-primary text-lg hover:transform hover:scale-105 hover:shadow-xl hover:bg-yellow-investmoney-500 transition-all duration-300 px-8 py-4 rounded-full font-semibold"
                            >
                                Parcele seu tratamento agora!
                            </a>
                        ) : (
                            <button className="btn-primary text-lg hover:transform hover:scale-105 hover:shadow-xl hover:bg-yellow-investmoney-500 transition-all duration-300 px-8 py-4 rounded-full font-semibold">
                                Assinar Plano Premium
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Versão Desktop - Com imagem de fundo */}
            <section 
                className="hidden md:block relative py-20 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${featuresBg})` }}
            >
                {/* Overlay escuro para legibilidade */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Switch Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
                        <div className="flex">
                            <button
                                onClick={() => setActiveTab('free')}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                    activeTab === 'free'
                                        ? 'bg-yellow-investmoney-400 text-gray-800 shadow-lg'
                                        : 'text-white hover:text-yellow-investmoney-200'
                                }`}
                            >
                                Sem Plano
                            </button>
                            <button
                                onClick={() => setActiveTab('premium')}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                    activeTab === 'premium'
                                        ? 'bg-yellow-investmoney-400 text-gray-800 shadow-lg'
                                        : 'text-white hover:text-yellow-investmoney-200'
                                }`}
                            >
                                Plano Premium
                            </button>
                        </div>
                    </div>
                </div>

                {/* Título e descrição */}
                <div 
                    ref={titleFade.ref}
                    style={titleFade.style}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {currentContent.title}
                    </h2>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                        {currentContent.subtitle}
                    </p>
                </div>

                {/* Cards das etapas */}
                <div 
                    ref={cardsFade.ref}
                    style={cardsFade.style}
                    className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12"
                >
                    {currentContent.steps.map((step, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                            <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-white leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Indicadores das etapas com ícones */}
                <div className="flex justify-center items-center space-x-8 md:space-x-16 mb-12">
                    {currentContent.steps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <React.Fragment key={index}>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-yellow-investmoney-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                                        <IconComponent className="w-8 h-8 text-gray-800" />
                                    </div>
                                    <h4 className="text-white font-semibold">Etapa {String(index + 1).padStart(2, '0')}</h4>
                                    <p className="text-white text-sm">{step.label}</p>
                                </div>
                                
                                {/* Linha conectora - não mostrar após o último item */}
                                {index < currentContent.steps.length - 1 && (
                                    <div className="hidden md:block w-12 h-0.5 bg-yellow-investmoney-400"></div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>

                {/* Botão CTA */}
                <div className="text-center">
                    {activeTab === 'free' ? (
                        <a 
                            href="#cadastro"
                            className="inline-block btn-primary text-lg hover:transform hover:scale-105 hover:shadow-xl hover:bg-yellow-investmoney-500 transition-all duration-300 px-8 py-4 rounded-full font-semibold"
                        >
                            Parcele seu tratamento agora!
                        </a>
                    ) : (
                        <button className="btn-primary text-lg hover:transform hover:scale-105 hover:shadow-xl hover:bg-yellow-investmoney-500 transition-all duration-300 px-8 py-4 rounded-full font-semibold">
                            Assinar Plano Premium
                        </button>
                    )}
                </div>
            </div>
        </section>
        </>
    );
};

export default Features;
