import React from 'react';
import { Instagram, Facebook, Youtube, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { logoImage, reclameAqui, seloFooter } from '../assets';
import { useFadeIn } from '../hooks/useFadeIn';

const Footer: React.FC = () => {
    const footerFade = useFadeIn({ delay: 200 });
    return (
        <footer className="bg-gray-50 py-16 px-4">
            <div 
                ref={footerFade.ref}
                style={footerFade.style}
                className="container mx-auto max-w-6xl"
            >
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Logo e Descrição */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center mb-6">
                            <img src={logoImage} alt="InvestMoney Logo" className="h-16" />
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Sua clínica parcela os tratamentos por boleto e recebe 100% à vista.
                        </p>
                        
                        {/* Redes Sociais */}
                        <div className="flex space-x-3">
                            <a 
                                href="https://www.instagram.com/investmoneysa/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-yellow-investmoney-400 hover:bg-yellow-investmoney-500 rounded-full flex items-center justify-center transition-colors"
                            >
                                <Instagram className="w-5 h-5 text-gray-800" />
                            </a>
                            <a 
                                href="https://www.facebook.com/Investmoneysa" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-yellow-investmoney-400 hover:bg-yellow-investmoney-500 rounded-full flex items-center justify-center transition-colors"
                            >
                                <Facebook className="w-5 h-5 text-gray-800" />
                            </a>
                            <a 
                                href="https://www.youtube.com/@investmoneysa" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-yellow-investmoney-400 hover:bg-yellow-investmoney-500 rounded-full flex items-center justify-center transition-colors"
                            >
                                <Youtube className="w-5 h-5 text-gray-800" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/company/investmoney-sa" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-yellow-investmoney-400 hover:bg-yellow-investmoney-500 rounded-full flex items-center justify-center transition-colors"
                            >
                                <Linkedin className="w-5 h-5 text-gray-800" />
                            </a>
                        </div>
                    </div>

                    {/* Clientes */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-gray-800">Clientes</h3>
                        <ul className="space-y-3">
                            <li>
                                <a 
                                    href="https://websec.investmoney.aplicativo.digital/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-yellow-investmoney-500 transition-colors"
                                >
                                    Portal Clínicas
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-yellow-investmoney-500 transition-colors"
                                >
                                    Portal Pacientes
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://investmoney.debenture.digital/acesso/entrar" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-yellow-investmoney-500 transition-colors"
                                >
                                    Portal Investidor
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Menu */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-gray-800">Menu</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://investmoneysa.com.br/" className="text-gray-600 hover:text-yellow-investmoney-500 transition-colors">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a href="https://investmoneysa.com.br/?page_id=20" className="text-gray-600 hover:text-yellow-investmoney-500 transition-colors">
                                    Sobre nós
                                </a>
                            </li>
                            <li>
                                <a href="https://investmoneysa.com.br/#comofunciona" className="text-gray-600 hover:text-yellow-investmoney-500 transition-colors">
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a href="https://investmoneysa.com.br/#depoimentos" className="text-gray-600 hover:text-yellow-investmoney-500 transition-colors">
                                    Depoimentos
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-yellow-investmoney-500 hover:text-yellow-investmoney-600 transition-colors">
                                    Pacientes
                                </a>
                            </li>
                            <li>
                                <a href="https://investmoneysa.com.br/?page_id=23" className="text-gray-600 hover:text-yellow-investmoney-500 transition-colors">
                                    Contato
                                </a>
                            </li>
                            <li>
                                <a href="https://investmoneysa.com.br/?page_id=3" className="text-gray-600 hover:text-yellow-investmoney-500 transition-colors">
                                    Política de privacidade
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-gray-800">Contato</h3>
                        <div className="space-y-4">
                            <a 
                                href="https://wa.me/5511976631571"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 hover:text-yellow-investmoney-600 transition-colors group"
                            >
                                <Phone className="text-yellow-investmoney-500 group-hover:text-yellow-investmoney-600 transition-colors" />
                                <span className="text-gray-600 group-hover:text-yellow-investmoney-600 transition-colors">+55 (11) 97663-1571</span>
                            </a>
                            <a 
                                href="mailto:contato@investmoney.com.br"
                                className="flex items-center space-x-3 hover:text-yellow-investmoney-600 transition-colors group"
                            >
                                <Mail className="text-yellow-investmoney-500 group-hover:text-yellow-investmoney-600 transition-colors" />
                                <span className="text-gray-600 group-hover:text-yellow-investmoney-600 transition-colors">contato@investmoney.com.br</span>
                            </a>
                            <a 
                                href="https://maps.google.com/?q=Av.+Rep.+Argentina,+1237,+Sala+304+-+Água+Verde,+Curitiba+-+PR,+80620-010"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start space-x-3 hover:text-yellow-investmoney-600 transition-colors group"
                            >
                                <MapPin className="w-5 h-5 text-yellow-investmoney-500 mt-0.5 group-hover:text-yellow-investmoney-600 transition-colors flex-shrink-0" />
                                <div>
                                    <span className="text-gray-600 group-hover:text-yellow-investmoney-600 transition-colors">Av. Rep. Argentina, 1237, Sala 304 - Água Verde, Curitiba - PR, 80620-010</span>
                                </div>
                            </a>
                        </div>

                        {/* Badges */}
                        <div className="mt-6 flex items-center space-x-4">
                            <img 
                                style={{ width: '180px', height: '107px' }}
                                src={reclameAqui} 
                                alt="Reclame Aqui"
                                className="rounded shadow-sm"
                            />
                            
                            <img 
                                style={{ width: '170px', height: '130px' }}
                                src={seloFooter} 
                                alt="Selo de Verificação"
                                className="rounded shadow-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Todos Os Direitos Reservados | Desenvolvido por:{' '}
                        <a 
                            href="http://github.com/ghastsantos" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-yellow-investmoney-500 hover:text-yellow-investmoney-600 transition-colors"
                        >
                            Gastão
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;