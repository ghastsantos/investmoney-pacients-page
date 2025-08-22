import React, { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const SignupForm: React.FC = () => {
    const titleFade = useFadeIn({ delay: 200 });
    const formFade = useFadeIn({ delay: 400 });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        cpf: '',
        city: '',
        state: '',
        cep: '',
        budget: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<{[key: string]: string}>({});
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Função para formatar CPF
    const formatCPF = (value: string) => {
        const numericValue = value.replace(/\D/g, '');
        if (numericValue.length <= 11) {
            return numericValue
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        }
        return value;
    };

    // Função para formatar telefone
    const formatPhone = (value: string) => {
        const numericValue = value.replace(/\D/g, '');
        if (numericValue.length <= 11) {
            if (numericValue.length <= 10) {
                return numericValue
                    .replace(/(\d{2})(\d)/, '($1) $2')
                    .replace(/(\d{4})(\d)/, '$1-$2');
            } else {
                return numericValue
                    .replace(/(\d{2})(\d)/, '($1) $2')
                    .replace(/(\d{5})(\d)/, '$1-$2');
            }
        }
        return value;
    };

    // Função para formatar CEP
    const formatCEP = (value: string) => {
        const numericValue = value.replace(/\D/g, '');
        if (numericValue.length <= 8) {
            return numericValue.replace(/(\d{5})(\d)/, '$1-$2');
        }
        return value;
    };

    // Função para validar email
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Função para validar nome (apenas letras e espaços)
    const validateName = (name: string) => {
        const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
        return nameRegex.test(name);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        let formattedValue = value;
        let newErrors = { ...errors };

        // Aplicar formatações e validações específicas
        switch (name) {
            case 'cpf':
                formattedValue = formatCPF(value);
                if (formattedValue && formattedValue.replace(/\D/g, '').length < 11) {
                    newErrors.cpf = 'CPF deve ter 11 dígitos';
                } else {
                    delete newErrors.cpf;
                }
                break;

            case 'phone':
                formattedValue = formatPhone(value);
                if (formattedValue && formattedValue.replace(/\D/g, '').length < 10) {
                    newErrors.phone = 'Telefone deve ter pelo menos 10 dígitos';
                } else {
                    delete newErrors.phone;
                }
                break;

            case 'cep':
                formattedValue = formatCEP(value);
                if (formattedValue && formattedValue.replace(/\D/g, '').length < 8) {
                    newErrors.cep = 'CEP deve ter 8 dígitos';
                } else {
                    delete newErrors.cep;
                }
                break;

            case 'email':
                if (value && !validateEmail(value)) {
                    newErrors.email = 'Email deve ter um formato válido';
                } else {
                    delete newErrors.email;
                }
                break;

            case 'name':
                if (value && !validateName(value)) {
                    newErrors.name = 'Nome deve conter apenas letras e espaços';
                    return; // Não atualizar o valor se for inválido
                } else {
                    delete newErrors.name;
                }
                break;

            case 'city':
                if (value && !validateName(value)) {
                    newErrors.city = 'Cidade deve conter apenas letras e espaços';
                    return; // Não atualizar o valor se for inválido
                } else {
                    delete newErrors.city;
                }
                break;
        }

        setErrors(newErrors);
        setFormData(prev => ({ ...prev, [name]: formattedValue }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validação final antes do envio
        const finalErrors: {[key: string]: string} = {};
        
        if (!validateEmail(formData.email)) {
            finalErrors.email = 'Email deve ter um formato válido';
        }
        
        if (formData.cpf.replace(/\D/g, '').length !== 11) {
            finalErrors.cpf = 'CPF deve ter 11 dígitos';
        }
        
        if (formData.phone.replace(/\D/g, '').length < 10) {
            finalErrors.phone = 'Telefone deve ter pelo menos 10 dígitos';
        }
        
        if (formData.cep.replace(/\D/g, '').length !== 8) {
            finalErrors.cep = 'CEP deve ter 8 dígitos';
        }

        if (Object.keys(finalErrors).length > 0) {
            setErrors(finalErrors);
            return;
        }

        setIsSubmitting(true);
        
        // Simulação de envio
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccessModal(true);
        }, 2000);
    };

    const states = [
        'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
        'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 
        'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
    ];

    const budgetOptions = [
        'Até R$ 100/mês',
        'R$ 100 - R$ 250/mês', 
        'R$ 250 - R$ 500/mês',
        'R$ 500 - R$ 1.000/mês',
        'Acima de R$ 1.000/mês'
    ];

    return (
        <section id="cadastro" className="py-20 px-4 bg-gray-100">
            <div className="container mx-auto max-w-4xl">
                <div 
                    ref={titleFade.ref}
                    style={titleFade.style}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-investmoney-600 mb-4">
                        Comece agora mesmo!
                    </h2>
                    <p className="text-xl text-gray-600">
                        Preencha o formulário e encontre a clínica ideal para seu tratamento
                    </p>
                </div>

                <div 
                    ref={formFade.ref}
                    style={formFade.style}
                    className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Nome Completo *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                                        errors.name 
                                            ? 'border-red-500 focus:border-red-500' 
                                            : 'border-gray-200 focus:border-yellow-investmoney-500'
                                    }`}
                                    placeholder="Seu nome completo"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    E-mail *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                                        errors.email 
                                            ? 'border-red-500 focus:border-red-500' 
                                            : 'border-gray-200 focus:border-yellow-investmoney-500'
                                    }`}
                                    placeholder="seu@email.com"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Telefone *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                                        errors.phone 
                                            ? 'border-red-500 focus:border-red-500' 
                                            : 'border-gray-200 focus:border-yellow-investmoney-500'
                                    }`}
                                    placeholder="(11) 99999-9999"
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>

                            <div>
                                <label htmlFor="cpf" className="block text-sm font-semibold text-gray-700 mb-2">
                                    CPF *
                                </label>
                                <input
                                    type="text"
                                    id="cpf"
                                    name="cpf"
                                    required
                                    value={formData.cpf}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                                        errors.cpf 
                                            ? 'border-red-500 focus:border-red-500' 
                                            : 'border-gray-200 focus:border-yellow-investmoney-500'
                                    }`}
                                    placeholder="000.000.000-00"
                                />
                                {errors.cpf && <p className="text-red-500 text-sm mt-1">{errors.cpf}</p>}
                            </div>

                            <div>
                                <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Cidade *
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                                        errors.city 
                                            ? 'border-red-500 focus:border-red-500' 
                                            : 'border-gray-200 focus:border-yellow-investmoney-500'
                                    }`}
                                    placeholder="Sua cidade"
                                />
                                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                            </div>

                            <div>
                                <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Estado *
                                </label>
                                <select
                                    id="state"
                                    name="state"
                                    required
                                    value={formData.state}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-investmoney-500 focus:outline-none transition-colors"
                                >
                                    <option value="">Selecione o estado</option>
                                    {states.map(state => (
                                        <option key={state} value={state}>{state}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="cep" className="block text-sm font-semibold text-gray-700 mb-2">
                                    CEP *
                                </label>
                                <input
                                    type="text"
                                    id="cep"
                                    name="cep"
                                    required
                                    value={formData.cep}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                                        errors.cep 
                                            ? 'border-red-500 focus:border-red-500' 
                                            : 'border-gray-200 focus:border-yellow-investmoney-500'
                                    }`}
                                    placeholder="00000-000"
                                />
                                {errors.cep && <p className="text-red-500 text-sm mt-1">{errors.cep}</p>}
                            </div>

                            <div>
                                <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Qual valor de parcela cabe no seu bolso? *
                                </label>
                                <select
                                    id="budget"
                                    name="budget"
                                    required
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-investmoney-500 focus:outline-none transition-colors"
                                >
                                    <option value="">Selecione uma faixa</option>
                                    {budgetOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary text-lg hover:transform hover:scale-105 hover:shadow-xl hover:bg-yellow-investmoney-500 transition-all duration-300 px-8 py-4 rounded-full font-semibold"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                                        Enviando...
                                    </div>
                                ) : (
                                    'Enviar'
                                )}
                            </button>
                        </div>

                        <div className="text-center pt-4">
                            <p className="text-sm text-gray-500">
                                Ao se cadastrar, você concorda com nossa{' '}
                                <a 
                                    href="https://investmoneysa.com.br/?page_id=3" 
                                    className="text-yellow-investmoney-500 hover:text-yellow-investmoney-600 font-semibold underline transition-colors"
                                >
                                    política de privacidade
                                </a>
                            </p>
                        </div>
                    </form>
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-gray-investmoney-600 mb-2">
                            Para Clínicas Parceiras
                        </h3>
                        <p className="text-gray-investmoney-600 mb-4">
                            Sua clínica parcela os tratamentos por boleto e recebe 100% à vista.
                        </p>
                        <a href="https://investmoneysa.com.br/?page_id=20" className="btn-primary text-lg hover:transform hover:scale-105 hover:shadow-xl hover:bg-yellow-investmoney-500 transition-all duration-300 px-8 py-4 rounded-full font-semibold">
                            Saiba mais
                        </a>
                    </div>
                </div>
            </div>

            {/* Modal de Sucesso */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform animate-in fade-in duration-300">
                        {/* Header do Modal */}
                        <div className="relative p-6 pb-4">
                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Conteúdo do Modal */}
                        <div className="px-6 pb-6 text-center">
                            {/* Ícone de Sucesso */}
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-12 h-12 text-green-500" />
                            </div>

                            {/* Título */}
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Cadastro Realizado com Sucesso!
                            </h3>

                            {/* Mensagem */}
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Em breve entraremos em contato através do WhatsApp ou telefone informado para dar continuidade ao seu atendimento.
                            </p>

                            {/* Botão de Ação */}
                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="w-full bg-yellow-investmoney-400 hover:bg-yellow-investmoney-500 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
                            >
                                Entendi
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SignupForm;
