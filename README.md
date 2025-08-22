# 💰 InvestMoney - Landing Page de Pacientes

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</div>

## 📖 Sobre o Projeto

Este projeto é uma **recriação moderna e aprimorada** da landing page de pacientes da **InvestMoney SA**, uma empresa especialista em soluções financeiras para tratamentos odontológicos e estéticos. 

A página foi completamente redesenhada com foco em **conversão de leads** e **experiência do usuário**, incorporando funcionalidades extras e melhorias significativas em relação à versão original.

## 🎯 Funcionalidades Principais

### 🏠 **Seções da Landing Page**
- **Hero Section** - Apresentação principal com CTA direcionado
- **Por que escolher a InvestMoney** - Benefícios e diferenciais
- **Como funciona na prática** - Processo com toggle entre planos
- **Planos de Serviço** - Comparação entre gratuito e premium
- **Depoimentos** - Prova social com testemunhos reais
- **Formulário de Captação** - Lead capture otimizado

### ⭐ **Funcionalidades Extras**

#### 🆕 **Sistema de Planos**
- **Plano Gratuito**: Acesso básico com clínica selecionada pela equipe
- **Plano Premium (R$ 29,90/mês)**: 
  - 🔍 Plataforma exclusiva para buscar clínicas
  - 👨‍⚕️ Informações detalhadas dos doutores
  - 📧 Newsletter exclusiva com dicas de saúde
  - 📚 Acesso ao blog exclusivo
  - 🎯 Suporte prioritário

#### 📝 **Formulário Avançado**
- **Validação em tempo real** com feedback visual
- **Formatação automática**: CPF, telefone, CEP
- **Validações específicas**: Email, apenas letras em nomes
- **Modal de sucesso** elegante substituindo alerts
- **Experiência mobile-first**

#### 🎨 **Melhorias Visuais**
- **Design responsivo** otimizado para todos os dispositivos
- **Animações suaves** e micro-interações
- **Ícones Lucide React** padronizados em todo o site
- **Paleta de cores** personalizada da marca
- **Tipografia** moderna e legível

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de CSS utilitário

### **Componentes e UI**
- **Lucide React** - Biblioteca de ícones
- **React Hooks** - Gerenciamento de estado
- **CSS Modules** - Estilização isolada

### **Ferramentas de Desenvolvimento**
- **ESLint** - Linting de código
- **PostCSS** - Processamento de CSS
- **Git** - Controle de versão

## 🚀 Como Executar o Projeto

### **Pré-requisitos**
- Node.js 16+ 
- npm ou yarn

### **Instalação**

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ghastsantos/investmoney-pacients-page.git
   cd investmoney-pacients-page
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute em modo de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:(sua porta)
   ```

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── Header.tsx       # Navegação com dropdown de portais
│   ├── Hero.tsx         # Seção principal com CTA
│   ├── WhyChooseUs.tsx  # Benefícios da empresa
│   ├── Features.tsx     # Como funciona (toggle planos)
│   ├── Plans.tsx        # Comparação de planos
│   ├── Testimonials.tsx # Depoimentos de clientes
│   ├── SignupForm.tsx   # Formulário de captação
│   └── Footer.tsx       # Rodapé com links e contatos
├── assets/              # Imagens e recursos
│   ├── index.ts         # Exports centralizados
│   ├── hero.png         # Imagem do hero
│   ├── features-bg.jpg  # Background das features
│   └── ...              # Outras imagens
├── styles/              # Estilos globais
│   └── index.css        # CSS customizado + Tailwind
├── types/               # Definições TypeScript
│   └── index.ts         # Tipos personalizados
├── App.tsx              # Componente principal
└── main.tsx             # Ponto de entrada
```

## 📊 Funcionalidades de Conversão

### **Lead Capture Otimizado**
- ✅ Formulário com validação em tempo real
- ✅ Campos obrigatórios bem sinalizados
- ✅ Feedback visual para erros
- ✅ Modal de sucesso motivador
- ✅ CTAs estrategicamente posicionados

### **Jornada do Usuário**
1. **Landing** → Apresentação dos benefícios
2. **Planos** → Comparação e decisão
3. **Como Funciona** → Processo detalhado
4. **Depoimentos** → Prova social
5. **Formulário** → Conversão final

## 🔗 Links Importantes

- **Site Original**: [InvestMoney SA](https://investmoneysa.com.br/)

## 👨‍💻 Desenvolvido por

**Gastão Santos**
- GitHub: [@ghastsantos](https://github.com/ghastsantos)
- LinkedIn: [Gastão Santos](https://linkedin.com/in/gastaoesb2606)


<div align="center">
  <p>💼 Desenvolvido com ❤️ para InvestMoney SA</p>
</div>