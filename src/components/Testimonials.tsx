import React from 'react';
import { User, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: "Maria Silva",
            city: "São Paulo, SP",
            treatment: "Preenchimento labial",
            text: "Consegui fazer meu preenchimento parcelando no boleto. O atendimento foi excelente e a clínica que me indicaram era muito próxima de casa!",
            rating: 5,
            icon: User
        },
        {
            name: "João Santos",
            city: "Rio de Janeiro, RJ", 
            treatment: "Aparelho Ortodôntico",
            text: "Sempre quis colocar aparelho mas não tinha condições de pagar à vista. Com a Investmoney consegui realizar esse sonho!",
            rating: 5,
            icon: User
        },
        {
            name: "Ana Costa",
            city: "Belo Horizonte, MG",
            treatment: "Lente de Contato Dental",
            text: "O processo foi muito rápido! Em 2 dias já estava na clínica fazendo meu orçamento. Recomendo para todos!",
            rating: 5,
            icon: User
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Testimonials Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            O que os pacientes de nossos clientes dizem
                        </h2>

                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Os pacientes de nossos clientes estão satisfeitos com a experiência Investmoney.<br />Veja alguns depoimentos!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {testimonials.map((testimonial, index) => {
                            const IconComponent = testimonial.icon;
                            return (
                                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-investmoney-400 to-yellow-investmoney-500 rounded-full flex items-center justify-center mr-4">
                                            <IconComponent className="w-8 h-8 text-gray-800" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                                            <p className="text-gray-600 text-sm">{testimonial.city}</p>
                                            <p className="text-yellow-investmoney-500 text-sm font-medium">{testimonial.treatment}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    
                                    <p className="text-gray-700 leading-relaxed italic">
                                        "{testimonial.text}"
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Testimonials;
