import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { logoImage } from '../assets';

const Header: React.FC = () => {
    const [activeItem, setActiveItem] = useState('PACIENTES');
    const [isPortalDropdownOpen, setIsPortalDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const navItems = [
        { name: 'INÍCIO', href: 'https://investmoneysa.com.br/' },
        { name: 'SOBRE NÓS', href: 'https://investmoneysa.com.br/?page_id=20' }, 
        { name: 'SERVIÇOS', href: 'https://investmoneysa.com.br/#comofunciona' },
        { name: 'DEPOIMENTOS', href: 'https://investmoneysa.com.br/#depoimentos' },
        { name: 'PACIENTES', href: '#' },
        { name: 'CONTATO', href: 'https://investmoneysa.com.br/#depoimentos' }
    ];

    const portalItems = [
        {
            name: 'PORTAL CLÍNICAS',
            url: 'https://websec.investmoney.aplicativo.digital/',
            description: 'Acesso para clínicas parceiras'
        },
        {
            name: 'PORTAL PACIENTES',
            url: '#',
            description: 'Plataforma exclusiva do paciente'
        },
        {
            name: 'PORTAL INVESTIDOR',
            url: 'https://investmoney.debenture.digital/acesso/entrar/',
            description: 'Área do investidor'
        }
    ];

    // Fechar dropdown quando clicar fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsPortalDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center space-x-8 text-center justify-center">
                    {/* Logo */}
                    <div className="flex items-center mb-2">
                        <a href="https://investmoneysa.com.br/" className="transition-transform hover:scale-105">
                            <img src={logoImage} alt="InvestMoney Logo" className="h-16" />
                        </a>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => (
                            <a 
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveItem(item.name)}
                                className={`relative text-sm uppercase font-medium pb-2 transition-colors ${
                                    activeItem === item.name 
                                        ? 'text-yellow-investmoney-400' 
                                        : 'text-gray-investmoney-600 hover:text-yellow-investmoney-400'
                                }`}
                            >
                                {item.name}
                                {activeItem === item.name && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-investmoney-400"></div>
                                )}
                            </a>
                        ))}
                        
                        {/* Dropdown Portais */}
                        <div className="relative" ref={dropdownRef}>
                            <button 
                                onClick={() => setIsPortalDropdownOpen(!isPortalDropdownOpen)}
                                className="flex items-center space-x-1 text-sm uppercase font-medium pb-2 text-yellow-investmoney-400 hover:text-yellow-investmoney-500 transition-colors"
                            >
                                <span>PORTAIS</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${isPortalDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {/* Dropdown Menu */}
                            {isPortalDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                    {portalItems.map((portal, index) => (
                                        <a 
                                            key={index}
                                            href={portal.url}
                                            target={portal.url.startsWith('http') ? '_blank' : '_self'}
                                            rel={portal.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            onClick={() => setIsPortalDropdownOpen(false)}
                                            className="block px-4 py-3 hover:bg-gray-50 transition-colors group"
                                        >
                                            <div className="text-sm font-medium text-gray-800 group-hover:text-yellow-investmoney-500">
                                                {portal.name}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {portal.description}
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>
                    
                    {/* Mobile Menu Button */}
                    <button className="md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;