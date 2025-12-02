import React from 'react';
import { SERVICES } from '../constants';
import { Code, PenTool, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Code': return <Code size={32} />;
      case 'PenTool': return <PenTool size={32} />;
      case 'Globe': return <Globe size={32} />;
      case 'TrendingUp': return <TrendingUp size={32} />;
      default: return <Code size={32} />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">서비스 목록</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            비즈니스 성장에 필요한 모든 분야의 전문가가 준비되어 있습니다.
            원하는 카테고리를 선택하여 자세한 내용을 확인하세요.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="h-64 overflow-hidden relative group">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-lg inline-block mb-3 text-white">
                      {getIcon(service.iconName)}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                   <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">주요 작업 영역</h4>
                   <ul className="grid grid-cols-2 gap-2 mb-6">
                      {[1,2,3,4].map((i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                           <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                           세부 서비스 {i}
                        </li>
                      ))}
                   </ul>
                   <Link 
                    to="/request" 
                    className="w-full block text-center py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-primary hover:text-primary transition-colors"
                   >
                     이 분야 견적 문의하기
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">찾으시는 서비스가 없나요?</h3>
          <p className="text-slate-600 mb-8">
            기타 서비스도 맞춤형 매칭이 가능합니다. 
            구체적인 요구사항을 남겨주시면 적합한 해결책을 제안해 드립니다.
          </p>
          <Link to="/request" className="text-primary font-bold hover:underline inline-flex items-center gap-2">
            맞춤 상담 신청하기 <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;