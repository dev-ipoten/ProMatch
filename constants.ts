import { Service, ProcessStep, PortfolioItem, Testimonial } from './types';

export const IMAGE_ASSETS = {
  HERO_BG: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
  SERVICE_DESIGN: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
  SERVICE_DEV: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  PROCESS_STEP: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
  PORTFOLIO_1: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  PORTFOLIO_2: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
  PORTFOLIO_3: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  PORTFOLIO_4: "https://images.unsplash.com/photo-1555421689-492a1880ceb9?auto=format&fit=crop&w=800&q=80"
};

export const SERVICES: Service[] = [
  {
    id: 'design',
    title: 'UI/UX 디자인',
    description: '사용자 중심의 직관적이고 아름다운 인터페이스를 설계합니다. 모바일 앱부터 웹사이트까지 완벽한 디자인을 경험하세요.',
    iconName: 'PenTool',
    imageUrl: IMAGE_ASSETS.SERVICE_DESIGN
  },
  {
    id: 'development',
    title: '웹/앱 개발',
    description: '최신 기술 스택을 활용하여 빠르고 안정적인 서비스를 구축합니다. MVP 제작부터 대규모 시스템까지 가능합니다.',
    iconName: 'Code',
    imageUrl: IMAGE_ASSETS.SERVICE_DEV
  },
  {
    id: 'translation',
    title: '전문 번역',
    description: '비즈니스에 최적화된 전문 번역 서비스를 제공합니다. 현지화(Localization)를 통해 글로벌 시장 진출을 돕습니다.',
    iconName: 'Globe',
    imageUrl: "https://images.unsplash.com/photo-1543165796-5426273eaab3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'marketing',
    title: '디지털 마케팅',
    description: '데이터 기반의 퍼포먼스 마케팅으로 서비스 성장을 가속화합니다. SEO, SNS 광고 등 맞춤형 전략을 수립합니다.',
    iconName: 'TrendingUp',
    imageUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: '견적 문의',
    description: '프로젝트 요구사항과 예산을 작성하여 제출합니다.',
    duration: '10분 소요'
  },
  {
    id: 2,
    title: '전문가 매칭',
    description: '24시간 이내에 가장 적합한 상위 1% 전문가를 매칭해 드립니다.',
    duration: '24시간 이내'
  },
  {
    id: 3,
    title: '프로젝트 진행',
    description: '전담 매니저의 케어 하에 안전하게 프로젝트를 진행합니다.',
    duration: '프로젝트별 상이'
  },
  {
    id: 4,
    title: '최종 결과물 전달',
    description: '검수 과정을 거친 고품질의 결과물을 전달받습니다.',
    duration: '완료 즉시'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Fintech App Redesign',
    client: 'FinStar Inc.',
    category: 'Design',
    imageUrl: IMAGE_ASSETS.PORTFOLIO_1
  },
  {
    id: '2',
    title: 'E-commerce Platform',
    client: 'Shopifyy',
    category: 'Development',
    imageUrl: IMAGE_ASSETS.PORTFOLIO_2
  },
  {
    id: '3',
    title: 'Corporate Branding',
    client: 'TechGlobal',
    category: 'Marketing',
    imageUrl: IMAGE_ASSETS.PORTFOLIO_3
  },
  {
    id: '4',
    title: 'Dashboard System',
    client: 'DataFlow',
    category: 'Development',
    imageUrl: IMAGE_ASSETS.PORTFOLIO_4
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    content: "급하게 디자이너가 필요했는데, ProMatch 덕분에 24시간 만에 훌륭한 전문가를 만날 수 있었습니다. 결과물도 대만족입니다.",
    author: "김대표",
    company: "스타트업 A사"
  },
  {
    id: 2,
    content: "내부 개발팀 채용이 힘들었는데, 여기서 검증된 개발자와 협업하여 MVP를 성공적으로 런칭했습니다.",
    author: "이이사",
    company: "플랫폼 B사"
  }
];