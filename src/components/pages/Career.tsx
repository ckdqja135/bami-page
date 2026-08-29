import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Briefcase, Trophy, Users, Rocket } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useEffect, useState } from 'react';

const timeline = [
  {
    year: '2025.11 - 현재',
    role: '백엔드 개발자',
    company: '㈜에스에이엠지엔터테인먼트 - 플랫폼사업팀 사원',
    description: 'OTT 서비스와 이커머스 운영 시스템의 백엔드를 맡아, 채널과 팀마다 흩어져 있던 데이터·콘텐츠·회원 업무를 각각 하나의 운영 제품으로 통합했습니다.',
    achievements: [
      '이모션 캐슬 OTT 서비스 백엔드 API 설계·개발',
      '자사몰 통합 어드민 구축 - 온·오프라인 채널에 흩어진 주문·매출·회원 데이터를 단일 대시보드로 통합해 운영 지표 확인 경로 일원화',
      '사내 콘텐츠 관리 플랫폼(CMS) 단독 설계·개발 및 사내 서버 배포·운영 - 분산된 영상 자산 관리와 반복 영상 가공 업무를 하나의 제품으로 통합',
      '자사몰·시네마 계정 통합 회원 CS 백오피스 서버 구축으로 상담 조직의 회원 조회·조치 절차 단일화',
      'Nest.js 기반 서버 아키텍처 설계 및 인증·권한·로깅 공통 구조 구현',
    ],
  },
  {
    year: '2024.02 - 2025.10',
    role: '백엔드 개발자',
    company: '㈔한국녹색기후기술원 - 에너지플랫폼개발팀 대리',
    description: 'xEMS 솔루션 V2.2/V2.2.1 고도화 프로젝트에서 건물·설비 에너지 집계 엔진과 분석 API를 맡아, 실시간 집계가 실패하던 구조를 개선하고 진단 지표를 제공했습니다.',
    achievements: [
      '설비 에너지(ESP) 집계 엔진 신규 개발 및 건물 에너지(BEP) 집계 엔진 고도화로 관제점 데이터 정확도 개선',
      'Connection Pool 구조로 전환해 독립 커넥션 구조에서 반복되던 실시간 집계 실패 해소',
      '통합 에너지 분석 API와 냉난방도일 스케줄러 개발로 소비·탄소배출·자립률 지표 제공',
      'Weather API 연동 및 유효성 검사 미들웨어 구현으로 외부 데이터 연계와 요청 검증 강화',
      '2024년 한국에너지대상 장관상, 2025년 환경의날 환경부장관상 수상',
    ],
  },
  {
    year: '2020.04 - 2023.09',
    role: '웹 개발자',
    company: '소프트위즈 - 웹팀 대리',
    description: '바이너리 옵션 거래 플랫폼과 암호화폐 실시간 시세 서비스를 맡아, 프론트엔드 렌더링부터 실시간 데이터 전달·로그 수집 구조까지 구축했습니다.',
    achievements: [
      'Pixi.js 기반 거래 플랫폼의 실시간 차트·보조지표·주문 UI 개발, MVP 구조로 리팩터링해 유지보수성 개선',
      'Socket.io·Redis Pub/Sub로 코인 실시간 시세 조회 시스템 구축, 종가 이력을 MySQL에 적재 (TypeScript, Java)',
      'Go·Kafka 로그 서버 구축과 Telegram Bot API 연동으로 로그 수집 지연을 없애고 장애·시세 변동 대응 속도 개선',
      '자사 홈페이지 풀스택 개발 (Node.js, Express) - 채용 지원 절차 온라인화 및 reCAPTCHA v3로 악성 트래픽 차단',
    ],
  },
  {
    year: '2020.01 - 2020.03',
    role: '서버 관리자',
    company: '㈜볼트홀 - 사원',
    description: '스트리밍 플랫폼의 운영 어드민과 서버 인프라를 맡아, 콘텐츠 운영 업무를 관리자 화면에서 처리할 수 있도록 했습니다.',
    achievements: [
      '스트리밍 플랫폼 운영 어드민 페이지 개발',
      '서비스 서버 인프라 운영 및 모니터링 관리',
    ],
  },
];

const stats = [
  { icon: Briefcase, label: '완료한 프로젝트', value: '10+', color: 'text-primary' },
  { icon: Trophy, label: '수상 경력', value: '2회', color: 'text-accent' },
  { icon: Users, label: '근무 회사', value: '4곳', color: 'text-accent' },
];

const workDistribution = [
  { name: '백엔드', value: 60 },
  { name: '프론트엔드', value: 30 },
  { name: '기타', value: 10 },
];

export function Career() {
    const [isDark, setIsDark] = useState(false);

    // 다크모드 감지
    useEffect(() => {
      const el = document.documentElement;
      const update = () => setIsDark(el.classList.contains('dark'));
      update();
      const observer = new MutationObserver(update);
      observer.observe(el, { attributes: true, attributeFilter: ['class', 'data-theme'] });
      return () => observer.disconnect();
    }, []);
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl mb-6 tracking-tight">경력</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto tracking-tight">
           비즈니스 문제를 해결하고 실제 제품을 개발·운영하며 쌓아온 경험입니다.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    index % 2 === 0 ? '' : 'md:direction-rtl'
                  }`}
                >
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:col-start-2'} mb-8 md:mb-0`}>
                    <Card className="p-6 hover:shadow-[0_8px_24px_rgba(107,124,255,0.15)] transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <span className="text-primary tracking-tight">{item.year}</span>
                      </div>
                      <h3 className="text-xl mb-1 tracking-tight">{item.role}</h3>
                      <p className="text-muted-foreground mb-4 tracking-tight">{item.company}</p>
                      <p className="text-muted-foreground mb-4 leading-relaxed tracking-tight">
                        {item.description}
                      </p>
                      <div className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Trophy className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <span className="tracking-tight">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="p-8 text-center hover:shadow-[0_8px_24px_rgba(107,124,255,0.15)] transition-all"
            >
              <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
              <h3 className="text-4xl mb-2 tracking-tight">{stat.value}</h3>
              <p className="text-muted-foreground tracking-tight">{stat.label}</p>
            </Card>
          ))}
        </motion.div>

        {/* Work Distribution Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 md:p-8 rounded-2xl shadow-[0_8px_24px_rgba(17,24,39,0.08)]">
            <h3 className="text-2xl mb-4 text-center tracking-tight">업무 비율</h3>
            <p className="text-sm text-muted-foreground text-center mb-8 tracking-tight">
              프로젝트별 담당 역할의 비중입니다.
            </p>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={workDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  dataKey="value"
                >
                  <Cell fill="#6B7CFF" /> {/* 백엔드 */}
                  <Cell fill="#94A3B8" /> {/* 프론트엔드 */}
                  <Cell fill="#FFB3C1" /> {/* 기타 */}
                </Pie>
                <Tooltip 
                  formatter={(value, name) => [`${value}%`, name]}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    borderRadius: '8px',
                    border: '1px solid hsl(var(--border))',
                  }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  align="center"
                  wrapperStyle={{ fontSize: 12, color: 'hsl(var(--muted-foreground))' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
