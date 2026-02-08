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
    description: '플랫폼 서비스 백엔드 개발',
    achievements: [
      '이모션 캐슬 서비스 백엔드 API 개발',
      '자사몰 통합 어드민 시스템 구축',
      'Nest.js 기반 서버 아키텍처 설계 및 구현',
    ],
  },
  {
    year: '2024.02 - 2025.10',
    role: '백엔드 개발자',
    company: '㈔한국녹색기후기술원 - 에너지플랫폼개발팀 대리',
    description: 'xEMS 솔루션 V2.2/V2.2.1 고도화 프로젝트',
    achievements: [
      '건물/설비 에너지 데이터 집계 엔진 신규 개발 및 고도화',
      'Connection Pool 구조 전환으로 실시간 집계 안정성 확보',
      '통합 에너지 분석 API 및 스케줄러 시스템 개발',
      'Weather API 연동 및 유효성 검사 미들웨어 구현',
      '2024년 한국에너지대상 장관상, 2025년 환경의날 환경부장관상 수상',
    ],
  },
  {
    year: '2020.04 - 2023.09',
    role: '웹 개발자',
    company: '소프트위즈 - 웹팀 대리',
    description: '바이너리 거래 플랫폼 및 암호화폐 시세 조회 서비스 개발',
    achievements: [
      '바이너리 옵션 거래 플랫폼 프론트엔드 개발 (Pixi.js, JavaScript)',
      '코인 실시간 시세 조회 시스템 개발 (TypeScript, Java, Socket.io, Redis)',
      '로그 서버 개발 (Go, Kafka) 및 Telegram Bot API 연동',
      '자사 홈페이지 풀스택 개발 (Node.js, Express)',
    ],
  },
  {
    year: '2020.01 - 2020.03',
    role: '서버 관리자',
    company: '㈜볼트홀 - 사원',
    description: '스트리밍 플랫폼 서비스 어드민 페이지 개발',
    achievements: [
      '스트리밍 플랫폼 관리자 페이지 개발',
      '서버 인프라 관리 및 모니터링',
    ],
  },
];

const stats = [
  { icon: Briefcase, label: '완료한 프로젝트', value: '6+', color: 'text-primary' },
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
           매 프로젝트마다 새로운 도전을 통해 성장해온 개발 여정을 소개합니다.
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
