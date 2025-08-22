import React from 'react';
import { Check, Star, Users, BookOpen, MessageCircleHeart, Search } from 'lucide-react';

const Plans: React.FC = () => {
    const freePlan = {
        name: "Sem Plano",
        price: "R$ 0",
        period: "/mês",
        description: "Acesso básico ao nosso serviço de parcelamento",
        features: [
            "Parcelamento de tratamentos em boleto",
            "Aprovação rápida sem burocracia",
            "Clínica selecionada pela nossa equipe",
            "Condições básicas de pagamento"
        ],
        buttonText: "Começar Grátis",
        popular: false,
        icon: Users
    };

    const premiumPlan = {
        name: "Plano Premium",
        price: "R$ 29,90",
        period: "/mês",
        description: "Acesso completo com benefícios exclusivos",
        features: [
            "Tudo do plano gratuito",
            "Plataforma exclusiva do paciente",
            "Acesso a todas as clínicas parceiras",
            "Informações detalhadas dos doutores",
            "Newsletter com dicas de saúde e novidades",
            "Acesso ao blog exclusivo",
            "Suporte prioritário",
            "Descontos especiais em tratamentos"
        ],
        buttonText: "Assinar Premium",
        popular: true,
        icon: Star
    };

    const PlanCard = ({ plan, isPopular }: { plan: typeof freePlan, isPopular: boolean }) => {
        const IconComponent = plan.icon;
        
        return (
            <div className={`relative bg-white rounded-2xl shadow-lg p-8 ${isPopular ? 'ring-2 ring-yellow-investmoney-400 transform scale-105' : ''}`}>
                {isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-yellow-investmoney-400 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold">
                            Mais Popular
                        </span>
                    </div>
                )}
                
                <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${isPopular ? 'bg-yellow-investmoney-100' : 'bg-gray-100'}`}>
                        <IconComponent className={`w-8 h-8 ${isPopular ? 'text-yellow-investmoney-600' : 'text-gray-600'}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    
                    <div className="flex items-end justify-center mb-6">
                        <span className={`text-4xl font-bold ${isPopular ? 'text-yellow-investmoney-600' : 'text-gray-800'}`}>
                            {plan.price}
                        </span>
                        <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                </div>

                <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                            <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isPopular ? 'text-yellow-investmoney-500' : 'text-green-500'}`} />
                            <span className="text-gray-600">{feature}</span>
                        </li>
                    ))}
                </ul>

                {isPopular ? (
                    <button 
                        className="w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 bg-yellow-investmoney-400 hover:bg-yellow-investmoney-500 text-gray-800"
                    >
                        {plan.buttonText}
                    </button>
                ) : (
                    <a 
                        href="#cadastro"
                        className="block w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 text-center bg-gray-100 hover:bg-gray-200 text-gray-800"
                    >
                        {plan.buttonText}
                    </a>
                )}
            </div>
        );
    };

    return (
        <section id="planos" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Escolha o plano ideal para você
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Oferecemos duas opções para atender suas necessidades: desde o acesso básico 
                        até uma experiência completa com benefícios exclusivos.
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <PlanCard plan={freePlan} isPopular={false} />
                    <PlanCard plan={premiumPlan} isPopular={true} />
                </div>

                {/* Additional Benefits Section */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Benefícios Exclusivos do <span className="text-yellow-investmoney-500">Plano Premium</span>
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-investmoney-100 rounded-full mb-4">
                                <Search className="w-8 h-8 text-yellow-investmoney-600" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-3">Plataforma Exclusiva</h4>
                            <p className="text-gray-600">
                                Acesse nossa plataforma completa para encontrar as melhores clínicas e doutores da sua região.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-investmoney-100 rounded-full mb-4">
                                <MessageCircleHeart className="w-8 h-8 text-yellow-investmoney-600" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-3">Suporte Prioritário</h4>
                            <p className="text-gray-600">
                                Tenha acesso a um atendimento exclusivo e ágil para todas as suas necessidades.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-investmoney-100 rounded-full mb-4">
                                <BookOpen className="w-8 h-8 text-yellow-investmoney-600" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-3">Conteúdo Exclusivo</h4>
                            <p className="text-gray-600">
                                Newsletter, blog e dicas exclusivas para cuidar melhor da sua saúde e autoestima.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-lg text-gray-600 mb-6">
                        Não tem certeza? Comece sem plano e faça upgrade quando quiser!
                    </p>
                    <a 
                        href="#cadastro"
                        className="inline-block bg-yellow-investmoney-400 hover:bg-yellow-investmoney-500 text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:transform hover:scale-105"
                    >
                        Começar Agora
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Plans;
