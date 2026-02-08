import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ExternalLink, Github, Calendar, User, CheckCircle2, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { ProjectImageSlider } from '../ui/projectImgSlider';

export const projects = [
  {
    id: 1,
    title: '코인 실시간 시세 조회 시스템',
    description: '다양한 거래소의 암호화폐 시세를 실시간으로 제공하는 웹 서비스',
    fullDescription: '다양한 거래소의 암호화폐 시세를 실시간으로 조회하고 분석할 수 있는 웹 서비스입니다. Socket.io와 Redis를 활용한 실시간 데이터 전송 시스템을 구축하여 빠르고 정확한 시세 정보를 제공하며, 비트코인 대비 알트코인 변동성 차트 기능으로 투자 판단을 지원합니다.',
    image: '/mytradinginfo/mytradinginfo.png',
    tags: ['TypeScript', 'Java', 'Socket.io', 'Redis', 'MySQL'],
    category: ['TypeScript', ", ",'Java'],
    period: '2020.04 ~ 2023.09',
    role: '백엔드 개발자',
    features: [
      '실시간 시세 데이터 전송 - Socket.io와 Redis Subscribe를 활용한 실시간 데이터 전달',
      '다중 거래소 지원 - 여러 거래소의 시세 데이터를 통합하여 제공',
      '변동성 차트 - 비트코인 대비 알트코인 변동성 분석 차트 제공',
      '종가 데이터 저장 - 실시간 시세 및 변동률 데이터를 MySQL에 저장하여 이력 관리',
    ],
    points: [
      'Socket.io와 Redis Subscribe 기능을 활용한 실시간 시세 데이터 전달 시스템 구현',
      '신규 거래소 데이터 연동 및 비트코인 대비 알트코인 변동성 차트 기능 개발',
      'Java Maven 기반 FEP/BP 서버에서 환율 및 주요 코인 거래소 시세 데이터를 Redis Publish 및 Hset으로 1분 주기 전송',
      '실시간 시세 및 변동률 데이터 처리 후 종가 데이터를 MySQL에 저장하는 파이프라인 구축',
      '다양한 거래소 데이터를 실시간으로 제공하여 서비스 확장성을 높이고 사용자에게 정확하고 빠른 정보 제공',
    ],
    demoUrl: 'https://www.mytradinginfo.com',
    screenshots: [
      '/mytradinginfo/mytradinginfo.png',
      '/mytradinginfo/mytradinginfo2.png',
      '/mytradinginfo/mytradinginfo3.png',
      '/mytradinginfo/mytradinginfo4.png',
      '/mytradinginfo/mytradinginfo5.png',
      '/mytradinginfo/mytradinginfo6.png',
    ]
  },
  {
    id: 2,
    title: '바이너리 옵션 거래 플랫폼',
    description: 'Pixi.js 기반 실시간 차트와 거래 기능을 제공하는 트레이딩 플랫폼',
    fullDescription: 'Pixi.js(2D WebGL 렌더링 라이브러리)를 사용하여 개발한 바이너리 옵션 거래 플랫폼입니다. PC(WTS)와 모바일(MTS) 환경을 모두 지원하며, 실시간 차트, 보조지표, 그래픽 툴, 주문 패널 등 트레이딩에 필요한 다양한 기능을 제공합니다. MVP 패턴과 RxJS Observer 패턴을 적용하여 유지보수성과 확장성을 크게 개선했습니다.',
    image: '/eztross/eztross.png',
    tags: ['JavaScript', 'Pixi.js', 'RxJS', 'MVP', 'WebGL'],
    category: 'JavaScript',
    period: '2020.04 ~ 2023.09',
    role: '프론트엔드 개발자',
    features: [
      '실시간 차트 렌더링 - Pixi.js를 활용한 고성능 2D WebGL 차트 구현',
      '보조지표 시스템 - 다양한 보조지표를 선택하고 커스터마이징할 수 있는 기능',
      '크로스 플랫폼 지원 - PC(WTS)와 모바일(MTS) 환경 모두 지원',
      '다국어 지원 - 글로벌 사용자를 위한 다국어 처리 시스템',
    ],
    points: [
      'Pixi.js를 활용한 실시간 차트, 보조지표, 그래픽 툴, 주문 패널 등 UI 및 기능 개발',
      'MVP 구조의 View와 Presenter 분리를 통해 유지보수성 향상 및 리팩토링 수행',
      '보조지표 UI 리뉴얼 시 async/await를 적용하여 데이터 전달 순서 문제 해결 및 기본값 처리 개선',
      'RxJS Observer 패턴을 적용하여 뷰 변경(그래픽 툴, 보조지표 생성 등) 시 상태 관리 개선',
      'PC(WTS)와 모바일(MTS) 환경을 모두 지원하는 반응형 UI 개발 및 다국어 처리 구현',
    ],
    screenshots: [
      '/eztross/eztross.png',
      '/eztross/eztross2.png',
      '/eztross/eztross3.png',
    ]
  },
  {
    id: 3,
    title: '바이너리 거래 플랫폼 로그 서버',
    description: 'Go와 Kafka를 활용한 실시간 로그 수집 및 전송 시스템',
    fullDescription: 'Go 언어를 사용하여 개발한 고성능 로그 수집 서버입니다. HTTP API를 통해 로그를 수집하고 Kafka로 실시간 전송하여 데이터 분석 및 장애 대응 속도를 크게 향상시켰습니다. gorilla/mux 라우터와 Negroni 미들웨어를 활용하여 안정적이고 확장 가능한 구조로 설계했습니다.',
    image: '/log-server/1.png',
    tags: ['Go', 'Kafka', 'gorilla/mux', 'Negroni', 'Sarama'],
    category: 'Go',
    period: '2020.04 ~ 2023.09',
    role: '백엔드 개발자',
    features: [
      'HTTP 기반 로그 수집 API - gorilla/mux를 활용한 로그 수집용 엔드포인트 구현',
      '미들웨어 로깅 - Negroni를 이용한 요청 및 응답 로깅 미들웨어 개발',
      'Kafka 실시간 전송 - Sarama 라이브러리를 사용하여 수집된 로그를 Kafka로 실시간 전송',
      '데이터 분석 지원 - 로그 데이터의 실시간 수집과 전송으로 데이터 분석 기반 마련',
    ],
    points: [
      'gorilla/mux를 활용한 HTTP 기반 로그 수집용 API 엔드포인트 및 핸들러 구현',
      'Negroni 미들웨어를 이용한 요청 및 응답 로깅 기능 개발',
      'Sarama 라이브러리를 사용하여 Kafka로 로그 데이터 실시간 전송 기능 구현',
      '로그 데이터의 실시간 수집과 전송을 통해 데이터 분석 및 장애 대응 속도를 크게 향상',
      '데이터 처리 지연 문제를 해결하고 안정적인 로그 수집 파이프라인 구축',
    ],
    screenshots: [
      '/log-server/1.png',
    ]
  },
  {
    id: 4,
    title: 'Telegram Bot 가격 알림 시스템',
    description: '암호화폐 변동성을 실시간 모니터링하여 텔레그램으로 알림을 전송하는 시스템',
    fullDescription: 'Java 기반으로 개발된 암호화폐 변동성 모니터링 및 알림 시스템입니다. 변동성 차트 데이터를 실시간으로 분석하여 급격한 가격 변동(상·하한가)을 감지하고, Telegram Bot을 통해 사용자에게 즉시 알림을 전송합니다. 주요 가격 변동 시 신속한 대응을 지원하여 서비스의 질을 크게 개선했습니다.',
    image: '/telegram-bot/telegram-bot.png',
    tags: ['Java'],
    category: 'Java',
    period: '2020.04 ~ 2023.09',
    role: '백엔드 개발자',
    features: [
      '실시간 변동성 모니터링 - 변동성 차트 데이터를 실시간으로 분석하여 상·하한가 감지',
      'Telegram Bot 알림 - 급격한 가격 변동 발생 시 Telegram Bot을 통해 즉시 알림 전송',
      '자동화된 가격 추적 - 24시간 자동으로 가격을 추적하고 조건에 맞을 때만 알림',
      '신속한 대응 지원 - 주요 가격 변동 시 즉각적인 알림으로 사용자의 투자 판단 지원',
    ],
    points: [
      '변동성 차트 데이터를 실시간으로 모니터링하여 상·하한가 감지 기능 개발',
      'Telegram Bot API를 연동하여 실시간 가격 알림 기능 구현',
      '주요 가격 변동 시 즉각적인 알림 제공으로 사용자의 편의성을 높임',
      '신속한 대응을 지원해 서비스의 질을 크게 개선하고 사용자 만족도 향상',
    ],
    screenshots: [
      '/telegram-bot/telegram-bot.png',
      '/telegram-bot/telegram-bot2.png',
    ]
  },
  {
    id: 5,
    title: '소프트위즈 자사 홈페이지',
    description: '채용 시스템과 보안이 강화된 기업 웹사이트',
    fullDescription: 'Node.js를 사용하여 프론트엔드와 백엔드를 모두 구현한 기업 홈페이지입니다. 채용 공고 관리 시스템, 이력서 지원 기능, 파일 업로드 시스템을 구축했으며, Google reCAPTCHA v3를 적용하여 악성 트래픽을 차단하고 보안을 강화했습니다. 채용 프로세스 개선으로 사내 지원율을 약 20% 증가시켰습니다.',
    image: '/softwiz/softwiz.png',
    tags: ['Node.js', 'MySQL', 'reCAPTCHA', 'Express'],
    category: 'Node.js',
    period: '2020.04 ~ 2023.09',
    role: '풀스택 개발자',
    features: [
      '채용 공고 시스템 - 검색 옵션에 따라 채용 공고를 필터링하여 출력',
      '이력서 지원 기능 - 사용자가 포트폴리오 및 PDF 형태의 이력서를 업로드하여 지원',
      '파일 업로드 시스템 - 안전한 파일 업로드 및 저장 시스템 구축',
      'reCAPTCHA 보안 - Google reCAPTCHA v3를 적용하여 악성 트래픽 차단',
    ],
    points: [
      'Node.js를 사용하여 프론트엔드와 백엔드를 모두 개발하고 웹 퍼블리셔와 협업',
      '검색 옵션에 따라 채용 공고를 출력하는 기능 구현',
      'Google reCAPTCHA v3를 적용하여 악성 트래픽을 감지하고 무분별한 메시지 전송을 방어',
      '이력서 제출 시 포트폴리오나 PDF 형태의 이력서를 업로드할 수 있는 파일 업로드 시스템 구축',
      '채용 프로세스와 사이트 보안을 강화하여 사내 지원율을 약 20% 증가시키고 관리자 업무 효율성 향상',
    ],
    demoUrl: 'https://www.mysoftwiz.com',
    screenshots: [
      '/softwiz/softwiz.png',
      '/softwiz/softwiz2.png',
      '/softwiz/softwiz3.png',
      '/softwiz/softwiz4.png',
      '/softwiz/softwiz5.png'
    ]
  },
  {
    id: 6,
    title: 'xEMS 솔루션',
    description: '건물 및 설비 에너지 데이터를 실시간으로 집계·분석하는 통합 에너지 관리 시스템',
    fullDescription: '한국녹색기후기술원의 xEMS 솔루션 고도화 프로젝트로, 건물 에너지(BEP)와 설비 에너지(ESP) 데이터 집계 엔진을 개발하고 고도화했습니다. Connection Pool 구조 도입으로 실시간 집계 안정성을 확보하고, 통합 에너지 분석 API를 통해 연간/월간 에너지 소비, 탄소 배출량, 신재생에너지 비중 등 주요 지표를 종합 분석할 수 있도록 구현했습니다. 2024년 한국에너지대상 장관상과 2025년 환경의날 환경부장관상을 수상했으며, 에너지 데이터 집계 부문 특허를 출원했습니다.',
    image: '/kgct/kgct.png',
    tags: ['Node.js', 'MariaDB', 'PM2', 'Nginx', 'Express'],
    category: 'Node.js',
    period: '2024.02 ~ 2025.10',
    role: '백엔드 개발자',
    features: [
      '데이터 집계 엔진 - BEP/ESP 데이터 실시간 집계 및 Connection Pool 구조로 안정성 확보',
      '스케줄러 시스템 - 냉난방도일/도시 계산 및 시간/일 단위 스케줄 기능',
      '통합 에너지 분석 API - 에너지 소비, 발전, 자립률, 탄소 배출량 등 종합 분석',
      '기상 데이터 연동 - Weather API 통합 및 활용 인프라 구축',
    ],
    points: [
      '설비 에너지(ESP) 데이터 집계 엔진 신규 개발 및 건물 에너지(BEP) 집계 엔진 고도화로 관제점 데이터 정확도 향상',
      'Connection Pool 구조 전환으로 실시간 집계 안정성 확보 및 독립 커넥션 구조의 실시간 집계 실패 문제 해결',
      '오류 및 공백 보정을 위한 재계산, 데이터 보정, 재집계 API 신규 개발 및 관제점 간 자동 환산 기능 추가',
      '통합 에너지 분석 API 개발로 연간/월간 에너지 소비, 탄소 배출량, 신재생에너지 비중, 시간대별·요일별 소비 패턴 분석 제공',
      '냉난방도일/도시 스케줄러 개발, 보안 강화를 위한 유효성 검사 미들웨어 구현, Weather API 연동 및 xEMS 시스템 통합 단위 코드 API 개발',
      '2024년 한국에너지대상 장관상, 2025년 환경의날 환경부장관상 수상 및 에너지 데이터 집계 부문 특허 출원',
    ],
    demoUrl: 'https://cxems.kgct.or.kr/',
    screenshots: [
      '/kgct/kgct.png',
      '/kgct/kgct2.png',
      '/kgct/kgct3.png',
      '/kgct/kgct4.png',
      '/kgct/kgct5.png',
    ]
  },
  {
    id: 7,
    title: '오늘의 리뷰 (오리)',
    description: '다양한 분야의 후기를 공유하고 탐색할 수 있는 커뮤니티 플랫폼',
    fullDescription: 'Next.js와 Node.js 기반으로 개발된 리뷰 통합 커뮤니티 플랫폼입니다. 대학, 교회, 회사, 외주 등 다양한 카테고리별 후기를 작성하고 공유할 수 있으며, TypeScript와 Tailwind CSS를 활용한 모던한 UI/UX를 제공합니다. Sequelize ORM을 통한 효율적인 데이터베이스 관리와 실시간 검색 자동완성 기능으로 사용자 경험을 개선했습니다.',
    image: '/ori/ori.png',
    tags: ['Next.js', 'Node.js', 'Express', 'TypeScript', 'Sequelize', 'Tailwind CSS'],
    category: ['Next.js', ", " , 'Node.js'],
    period: '2025.01 ~ 현재',
    role: '풀스택 개발자',
    features: [
      '카테고리별 후기 시스템 - 대학, 교회, 회사, 외주 등 다양한 분야의 리뷰를 체계적으로 분류',
      '실시간 검색 자동완성 - 사용자 입력에 따른 즉각적인 검색어 추천 기능',
      '베스트 후기 시스템 - 평점 기반 우수 리뷰 선별 및 노출',
      '자유게시판 - 사용자들이 다양한 경험을 자유롭게 공유할 수 있는 커뮤니티 공간',
    ],
    points: [
      'Next.js와 TypeScript를 활용한 타입 안전성이 보장된 프론트엔드 개발 및 Tailwind CSS로 반응형 UI 구현',
      'Node.js와 Express 기반 RESTful API 서버 구축 및 Sequelize ORM을 통한 효율적인 데이터베이스 관리',
      '검색 자동완성 기능 개발로 사용자가 원하는 정보를 빠르게 찾을 수 있도록 UX 개선',
      '카테고리별 리뷰 시스템 구축으로 사용자가 관심 분야의 후기를 효율적으로 탐색할 수 있는 구조 설계',
      '베스트 후기 알고리즘 구현 및 자유게시판을 통한 커뮤니티 활성화로 사용자 참여 증진',
      'Vercel을 통한 프론트엔드 배포 및 백엔드 API 서버 운영으로 안정적인 서비스 제공',
    ],
    demoUrl: 'https://www.reviewhub.life/',
    screenshots: [
      '/ori/ori.png',
      '/ori/ori2.png',
      '/ori/ori3.png',
      '/ori/ori4.png',
      '/ori/ori5.png',
      '/ori/ori6.png',
      '/ori/ori7.png',
      '/ori/ori8.png',
      '/ori/ori9.png',
    ]
  },
  {
    id: 8,
    title: '세일러문 - 최저가 검색 서비스',
    description: '네이버 쇼핑 API를 활용한 스마트 최저가 검색 플랫폼',
    fullDescription: 'Next.js와 TypeScript로 개발된 최저가 검색 서비스입니다. 네이버 쇼핑 API를 활용하여 최대 1,000개의 상품 정보를 수집하고, 사용자가 설정한 목표가와 시장 최저가를 비교 분석합니다. 중고/렌탈/직구 제외 옵션과 노이즈 필터링 기능을 제공하여 프로모션 가격 설계 시 정확한 시장 분석을 지원합니다.',
    image: '/salermoon/salermoon.png',
    tags: ['Next.js', 'TypeScript', 'Naver API', 'Vercel'],
    category: ['Next.js', ", " , 'TypeScript'],
    period: '2026.01 ~ 2026.01',
    role: '프론트엔드 개발자',
    features: [
      '네이버 쇼핑 API 연동 - 최대 1,000개 상품 정보 실시간 수집 (1~10페이지)',
      '목표가 비교 분석 - 설정한 목표 가격과 시장 최저가 비교 기능',
      '스마트 필터링 - 중고/렌탈/직구 제외 옵션 및 노이즈 자동 제거',
      '가격 범위 설정 - 최소/최대/목표가 입력을 통한 맞춤형 검색',
    ],
    points: [
      'Next.js와 TypeScript를 활용하여 타입 안전성이 보장된 최저가 검색 서비스 개발',
      '네이버 쇼핑 API를 연동하여 최대 1,000개의 상품 데이터를 수집하고 실시간으로 최저가 분석 제공',
      '사용자가 설정한 목표 가격과 시장 최저가를 비교하여 프로모션 가격 설계를 지원하는 비교 분석 시스템 구현',
      '중고/렌탈/직구 제외 옵션과 노이즈 필터링 기능을 통해 정확한 시장 분석 데이터 제공',
      'Vercel을 통한 배포로 빠른 응답 속도와 안정적인 서비스 운영 구현',
      '직관적인 UI/UX 설계로 검색어 입력부터 결과 확인까지 간편한 사용자 경험 제공',
    ],
    demoUrl: 'https://salermoon.vercel.app/',
    screenshots: [
      '/salermoon/salermoon.png',
    ]
  },
  {
    id: 9,
    title: 'AI 뉴스 서치',
    description: '시맨틱 검색과 AI 분석을 결합한 스마트 뉴스 검색 플랫폼',
    fullDescription: 'FastAPI와 Next.js로 구축한 AI 기반 뉴스 검색 서비스입니다. SerpAPI를 활용해 Google News 데이터를 수집하고, Sentence Transformers 기반 한국어 시맨틱 검색으로 키워드 매칭을 넘어선 의미 중심 검색을 제공합니다. 또한 LLM(OpenAI/Claude)을 통해 뉴스의 핵심 요약, 감성 분석, 트렌드 인사이트 등 고도화된 분석 기능을 지원합니다. 언론사 필터, 북마크, 다크모드 등 사용자 편의 기능도 함께 제공해 검색부터 분석까지 한 흐름으로 완성했습니다.',
    image: '/newsCrawler/newsCrawler.png',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'SerpAPI', 'AI/ML', 'LLM'],
    category: ['Next.js', ", " , 'Python'],
    period: '2026.02 ~ 현재',
    role: '풀스택 개발자',
    features: [
      '듀얼 검색 시스템 - 일반 키워드 검색과 AI 시맨틱 검색으로 의미 기반 뉴스 탐색',
      'AI 뉴스 분석 - 임베딩 기반 시맨틱 검색 및 LLM 기반 핵심 요약, 주요 포인트, 감성 분석, 트렌드 분석 제공',
      '고급 필터링 - 언론사 필터, 날짜 범위 설정, 언론사 제외 기능',
      '편의 기능 - 북마크, 검색 히스토리, 다크모드, 자동 검색, 반응형 UI',
    ],
    points: [
      'FastAPI와 Next.js 14를 활용한 풀스택 아키텍처 구축 및 TypeScript로 타입 안전성 확보',
      'SerpAPI를 통한 Google News 크롤링과 Naver News API, RSS Parser를 활용한 다중 뉴스 소스 통합',
      'Sentence Transformers 한국어 임베딩 모델을 적용하여 동의어와 유사 의미를 인식하는 시맨틱 검색 구현',
      'LLM(OpenAI/Claude)을 연동하여 뉴스 핵심 요약, 감성 분석, 트렌드 분석 등 AI 기반 뉴스 인사이트 제공',
      'SHA256 기반 고유 ID 생성, Rate Limiting(분당 60회), 캐싱 시스템을 통한 안정적인 서비스 운영',
      '언론사 필터링, 북마크, 검색 히스토리, 다크모드 등 사용자 경험 중심의 다양한 편의 기능 구현',
    ],
    screenshots: [
      '/newsCrawler/newsCrawler.png',
      '/newsCrawler/newsCrawler2.png',
      '/newsCrawler/newsCrawler3.png',
      '/newsCrawler/newsCrawler4.png',
      '/newsCrawler/newsCrawler5.png'
    ]
  },
];

