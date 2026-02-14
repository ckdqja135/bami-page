import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Mail, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';



export function Home() {
    const navigate = useNavigate();
  const stats = [
    { label: '경력 연차', value: '6+' },
    { label: '완료한 프로젝트', value: '9+' },
    // { label: '협업 국가', value: '3' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background pt-32 pb-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2QjdDRkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTItMnYyaDJ2LTJoLTJ6bS0yIDB2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0yIDB2Mmgydi0yaC0yem0yIDB2Mmgydi0yaC0yem0yIDB2Mmgydi0yaC0yem0yIDB2Mmgydi0yaC0yem0yIDB2Mmgydi0yaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-30"></div>
                <ImageWithFallback
                   src="/profile.jpg"     
                  alt="송창범 프로필 사진"
                  className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-background shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              <motion.h1
                className="text-5xl md:text-7xl tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }} 
              >
                송창범
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground mb-8 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                AI 엔지니어 개발자
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  onClick={() =>navigate('projects')}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 px-8 cursor-pointer"
                >
                  프로젝트 보기 <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  onClick={() => navigate('contact')}
                  variant="outline"
                  size="lg"
                  className="px-8  cursor-pointer"
                >
                  연락하기 <Mail className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-6 tracking-tight">소개</h2>
            <p className="text-lg text-muted-foreground leading-relaxed tracking-tight">
            6년 이상 웹 서비스를 개발하며 백엔드를 중심으로 프론트엔드까지 폭넓게 경험해왔습니다.
            <br /><br />
            Go, Java, JavaScript, TypeScript 기반으로 API 설계·구현, 인증/권한, 파일 업로드, 실시간 데이터 처리 등 제품의 핵심 기능을 구현해왔고, 운영 환경에서 안정적으로 동작하도록 성능과 신뢰성을 지속적으로 개선해왔습니다.
            <br /><br />
            또한 기획·디자인·퍼블리셔와의 협업 경험을 바탕으로 사용자 요구를 빠르게 반영하고, 반복 작업은 자동화/도구화를 통해 개발 효율을 높입니다.
            <br /><br />
            AWS 환경과 온프레미스(Ubuntu) 환경 모두에서 배포·운영을 경험했으며, 최근에는 AI 도구를 개발 워크플로우에 적극 활용하여 코드 작성·리뷰·디버깅의 생산성을 높이고 있습니다.
            <br /><br />
            문제를 스스로 정의하고, 원인을 찾아내고, 해결까지 주도하는 것을 중요하게 생각합니다. 낯선 기술도 빠르게 익혀 팀에 공유하고 더 나은 방향을 위해 적극적으로 개선안을 제시하는 AI 엔지니어 개발자입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/5 ">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center hover:shadow-[0_8px_24px_rgba(107,124,255,0.15)] transition-shadow">
                  <h3 className="text-5xl md:text-6xl text-primary mb-4 tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground tracking-tight">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
