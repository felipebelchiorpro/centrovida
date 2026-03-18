import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Clock, 
  Users, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle,
  Truck,
  Building2,
  Wheat,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Stethoscope,
  HardHat,
  Briefcase
} from 'lucide-react';
import heroImg from './assets/hero.png';

// --- Sub-components ---

const FloatingWhatsApp = () => (
  <motion.a
    href="https://wa.me/5500000000000" // Replace with real number
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group transition-all"
  >
    <MessageCircle size={32} />
    <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
      Fale Conosco agora
    </span>
  </motion.a>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Método', href: '#metodo' },
    { name: 'Iceberg SST', href: '#iceberg' },
    { name: 'Setores', href: '#nichos' },
    { name: 'Dúvidas', href: '#faq' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "py-2 md:py-4" : "py-4 md:py-8"
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`grid grid-cols-2 lg:grid-cols-3 items-center px-6 md:px-8 py-3 md:py-4 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen ? "bg-white/90 backdrop-blur-xl shadow-2xl shadow-primary/5 rounded-3xl md:rounded-[32px] border border-white/20" : "bg-transparent"
        }`}>
          {/* Left: Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-xs font-bold text-slate-600 hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Left: Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-primary hover:bg-slate-50 rounded-xl transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Center: Branding */}
          <div className="flex flex-col items-center group cursor-pointer text-center">
            <span className="text-xl md:text-2xl font-black text-primary tracking-tighter leading-none">CENTRO VIDA</span>
            <span className="text-[7px] md:text-[9px] text-slate-400 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase mt-1">MEDICINA E SEGURANÇA DO TRABALHO</span>
          </div>

          {/* Right: CTA */}
          <div className="hidden lg:flex items-center justify-end gap-6">
            <button className="flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-2xl text-xs font-black transition-all shadow-xl shadow-primary/20 active:scale-95">
              Falar com Especialista
              <ChevronRight size={16} className="text-secondary" />
            </button>
          </div>
          
          {/* Right: Mobile CTA Icon */}
          <div className="lg:hidden flex justify-end">
            <a href="https://wa.me/5519998397305" target="_blank" rel="noreferrer" className="bg-primary p-3 rounded-xl text-white shadow-lg shadow-primary/20">
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-100 shadow-2xl overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-4">
                {navLinks.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-bold text-slate-700 hover:text-primary p-4 rounded-2xl hover:bg-slate-50 transition-all flex justify-between items-center"
                  >
                    {item.name}
                    <ChevronRight size={18} className="text-slate-300" />
                  </a>
                ))}
                <button className="mt-4 w-full bg-primary text-white p-5 rounded-2xl font-black flex items-center justify-center gap-3">
                  Falar com Especialista
                  <MessageCircle size={20} className="text-secondary" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-28 md:pt-20 overflow-hidden bg-[#FAFCFF]">
    {/* Clean, Modern Background */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[80%] md:w-[50%] h-[60%] bg-gradient-to-br from-secondary/5 to-primary/5 blur-[80px] md:blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[70%] md:w-[40%] h-[50%] bg-gradient-to-tr from-primary/5 to-transparent blur-[80px] md:blur-[100px] rounded-full"></div>
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#003366 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    </div>

    <div className="container mx-auto px-6 relative z-10 py-12 lg:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 md:mb-10 text-[10px] md:text-[11px] font-black tracking-[0.2em] text-primary uppercase bg-white shadow-sm rounded-full border border-slate-100">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
            Liderança em Gestão de SST
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-[1.1] text-primary tracking-tight">
            Sua empresa <br />
            <span className="text-slate-400">organizada,</span> <br />
            <span className="relative inline-block">
              paz de espírito.
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute bottom-2 left-0 h-2 bg-secondary/10 -z-10"
              ></motion.div>
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-500 mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
            Tiramos das suas mãos a correria de prazos e documentos para você focar no que faz seu negócio crescer de verdade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group relative bg-primary hover:bg-primary-dark text-white px-8 md:px-10 py-4 md:py-5 rounded-[20px] text-base md:text-lg font-black transition-all shadow-2xl shadow-primary/30 active:scale-95 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <MessageCircle size={20} className="text-secondary" />
                Falar com Especialista
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            
            <button className="group bg-white hover:bg-slate-50 text-primary px-8 md:px-10 py-4 md:py-5 rounded-[20px] text-base md:text-lg font-black transition-all border-2 border-slate-100 shadow-xl shadow-slate-200/50 active:scale-95 flex items-center justify-center gap-3">
              Fazer Diagnóstico Grátis
              <ChevronRight size={18} className="text-secondary group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-8 md:gap-12">
            <div className="flex -space-x-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 md:w-12 h-10 md:h-12 rounded-full border-4 border-white bg-slate-50 flex items-center justify-center shadow-sm">
                  <Users size={18} className="text-slate-300" />
                </div>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[10px] md:text-sm font-black text-primary uppercase tracking-widest">Aprovado por +250 empresas</p>
              <div className="flex items-center justify-center sm:justify-start gap-1 mt-1">
                {[1,2,3,4,5].map(i => <div key={i} className="w-2 md:w-3 h-2 md:h-3 bg-secondary rounded-full"></div>)}
                <span className="text-[9px] md:text-[10px] font-bold text-slate-400 ml-2 uppercase">Excelência em Gestão</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative px-4 md:px-0"
        >
          <div className="relative rounded-[40px] md:rounded-[60px] p-3 md:p-4 bg-white shadow-[0_50px_100px_-20px_rgba(0,51,102,0.15)] border border-slate-50 overflow-hidden group mx-auto max-w-md lg:max-w-none">
            <div className="rounded-[30px] md:rounded-[45px] overflow-hidden aspect-[4/5] relative">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop" 
                alt="Especialista Centro Vida" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-40"></div>
            </div>
          </div>

          {/* Clean Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 md:-top-6 -right-2 md:-right-6 bg-white p-4 md:p-6 rounded-[24px] md:rounded-[32px] shadow-2xl border border-slate-50 z-20 scale-90 md:scale-100"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 md:w-14 h-10 md:h-14 bg-green-500/10 text-green-600 rounded-xl md:rounded-2xl flex items-center justify-center">
                <ShieldCheck size={20} md:size={28} />
              </div>
              <div>
                <p className="text-[8px] md:text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Status eSocial</p>
                <p className="text-base md:text-lg font-black text-primary tracking-tight">Sincronizado</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 md:-bottom-8 -left-2 md:-left-8 bg-white p-4 md:p-6 rounded-[24px] md:rounded-[32px] shadow-2xl border border-slate-50 z-20 scale-90 md:scale-100"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 md:w-14 h-10 md:h-14 bg-secondary/10 text-secondary rounded-xl md:rounded-2xl flex items-center justify-center">
                <Clock size={20} md:size={28} />
              </div>
              <div>
                <p className="text-[8px] md:text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Prazos</p>
                <p className="text-base md:text-lg font-black text-primary tracking-tight">100% em Dia</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  </section>
);


const GoldenQuestions = () => (
  <section className="py-20 md:py-32 bg-[#FAFCFF] overflow-hidden relative border-y border-slate-100">
    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#003366 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-5xl mx-auto text-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-5 py-2 mb-8 md:mb-10 text-[10px] md:text-[11px] font-black tracking-[0.25em] text-primary uppercase bg-white shadow-sm rounded-full border border-slate-100"
        >
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
          Análise de Risco Operacional
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-10 leading-[1.1] text-primary tracking-tight"
        >
          Sua empresa <br />
          <span className="text-slate-400">protegida,</span> <br />
          <span className="relative inline-block">
            ou apenas com papéis?
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute bottom-2 left-0 h-2 bg-secondary/10 -z-10"
            ></motion.div>
          </span>
        </motion.h2>
        
        <p className="text-base md:text-lg text-slate-500 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto font-medium px-4">
          O SST mal gerido é um risco invisível que compromete o seu negócio. <br className="hidden md:block" />Responda com sinceridade:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: <Stethoscope size={24} />,
            q: "Quem cuida dos seus exames hoje?",
            desc: "Se a gestão é reativa, você está a um passo de uma multa automática do eSocial."
          },
          {
            icon: <Clock size={24} />,
            q: "Vencimentos são monitorados?",
            desc: "Documento na gaveta não evita interdições. O acompanhamento precisa ser em tempo real."
          },
          {
            icon: <HardHat size={28} />,
            q: "Admissões geram correria?",
            desc: "O caos na entrada de funcionários é o primeiro sinal de uma blindagem jurídica frágil."
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={`group bg-white p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-slate-100 hover:shadow-[0_40px_80px_-20px_rgba(0,51,102,0.08)] transition-all duration-700 relative overflow-hidden ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
          >
            <div className="w-12 h-12 bg-slate-50 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              {item.icon}
            </div>
            
            <h3 className="text-xl font-black mb-4 leading-tight text-primary">
              {item.q}
            </h3>
            
            <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
              {item.desc}
            </p>
            
            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-slate-50 flex items-center justify-between text-slate-300 group-hover:text-secondary transition-colors duration-500">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase">Check 0{i+1}</span>
              <ChevronRight size={16} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const IcebergSection = () => (
  <section className="py-32 bg-[#FAFCFF] relative overflow-hidden" id="iceberg">
    {/* Clean, technical background pattern matching the Hero */}
    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#003366 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-5 py-2 mb-10 text-[11px] font-black tracking-[0.25em] text-primary uppercase bg-white shadow-sm rounded-full border border-slate-100"
        >
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
          Metáfora Visual do SST
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1] text-primary tracking-tight">O Iceberg <br /><span className="text-slate-400">da Gestão</span></h2>
        <p className="text-base md:text-lg text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
          Muitos empresários veem apenas a ponta do iceberg (o documento). <br />Nós entregamos a base que sustenta sua tranquilidade.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="relative flex flex-col items-center">
          {/* Ponta (Visível) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full md:w-3/4 bg-white rounded-t-[40px] shadow-[0_-20px_50px_-10px_rgba(0,0,0,0.05)] relative z-20 p-12 flex flex-col items-center justify-center border-x-2 border-t-2 border-slate-50"
          >
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-secondary font-black text-5xl">30%</span>
              <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Visível</span>
            </div>
            <h4 className="font-black text-primary text-xl uppercase tracking-widest mb-4">A Ponta: O Documento</h4>
            <div className="flex flex-wrap justify-center gap-3">
               {["ASO", "PGR", "PCMSO", "LTCAT", "CLCB", "AVCB", "INSALUBRIDADE", "PERICULOSIDADE"].map(tag => (
                 <span key={tag} className="px-3 py-1.5 bg-slate-50 text-slate-400 rounded-full text-[10px] font-black border border-slate-100 tracking-widest">{tag}</span>
               ))}
            </div>
          </motion.div>

          {/* Divisor (Nível do Mar) */}
          <div className="w-full h-4 bg-primary/5 relative z-30 flex items-center justify-center overflow-hidden">
             <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-secondary/10 to-transparent animate-pulse"></div>
          </div>

          {/* Base (Invisível) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full bg-primary rounded-b-[60px] shadow-[0_50px_100px_-20px_rgba(0,51,102,0.2)] relative z-10 p-12 md:p-20 text-white overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <ShieldCheck size={400} className="absolute -bottom-20 -right-20 rotate-12" />
            </div>

            <div className="relative z-20 flex flex-col lg:flex-row gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="flex items-baseline gap-2 mb-6 justify-center lg:justify-start">
                  <span className="text-secondary font-black text-7xl">70%</span>
                  <span className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px]">O Real Valor</span>
                </div>
                <h4 className="font-black text-3xl md:text-4xl uppercase tracking-tight mb-8">Blindagem Jurídica <br /><span className="text-secondary">& Gestão Ativa</span></h4>
                <p className="text-white/70 text-base md:text-lg mb-10 max-w-sm font-medium leading-relaxed">
                  É aqui que sua empresa economiza. Prevenção de multas, defesas técnicas e monitoramento ativo.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {[
                  "Monitoramento Proativo",
                  "Defesa Médica Estratégica",
                  "Blindagem contra Multas",
                  "Gestão do eSocial",
                  "Laudos de Insalubridade",
                  "Suporte Jurídico-Técnico"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                    <CheckCircle2 className="text-secondary group-hover:scale-110 transition-transform" size={20} />
                    <span className="text-sm font-black tracking-tight uppercase text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-20 pt-10 border-t border-white/10 text-center">
               <p className="text-secondary font-black text-lg italic tracking-tight">"O documento você faz com qualquer um. A gestão, só com quem entende do seu negócio."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Comparison = () => (
  <section className="py-20 md:py-32 bg-[#F1F5F9]" id="metodo">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-[10px] font-black tracking-[0.3em] text-primary uppercase bg-white rounded-full border border-slate-200 shadow-sm"
        >
          O Diferencial Centro Vida
        </motion.div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] text-primary tracking-tight">O Efeito <span className="text-secondary italic">Centro Vida</span></h2>
        <p className="text-base md:text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          A diferença entre apenas cumprir burocracia e ter uma **gestão estratégica** que protege seu lucro e sua liberdade.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
        {/* Lado A: Caos */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center">
              <AlertCircle size={24} />
            </div>
            <h3 className="text-2xl font-black text-slate-800 tracking-tight">O Caos da "Burocracia"</h3>
          </div>
          <ul className="space-y-6">
            {[
              "Prazos perdidos e documentos vencidos na gaveta.",
              "Risco real de multas automáticas do eSocial.",
              "Insegurança jurídica em cada nova admissão.",
              "Contabilidade sobrecarregada com dados incompletos."
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start text-slate-500">
                <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                  <X className="text-red-500" size={12} />
                </div>
                <span className="text-sm md:text-base font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Lado B: Centro Vida */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-primary p-8 md:p-10 rounded-[32px] md:rounded-[40px] shadow-[0_40px_80px_-15px_rgba(0,51,102,0.3)] relative overflow-hidden group border border-primary-light"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
             <ShieldCheck size={150} className="text-white" />
          </div>
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="w-12 h-12 bg-secondary text-white rounded-2xl flex items-center justify-center shadow-xl shadow-secondary/20">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight">Hub de Gestão Centro Vida</h3>
          </div>
          <ul className="space-y-6 relative z-10">
            {[
              "Blindagem jurídica ativa e monitoramento 365 dias.",
              "Fluidez total: nós antecipamos todos os prazos.",
              "Envios ao eSocial 100% auditados e em dia.",
              "Tranquilidade total para focar no seu crescimento."
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start text-white/90">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="text-secondary" size={14} />
                </div>
                <span className="text-sm md:text-base font-bold tracking-tight leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

const NicheSection = () => {
  const [activeNiche, setActiveNiche] = useState(0);
  
  const niches = [
    {
      title: "AGRO",
      icon: <Wheat size={28} />,
      focus: "Planejamento Pré-Safra",
      desc: "Documentação pronta e exames agendados antes do ônibus de safristas chegar na lavoura.",
      location: "Caconde e Divinolândia",
      benefit: "Zero atraso na colheita"
    },
    {
      title: "LOGÍSTICA",
      icon: <Truck size={28} />,
      focus: "Sincronia de Frota",
      desc: "Exames agendados milimetricamente na janela de retorno do motorista para não parar a carga.",
      location: "Tapiratiba e Região",
      benefit: "Caminhão rodando 24/7"
    },
    {
      title: "POSTOS / INDÚSTRIA",
      icon: <Building2 size={28} />,
      focus: "Monitoramento Ativo",
      desc: "Controle rigoroso de Benzeno e NR-20 para evitar interdições e garantir a saúde da equipe.",
      location: "Caconde e Tapiratiba",
      benefit: "Segurança total NR-20"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#FAFCFF]" id="nichos">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] md:text-[11px] font-black tracking-[0.3em] text-primary uppercase bg-white shadow-sm rounded-full border border-slate-100"
          >
            Soluções Setoriais
          </motion.div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] text-primary tracking-tight">Foco na <span className="text-slate-400">Nossa Região</span></h2>
          <p className="text-base md:text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Entendemos as dores específicas do empresário de Caconde, Divinolândia e Tapiratiba.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {niches.map((niche, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 md:p-10 rounded-[32px] md:rounded-[40px] transition-all cursor-pointer border-2 ${
                activeNiche === i 
                ? "bg-white border-primary shadow-[0_40px_80px_-20px_rgba(0,51,102,0.1)]" 
                : "bg-white border-slate-50 hover:border-slate-200"
              } ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              onClick={() => setActiveNiche(i)}
            >
              <div className={`w-14 md:w-16 h-14 md:h-16 rounded-2xl flex items-center justify-center mb-8 transition-all ${
                activeNiche === i ? "bg-primary text-white shadow-xl shadow-primary/20" : "bg-slate-50 text-primary"
              }`}>
                {niche.icon}
              </div>
              <h3 className="text-[10px] font-black mb-3 uppercase tracking-[0.25em] text-slate-400">{niche.title}</h3>
              <h4 className="text-xl md:text-2xl font-black mb-4 text-primary leading-tight tracking-tight">{niche.focus}</h4>
              <p className="text-sm md:text-base text-slate-500 mb-8 leading-relaxed font-medium">{niche.desc}</p>
              
              <div className="flex flex-col gap-3 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-2 text-[10px] font-black text-secondary uppercase tracking-widest">
                  <CheckCircle2 size="14" />
                  {niche.benefit}
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <MapPin size="14" />
                  {niche.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const questions = [
    {
      q: "Meu contador já faz isso, por que preciso do Centro Vida?",
      a: "O contador processa dados financeiros. Nós processamos sua segurança jurídica. Em caso de fiscalização ou processo, é o nosso respaldo técnico que protege seu patrimônio. Contabilidade cuida do imposto, nós cuidamos da sua blindagem."
    },
    {
      q: "Já tenho uma clínica que faz os exames, qual a diferença?",
      a: "Exame isolado é apenas um papel. Gestão de SST é ter especialistas monitorando sua empresa 365 dias por ano. O Centro Vida não é apenas uma clínica, é o seu departamento de segurança externo que garante risco zero de multas."
    },
    {
      q: "SST é obrigatório para o meu tamanho de empresa?",
      a: "Sim. O eSocial não diferencia o tamanho do negócio nas exigências de envio. Pequenas falhas podem gerar multas automáticas que superam meses de lucro. Nós removemos essa preocupação da sua mesa."
    },
    {
      q: "Qual o real retorno desse investimento?",
      a: "Um único processo trabalhista custa, em média, 15x mais que um ano de gestão preventiva. Nossa consultoria não é um custo, é o seguro que garante que sua empresa continue operando sem interrupções judiciais."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-slate-50" id="faq">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-primary tracking-tight">Dúvidas Frequentes</h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium">Neutralizamos a burocracia para você focar no lucro.</p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {questions.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <button 
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full p-6 md:p-8 text-left flex justify-between items-center transition-colors group"
              >
                <span className="text-lg md:text-xl font-black text-primary pr-8 group-hover:text-secondary transition-colors leading-tight">{item.q}</span>
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all shrink-0 ${open === i ? "bg-secondary text-white" : "bg-slate-50 text-slate-400"}`}>
                   {open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 md:p-8 pt-0 text-slate-600 text-base md:text-lg leading-relaxed border-t border-slate-50">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    employees: '',
    phone: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Novo Pedido de Diagnóstico - Centro Vida*%0A%0A` +
      `*Nome/Empresa:* ${formData.name}%0A` +
      `*Nº de Funcionários:* ${formData.employees}%0A` +
      `*WhatsApp:* ${formData.phone}%0A%0A` +
      `_Gostaria de receber o diagnóstico em PDF._`;
    
    const whatsappUrl = `https://wa.me/5519999999999?text=${message}`; // Placeholder number
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[60px] shadow-2xl overflow-hidden">
          {/* Info Side */}
          <div className="bg-slate-50 p-12 lg:p-20 flex flex-col justify-center">
             <h2 className="text-4xl font-black mb-8 text-primary">Receba seu Diagnóstico</h2>
             <p className="text-slate-500 text-lg mb-12">Analisaremos seu nível de exposição a riscos trabalhistas e eSocial em 15 minutos.</p>
             <div className="space-y-6">
                {[
                  "Avaliação de Riscos (PGR)",
                  "Laudos de Insalubridade",
                  "Gestão do eSocial",
                  "CLCB / AVCB (Bombeiro)"
                ].map(item => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0">
                       <CheckCircle2 size={18} />
                    </div>
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
             </div>
          </div>

          {/* Form Side */}
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            {/* Steps Indicator */}
            <div className="flex items-center gap-4 mb-12">
              {[1, 2, 3].map(s => (
                <div key={s} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full transition-all duration-500 ${step >= s ? "bg-secondary scale-125 shadow-lg shadow-secondary/50" : "bg-slate-200"}`}></div>
                  {s < 3 && <div className={`w-8 h-0.5 mx-2 ${step > s ? "bg-secondary" : "bg-slate-200"}`}></div>}
                </div>
              ))}
              <span className="ml-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">Passo {step} de 3</span>
            </div>

            <form onSubmit={handleSubmit} className="min-h-[350px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <label className="block text-xs font-black text-slate-400 mb-6 uppercase tracking-[0.2em]">Identificação</label>
                    <h4 className="text-2xl font-black mb-8 text-primary">Como podemos chamar você ou sua empresa?</h4>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Ex: João da Silva / Posto Central"
                      className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-[24px] focus:outline-none focus:border-secondary focus:bg-white transition-all text-lg font-bold"
                    />
                    <div className="mt-12">
                      <button 
                        type="button"
                        onClick={nextStep}
                        disabled={!formData.name}
                        className="w-full bg-primary text-white p-6 rounded-[24px] font-black text-lg hover:bg-primary-light transition-all shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Próximo Passo
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <label className="block text-xs font-black text-slate-400 mb-6 uppercase tracking-[0.2em]">Dimensionamento</label>
                    <h4 className="text-2xl font-black mb-8 text-primary">Qual o tamanho da sua equipe atual?</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["1 a 10", "11 a 30", "31 a 100", "+100"].map(opt => (
                        <button 
                          key={opt}
                          type="button"
                          onClick={() => {
                            setFormData({...formData, employees: opt});
                            nextStep();
                          }}
                          className={`p-6 border-2 rounded-[24px] text-center font-black transition-all ${
                            formData.employees === opt 
                            ? "border-secondary bg-secondary/5 text-secondary" 
                            : "border-slate-100 text-slate-600 hover:border-secondary hover:bg-secondary/5 hover:text-secondary"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    <button type="button" onClick={prevStep} className="mt-8 text-slate-400 font-bold flex items-center gap-2 hover:text-primary transition-colors">
                      Voltar
                    </button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <label className="block text-xs font-black text-slate-400 mb-6 uppercase tracking-[0.2em]">Contato Direto</label>
                    <h4 className="text-2xl font-black mb-8 text-primary">Qual seu melhor WhatsApp?</h4>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(00) 00000-0000"
                      className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-[24px] focus:outline-none focus:border-secondary focus:bg-white transition-all text-lg font-bold"
                    />
                    <p className="mt-6 text-sm text-slate-400 font-medium">Enviaremos o resultado do diagnóstico em PDF pelo Whats.</p>
                    <div className="mt-12">
                      <button 
                        type="submit"
                        disabled={!formData.phone}
                        className="w-full bg-primary text-white p-6 rounded-[24px] font-black text-lg hover:bg-primary-light transition-all shadow-2xl shadow-primary/40 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Gerar meu Diagnóstico
                      </button>
                    </div>
                    <button type="button" onClick={prevStep} className="mt-8 text-slate-400 font-bold flex items-center gap-2 hover:text-primary transition-colors">
                      Voltar
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#000D1A] text-white pt-32 pb-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-24">
        <div className="flex flex-col items-center mb-10 group cursor-pointer">
          <span className="text-4xl font-black text-white tracking-tighter leading-none">CENTRO VIDA</span>
          <span className="text-[11px] text-slate-500 font-bold tracking-[0.5em] uppercase mt-2">MEDICINA E SEGURANÇA DO TRABALHO</span>
        </div>
        <p className="text-slate-400 max-w-2xl text-lg leading-relaxed mb-10">
          Líder em gestão de Segurança e Medicina do Trabalho. Não vendemos laudos, entregamos Blindagem Jurídica para o seu patrimônio.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {["ASO", "PCMSO", "LTCAT", "PGR", "CLCB", "AVCB", "INSALUBRIDADE", "PERICULOSIDADE", "GESTÃO DO ESOCIAL"].map(doc => (
            <span key={doc} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black tracking-widest text-slate-400 uppercase">{doc}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24 border-t border-white/5 pt-24">
        {/* Equipe Técnica */}
        <div className="flex flex-col items-center lg:items-start">
          <h4 className="font-black mb-10 text-secondary uppercase tracking-[0.2em] text-xs">Equipe Responsável</h4>
          <div className="space-y-8 w-full">
            <div className="group border-l-2 border-white/5 pl-6 hover:border-secondary transition-colors">
              <p className="text-xl font-bold text-white mb-1">William Rafael Aureglietti</p>
              <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">Médico do Trabalho</p>
              <p className="text-[10px] text-slate-400 font-medium uppercase">CRM-SP 185306 / RQE 138581</p>
            </div>
            <div className="group border-l-2 border-white/5 pl-6 hover:border-secondary transition-colors">
              <p className="text-xl font-bold text-white mb-1">Carlos H. Ap. Dos Santos</p>
              <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">Engenheiro</p>
              <p className="text-[10px] text-slate-400 font-medium uppercase text-wrap">CREA MG 365309-MG / CREA SP 5069974804 SP</p>
            </div>
            <div className="group border-l-2 border-white/5 pl-6 hover:border-secondary transition-colors">
              <p className="text-xl font-bold text-white mb-1">Wellington Junio de Souza</p>
              <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">Técnico em Seg. do Trabalho</p>
              <p className="text-[10px] text-slate-400 font-medium uppercase">MTE 0098410/SP</p>
            </div>
          </div>
        </div>

        {/* Contatos */}
        <div className="flex flex-col items-center lg:items-start">
          <h4 className="font-black mb-10 text-secondary uppercase tracking-[0.2em] text-xs">Canais de Atendimento</h4>
          <div className="space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">WhatsApp</p>
                <a href="https://wa.me/5519998397305" className="text-xl font-bold text-white hover:text-secondary transition-colors">(19) 99839-7305</a>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">E-mail</p>
                <a href="mailto:centrovidaseg@gmail.com" className="text-xl font-bold text-white hover:text-secondary transition-colors">centrovidaseg@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Endereço */}
        <div className="flex flex-col items-center lg:items-start">
          <h4 className="font-black mb-10 text-secondary uppercase tracking-[0.2em] text-xs">Localização</h4>
          <div className="flex gap-4 text-slate-400 max-w-sm group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Sede Caconde</p>
              <p className="text-lg leading-relaxed text-white font-bold">
                Floriano Peixoto 97-A, Centro <br />
                Caconde, SP
              </p>
              <span className="text-xs text-slate-500 mt-4 block uppercase tracking-widest font-black">Atendimento Regional</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-8 text-[10px] text-slate-600 font-black tracking-[0.2em] uppercase text-center">
        <div className="flex flex-col gap-3">
          <p>© {new Date().getFullYear()} CENTRO VIDA. TODOS OS DIREITOS RESERVADOS.</p>
          <p className="text-[8px] text-slate-800 tracking-[0.4em] opacity-50">DESENVOLVIDO POR VENTUREXP ENTERPRISE — UMA EMPRESA DO GRUPO BELCHIOR</p>
        </div>
        <div className="flex gap-8">
           <a href="#" className="hover:text-white transition-colors">POLÍTICA DE PRIVACIDADE</a>
           <a href="#" className="hover:text-white transition-colors">TERMOS DE USO</a>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-secondary selection:text-white">
      <Header />
      <main>
        <Hero />
        <GoldenQuestions />
        <IcebergSection />
        <Comparison />
        <NicheSection />
        <FAQ />
        <MultiStepForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
