import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const skillsData = [
  { skill: 'React', value: 90 },
  { skill: 'TypeScript', value: 90 },
  { skill: 'Next.js', value: 70 },
  { skill: 'Express', value: 50 },
  { skill: 'CSS/Tailwind', value: 90 },
  { skill: 'Dart', value: 70 },
  { skill: 'Figma', value: 50 },
];

// skillsData.skill 과 정확히 일치하도록 key 구성
const skillDetails: Record<string, {
  level: string;
  experience: string;
  description: string;
  projects: string[];
}> = {
  React: {
    level: '고급',
    experience: '4년',
    description: '현대적 훅/컴포넌트 패턴으로 확장 가능한 SPA/대시보드 구축',
    projects: ['올인원 포토 솔루션', '이벤트 현장용 QR 포토미션 웹 서비스'],
  },
  TypeScript: {
    level: '고급',
    experience: '3년',
    description: '타입 안전 설계(도메인 타입/유틸 타입)로 오류 감소 및 유지보수성 향상',
    projects: ['상품 등록·관리 자동화 플랫폼', '섹터별 주식 데이터 분석 웹 서비스'],
  },
  'Next.js': {
    level: '중급',
    experience: '2년',
    description: '라우팅/데이터패칭 최적화, 마케팅/포트폴리오/관리자 화면 제작',
    projects: ['실시간 낚시 예약 및 낚시 정보 플랫폼', '하드웨어 회사 사이트', '웹 서비스 관리자 페이지'],
  },
  Express: {
    level: '초급',
    experience: '1년',
    description: '간단한 REST API, 인증(JWT)과 배치 작업 등 실무 보조 백엔드',
    projects: ['섹터별 주식 데이터 분석 웹 서비스 백앤드', '간단 CRUD API'],
  },
  'CSS/Tailwind': {
    level: '고급',
    experience: '4년',
    description: 'Tailwind 기반 디자인 시스템, 다크모드/반응형/접근성 고려한 UI',
    projects: ['관리자 디자인 시스템'],
  },
  Dart: {
    level: '중급',
    experience: '3년',
    description: 'Flutter 앱 개발을 위한 Dart 문법/비동기/상태관리(Provider) 활용',
    projects: ['Carsix Ambient(블루투스 LED)','아이돌 포토카드 이벤트 앱'],
  },
  Figma: {
    level: '중급',
    experience: '2년',
    description: '와이어프레임/프로토타입 작성 및 개발 친화적 컴포넌트 설계',
    projects: ['랜딩 시안', '화면 프로토타입'],
  },
};

export function Skills() {
  // 초기 선택: skillsData 첫 항목과 동기화
  const [selectedSkill, setSelectedSkill] = useState<string>(skillsData[0].skill);
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

  // skillDetails에 없는 스킬이 선택되는 경우를 방지
  const safeSelected = skillDetails[selectedSkill] ? selectedSkill : skillsData.find(s => skillDetails[s.skill])?.skill ?? skillsData[0].skill;

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl mb-6 tracking-tight">스킬 & 전문성</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto tracking-tight">
            실무 프로젝트에서 다듬은 핵심 역량입니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-6 md:p-8 h-full rounded-2xl shadow-[0_8px_24px_rgba(17,24,39,0.08)] bg-white/95 dark:bg-slate-900/85">
              <h3 className="text-2xl mb-4 text-center tracking-tight">스킬 개요</h3>
              <p className="text-sm text-muted-foreground text-center mb-6 tracking-tight">
                주요 기술 스택별 숙련도를 시각화했습니다.
              </p>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={skillsData}>
                  <PolarGrid stroke={isDark ? '#475569' : '#CBD5E1'} strokeOpacity={0.6} />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={{
                      fill: isDark ? '#F8FAFC' : '#0F172A',
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    tick={{
                      fill: isDark ? '#CBD5E1' : '#64748B',
                      fontSize: 11,
                    }}
                    stroke={isDark ? '#334155' : '#E2E8F0'}
                  />
                  <Radar
                    name="숙련도"
                    dataKey="value"
                    stroke="#6B7CFF"
                    strokeWidth={2}
                    fill="#6B7CFF"
                    fillOpacity={0.35}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          {/* Skill Detail Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 md:p-8 h-full rounded-2xl shadow-[0_8px_24px_rgba(17,24,39,0.08)]">
              <h3 className="text-2xl mb-6 tracking-tight">상세 정보</h3>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {/* skillsData 기준으로 배지 렌더 (항상 싱크) */}
                  {skillsData.map(({ skill }) => (
                    <Badge
                      key={skill}
                      variant={safeSelected === skill ? 'default' : 'outline'}
                      className={`cursor-pointer px-3 py-2 transition-all ${
                        safeSelected === skill
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-primary/10'
                      }`}
                      onClick={() => setSelectedSkill(skill)}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {safeSelected && skillDetails[safeSelected] && (
                  <motion.div
                    key={safeSelected}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">수준</p>
                        <p className="text-lg text-primary tracking-tight">
                          {skillDetails[safeSelected].level}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">경력</p>
                        <p className="tracking-tight">{skillDetails[safeSelected].experience}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">설명</p>
                        <p className="text-muted-foreground leading-relaxed tracking-tight">
                          {skillDetails[safeSelected].description}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">주요 프로젝트</p>
                        <ul className="space-y-2">
                          {skillDetails[safeSelected].projects.map((project) => (
                            <li
                              key={project}
                              className="flex items-center gap-2 text-muted-foreground tracking-tight"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl mb-6 text-center tracking-tight">전체 스킬</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <Card
                key={skill.skill}
                className="p-6 hover:shadow-[0_8px_24px_rgba(107,124,255,0.15)] transition-all cursor-pointer"
                onClick={() => setSelectedSkill(skill.skill)}
              >
                <h4 className="text-lg mb-3 tracking-tight">{skill.skill}</h4>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2 tracking-tight">{skill.value}% 숙련도</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
