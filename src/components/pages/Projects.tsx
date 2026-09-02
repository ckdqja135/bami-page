import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ExternalLink, Github, Calendar, User, CheckCircle2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { ProjectImageSlider } from '../ui/projectImgSlider';

export const projects = [
  {
    id: 1,
    title: 'MyTradingInfo',
    description: '거래소마다 흩어져 있는 암호화폐 시세를 한 화면에서 비교하는 웹 서비스입니다. 비트코인 대비 알트코인 변동성 차트로 투자 판단에 필요한 지표까지 함께 제공합니다.',
    fullDescription: '거래소별로 시세를 따로 확인해야 하는 투자자가 여러 거래소의 가격과 변동성을 한 화면에서 비교할 수 있도록 만든 서비스입니다. Java Maven 기반 FEP/BP 서버가 환율과 주요 거래소 시세를 1분 주기로 Redis에 Publish·Hset하고, 웹 서버는 Redis Subscribe로 받은 데이터를 Socket.io로 클라이언트에 전달하는 실시간 전달 구조를 설계했습니다. 이후 신규 거래소를 추가 연동해 데이터 소스를 넓혔고, 실시간 시세와 변동률을 처리한 뒤 종가를 MySQL에 적재해 이력 조회와 변동성 차트의 기준 데이터를 확보했습니다. 실시간 데이터 파이프라인 설계와 다중 외부 소스 통합을 검증한 프로젝트입니다.',
    image: '/mytradinginfo/mytradinginfo.png',
    tags: ['TypeScript', 'Java', 'Socket.io', 'Redis', 'MySQL'],
    category: ['TypeScript', 'Java'],
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
    title: 'Eztross',
    description: 'PC와 모바일에서 같은 방식으로 차트를 보고 주문할 수 있는 바이너리 옵션 거래 플랫폼의 화면을 개발했습니다. 실시간 차트와 주문 패널을 WebGL로 렌더링해 조작 지연 없이 동작하도록 만들었습니다.',
    fullDescription: '트레이더가 PC(WTS)와 모바일(MTS) 어디서든 동일한 방식으로 차트를 읽고 주문할 수 있어야 한다는 요구에서 출발한 바이너리 옵션 거래 플랫폼입니다. 2D WebGL 렌더링 라이브러리인 Pixi.js로 실시간 차트, 보조지표, 그래픽 툴, 주문 패널을 구현하고, MVP 패턴으로 View와 Presenter를 분리해 화면이 늘어나도 로직이 얽히지 않는 구조를 만들었습니다. 보조지표 UI 리뉴얼 과정에서 드러난 데이터 전달 순서 문제는 async/await로 정리하고 기본값 처리를 보완했으며, 그래픽 툴·보조지표 생성처럼 뷰 상태가 자주 바뀌는 영역은 RxJS Observer 패턴으로 상태 관리를 개선했습니다. 반응형 UI와 다국어 처리까지 적용해 여러 환경의 사용자를 동시에 대응한 프로젝트입니다.',
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
    description: '거래 플랫폼에서 발생하는 로그를 실시간으로 모아 분석 파이프라인으로 흘려보내는 서버입니다. 로그가 제때 쌓이도록 만들어 장애 원인 확인 속도를 개선했습니다.',
    fullDescription: '거래 플랫폼의 로그가 제때 모이지 않아 데이터 분석과 장애 대응이 늦어지던 문제를 해결하기 위해 만든 로그 수집 서버입니다. Go로 gorilla/mux 라우터 위에 로그 수집 엔드포인트와 핸들러를 구현하고, Negroni 미들웨어로 요청·응답 로깅을 공통 처리해 수집 경로를 일원화했습니다. 수집한 로그는 Sarama로 Kafka에 실시간 전송해 처리 지연을 없앴고, 이후 분석과 장애 대응이 같은 스트림 위에서 이뤄지도록 파이프라인을 정리했습니다. Go 기반 서버 구현과 스트리밍 데이터 수집 구조 설계를 담당한 프로젝트입니다.',
    image: '',
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
    screenshots: []
  },
  {
    id: 4,
    title: 'Telegram Bot 가격 알림 시스템',
    description: '급격한 시세 변동을 감지해 텔레그램으로 즉시 알리는 모니터링 시스템입니다. 사용자가 차트를 계속 지켜보지 않아도 변동에 대응할 수 있게 만들었습니다.',
    fullDescription: '사용자가 시세 화면을 계속 지켜보고 있어야만 급변동을 알 수 있던 문제를 해결하기 위해 만든 알림 시스템입니다. Java로 변동성 차트 데이터를 실시간 분석해 상·하한가를 판정하고, 조건을 충족할 때만 Telegram Bot API로 알림을 전송하도록 구현했습니다. 24시간 자동으로 가격을 추적하면서도 불필요한 알림이 쌓이지 않도록 발송 조건을 제한했고, 주요 변동 시점에 즉시 알림이 도달하면서 사용자가 대응할 수 있는 시간을 확보했습니다. 실시간 지표 판정 로직과 외부 메신저 연동을 담당한 프로젝트입니다.',
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
    description: '채용 공고 조회부터 이력서 제출까지 한 곳에서 처리하는 기업 홈페이지입니다. 흩어져 있던 지원 절차를 온라인으로 옮기고 문의 폼의 악성 트래픽을 차단했습니다.',
    fullDescription: '지원자가 채용 공고를 찾고 이력서를 제출하는 과정이 흩어져 있어 관리자 업무가 늘어나던 문제를 풀기 위해 만든 기업 홈페이지입니다. Node.js와 Express로 프론트엔드와 백엔드를 모두 구현하고 웹 퍼블리셔와 협업해 화면을 완성했습니다. 검색 옵션에 따라 채용 공고를 필터링해 노출하고, 포트폴리오와 PDF 이력서를 올릴 수 있는 파일 업로드 시스템을 구축했습니다. 운영 중 유입되던 무분별한 메시지 전송은 Google reCAPTCHA v3를 적용해 차단했으며, 채용 절차와 보안을 함께 개선해 사내 지원율을 약 20% 늘리고 관리자 업무 효율을 높였습니다.',
    image: '/softwiz/softwiz.png',
    tags: ['Node.js', 'MySQL', 'reCAPTCHA', 'Express'],
    category: ['Node.js', 'JavaScript'],
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
    description: '건물과 설비에서 올라오는 에너지 데이터를 실시간으로 집계·보정해 진단 지표로 제공하는 에너지 관리 시스템입니다. 집계가 끊기던 구조를 바꿔 실시간 처리 안정성을 확보했습니다.',
    fullDescription: '건물(BEP)과 설비(ESP)에서 올라오는 관제점 데이터가 실시간으로 정확히 집계되어야 에너지 진단과 리포트가 성립하는 시스템입니다. 한국녹색기후기술원 xEMS 솔루션 고도화 프로젝트에서 설비 에너지 집계 엔진을 신규 개발하고 건물 에너지 집계 엔진을 고도화해 관제점 데이터 정확도를 높였습니다.\n\n독립 커넥션 구조에서 실시간 집계가 실패하던 문제는 Connection Pool 구조로 전환해 해소했습니다. 오류와 공백 구간을 되살리기 위한 재계산·데이터 보정·재집계 API와 관제점 간 자동 환산 기능을 추가했고, 냉난방도일 스케줄러, 유효성 검사 미들웨어, Weather API 연동, xEMS 통합 단위 코드 API를 함께 개발했습니다.\n\n통합 에너지 분석 API로 연간·월간 에너지 소비, 탄소 배출량, 신재생에너지 비중, 시간대별·요일별 소비 패턴을 한 번에 조회할 수 있게 했습니다. 이 솔루션으로 2024년 한국에너지대상 장관상과 2025년 환경의날 환경부장관상을 수상했고, 에너지 데이터 집계 부문 특허를 출원했습니다.',
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
    title: '오리(오빠의 리뷰)',
    description: '어드민에서 템플릿을 고르면 리뷰 사이트와 API가 그대로 만들어지는 커뮤니티 플랫폼입니다. 리뷰 데이터 수집과 접속 통계까지 운영자가 직접 다룰 수 있도록 구성했습니다.',
    fullDescription: '새로운 리뷰 서비스를 열 때마다 사이트와 API를 처음부터 개발해야 하는 부담을 없애기 위해 만든 리뷰 통합 커뮤니티 플랫폼입니다. 어드민에서 템플릿을 선택하면 맞춤형 리뷰 사이트와 API가 자동 생성되어, 별도 개발 없이 새 서비스를 바로 배포할 수 있습니다.\n\nNext.js와 TypeScript로 프론트엔드를, Node.js·Express와 Sequelize ORM으로 API 서버를 구성했습니다. 대학·교회·회사·외주 등 카테고리별 후기, 실시간 검색 자동완성, 베스트 후기 선별, 자유게시판을 갖춰 사용자가 관심 분야의 후기를 빠르게 찾고 공유할 수 있도록 했습니다.\n\n어드민에는 카카오·네이버·구글 플레이스·식신 멀티소스 크롤러를 내장해 맛집·회사 데이터를 수집합니다. 수집 데이터가 잘못 쌓이면 되돌리기 어려운 만큼 dryRun 미리보기 후 확정 저장하는 2단계 워크플로를 두었고, NDJSON 스트리밍 진행률, 이름+주소 기반 중복 제거, 지오코딩 좌표 보정으로 정확도를 관리했습니다. Gemini AI가 크롤링 키워드를 자동 생성하고 주간 스케줄러가 수집을 돌리며, OpenDart 연동으로 상장사 재무 정보를 매일 갱신합니다.\n\n자체 페이지뷰 트래킹을 붙여 경로별·유입별·일별 접속 통계와 방문 로그를 어드민에서 확인할 수 있게 했습니다. 노코드 빌더 설계부터 외부 API 다중 연동, 배치 자동화, Vercel 배포와 API 서버 운영까지 제품의 전 과정을 직접 다룬 프로젝트입니다.',
    image: '/ori/ori.png',
    tags: ['Next.js', 'Node.js', 'Express', 'TypeScript', 'Sequelize', 'Tailwind CSS'],
    category: ['Next.js', 'Node.js'],
    period: '2025.01 ~ 현재',
    role: 'Product Engineer',
    features: [
      '템플릿 기반 사이트 자동 생성 - 어드민에서 템플릿을 선택하면 리뷰 사이트와 API가 자동으로 구축되는 노코드 빌더',
      '멀티소스 데이터 크롤러 - 카카오·네이버·구글·식신에서 맛집·회사 데이터 수집, dryRun 미리보기 → 확정 저장 2단계 워크플로와 실시간 진행률 스트리밍',
      'AI 크롤링 자동화 - Gemini 기반 키워드 자동 생성과 주간 스케줄러 수집, OpenDart 상장사 정보 일일 갱신',
      '접속 통계 - 경로·IP·Referer 자체 수집, 경로별/유입별/일별 통계와 방문 로그를 기간 프리셋으로 조회',
      '카테고리별 후기 시스템 - 대학, 교회, 회사, 외주 등 다양한 분야의 리뷰를 체계적으로 분류',
      '실시간 검색 자동완성 - 사용자 입력에 따른 즉각적인 검색어 추천 기능',
      '베스트 후기 시스템 - 평점 기반 우수 리뷰 선별 및 노출',
      '자유게시판 - 사용자들이 다양한 경험을 자유롭게 공유할 수 있는 커뮤니티 공간',
    ],
    points: [
      'Next.js와 TypeScript를 활용한 타입 안전성이 보장된 프론트엔드 개발 및 Tailwind CSS로 반응형 UI 구현',
      '어드민 템플릿 시스템 설계로 별도 개발 없이 리뷰 사이트와 API를 자동 생성하는 구조 구현',
      '카카오 Local·네이버·구글 Places·식신 등 외부 API 7종을 연동한 멀티소스 크롤러 구축 - 소스별 병렬 수집, 이름+주소 unique 중복 제거, 지오코딩 좌표 보정, NDJSON 스트리밍으로 어드민에 실시간 진행률 표시',
      'Gemini AI 키워드 자동 생성 + node-cron 주간 스케줄러로 크롤링을 자동화하고, OpenDart 연동 상장사 재무·직원 정보 일일 갱신 등 자동화 배치 3종 운영',
      '자체 페이지뷰 트래킹 시스템 구현 - 경로·IP·User-Agent·Referer 수집, 경로별/유입별/일별 집계 API와 방문 로그 어드민 화면 제공',
      'Node.js와 Express 기반 RESTful API 서버 구축 및 Sequelize ORM을 통한 효율적인 데이터베이스 관리',
      '검색 자동완성 기능 개발로 사용자가 원하는 정보를 빠르게 찾을 수 있도록 UX 개선',
      '카테고리별 리뷰 시스템 구축으로 사용자가 관심 분야의 후기를 효율적으로 탐색할 수 있는 구조 설계',
      '베스트 후기 알고리즘 구현 및 자유게시판을 통한 커뮤니티 활성화로 사용자 참여 증진',
      'Vercel을 통한 프론트엔드 배포 및 백엔드 API 서버 운영으로 안정적인 서비스 제공',
    ],
    demoUrl: 'https://www.ori.blue/',
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
      '/ori/ori10.png',
      '/ori/ori11.png',
    ]
  },
  {
    id: 8,
    title: '세일러문 - 최저가 검색 서비스',
    description: '상품의 시장 최저가를 목표가와 비교해 프로모션 가격을 설계하도록 돕는 검색 서비스입니다. 중고·렌탈·직구 같은 노이즈를 걸러 비교 기준을 맞췄습니다.',
    fullDescription: '프로모션 가격을 정할 때 시장 최저가를 매번 직접 찾아봐야 하는 번거로움을 줄이기 위해 만든 검색 서비스입니다. Next.js와 TypeScript로 화면과 API 라우트를 구현하고, 네이버 쇼핑 API를 1~10페이지까지 호출해 최대 1,000개 상품 정보를 수집합니다. 사용자가 입력한 최소·최대·목표가를 기준으로 시장 최저가와의 차이를 보여주며, 검색 결과에 섞여 들어오는 중고·렌탈·직구 상품은 제외 옵션과 노이즈 필터링으로 걸러 비교 대상을 정리했습니다. Vercel에 배포해 검색어 입력부터 결과 확인까지 짧은 흐름으로 사용할 수 있도록 구성했습니다.',
    image: '/salermoon/salermoon.png',
    tags: ['Next.js', 'TypeScript', 'Naver API', 'Vercel'],
    category: ['Next.js', 'TypeScript'],
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
      '/salermoon/salermoon2.png',
    ]
  },
  {
    id: 9,
    title: 'AI 뉴스봇',
    description: '흩어진 뉴스에서 원하는 사안을 찾아 근거와 함께 요약해주는 뉴스 검색·분석 플랫폼입니다. 수집부터 검색, 본문 분석, 모델 추론, 자동 발송까지 하나의 제품으로 연결했습니다.',
    fullDescription: '키워드로 뉴스를 찾아도 출처가 흩어져 있고 요약의 근거를 확인하기 어렵다는 문제에서 출발한 뉴스 검색·분석 플랫폼입니다. 수집 → 검색 → 본문 분석 → 모델 추론 → 발송까지를 끊기지 않는 하나의 흐름으로 잇는 것을 목표로 Express.js와 Next.js 14 App Router로 구축했습니다.\n\n수집 단계에서는 Google News RSS 파싱과 Naver·Daum News Cheerio 스크래핑을 Promise.allSettled로 병렬 처리하고, Bigram Jaccard 유사도로 같은 사안을 다룬 중복 기사를 정리합니다.\n\n검색은 BM25 키워드 스코링과 MiniLM 다국어 임베딩(384차원) 코사인 유사도를 RRF(Reciprocal Rank Fusion)로 결합했습니다. 짧은 키워드 질의와 문장형 질의가 같은 가중치로 처리되면 결과가 나빠지기 때문에, 쿼리 토큰 수와 의문문 여부로 keyword/conceptual/balanced 타입을 자동 분류해 BM25와 시맨틱 비중을 동적으로 조절했습니다.\n\n분석 단계의 RAG 파이프라인은 기사 URL 본문을 직접 fetch해 @mozilla/readability로 보일러플레이트를 걷어내고, 문단·문장 기반 400자 청킹(80자 overlap) 후 쿼리 유사도가 높은 청크를 Cerebras Llama 3.1-8b 프롬프트에 컨텍스트로 주입합니다. 요약의 근거 강도를 확인할 수 있도록 청크 유사도 평균을 confidence_score로 함께 내려주고, cheerio로 표와 이미지 설명을 추출해 본문을 보강했습니다.\n\n감성 분류는 외부 API에 의존하지 않고 모델을 직접 운영합니다. LLM 자동 라벨링으로 축적한 6천여 건 데이터로 KLUE/RoBERTa-base를 PyTorch·HuggingFace로 파인튜닝하고 ONNX로 변환해 백엔드에서 추론하며, 오분류 교정을 재학습에 반영하는 "라벨링 → 학습 → 추론 → 교정 → 재학습" 루프로 데이터 구축부터 학습·배포·개선까지 ML 사이클 전체를 직접 돌립니다. 모델이 배포되지 않은 환경에서는 키워드 규칙으로 자동 대체됩니다.\n\n사용자의 좋아요·싫어요 반응은 RRF 점수 boost로 반영해 검색 결과가 실제 사용 패턴을 따라가도록 했고, Lark Webhook 연동으로 Cron 스케줄 기반 뉴스 다이제스트를 자동 발송합니다. 캐시 TTL 분리, Rate Limiting, 재시도 로직으로 운영 안정성을 확보했습니다. 데이터 수집과 검색, 모델 학습·추론, 운영 자동화를 하나의 제품으로 연결해본 프로젝트입니다.',
    image: '/newsCrawler/newsCrawler.png',
    tags: ['Next.js', 'TypeScript', 'Express.js', 'Node.js', 'Cerebras LLM', 'RAG', 'Lark', 'AI/ML', 'Python', 'PyTorch', 'ONNX'],
    category: ['Next.js', 'Node.js'],
    period: '2026.02 ~ 현재',
    role: 'Product Engineer',
    features: [
      '멀티소스 뉴스 크롤링 - Google News RSS 파싱과 Naver·Daum News Cheerio 스크래핑을 병렬 수집(Promise.allSettled), Bigram Jaccard 유사도 기반 중복 제거',
      '하이브리드 검색 시스템 - BM25 키워드 스코링과 MiniLM 임베딩 코사인 유사도를 RRF(k=60)로 결합, 쿼리 토큰 수·의문문 여부로 keyword/conceptual/balanced 타입 자동 분류하여 BM25/시맨틱 가중치(0.4~0.7) 동적 조절',
      'RAG 파이프라인 - 기사 URL 본문 직접 fetch, @mozilla/readability 보일러플레이트 제거, 문단/문장 기반 400자 청킹(80자 overlap) 후 쿼리 유사도 높은 청크를 LLM 컨텍스트로 주입, 청크 코사인 유사도 평균을 confidence_score로 응답에 포함',
      'AI 뉴스 분석 - Cerebras LLM 기반 핵심 요약, 주요 포인트, 감성 분석(-1~+1 스코어), 트렌드 분석 제공',
      '내부 AI 모델 학습 - Python(PyTorch·HuggingFace Transformers)으로 KLUE/RoBERTa-base 3-class 감성 모델을 직접 파인튜닝, LLM 자동 라벨링 6천여 건에 oversampling·stratified split 적용, f1_macro 기준 best 체크포인트 선택 후 ONNX 변환해 백엔드 추론(모델 미배포 환경에서는 키워드 규칙으로 자동 대체)',
      'Lark 연동 - Webhook 기반 뉴스 다이제스트 자동 발송, Cron 스케줄링, 감성 필터링, 수동 전송 지원',
      '데이터 정제 - URL 패턴 날짜 추출, 도메인 기반 출처 추론, cheerio 테이블 파싱·이미지 캡션 추출 후 본문 섹션으로 append',
      '피드백 루프 - 좋아요/싫어요 반응을 검색 랭킹 점수에 반영해 결과 자동 최적화',
      '다국적 언론사 관리 - 한국·미국·영국·통신사 등 50개 이상 언론사 카테고리별 포함/제외 필터링',
      '편의 기능 - 북마크, 검색 히스토리, 다크모드, 자동 검색 프리셋, 리스트/그리드 뷰 전환, 반응형 UI',
    ],
    points: [
      'Express.js와 Next.js 14 App Router를 활용한 풀스택 아키텍처 구축 및 TypeScript 타입 안전성 확보',
      'Google News RSS 파싱, Naver News·Daum News Cheerio 스크래핑을 Promise.allSettled로 병렬 수집하고, Bigram Jaccard 유사도 기반 중복 제거 파이프라인 구현',
      'Xenova/paraphrase-multilingual-MiniLM-L12-v2 임베딩(384차원)과 BM25 점수를 RRF(k=60)로 결합한 하이브리드 검색 구현, 쿼리 자동 분류(keyword/conceptual/balanced)로 BM25/시맨틱 가중치 동적 조절, Lazy Loading·캐싱으로 효율적 모델 운용',
      '@mozilla/readability 보일러플레이트 제거·정규식 정제 후 문단/문장 기반 400자 청킹(80자 overlap) RAG 파이프라인 구축, 쿼리 유사도 상위 청크를 LLM 컨텍스트로 주입하고 코사인 유사도 평균을 confidence_score로 산출',
      'cheerio로 기사 내 <table> 파싱(헤더 자동 추론) 및 figcaption·img[alt] 이미지 설명 추출, 광고·로고·소형 이미지 정규식 필터링 후 본문 섹션으로 append',
      'extractDateFromUrl·inferSourceFromUrl로 결측 메타데이터 보정',
      'Cerebras Llama 3.1-8b LLM을 활용한 뉴스 종합 분석(요약, 감성, 트렌드, 핵심 포인트) 및 배치 감성 분류(10건/호출)',
      'ml/ 내부 학습 파이프라인 구축 - LLM 자동 라벨링으로 축적한 6천여 건 데이터로 KLUE/RoBERTa-base 3-class 감성 모델을 PyTorch·HuggingFace Trainer로 파인튜닝, 클래스 불균형 보정을 위한 oversampling과 stratified split 적용, f1_macro 기준 best 모델 선택(6 epoch)',
      'optimum으로 파인튜닝 모델을 ONNX 변환하고 백엔드(@xenova/transformers)에서 추론, LLM 라벨링 → 학습 → 추론 → 오분류 교정 → 재학습으로 이어지는 자기개선 폐루프 구성',
      'Lark Webhook 연동으로 Cron 스케줄 기반 뉴스 다이제스트 자동 발송, 감성 필터링 및 인터랙티브 카드 포맷 지원',
      'MD5 해시 기반 다중 캐시(키워드·시맨틱·분석별 TTL 분리), Rate Limiting(분당 60회), 재시도 로직을 통한 안정적 서비스 운영',
      '자연어 스케줄 파서("매일 오전 9시" → Cron 변환), 시드 데이터 백그라운드 수집, 자동 재학습 트리거 등 자동화 시스템 구현',
      '좋아요/싫어요 순증을 clamp(× 0.05, -0.2~+0.3) boost 점수로 변환·영구 저장하고, 시맨틱 검색 RRF 점수에 반영해 사용자 반응 기반 결과 자동 최적화',
    ],
    screenshots: [
      '/newsCrawler/newsCrawler.png',
      '/newsCrawler/newsCrawler2.png',
      '/newsCrawler/newsCrawler3.png',
      '/newsCrawler/newsCrawler4.png',
      '/newsCrawler/newsCrawler5.png',
      '/newsCrawler/newsCrawler6.png',
      '/newsCrawler/newsCrawler7.png',
      '/newsCrawler/newsCrawler7.png',
      '/newsCrawler/newsCrawler8.png',
      '/newsCrawler/newsCrawler9.png',
      // '/newsCrawler/newsCrawler10.png',
      // '/newsCrawler/newsCrawler11.png',
      // '/newsCrawler/newsCrawler12.png',
      // '/newsCrawler/newsCrawler13.png',
      // '/newsCrawler/newsCrawler14.png',
    ],
    demoUrl: 'https://mynews-c.vercel.app/',
  },
  {
    id: 10,
    title: '이모션캐슬 시네마',
    description: '웹과 모바일 앱에서 같은 콘텐츠를 끊김 없이 볼 수 있게 만든 OTT 스트리밍 플랫폼입니다. TV 캐스팅까지 지원하도록 백엔드와 전용 프록시 서버를 구축했습니다.',
    fullDescription: '웹과 앱, 그리고 TV까지 같은 콘텐츠를 안정적으로 재생할 수 있어야 하는 OTT 스트리밍 플랫폼입니다. Spring Boot로 REST API 서버와 영상 콘텐츠 관리 시스템을 구축하고, 웹과 React Native 앱이 일관된 사용자 경험을 갖도록 API를 설계했습니다.\n\n영상 재생은 AWS CloudFront 기반 HLS로 구성했고, HLS 세그먼트 처리와 CDN 캐싱 전략을 정리해 재생 품질을 확보했습니다.\n\n크롬캐스트 SDK를 연동해 모바일에서 TV로 콘텐츠를 전송하는 기능을 구현했으며, 캐스팅 중 연결이 불안정하던 문제는 크롬캐스트 통신 전용 프록시 서버를 개발해 통신 경로를 안정화하는 방식으로 해결했습니다.',
    image: '/cinema/cinema.png',
    tags: ['Java', 'Spring Boot', 'React Native', 'AWS CloudFront', 'Chromecast', 'HLS', 'Proxy Server'],
    category: 'Java',
    period: '2025.11 ~ 현재',
    role: '백엔드 개발자',
    features: [
      '멀티 플랫폼 지원 - 웹과 React Native 앱(Android, iOS)을 통한 크로스 플랫폼 서비스 제공',
      'HLS 스트리밍 - AWS CloudFront를 활용한 안정적인 영상 스트리밍 구현',
      '크롬캐스트 연동 - 모바일에서 TV로 콘텐츠를 전송할 수 있는 캐스팅 기능',
      '프록시 서버 - 크롬캐스트 통신을 위한 전용 프록시 서버 개발',
    ],
    points: [
      'Spring Boot를 사용하여 REST API 서버 개발 및 영상 콘텐츠 관리 시스템 구축',
      'AWS CloudFront를 활용한 HLS(HTTP Live Streaming) 기반 영상 스트리밍 인프라 구현',
      'React Native 앱과 웹 플랫폼 간 일관된 사용자 경험을 제공하기 위한 백엔드 API 설계 및 개발',
      '크롬캐스트 SDK를 활용하여 모바일 기기에서 TV로 콘텐츠를 전송할 수 있는 캐스팅 기능 개발',
      '크롬캐스트 연결의 안정성을 위한 전용 프록시 서버 구현 및 통신 최적화',
      '영상 재생 품질 최적화를 위한 HLS 세그먼트 처리 및 CDN 캐싱 전략 수립',
    ],
    demoUrl: 'https://cinema.emotioncastle.com/',
    screenshots: [
      '/cinema/cinema.png',
      '/cinema/cinema2.png',
    ]
  },
  {
    id: 11,
    title: '자사몰 통합 어드민',
    description: '온라인과 오프라인에 흩어진 주문·매출·회원 데이터를 한 곳에서 보고 운영하도록 만든 이커머스 통합 어드민입니다. 외부 시스템 7종 연동과 배치, 대용량 데이터 운영까지 1인으로 개발하고 운영하고 있습니다.',
    fullDescription: '자사몰·네이버 스마트스토어·키오스크·오프라인 POS로 매출과 주문이 흩어져, 운영팀이 채널마다 다른 화면에서 숫자를 맞춰야 하던 문제에서 시작한 이커머스 통합 어드민입니다. 기획·설계·개발·운영 전 과정을 단독으로 수행하고 있습니다.\n\n그 결과 채널마다 다른 화면을 오가며 숫자를 맞추던 운영 방식을 하나의 대시보드로 정리했습니다. 채널별 매출·주문 데이터를 집계·분석해 핵심 지표와 추이를 제공하면서 매출 개선을 위한 의사결정을 지원하고 있습니다. 어드민 도입 전 3개월과 비교해 도입 이후 채널 합산 매출은 약 33%, 회원 가입자 수는 약 25% 증가했으며, 채널별 매출·회원 지표와 추이를 제공해 이 성장에 기여했습니다. 건별·일별 정산과 파트너사 정산 리포트, 채널 믹스 분석, 월간 KPI 산출을 자동화해 수기로 맞추던 정산·리포트 업무를 시스템 안으로 옮겼습니다. 멤버십 회원 등급과 쿠폰, 친구추천·적립 같은 마케팅 운영도 같은 어드민에서 처리하도록 통합했습니다. 통상 여러 명이 분담하는 규모의 시스템을 단독으로 개발·운영하면서 서비스 전반의 구조와 비즈니스 로직을 일관되게 유지하고, 운영 중 확인되는 요구사항을 반영해 기능을 지속적으로 고도화하고 있습니다.\n\n백엔드는 NestJS로 수백 개의 REST API와 수십 개의 비즈니스 도메인을 설계·구현했고, 프론트엔드는 Next.js로 어드민 화면을 구축했습니다. 샵바이 커머스, 네이버 스마트스토어, 키오스크, 오프라인 POS, IFDO 웹로그 분석, 인스타그램, 스냅핏 등 외부 시스템 7종의 연동 구조를 설계하고 크론 기반 배치·동기화 파이프라인을 구축해 온·오프라인 채널의 주문·상품·회원·매출 데이터를 하나의 어드민으로 모았습니다. 멤버십 회원 등급, 쿠폰 발급, 친구추천·적립, 지표 분석 등 자사몰 연계 기능도 어드민에 통합해 운영·마케팅 데이터를 함께 관리합니다.\n\n운영 인프라와 데이터베이스도 직접 관리했습니다. 대용량 운영 테이블을 참조하는 쿼리를 전수 조사해 화면·배치별 접근 패턴에 맞는 복합 인덱스를 설계·적용했고, 자정마다 반복되던 Amazon RDS Lock Spike의 원인을 배치 작업 간 동시성 충돌로 규명해 실행 구조를 개선했습니다. FIFO 잡 큐로 크론 작업의 동시 실행 충돌을 원천 차단하고, nginx 튜닝과 Winston 로그 로테이션으로 운영 모니터링 체계를 갖췄습니다.\n\n외부 시스템 연동과 데이터 파이프라인 설계부터 장애 분석, 성능 최적화, DB 운영까지 서비스 전 계층을 단독으로 책임진 프로젝트입니다.',
    image: '',
    tags: ['NestJS', 'Next.js', 'TypeScript', 'Prisma', 'MySQL', 'AWS RDS', 'nginx', 'Swagger'],
    category: ['NestJS', 'Next.js', 'TypeScript'],
    period: '2026.02 ~ 현재',
    role: 'Product Engineer',
    features: [
      '멀티채널 통합 대시보드 - 샵바이·네이버·키오스크·오프라인 POS 등 7개 외부 시스템의 매출·정산·주문·트래픽을 단일 대시보드에서 실시간 통합 조회',
      '지표 분석 - 자사몰·네이버·POS·키오스크 채널의 매출·주문·취소·반품·방문 등 핵심 지표를 시계열로 집계·비교하고 분석 지표 구성을 커스텀 설정',
      '데이터 동기화 파이프라인 - 외부 시스템 7종 연동과 크론 배치로 온·오프라인 채널 데이터를 자동 동기화 (FIFO 잡 큐로 동시 실행 충돌 방지)',
      '대용량 데이터 운영 - 대규모 운영 테이블에 등가 조건과 범위 조건을 아우르는 복합 인덱스를 설계해 빠른 서비스 쿼리 응답 유지',
      '용량 모니터링·수명주기 정책 - 테이블별 용량·행수·증가 추이 정례 측정, 영구 보존 데이터는 인덱스·압축, 로그성 데이터는 보존 기간 기반 정리로 이원화',
      '정산·KPI 리포트 - 채널별 건별/일별 정산, 파트너사 정산 리포트, 채널 믹스 분석 및 월간 KPI 자동 산출',
      '자사몰 연계 기능 - 멤버십 회원 등급, 쿠폰 발급, 친구추천·적립 등 샵바이 자사몰 연동 기능을 어드민에서 통합 관리',
      '인증·보안·운영 안정성 - JWT/RBAC 인증, Winston 로그 로테이션, nginx 튜닝, Global ValidationPipe 요청 검증',
    ],
    points: [
      '수백 개의 REST API와 수십 개의 비즈니스 도메인으로 구성된 NestJS 백엔드와 Next.js 어드민 프론트엔드를 기획·설계·개발·운영까지 1인 단독 수행',
      '샵바이·네이버 스마트스토어·키오스크·오프라인 POS·IFDO 웹로그 분석·인스타그램·스냅핏 등 외부 시스템 7종의 데이터 동기화 파이프라인과 크론 배치 설계·운영',
      '자사몰·네이버·POS·키오스크 채널의 매출·주문·취소·반품·방문 등 핵심 지표를 시계열(series)로 집계·비교하고 지표 구성을 커스텀 설정할 수 있는 지표 분석 기능 구현',
      '멤버십 회원 등급 관리, 쿠폰 발급, 친구추천·적립 등 샵바이 자사몰 연계 기능을 어드민에 통합하여 자사몰 운영·마케팅 데이터를 일괄 관리',
      'Prisma ORM 기반 DB 모델 전체를 설계하고, BigInt 직렬화 커스텀 처리 및 Prisma 에러 핸들링 유틸리티를 구현하여 타입 안전한 데이터 접근 계층 구축',
      'performance_schema 실행 통계 기반 성능 점검 루틴으로 인덱스 미적용 쿼리를 조기 탐지하고, 운영·개발 환경 간 인덱스 드리프트(수동 DDL 이력)를 대조 관리',
      '대용량 테이블을 참조하는 쿼리를 전수 인벤토리화하고 화면·배치별 접근 패턴(조회 기간·필터 조건)을 파악해 등가 조건과 범위 조건을 아우르는 복합 인덱스를 설계, 빠른 서비스 쿼리 응답 유지',
      '자정 시간대 반복되던 Amazon RDS Lock Spike를 배치 작업 간 동시성 충돌로 규명하고 실행 구조를 개선해 문제를 해소',
      '운영 DB 인덱스 설계·DDL 적용, nginx 튜닝, 장애 원인 규명 등 애플리케이션 개발을 넘어 데이터 엔지니어링·DBA 영역까지 직접 수행',
      'FIFO 잡 큐 기반 스케줄러 시스템을 설계하여 Cron 작업 간 동시 실행 충돌을 원천 방지하고, 일일 매출 동기화·키오스크 구매 수집·로그 클린업 3종 배치를 무중단 운영',
      'Winston 일별 로그 로테이션(용량 제한, 보존 기간 기반 자동 압축·삭제)과 사내 NAS 이중 저장, 환경별 로그 레벨 분리를 적용하여 개발·운영 환경 모두에서 효과적인 모니터링 체계 확보',
    ],
    screenshots: []
  },
  {
    id: 12,
    title: '바토너 (Batoner)',
    description: '부동산 경매 대리입찰 플랫폼에서 최신 입찰 사건을 실시간으로 보여주고 문서 처리를 자동화한 백엔드 고도화 프로젝트입니다. 외부 사이트 크롤링의 정확도와 안정성을 끌어올리는 데 집중했습니다.',
    fullDescription: '입찰자가 최신 경매 사건을 제때 확인하지 못하고 진행사건 정보가 실제와 어긋나던 문제를 해결하기 위한 Next.js 기반 부동산 경매 대리입찰 플랫폼 \'바토너\'의 백엔드 고도화 프로젝트입니다. 사용자 경험을 전면 개선한 \'바토너 2.0\' 업데이트를 주도했습니다.\n\nPlaywright로 대법원 경매정보(courtauction.go.kr) 실시간 크롤러를 구축해 홈 화면에서 바로 최신 입찰 사건을 조회할 수 있게 했고, 탱크옥션 크롤링을 연동해 진행사건 정보의 정확도를 높인 뒤 입찰 신청 플로우에 통합했습니다.\n\n외부 사이트 크롤링은 실패를 전제로 설계했습니다. TTL 캐시로 중복 요청을 줄이고, 요청 간격 제어와 페이지·브라우저 주기적 재생성, 타임아웃 재시도 로직을 적용해 장시간 운영에서도 크롤러가 멈추지 않도록 했습니다.\n\n대리인이 바뀌면 위임계약서의 대리인 정보가 자동 갱신되는 PDF 문서 파이프라인을 구현했고, 회원가입 플로우를 간소화했으며, Docker Compose 기반 Blue-Green 무중단 배포 체계를 개선해 배포 안정성을 확보했습니다. 수임료 인상(110,000원 → 132,000원)과 환불 정책은 결제 로직과 서비스 안내에 반영했습니다.',
    image: '/batoner/batoner1.png',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'Playwright', 'Docker', 'Turborepo'],
    category: ['Next.js', 'TypeScript'],
    period: '2026.04 ~ 2026.12',
    role: '백엔드 개발자',
    features: [
      '대법원 경매정보 실시간 크롤링 - 홈 화면에서 바로 입찰 사건을 조회할 수 있는 실시간 수집 시스템',
      '탱크옥션 데이터 연동 - 탱크옥션 크롤링으로 진행사건 정보의 정확도 향상',
      '계약서 자동 갱신 - 대리인 변경 시 위임계약서에 대리인 정보 자동 업데이트',
      '회원가입 개편 - 가입 프로세스 개선으로 사용자 진입 장벽 완화',
      'Blue-Green 무중단 배포 - Docker Compose 기반 배포 체계 개선',
      '수임료 정책 반영 - 기본 이용료 인상(110,000원 → 132,000원) 및 환불 정책 적용',
    ],
    points: [
      'Playwright 기반 대법원 경매정보(courtauction.go.kr) 실시간 크롤러 구축 - TTL 캐시, 요청 간격 제어, 페이지·브라우저 주기적 재활용, 타임아웃 재시도 로직으로 안정성 확보',
      '탱크옥션 크롤링 연동 API 개발로 진행사건 정보의 정확도를 높이고 크롤링 데이터를 입찰 신청 플로우에 통합',
      '대리인 변경 시 위임계약서에 대리인 정보가 자동 반영되는 PDF 문서 파이프라인 구현',
      '회원가입 프로세스 개편으로 가입 플로우 간소화 및 사용자 경험 개선',
      'Docker Compose 기반 Blue-Green 무중단 배포 체계 구축·개선으로 배포 안정성 향상',
      '수임료 인상(110,000원 → 132,000원) 정책을 결제 로직과 서비스 안내에 반영',
      'Turborepo 모노레포 환경에서 Next.js API Routes와 Prisma(MySQL) 기반 백엔드 유지보수 수행',
    ],
    demoUrl: 'https://batoner.kr',
    screenshots: [
      '/batoner/batoner1.png',
      '/batoner/batoner2.png',
      '/batoner/batoner3.png',
      '/batoner/batoner4.png',
    ]
  },
  {
    id: 13,
    title: '사내 콘텐츠 관리 플랫폼 (CMS)',
    description: '팀마다 흩어져 있던 사내 영상·이미지 자산과 매번 반복되던 영상 가공 업무를 하나의 운영 제품으로 통합한 콘텐츠 관리 플랫폼입니다. 설계서 작성부터 개발과 사내 서버 운영까지 단독으로 맡았습니다.',
    fullDescription: '사내 영상·이미지 자산이 담당자와 저장소마다 흩어져 있고, 규격 변환·구간 추출·썸네일 생성 같은 영상 가공이 매번 수작업으로 반복되던 상황을 하나의 운영 제품으로 묶은 프로젝트입니다. 설계서(아키텍처·기능 명세·인프라·로드맵) 작성부터 Next.js 15(App Router) 기반 개발, 사내 서버 배포와 운영까지 단독으로 수행했습니다.\n\n기존 OTT 서비스(시네마)가 AWS에 축적해 온 영상과 메타데이터를 활용하되, 운영 중인 서비스에는 코드 한 줄도 변경하지 않는 것을 원칙으로 삼았습니다. 전용 계정 기반 읽기 전용 연동으로 콘텐츠 메타데이터를 CMS 카탈로그에 미러링해, 원본 서비스의 장애나 변경과 독립적으로 동작하는 구조를 만들었습니다.\n\n반복되던 영상 가공은 ffmpeg 기반 인프로세스 Job 워커로 흡수했습니다. 규격 변환, 롱폼에서 숏폼 구간 추출, 썸네일·스틸 추출, 워터마크 스크리너, 음원 추출, AI 자막(STT) 생성을 하나의 작업 추상으로 처리하고, 일반·어드민 2개 큐를 큐별 FIFO로 순차 실행하며 작업 취소·대기 순서 변경과 재기동 시 중단 작업 자동 복구를 지원합니다. 숏폼 후보 구간은 AI 분석으로 먼저 추려, 편집자가 긴 영상을 처음부터 훑지 않아도 되도록 했습니다.\n\n사내 자산이 외부로 나가는 경로(유튜브 업로드, FTP/SFTP 전송, Lark 드라이브, 다운로드, 기한 공유 링크)는 모두 같은 승인 검증을 거치게 해 검토를 통과한 산출물만 반출되도록 통제했고, 계약 기간이 만료된 콘텐츠는 외부 반출이 자동 차단되는 권리·라이선스 관리를 함께 구현했습니다.\n\n인증은 사내 Lark(라크) OAuth QR 로그인으로 전환하고 jose 서명 JWT 세션을 직접 구현했으며, 역할·팀 기반 접근 제어와 전 작업 감사 로그로 사내 보안 요건을 충족했습니다. 1코어 사내 서버 환경에 맞춰 ffmpeg를 낮은 우선순위로 실행해 서비스 응답성을 유지하고, git 푸시 기반 무인 자동배포(pm2 reload)로 배포를 자동화했습니다.',
    image: '/CMS/CMS1.png',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'ffmpeg', 'SQLite', 'Lark OAuth', 'YouTube API'],
    category: ['Next.js', 'TypeScript'],
    period: '2026.06 ~ 현재',
    role: 'Product Engineer',
    features: [
      '무변경 연동 카탈로그 - 운영 중인 OTT 서비스 코드를 변경하지 않고 전용 계정 읽기 전용 연동으로 메타데이터를 CMS 카탈로그에 미러링',
      '영상 처리 스튜디오 - ffmpeg 기반 규격 변환·구간 추출(숏폼)·썸네일/스틸·워터마크 스크리너·음원 추출을 한 화면에서 수행',
      'FIFO 작업 큐 - 일반/어드민 2개 큐를 큐별 동시 1작업으로 순차 처리, 작업 취소·대기 순서 변경, 서버 재기동 시 중단 작업 자동 복구',
      '반출 승인 게이트 - 유튜브·FTP/SFTP·Lark 드라이브·다운로드·공유 링크 등 모든 외부 반출 경로에서 승인된 산출물만 통과',
      '권리·라이선스 관리 - 시리즈 계약을 회차가 상속하고, 계약이 만료된 콘텐츠는 외부 반출을 자동 차단(사유 기반 예외 허용)',
      '산출물 버전·보존 관리 - 같은 조건으로 재생성하면 덮어쓰지 않고 v2·v3로 적재, 보존 기간 경과분은 자동 정리하되 납품 이력·공유 링크는 보호',
      'AI 자막(STT)·자막 검수 - 음성 전사로 VTT 자막을 생성하고 납품처별 검수 규격 프로파일(글자수·줄 수·표출 시간·간격)로 자동 검사',
      '인증·접근 제어·감사 - 사내 Lark OAuth QR 로그인, 역할·팀 기반 콘텐츠 공개 범위, 모든 작업의 감사 로그 기록',
    ],
    points: [
      '설계서(아키텍처·기능 명세·인프라·로드맵) 작성부터 개발·사내 서버 배포·운영까지 1인 단독 수행',
      '운영 중인 OTT 서비스 코드 0 변경을 절대 원칙으로 읽기 전용 연동을 설계하고, 카탈로그 미러링으로 원본 서비스 장애와 독립적으로 동작하는 구조 확보',
      'Next.js 15 App Router + Prisma 기반으로 70여 개 API 라우트와 콘텐츠·스튜디오·관리 화면을 구축',
      'Google SSO에서 사내 Lark(라크) OAuth(QR 로그인)로 인증을 전환 - Lark 토큰 엔드포인트가 JSON 본문을 요구해 표준 provider를 쓸 수 없어 커스텀 OAuth 플로우와 jose 서명 JWT 세션 쿠키를 직접 구현',
      'ffmpeg를 child_process로 감싼 처리 계층을 구현하고, 임시 파일 생성 → 0바이트 검증 → 성공 시에만 산출물 등록 순으로 처리해 부분 파일과 고아 데이터 발생을 차단',
      '큐별 FIFO 인프로세스 워커를 구현하여 작업 취소·대기 순서 변경을 지원하고, 서버 재기동 시 중단된 RUNNING 작업을 QUEUED로 되돌려 유실 없이 재개',
      '외부 반출 경로 전체가 같은 승인 검증 함수를 거치도록 설계해 미승인 산출물의 반출을 원천 차단하고, 타임코드 프레임 단위 코멘트 기반 검수 워크플로 구현',
      '계약 정보를 저장 시 복사하지 않고 조회 시점에 시리즈에서 회차로 상속시키는 구조로 설계해, 시리즈 계약 수정 시 회차 수백 건을 함께 고쳐야 하는 문제를 제거',
      '산출물 자동 정리에서 지켜야 할 규칙(최신 2개 버전·현재 사용본·납품 이력·유효한 공유 링크)을 한 곳에 모아 정리 경로가 늘어나도 예외 누락이 발생하지 않도록 설계',
      'CloudFront 서명 쿠키 프록시로 HLS 미리보기 재생을 구현하고, 대용량 원본은 인제스트 후 Range 서빙으로 다운로드 이어받기 지원',
      '1코어 사내 서버 환경에 맞춰 ffmpeg를 낮은 우선순위(nice)로 실행해 서비스 응답성을 유지하고, git 푸시 기반 무인 자동배포(pm2 reload) 파이프라인 구성',
    ],
    screenshots: [
      '/CMS/CMS1.png',
      '/CMS/CMS2.png',
      '/CMS/CMS3.png',
      '/CMS/CMS4.png',
      '/CMS/CMS5.png'
    ]
  },
  {
    id: 14,
    title: '통합 회원 CS 백오피스',
    description: '상담 조직이 자사몰·시네마 회원을 한 곳에서 조회하고 조치할 수 있게 만든 CS 백오피스 서버입니다. 회원 데이터를 복제하지 않고 인증 서버를 통해 다루면서 모든 열람과 조치를 감사 로그로 남깁니다.',
    fullDescription: '자사몰과 시네마 계정이 따로 관리되어 상담 조직이 회원을 조회하고 조치하려면 여러 시스템을 오가야 하던 문제를 해결한 회원 CS 백오피스 서버입니다. NestJS로 구현했고, 사내 계정을 통합 관리하는 인증 서버와 연계해 회원 조회·비밀번호 초기화·탈퇴·계정 통합 보정 API를 제공합니다.\n\n회원 데이터를 백오피스 DB에 복제하지 않고 인증 서버에서 실시간으로 조회하는 얇은 프록시 구조를 택했습니다. 백오피스의 책임을 요청 전달·권한 판정·감사 기록 세 가지로 한정하고 회원 데이터의 검증과 정합성은 인증 서버가 소유하도록 경계를 나눠, 같은 데이터를 두 곳에 두면서 생기는 정합성 문제를 없앴습니다.\n\n접근 제어는 자사몰 어드민의 권한 체계를 준용해 역할(상담사·센터장·본사·최고관리자·엔지니어)과 기능 권한 코드를 분리했고, 권한을 매 요청마다 DB에서 조회해 권한 변경이 재로그인 없이 즉시 반영되도록 했습니다. 인증 서버 장애는 502로 구분하고 인증 서버가 준 에러는 형식 그대로 통과시켜, 프론트가 에러 코드로 점검 안내와 실패 처리를 구분할 수 있게 응답 계약을 정리했습니다.\n\n회원 개인정보를 다루는 시스템인 만큼 감사 추적을 중심에 두었습니다. 인증 서버가 남기지 않는 조회까지 백오피스에서 기록하되 감사 로그에는 회원 ID와 이름까지만 남기고, 비밀번호·토큰 등 민감값은 저장 전에 제거합니다. 감사 로그 테이블에는 월 단위 RANGE 파티셔닝을 적용해 연 단위 보관과 폐기를 파티션 단위로 처리할 수 있도록 설계했습니다.\n\n시스템 간 책임 경계 설계와 개인정보를 다루는 내부 도구의 보안·감사 요건 구현을 담당한 프로젝트입니다.',
    image: '',
    tags: ['NestJS', 'TypeScript', 'Prisma', 'MySQL', 'JWT', 'bcrypt', 'Winston'],
    category: ['NestJS', 'TypeScript'],
    period: '2026.07 ~ 현재',
    role: '백엔드 개발자',
    features: [
      '회원 통합 조회 - 회원 검색·상세·로그인 이력·통합 시도 이력·조작 이력을 인증 서버 실시간 조회로 제공(아직 통합되지 않은 시네마 회원 포함)',
      '회원 CS 조치 - 비밀번호 초기화, 탈퇴 영향도 사전 확인 후 탈퇴 처리, 계정 통합 링크 보정 및 수동 통합 실행',
      '2단계 권한 체계 - 역할(상담사·센터장·본사)과 기능 권한 코드를 분리하고, 매 요청 DB 조회로 권한 변경을 재로그인 없이 즉시 반영',
      '감사 로그 - 조회까지 포함한 append-only 기록, 관리자 정보 스냅샷 저장으로 계정이 제거돼도 작업 주체 식별 가능, 민감값 자동 제거',
      '월 단위 파티셔닝 - 감사 로그 테이블에 생성일 기준 RANGE 파티셔닝을 적용해 연 단위 보관·폐기(파티션 단위 삭제) 경로 확보',
      '인증 서버 연동 규약 - API 인증 키(x-api-key)로 서버 간 인증, 요청 추적 ID(x-request-id)로 양 시스템의 감사 기록 대조, 변경 요청은 멱등성 키로 재시도 시 중복 실행 방지',
      '인증·보안 - JWT httpOnly 쿠키(SameSite 환경별 제어), bcrypt 해시, 로그인 레이트리밋, 리버스 프록시 뒤 실제 접속 IP 인식',
    ],
    points: [
      'NestJS + Prisma(MySQL) 기반 백오피스 서버를 인증·관리자 관리·권한 관리·감사 로그·회원 CS 5개 모듈로 설계·구현',
      '회원 데이터를 백오피스 DB에 저장하지 않는 얇은 프록시 구조를 택해 데이터 소유권 경계를 명확히 하고 이중 저장으로 인한 정합성 문제를 원천 차단',
      '인증 서버 명세 기준으로 회원 조회·변경 API를 구현하고, 응답을 재가공하지 않고 그대로 전달하는 계약을 유지해 스펙 변경 시 영향 범위를 최소화',
      '역할 기반 가드와 기능 권한 코드 가드를 분리하고, 요청 값에 따라 필요 권한이 달라지는 경우(강제 탈퇴 등)는 서비스 계층의 명령형 검사로 처리',
      '권한을 매 요청 DB에서 조회하도록 구현하여 권한 변경이 재로그인 없이 즉시 반영되도록 개선',
      '인증 서버가 감사하지 않는 조회를 백오피스에서 기록 - 목록에 연락처·이메일이 마스킹 없이 내려오는 만큼 열람 추적은 남기되, 감사 로그에는 회원 ID·이름까지만 저장하도록 범위 제한',
      '감사 로그 테이블에 월 단위 RANGE 파티셔닝 적용 - 파티션 키를 포함한 복합 PK 구성과 Prisma가 표현하지 못하는 파티션 DDL을 마이그레이션 SQL에 직접 작성',
      '인증 서버 호출 헤더 계약을 정리 — API 인증 키(x-api-key)로 서버 간 인증, 요청 추적 ID(x-request-id)로 양 시스템 감사 기록 대조, 조작자 정보 전달, 변경 요청의 멱등성 키로 재시도 시 중복 실행 방지',
      '인증 서버 장애(연결 실패·타임아웃)는 502로 구분하고 인증 서버가 준 에러는 형식 그대로 통과시켜, 프론트가 에러 코드로 분기하고 점검 안내를 구분할 수 있도록 응답 계약 정리',
      'JWT를 httpOnly 쿠키로 발급하고 SameSite·Secure를 환경별로 제어, bcrypt 해시·로그인 레이트리밋·trust proxy 설정으로 감사 로그의 접속 IP 정확도까지 확보',
      'Winston 일별 로그 로테이션, 전역 ValidationPipe(whitelist·forbidNonWhitelisted) 요청 검증, Swagger 문서화를 적용해 운영·협업 기반 마련',
    ],
    screenshots: []
  },
];

