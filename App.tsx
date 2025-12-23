
import React from 'react';
import { TOOLS, WHATSAPP_LINK } from './constants.ts';
import ToolCard from './components/ToolCard.tsx';
import BlogGrid from './components/BlogGrid.tsx';
import LeadForm from './components/LeadForm.tsx';
import AdSensePlaceholder from './components/AdSensePlaceholder.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Botão Flutuante de WhatsApp */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95 group flex items-center gap-2"
        aria-label="Falar no WhatsApp"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm">
          Consultoria via WhatsApp
        </span>
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.258.405 2.421 1.096 3.368L6.5 20l4.825-1.266c.866.45 1.847.705 2.89.705 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm3.332 8.164c-.145-.073-.859-.424-.992-.473-.132-.049-.229-.073-.325.073s-.373.473-.457.57-.168.109-.313.036c-.145-.073-.611-.225-1.163-.718-.43-.384-.719-.858-.804-.992s-.009-.208.064-.281c.066-.066.145-.169.217-.253.072-.084.096-.145.145-.241.049-.096.024-.181-.012-.253s-.325-.783-.445-1.071c-.117-.282-.236-.243-.325-.248-.084-.004-.181-.005-.277-.005s-.253.036-.386.181-.506.494-.506 1.205.518 1.401.591 1.498c.072.096 1.018 1.554 2.467 2.179.345.149.614.238.823.305.347.11.663.094.912.057.278-.041.859-.35 1.042-.688s.181-.627.126-.688-.205-.109-.35-.181z"/>
        </svg>
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20 -z-10"></span>
      </a>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <a href="#" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black shadow-indigo-200 shadow-lg">DC</div>
              <span className="text-xl font-black text-slate-900 tracking-tight hidden sm:block">Dot<span className="text-indigo-600">comerce</span></span>
            </a>
            <div className="flex items-center gap-4 sm:gap-8 text-sm font-bold text-slate-600">
              <a href="#ferramentas" className="hover:text-indigo-600 transition-colors">Ferramentas</a>
              <a href="#blog" className="hover:text-indigo-600 transition-colors hidden sm:block">Conteúdo</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full transition-all flex items-center gap-2 text-xs sm:text-sm shadow-md">
                <span className="hidden xs:inline">Falar no</span> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-slate-900 pt-16 pb-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6">
                  Monte sua Loja Virtual com a <span className="text-indigo-400">Dotcomerce</span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  O ecossistema definitivo para você escalar suas vendas online, unindo as melhores tecnologias do Brasil em um só lugar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#ferramentas" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-900/20">Ver Ferramentas</a>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm">Consultoria Trafer Digital</a>
                </div>
              </div>
              <div className="relative">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* AdSense Top */}
        <div className="max-w-7xl mx-auto px-4 mt-8">
          <AdSensePlaceholder slot="1234567890" />
        </div>

        {/* Tools Section */}
        <section id="ferramentas" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Escolha sua Tecnologia</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg italic">
              Desenvolvido estrategicamente pela Trafer Digital para o seu sucesso.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {TOOLS.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </section>

        {/* AdSense Mid */}
        <div className="max-w-7xl mx-auto px-4 mt-12">
          <AdSensePlaceholder slot="0987654321" format="rectangle" />
        </div>

        {/* Blog Section */}
        <section id="blog" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">Central de Conhecimento</h2>
              <p className="text-slate-500">Dicas exclusivas da equipe Trafer Digital para seu e-commerce.</p>
            </div>
            <BlogGrid />
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-indigo-600 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Dúvidas sobre qual ferramenta escolher?</h2>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all shadow-2xl">
              Falar com Trafer Digital
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-xs">DC</div>
                <span className="text-xl font-black text-slate-900 tracking-tight">Dot<span className="text-indigo-600">comerce</span></span>
              </div>
              <div className="space-y-1">
                <p className="text-slate-500 text-sm font-medium">Desenvolvido por:</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline">Trafer Digital</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4 text-sm">
                <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">Navegação</h4>
                <ul className="space-y-2 text-slate-500">
                  <li><a href="#ferramentas" className="hover:text-indigo-600 transition-colors">Ferramentas</a></li>
                  <li><a href="#blog" className="hover:text-indigo-600 transition-colors">Blog</a></li>
                </ul>
              </div>
              <div className="space-y-4 text-sm">
                <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">Social</h4>
                <ul className="space-y-2 text-slate-500">
                  <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">WhatsApp</a></li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">Parceria Oficial</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                A Dotcomerce, em parceria com a Trafer Digital, oferece acesso facilitado às maiores plataformas de e-commerce do mercado, garantindo integração total para o seu negócio.
              </p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-slate-100 text-slate-400 text-[10px] md:text-xs">
            <p>© 2024 Dotcomerce. Todos os direitos reservados.</p>
            <p className="mt-1">Site desenvolvido com excelência por <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-semibold">Trafer Digital</a>.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