const allTags = ['전체', 'Go', 'Java', 'JavaScript', 'Next.js', 'Node.js', 'Python', 'TypeScript'];

export function Projects() {
  const [selectedTag, setSelectedTag] = useState('전체');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
const [selectedImage, setSelectedImage] = useState<string | null>(null);
const isVideo = (src: string) => /\.(mp4|webm|ogg)(\?.*)?$/i.test(src);
const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const filteredProjects =
    selectedTag === '전체'
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(selectedTag)
            : project.category === selectedTag
        );

  return (
    <div className="min-h-screen pt-32 pb-24">


      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl mb-6 tracking-tight">프로젝트</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto tracking-tight">
          더 나은 사용자 경험을 만들기 위해 고민한 결과물들입니다.
          </p>
        </motion.div>

        {/* Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? 'default' : 'outline'}
              className={`cursor-pointer px-4 py-2 transition-all ${
                selectedTag === tag
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-primary/10'
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
            <Card
  className="overflow-hidden group cursor-pointer hover:shadow-[0_8px_24px_rgba(107,124,255,0.15)] transition-all flex flex-col h-full"
  onClick={() => setSelectedProject(project)}
>
  {/* 이미지 */}
  <div className="relative aspect-[4/3] overflow-hidden">
    <ImageWithFallback
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
      <span className="text-white flex items-center gap-2">
        자세히 보기 <ExternalLink className="h-4 w-4" />
      </span>
    </div>
  </div>

  {/* 본문 */}
  <div className="p-6 flex flex-col flex-grow">
    <h3 className="text-xl mb-2 tracking-tight">{project.title}</h3>

    {/* 설명 고정 높이 + ellipsis */}
    <p
      className="text-muted-foreground mb-4 tracking-tight flex-grow"
      style={{
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        minHeight: "3rem", // 줄 수 맞추기용 높이 (2줄 기준)
      }}
    >
      {project.description}
    </p>

    {/* 태그는 하단 고정 */}
    <div className="mt-auto flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <Badge key={tag} variant="secondary" className="text-xs">
          {tag}
        </Badge>
      ))}
    </div>
  </div>