const allTags = ['전체', 'Go', 'Java', 'JavaScript', 'Next.js', 'Node.js', 'Python', 'TypeScript'];
const ITEMS_PER_PAGE = 9;

export function Projects() {
  const [selectedTag, setSelectedTag] = useState('전체');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const isVideo = (src: string) => /\.(mp4|webm|ogg)(\?.*)?$/i.test(src);
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects =
    selectedTag === '전체'
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(selectedTag)
            : project.category === selectedTag
        );

  // 페이징 처리
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  // 태그 변경 시 첫 페이지로 이동
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTag]);

  // 페이지 변경 시 스크롤 맨 위로
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          기술을 적용하는 데 그치지 않고, 실제 문제 해결과 운영까지 이어간 프로젝트입니다.
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

        {/* Projects Grid with Side Arrows */}
        <div className="flex items-center gap-4">
          {/* < 버튼 */}
          {totalPages > 1 ? (
            <button
              onClick={() => { if (currentPage > 1) handlePageChange(currentPage - 1); }}
              disabled={currentPage === 1}
              className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border shadow-md hover:bg-accent hover:shadow-lg transition-all disabled:opacity-30 disabled:pointer-events-none"
              aria-label="이전 페이지"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          ) : <div className="w-10 shrink-0" />}

          {/* 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1 min-w-0">
            {paginatedProjects.map((project, index) => (
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
                <div className="relative aspect-[4/3] overflow-hidden">
                  {project.image ? (
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-background flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <ImageIcon className="h-12 w-12 text-primary/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                    <span className="text-white flex items-center gap-2">
                      자세히 보기 <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl mb-2 tracking-tight">{project.title}</h3>
                  <p
                    className="text-muted-foreground mb-4 tracking-tight flex-grow"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      minHeight: "3rem",
                    }}
                  >
                    {project.description}
                  </p>
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

          {/* > 버튼 */}
          {totalPages > 1 ? (
            <button
              onClick={() => { if (currentPage < totalPages) handlePageChange(currentPage + 1); }}
              disabled={currentPage === totalPages}
              className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border shadow-md hover:bg-accent hover:shadow-lg transition-all disabled:opacity-30 disabled:pointer-events-none"
              aria-label="다음 페이지"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          ) : <div className="w-10 shrink-0" />}
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
              {/* Main Image Slider */}
              {(selectedProject.screenshots?.length || selectedProject.image) && (
                <ProjectImageSlider
                  images={(selectedProject.screenshots?.length
                    ? selectedProject.screenshots
                    : [selectedProject.image]
                  ).map((src, i) => ({
                    src,
                    alt: `${selectedProject.title} ${i + 1}`,
                  }))}
                />
              )}

              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
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
                    <p className="tracking-tight">
                      {Array.isArray(selectedProject.category)
                        ? selectedProject.category.join(', ')
                        : selectedProject.category}
                    </p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl mb-3 tracking-tight">프로젝트 개요</h3>
                <div className="space-y-4">
                  {selectedProject.fullDescription
                    .split('\n')
                    .map((para) => para.trim())
                    .filter((para) => para.length > 0)
                    .map((para, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed tracking-tight">
                        {para}
                      </p>
                    ))}
                </div>
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
              onClick={() => setSelectedMedia(index)}
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

