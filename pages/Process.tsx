import React from 'react';
import { PROCESS_STEPS, IMAGE_ASSETS } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Process: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Visual Header */}
      <div className="relative h-[400px] bg-slate-900 flex items-center justify-center overflow-hidden">
        <img 
          src={IMAGE_ASSETS.PROCESS_STEP} 
          alt="Business meeting" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">작업 프로세스</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            복잡한 절차는 줄이고, 투명성은 높였습니다.<br />
            ProMatch의 체계적인 시스템을 경험해보세요.
          </p>
        </div>
      </div>

      {/* Steps Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

          {PROCESS_STEPS.map((step, index) => (
            <div key={step.id} className={`flex flex-col md:flex-row items-center mb-16 relative ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              
              {/* Content Side */}
              <div className="w-full md:w-1/2 px-4 md:px-12 mb-6 md:mb-0">
                <div className={`text-center md:text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-3 border border-blue-100">
                    STEP 0{step.id}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-2">{step.description}</p>
                  <div className={`text-sm text-emerald-600 font-medium flex items-center gap-1 justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <Check size={14} /> {step.duration}
                  </div>
                </div>
              </div>

              {/* Center Circle */}
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary z-10 hidden md:flex items-center justify-center shadow-lg">
                <span className="text-primary font-bold">{step.id}</span>
              </div>

              {/* Empty Side for layout balance */}
              <div className="w-full md:w-1/2"></div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-20 bg-slate-50 rounded-3xl p-8 md:p-12 text-center border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">안전한 거래를 위한 3가지 약속</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-3xl">🤝</div>
              <h4 className="font-bold mb-2">에스크로 결제</h4>
              <p className="text-sm text-slate-600">작업 완료 승인 전까지<br/>대금을 안전하게 보호합니다.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-3xl">📝</div>
              <h4 className="font-bold mb-2">표준 계약서 제공</h4>
              <p className="text-sm text-slate-600">법적 효력이 있는 표준 계약서를<br/>자동으로 생성해 드립니다.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-3xl">🛡️</div>
              <h4 className="font-bold mb-2">분쟁 조정 위원회</h4>
              <p className="text-sm text-slate-600">문제 발생 시 중립적인<br/>조정 절차를 지원합니다.</p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link to="/request" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primaryDark transition-colors shadow-md">
              프로젝트 시작하기 <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;