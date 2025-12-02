import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: '서비스', path: '/services' },
    { name: '프로세스', path: '/process' },
    { name: '포트폴리오', path: '/portfolio' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-text bg-background">
      {/* Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <Rocket size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">ProMatch</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/request"
                className="px-5 py-2.5 bg-primary hover:bg-primaryDark text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-blue-500/20"
              >
                견적 요청하기
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium py-2 ${
                    location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/request"
                className="w-full text-center px-5 py-3 bg-primary text-white font-semibold rounded-lg"
              >
                견적 요청하기
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 text-white mb-4">
                <Rocket size={20} />
                <span className="text-xl font-bold">ProMatch</span>
              </div>
              <p className="text-sm leading-relaxed">
                스타트업과 검증된 전문가를 연결하는<br />프리미엄 매칭 플랫폼입니다.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-white transition-colors">디자인</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">개발</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">마케팅</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">회사</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/process" className="hover:text-white transition-colors">이용 가이드</Link></li>
                <li><Link to="/portfolio" className="hover:text-white transition-colors">포트폴리오</Link></li>
                <li><span className="cursor-pointer hover:text-white transition-colors">이용약관</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">연락처</h4>
              <ul className="space-y-2 text-sm">
                <li>support@promatch.com</li>
                <li>02-1234-5678</li>
                <li>서울시 강남구 테헤란로 123</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
            © 2024 ProMatch. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;