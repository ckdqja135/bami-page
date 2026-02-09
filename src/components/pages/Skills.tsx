import { useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { projects } from './Projects';

// 제외할 스킬 목록 (프레임워크 등)
const excludedSkills = ['Express', 'Maven', 'Vercel', 'Ubuntu', 'Weather API', 'Naver API', 'SerpAPI', 'Telegram Bot API', 'reCAPTCHA'];

// 프로젝트 데이터에서 스킬 추출 및 계산
const generateSkillsData = () => {
  const skillMap = new Map<string, { projects: string[]; count: number }>();

  // 모든 프로젝트의 태그 수집
  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      // 제외 목록에 있는 스킬은 건너뛰기
      if (excludedSkills.includes(tag)) return;

      // MySQL과 MariaDB를 하나로 통합
      let normalizedTag = tag;
      if (tag === 'MySQL' || tag === 'MariaDB') {
        normalizedTag = 'MySQL · MariaDB';
      }
      if (tag === 'Java') {
        normalizedTag = 'Java · Spring';
      }

      if (!skillMap.has(normalizedTag)) {
        skillMap.set(normalizedTag, { projects: [], count: 0 });
      }
      const skill = skillMap.get(normalizedTag)!;
      // 중복 프로젝트 방지
      if (!skill.projects.includes(project.title)) {
        skill.projects.push(project.title);
        skill.count += 1;
      }
    });
  });

  // 주요 기술만 선택 (2개 이상 프로젝트에서 사용된 기술)
  const mainSkills = Array.from(skillMap.entries())
    .filter(([_, data]) => data.count >= 2)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 10); // 상위 10개

  // 숙련도 계산: 프로젝트 수 * 25 + 20 (최소 45, 최대 100)
  return mainSkills.map(([skill, data]) => {
    const calculatedValue = Math.min(100, data.count * 25 + 20);
    return {
      skill,
      value: actualProficiency[skill] ?? calculatedValue, // 수동 설정 값이 있으면 사용
      projectCount: data.count,
      projects: data.projects,
    };
  });
};

// 레벨 계산 함수
const getLevel = (value: number): string => {
  if (value >= 90) return '고급';
  if (value >= 70) return '중급+';
  if (value >= 50) return '중급';
  if (value >= 30) return '초급+';
  return '초급';
};

// 실제 경력 매핑 (수동 설정)
const actualExperience: Record<string, string> = {
  'Node.js': '6년',
  'TypeScript': '6년',
  'MySQL · MariaDB': '6년',
  'Java · Spring': '1년',
  'JavaScript': '5년',
  'Next.js': '2년',
  'Python': '1년',
  'Go': '2년',
  'FastAPI': '1년',
  'Tailwind CSS': '3년',
  'Redis': '4년',
  'Socket.io': '4년',
};

// 실제 숙련도 매핑 (수동 설정 - 자동 계산 값을 오버라이드)
const actualProficiency: Record<string, number> = {
  'TypeScript': 85,
  'Node.js': 85,
  'MySQL · MariaDB': 80,
  'Next.js': 45,
  'Java · Spring': 45,
};

// 실제 레벨 매핑 (수동 설정 - 자동 계산 값을 오버라이드)
const actualLevel: Record<string, string> = {
  'Java · Spring': '초급',
  'Next.js': '초급'
};

// 경력 계산 함수 (실제 경력 우선, 없으면 프로젝트 수 기반)
const getExperience = (skill: string, projectCount: number): string => {
  // 실제 경력이 설정되어 있으면 그것을 사용
  if (actualExperience[skill]) {
    return actualExperience[skill];
  }
  // 없으면 프로젝트 수 기반으로 계산
  if (projectCount >= 4) return '3년+';
  if (projectCount >= 3) return '2년+';
  if (projectCount >= 2) return '1년+';
  return '1년 미만';
};

// 기술 설명 매핑
const skillDescriptions: Record<string, string> = {
  'TypeScript': '타입 안전성을 기반으로 확장 가능한 웹 애플리케이션 개발',
  'Next.js': 'SSR/SSG 최적화와 SEO를 고려한 모던 웹 애플리케이션 구축',
  'Node.js': 'RESTful API 서버 구축 및 실시간 데이터 처리 시스템 개발',
  'Express': 'Node.js 기반 백엔드 API 서버 및 미들웨어 구현',
  'Java · Spring': 'Spring 프레임워크 기반 백엔드 API 개발 및 데이터 처리',
  'JavaScript': '인터랙티브한 UI/UX 구현 및 웹 애플리케이션 개발',
  'Go': '고성능 서버 애플리케이션 및 데이터 처리 시스템 개발',
  'Python': 'AI/ML 기반 데이터 분석 및 백엔드 API 서버 구축',
  'FastAPI': '고성능 비동기 REST API 서버 개발',
  'Tailwind CSS': '유틸리티 우선 CSS 프레임워크로 반응형 UI 구현',
  'MySQL · MariaDB': '관계형 데이터베이스 설계, 쿼리 최적화, 트리거, 집계 함수, 파티셔닝 테이블 등 고급 데이터 관리',
  'Redis': '인메모리 데이터 저장소를 활용한 캐싱 및 실시간 데이터 처리',
  'Socket.io': 'WebSocket 기반 양방향 실시간 통신 구현',
  'Sequelize': 'Node.js ORM을 활용한 데이터베이스 관리',
  'PM2': 'Node.js 프로세스 관리 및 무중단 배포',
  'Nginx': '웹 서버 및 리버스 프록시 설정',
  'Kafka': '대용량 메시지 큐 시스템 구축',
  'Pixi.js': '2D WebGL 기반 고성능 그래픽 렌더링',
  'RxJS': '반응형 프로그래밍 패턴을 활용한 비동기 데이터 스트림 처리',
};

export function Skills() {
  const [isDark, setIsDark] = useState(false);

  // 프로젝트 데이터 기반으로 스킬 데이터 생성
  const skillsData = useMemo(() => generateSkillsData(), []);

  // 스킬 상세 정보 생성
  const skillDetails = useMemo(() => {
    const details: Record<string, {
      level: string;
      experience: string;
      description: string;
      projects: string[];
    }> = {};

    skillsData.forEach(({ skill, value, projectCount, projects }) => {
      details[skill] = {
        level: actualLevel[skill] ?? getLevel(value), // 수동 설정 값이 있으면 사용
        experience: getExperience(skill, projectCount),
        description: skillDescriptions[skill] || '다양한 프로젝트에서 활용한 기술',
        projects,
      };
    });

    return details;
  }, [skillsData]);

  const [selectedSkill, setSelectedSkill] = useState<string>(skillsData[0]?.skill || '');

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
  const safeSelected = skillDetails[selectedSkill] ? selectedSkill : skillsData[0]?.skill || '';

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
