import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Briefcase, Trophy, Users, Rocket } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useEffect, useState } from 'react';

const timeline = [
  {
    year: '2023.12-현재',
    role: '프론트엔드 개발자',
  company: '프리랜서(개인사업자)',
    description: 'Flutter/React/Next.js 중심의 웹·모바일 제품 개발 및 배포',
 achievements: [
      'BLE·FCM 등 디바이스/알림 연동 실무',
      'Swagger·Prisma 기반 API 문서화/ORM 운영',
      'Next.js·React로 관리자/랜딩 다수 구축'
    ],
  },
  {
    year: '2021.07-2023.12',
    role: '프론트엔드 개발자',
    company: '반도체 공정진단 기업',
     summary: 'React와 Flutter 기반의 데이터 시각화/실시간 모니터링 웹·모바일 화면 개발',
  achievements: [
      '프로덕션 앱 다수 구축(사내·외부 프로젝트)',
      '대용량 데이터 decimation 적용으로 렌더 성능 개선',
      '공통 컴포넌트화로 화면 재사용성/유지보수성 향상',
    ],
  },
  {
    year: '2021.01-2021.07',
    role: '웹 개발자 양성과정 수료',
    company: '더조은 컴퓨터 아카데미',
    description: '현대적인 웹 인터페이스 제작 및 디자인 팀과 협업',
    achievements: [
      'Javascript , HTML , CSS , 웹 퍼블리싱 등 웹 기술 학습',
      '프로젝트 중심 커리큘럼을 통해 프론트엔드 기초 실습 경험',
    ],
  },
];

const stats = [
  { icon: Briefcase, label: '완료한 프로젝트', value: '8+', color: 'text-primary' },
  // { icon: Rocket, label: '앱 출시', value: '3', color: 'text-accent' },
  { icon: Users, label: '만족한 고객', value: '10+', color: 'text-accent' },
];

const workDistribution = [
  { name: '프론트엔드', value: 70 },
  { name: '백엔드', value: 20 },
  { name: '디자인', value: 10 },
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
                  <Cell fill="#6B7CFF" />
                  <Cell fill="#94A3B8" />
                  <Cell fill="#FFB3C1" />
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
