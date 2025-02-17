# 🛍️ FashionStore - Modern E-commerce Platform

[![Live Demo](https://img.shields.io/badge/demo-vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://listfy-azure.vercel.app/products)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

FashionStore is a modern e-commerce web application built with React and TypeScript, featuring a clean UI, responsive design, and seamless navigation.



## ✨ Features

- 🛒 Product catalog with detailed listings
- 🔍 Responsive sidebar navigation
- 🛍️ Shopping cart functionality
- 📱 Mobile-first design
- ⚡ Fast performance with Vite
- 🎨 Modern UI with Tailwind CSS and Shadcn UI components
- 🔄 Real-time state management
- 🚀 CI/CD deployment with Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js ≥16.x
- npm ≥9.x

### Installation
1. Clone the repository:
```bash
git clone https://github.com/<your-username>/listfy.git
cd listfy
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## 🛠️ Deployment

This project is configured for seamless deployment on Vercel:

1. Push your code to a GitHub repository
2. Create a new project in [Vercel](https://vercel.com/)
3. Connect your GitHub repository
4. Vercel will automatically:
   - Detect the React project
   - Run `npm install` and `npm run build`
   - Deploy to global CDN
   - Set up SSL automatically

Environment Variables: No special environment variables required for basic functionality

## 🧰 Tech Stack

- **Framework**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Deployment**: [Vercel](https://vercel.com/)
- **API**: [FakeStoreAPI](https://fakestoreapi.com/)

## 📂 Project Structure

```
src/
├── components/  # Reusable components
├── hooks/       # Custom hooks
├── pages/       # Route components
├── App.tsx      # Main application
├── main.tsx     # Entry point
└── vite.config.ts # Build configuration
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
