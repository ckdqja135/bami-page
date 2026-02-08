import { Github, Mail } from 'lucide-react';

export function Footer() {
  const normalizeUrl = (url: string) => {
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:')) return url;
  if (url.includes('@') && !url.includes(' ')) return `mailto:${url}`; // 이메일 오타 방지
  return `https://${encodeURI(url)}`; // 프로토콜 없을 때 보정 + 한글 경로 인코딩
};

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground tracking-tight">
              © 2025 송창범. All rights reserved.
            </p>
            <p className="text-muted-foreground tracking-tight mt-1">
              백엔드 개발자
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ckdqja135"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:ckdqja13580@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