<Dialog open={selectedMedia !== null} onOpenChange={() => setSelectedMedia(null)}>
  <DialogContent className="p-0 bg-transparent border-0 shadow-none max-w-[95vw] max-h-[90vh] flex items-center justify-center">
    {selectedMedia !== null && selectedProject?.screenshots && (() => {
      const mediaList = selectedProject.screenshots;
      const mediaSrc = mediaList[selectedMedia];
      const total = mediaList.length;
      const hasPrev = selectedMedia > 0;
      const hasNext = selectedMedia < total - 1;
      return (
        <div
          className="flex flex-col items-center gap-3 w-full h-full"
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft' && hasPrev) setSelectedMedia(selectedMedia - 1);
            if (e.key === 'ArrowRight' && hasNext) setSelectedMedia(selectedMedia + 1);
            if (e.key === 'Escape') setSelectedMedia(null);
          }}
          tabIndex={0}
          ref={(el) => el?.focus()}
        >
          {/* 닫기 버튼 - 화면 오른쪽 상단 고정 */}
          <button
            onClick={() => setSelectedMedia(null)}
            className="fixed top-4 right-4 z-[60] bg-black/70 text-white rounded-full p-2 hover:bg-black/90 transition"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>

          {/* 화살표 + 이미지 가로 배치 */}
          <div className="flex items-center gap-2 md:gap-4 min-w-0">
            {/* 이전 버튼 */}
            <button
              onClick={() => hasPrev && setSelectedMedia(selectedMedia - 1)}
              disabled={!hasPrev}
              className="shrink-0 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="이전 이미지"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* 이미지 / 비디오 - 인라인 스타일로 화면 크기 제한을 적용해 어떤 사진도 잘림 없이 축소 (프리빌드 CSS라 임의값 Tailwind 클래스는 적용되지 않음) */}
            <div className="flex items-center justify-center rounded-lg bg-black/30">
              {isVideo(mediaSrc) ? (
                <video
                  src={mediaSrc}
                  controls
                  autoPlay
                  playsInline
                  className="rounded-lg"
                  style={{ maxWidth: 'calc(95vw - 120px)', maxHeight: '75vh', width: 'auto', height: 'auto' }}
                />
              ) : (
                <img
                  src={mediaSrc}
                  alt={`${selectedProject.title} 스크린샷 ${selectedMedia + 1}`}
                  className="rounded-lg"
                  style={{ maxWidth: 'calc(95vw - 120px)', maxHeight: '75vh', width: 'auto', height: 'auto' }}
                  draggable={false}
                />
              )}
            </div>

            {/* 다음 버튼 */}
            <button
              onClick={() => hasNext && setSelectedMedia(selectedMedia + 1)}
              disabled={!hasNext}
              className="shrink-0 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="다음 이미지"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* 위치 인디케이터 */}
          {total > 1 && (
            <div className="bg-black/60 text-white text-sm px-3 py-1 rounded-full">
              {selectedMedia + 1} / {total}
            </div>
          )}
        </div>
      );
    })()}
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
