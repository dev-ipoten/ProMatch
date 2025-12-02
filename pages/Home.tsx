import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Clock, Users, Star } from 'lucide-react';
import { SERVICES, IMAGE_ASSETS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGE_ASSETS.HERO_BG} 
            alt="Office background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold mb-6 animate-fade-in-up">
            초기 스타트업을 위한 프리미엄 매칭
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            복잡한 채용 없이,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              상위 1% 전문가
            </span>와 연결됩니다.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            검증된 전문가 풀(Pool)을 통해 프로젝트 매칭 시간을 24시간 이내로 단축하세요.
            디자인, 개발, 번역까지 모든 비즈니스 과제를 해결해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/request"
              className="px-8 py-4 bg-primary hover:bg-primaryDark text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
            >
              무료 견적 요청하기 <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm"
            >
              서비스 둘러보기
            </Link>
          </div>
          
          <div className="mt-16 flex justify-center gap-8 text-slate-400 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-secondary" /> 24시간 빠른 매칭
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-secondary" /> 검증된 전문가
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-secondary" /> 100% 만족 보장
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">왜 ProMatch 인가요?</h2>
            <p className="text-slate-600">전통적인 채용 방식의 한계를 넘어선 새로운 해결책을 제시합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">압도적인 속도</h3>
              <p className="text-slate-600 leading-relaxed">
                채용 공고부터 면접까지 걸리는 평균 4주의 시간을 단 24시간으로 단축시킵니다.
                즉시 투입 가능한 전문가가 대기 중입니다.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">검증된 퀄리티</h3>
              <p className="text-slate-600 leading-relaxed">
                자체 평가 시스템을 통과한 상위 1% 전문가만 활동합니다.
                불만족 시 100% 환불을 보장하여 리스크를 제거했습니다.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">전담 케어 시스템</h3>
              <p className="text-slate-600 leading-relaxed">
                단순 매칭에서 끝나지 않습니다. 전담 매니저가 프로젝트의 시작부터 끝까지
                커뮤니케이션과 일정을 관리합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Stats */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">1,200+</div>
              <div className="text-slate-400">완료된 프로젝트</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-slate-400">고객 만족도</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">24h</div>
              <div className="text-slate-400">평균 매칭 시간</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-slate-400">활동 중인 전문가</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">제공 서비스</h2>
              <p className="text-slate-600">비즈니스에 필요한 모든 전문가를 한곳에서 만나보세요.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-primary font-semibold hover:underline">
              전체 보기 <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="h-40 overflow-hidden rounded-lg mb-4">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm line-clamp-2">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 md:hidden text-center">
             <Link to="/services" className="text-primary font-semibold inline-flex items-center">
              전체 보기 <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">고객 이용 후기</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((review) => (
              <div key={review.id} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">"{review.content}"</p>
                <div>
                  <div className="font-bold text-slate-900">{review.author}</div>
                  <div className="text-sm text-slate-500">{review.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-500"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">지금 바로 프로젝트를 시작하세요</h2>
          <p className="text-blue-100 text-lg mb-10">
            고민하는 시간에도 경쟁사는 앞서나가고 있습니다.<br />
            무료 견적 요청으로 전문가 매칭을 경험해보세요.
          </p>
          <Link
            to="/request"
            className="inline-block bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl"
          >
            무료 견적 받기
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;