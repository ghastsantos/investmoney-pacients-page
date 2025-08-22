# Opções para Animações de Fade In

## 1. **Hook Personalizado (Implementado)** ✅
- **Complexidade**: Baixa
- **Tamanho**: ~1KB
- **Performance**: Excelente
- **Flexibilidade**: Alta

## 2. **Framer Motion** (Mais Robusta)
```bash
npm install framer-motion
```

### Exemplo de uso:
```tsx
import { motion } from 'framer-motion';

const AnimatedComponent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Conteúdo animado
  </motion.div>
);
```

## 3. **AOS (Animate On Scroll)** (Mais Simples)
```bash
npm install aos
```

### Exemplo de uso:
```tsx
import AOS from 'aos';
import 'aos/dist/aos.css';

// No useEffect do App
useEffect(() => {
  AOS.init();
}, []);

// No JSX
<div data-aos="fade-up" data-aos-delay="200">
  Conteúdo animado
</div>
```

## 4. **React Spring** (Física Realística)
```bash
npm install @react-spring/web
```

### Exemplo de uso:
```tsx
import { useSpring, animated } from '@react-spring/web';

const AnimatedComponent = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' }
  });

  return <animated.div style={props}>Conteúdo</animated.div>;
};
```

## Recomendação

Para seu projeto, sugiro começar com o **hook personalizado** que implementei porque:

1. **Performance**: Usa Intersection Observer nativo
2. **Tamanho**: Muito leve
3. **Flexibilidade**: Fácil de customizar
4. **TypeScript**: Totalmente tipado
5. **Controle**: Você tem controle total sobre a animação

## Como aplicar em todo o site:

1. **Importe o hook** em cada componente
2. **Aplique nos elementos principais** (títulos, parágrafos, botões, cards)
3. **Use delays diferentes** para criar sequências
4. **Combine com CSS** para efeitos mais complexos

## Exemplo de aplicação sistemática:

```tsx
const MyComponent = () => {
  const titleFade = useFadeIn({ delay: 0 });
  const contentFade = useFadeIn({ delay: 200 });
  const buttonFade = useFadeIn({ delay: 400 });

  return (
    <section>
      <h2 ref={titleFade.ref} style={titleFade.style}>Título</h2>
      <p ref={contentFade.ref} style={contentFade.style}>Conteúdo</p>
      <button ref={buttonFade.ref} style={buttonFade.style}>Botão</button>
    </section>
  );
};
```

Quer que eu aplique as animações em mais componentes ou prefere uma das outras opções?
