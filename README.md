# Estudo de Caso: Aplicação Web e Mobile com Rotas

Este projeto demonstra a implementação de navegação entre telas em aplicações Web e Mobile, focando em uma aplicação de catálogo de produtos.

## 📋 Descrição

Projeto dividido em duas partes:
- **Web**: Aplicação React com Vite utilizando React Router DOM
- **Mobile**: Aplicação React Native com Expo utilizando React Navigation

Ambas implementam navegação entre tela de listagem e detalhes de produtos.

## 🚀 Tecnologias

### Web
- React 18
- Vite
- React Router DOM
- CSS Modules

### Mobile
- React Native
- Expo
- React Navigation (Native Stack)

## 📁 Estrutura do Projeto

```
meu-estudo-caso/
├── web/                    # Aplicação Web
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── ProductDetails.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── mobile/                 # Aplicação Mobile
│   ├── src/
│   │   ├── screens/
│   │   │   ├── Home.js
│   │   │   └── Details.js
│   │   └── navigation/
│   │       └── AppNavigator.js
│   └── package.json
└── README.md
```

## 🔧 Instalação e Execução

### Aplicação Web

```bash
# Navegar para a pasta web
cd web

# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Acessar no navegador
# http://localhost:5173
```

### Aplicação Mobile

```bash
# Navegar para a pasta mobile
cd mobile

# Instalar dependências
npm install

# Iniciar o Expo
npx expo start

# Opções:
# - Pressione 'a' para Android
# - Pressione 'i' para iOS
# - Escaneie o QR code com o app Expo Go
```

## 🗺️ Rotas Implementadas

### Web (React Router DOM)
- **`/`** - Página inicial com lista de produtos
- **`/product/:id`** - Página de detalhes do produto específico

### Mobile (React Navigation)
- **Home** - Tela inicial com cards de produtos
- **Details** - Tela de detalhes do produto selecionado

## 💡 Funcionalidades

- Listagem de produtos com imagem, nome e preço
- Navegação para página/tela de detalhes
- Exibição de informações completas do produto
- Botão de voltar para a listagem
- Design responsivo (Web) e adaptativo (Mobile)

## 📝 Como Criar do Zero

### Web

```bash
npm create vite@latest web --template react
cd web
npm install
npm install react-router-dom
npm run dev
```

### Mobile

```bash
npx create-expo-app mobile
cd mobile
npm install
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npx expo start
```

## 🎓 Recursos de Aprendizado

- [React Router DOM - Tutorial](https://www.youtube.com/watch?v=AZyfp0tbGJ4&t=1288s)
- [React Navigation com Expo](https://www.youtube.com/watch?v=iNewmFYHjIw)
- [Documentação React Router](https://reactrouter.com/)
- [Documentação React Navigation](https://reactnavigation.org/)

## 👨‍💻 Autor

Desenvolvido como atividade prática de estudo sobre rotas em aplicações Web e Mobile.

## 📄 Licença

Este projeto é livre para uso educacional.