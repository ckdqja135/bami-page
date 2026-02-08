import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Download, FileText, ExternalLink } from 'lucide-react';

const resumes = [
  {
    language: '한국어',
    flag: '🇰🇷',
    filename: 'changbeom_Song_Resume_KR.pdf',      // 실제 파일명
    path: '/resumes/changbeom_Song_Resume_KR.pdf',  // public 기준 절대경로
    description: '국내 기회를 위한 한국어 이력서',
    fileSize: '245 KB',
  },
  {
    language: '영어',
    flag: '🇺🇸',
    filename: 'Wonhee_Lee_Resume_EN.pdf',
    path: '/resumes/Wonhee_Lee_Resume_EN.pdf',
    description: '글로벌 포지션을 위한 영문 이력서',
    fileSize: '238 KB',
  },
  {
    language: '베트남어',
    flag: '🇻🇳',
    filename: 'Wonhee_Lee_Resume_VN.pdf',
    path: '/resumes/Wonhee_Lee_Resume_VN.pdf',
    description: '동남아시아 시장을 위한 베트남어 이력서',
    fileSize: '241 KB',
  },
];

const portfolioLinks = [
  {
    title: 'GitHub 프로필',
    description: '오픈소스 기여 및 개인 프로젝트 확인',
     url: 'https://github.com/ckdqja135',
    icon: ExternalLink,
  },
  {
    title: '포트폴리오 PDF',
    description: '선별된 작업물을 보여주는 다운로드 가능한 포트폴리오',
    url: '#',
    icon: FileText,
  },
];

export function Downloads() {
  // 필요 시 다운로드 이벤트 로깅용
  const handleDownload = (filename: string) => {
    // 예: analytics.track('resume_download', { filename });
  };
const normalizeUrl = (url: string) => {
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:')) return url;
  if (url.includes('@') && !url.includes(' ')) return `mailto:${url}`; // 이메일 오타 방지
  return `https://${encodeURI(url)}`; // 프로토콜 없을 때 보정 + 한글 경로 인코딩
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
          <h1 className="text-4xl md:text-5xl mb-6 tracking-tight">다운로드</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto tracking-tight">
            여러 언어로 제공되는 이력서 및 기타 전문 자료에 액세스하세요.
          </p>
        </motion.div>

        {/* Resume Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {resumes.map((resume, index) => (
            <motion.div
              key={resume.language}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="p-8 hover:shadow-[0_8px_24px_rgba(107,124,255,0.15)] transition-all h-full flex flex-col">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{resume.flag}</div>
                  <h3 className="text-2xl mb-2 tracking-tight">{resume.language}</h3>
                  <p className="text-sm text-muted-foreground tracking-tight">
                    {resume.description}
                  </p>
                </div>
                <div className="mt-auto space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="tracking-tight">파일 크기:</span>
                    <span className="tracking-tight">{resume.fileSize}</span>
                  </div>

                  {/* 실제 다운로드: Button asChild + <a download> */}
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <a
                      href={resume.path}            // public 경로
                      download={resume.filename}    // 파일명 지정
                      onClick={() => handleDownload(resume.filename)}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      이력서 다운로드
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl mb-8 text-center tracking-tight">추가 자료</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioLinks.map((link) => (
              <Card
                key={link.title}
                className="p-6 hover:shadow-[0_8px_24px_rgba(107,124,255,0.15)] transition-all group cursor-pointer"
              >
                <a href={normalizeUrl(link.url)} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <link.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 tracking-tight group-hover:text-primary transition-colors">
                        {link.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed tracking-tight">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </motion.div>

       
      </div>
    </div>
  );
}