</Card>

            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
<DialogContent
  style={{
    width: '100%',
    maxWidth: 'min(90vw, 1200px)',   // 모바일~태블릿
  }}
 className="mx-auto max-h-[90vh] overflow-y-auto scrollbar-hide"
>


  <div className="w-full max-w-[90vw] md:max-w-[65vw] lg:max-w-[55vw] mx-auto">     {selectedProject && (
            <div >
              <DialogHeader>
                <DialogTitle className="text-3xl tracking-tight mb-4">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              {/* Main Image */}
            <div className="relative w-full h-[56vh] flex items-center justify-center overflow-hidden rounded-lg mb-6">
  <ImageWithFallback
    src={selectedProject.image}
    alt={selectedProject.title}
    className="max-h-full max-w-full w-auto h-auto object-contain"
  />
              

              </div>

              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">프로젝트 기간</p>
                    <p className="tracking-tight">{selectedProject.period}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">역할</p>
                    <p className="tracking-tight">{selectedProject.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 text-primary flex items-center justify-center">💻</div>
                  <div>
                    <p className="text-xs text-muted-foreground">카테고리</p>
                    <p className="tracking-tight">{selectedProject.category}</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl mb-3 tracking-tight">프로젝트 개요</h3>
                <p className="text-muted-foreground leading-relaxed tracking-tight">
                  {selectedProject.fullDescription}
                </p>
              </div>

              <Separator className="my-6" />

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-xl mb-3 tracking-tight">사용 기술</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl mb-3 tracking-tight">주요 기능</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
                     <Separator className="my-6" />
     {/* 구현 포인트 */}
             {/* 구현 포인트 (교체) */}
<div className="mb-8">
  <h3 className="text-xl mb-3 tracking-tight">구현 포인트</h3>

  <ul className="grid gap-3 md:grid-cols-2">
    {selectedProject.points?.map((point, idx) => (
      <li
        key={idx}
        className="group relative overflow-hidden rounded-xl border bg-card p-4 transition
                   hover:shadow-[0_8px_24px_rgba(107,124,255,0.15)]"
      >
        {/* 상단 얇은 포인트 라인 */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1
                        bg-gradient-to-r from-primary/70 to-primary/30 opacity-80" />

        <div className="flex items-start gap-3">
          {/* 번호 배지 */}
          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center
                          rounded-full bg-primary/10 text-primary
                          ring-1 ring-primary/20 text-sm font-medium">
            {idx + 1}
          </div>

          {/* 내용 */}
          <p className="text-sm md:text-[15px] leading-relaxed tracking-tight text-foreground/90">
            {point}
          </p>
        </div>
      </li>
    ))}
  </ul>
</div>

              {/* Screenshots */}
       {/* Screenshots */}
{selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
  <>
    <Separator className="my-6" />
    <div className="mb-6">
      <h3 className="text-xl mb-3 tracking-tight">스크린샷</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {selectedProject.screenshots.map((media, index) => {
          const video = isVideo(media);
          return (
            <div
              key={index}
              className="relative aspect-video overflow-hidden rounded-lg cursor-pointer group bg-black"
              onClick={() => setSelectedMedia(media)}
              title="클릭하여 크게 보기"
            >
              {video ? (
                <video
                  src={media}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300"
                  muted
                  playsInline
                />
              ) : (
                <ImageWithFallback
                  src={media}
                  alt={`${selectedProject.title} 스크린샷 ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="text-white text-sm">클릭하여 확대</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </>
)}

<Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
  <DialogContent className="p-0 bg-transparent border-0 shadow-none max-w-[95vw] max-h-[90vh] flex items-center justify-center">
    {selectedMedia && (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* 닫기 버튼 */}
        <button
          onClick={() => setSelectedMedia(null)}
          className="absolute top-4 right-4 z-50 bg-black/60 text-white rounded-full p-2 hover:bg-black/80"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 이미지 / 비디오 분기 */}
        {isVideo(selectedMedia) ? (
          <video
            src={selectedMedia}
            controls
            autoPlay
            playsInline
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        ) : (
          <img
            src={selectedMedia}
            alt="확대 이미지"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        )}
      </div>
    )}
  </DialogContent>
</Dialog>



              {/* Links */}
              {(selectedProject.githubUrl || selectedProject.demoUrl) && (
                <>
                  <Separator className="my-6" />
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.githubUrl && (
                      <Button variant="outline" asChild>
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub 보기
                        </a>
                      </Button>
                    )}
                    {selectedProject.demoUrl && (
                      <Button asChild className="bg-primary hover:bg-primary/90">
                        <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          라이브 데모
                        </a>
                      </Button>
                    )}
                  </div>
                </>
              )}
            </div>
          )}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
