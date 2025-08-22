import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { logoImage } from '../assets';

const Header: React.FC = () => {
    const [activeItem, setActiveItem] = useState('PACIENTES');
    const [isPortalDropdownOpen, setIsPortalDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

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
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white shadow-sm relative">
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
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
                                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
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
                    <div className="md:hidden" ref={mobileMenuRef}>
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-md text-gray-600 hover:text-yellow-investmoney-400 transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                        
                        {/* Mobile Dropdown Menu */}
                        {isMobileMenuOpen && (
                            <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
                                <div className="container mx-auto px-4 py-4">
                                    {/* Navigation Items */}
                                    <div className="space-y-2 mb-4">
                                        {navItems.map((item) => (
                                            <a 
                                                key={item.name}
                                                href={item.href}
                                                onClick={() => {
                                                    setActiveItem(item.name);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                                className={`block px-4 py-3 rounded-lg text-sm uppercase font-medium transition-colors ${
                                                    activeItem === item.name 
                                                        ? 'text-yellow-investmoney-400 bg-yellow-50' 
                                                        : 'text-gray-investmoney-600 hover:text-yellow-investmoney-400 hover:bg-gray-50'
                                                }`}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    
                                    {/* Portal Items */}
                                    <div className="border-t border-gray-200 pt-4">
                                        <h3 className="text-xs uppercase font-semibold text-gray-500 mb-2 px-4">Portais</h3>
                                        <div className="space-y-2">
                                            {portalItems.map((portal, index) => (
                                                <a 
                                                    key={index}
                                                    href={portal.url}
                                                    target={portal.url.startsWith('http') ? '_blank' : '_self'}
                                                    rel={portal.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                                >
                                                    <div className="text-sm font-medium text-gray-800 group-hover:text-yellow-investmoney-500">
                                                        {portal.name}
                                                    </div>
                                                    <div className="text-xs text-gray-500 mt-1">
                                                        {portal.description}
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;