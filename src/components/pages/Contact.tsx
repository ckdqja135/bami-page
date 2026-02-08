import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Github, Linkedin, Mail, MapPin, Globe } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/eejoy1212',
    handle: '@wonheelee',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'www.linkedin.com/in/원희-이-4370a1253',
    handle: 'wonhee-lee',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'lwh961212@gmail.com',
    handle: 'lwh961212@gmail.com',
  },
];

const contactInfo = [
  {
    icon: MapPin,
    label: '위치',
    value: '대한민국 수원',
  },
  {
    icon: Globe,
    label: '사용 언어',
    value: '한국어, 영어',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
const normalizeUrl = (url: string) => {
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:')) return url;
  if (url.includes('@') && !url.includes(' ')) return `mailto:${url}`; // 이메일 오타 방지
  return `https://${encodeURI(url)}`; // 프로토콜 없을 때 보정 + 한글 경로 인코딩
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    toast.success('메시지가 성공적으로 전송되었습니다! 곧 답변 드리겠습니다.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
          <h1 className="text-4xl md:text-5xl mb-6 tracking-tight">연락하기</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto tracking-tight">
            프로젝트나 협업에 관심이 있으신가요? 언제든지 연락 주세요.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl mb-6 tracking-tight">메시지 보내기</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm tracking-tight">
                    이름
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="이름을 입력하세요"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm tracking-tight">
                    이메일
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm tracking-tight">
                    메시지
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="프로젝트에 대해 알려주세요..."
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="cursor-pointer w-full bg-primary hover:bg-primary/90">
                  메시지 보내기
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Social Links */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-0">
              <h3 className="text-xl mb-6 tracking-tight">소셜 미디어</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={normalizeUrl(social.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-background hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <social.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="tracking-tight">{social.name}</p>
                      <p className="text-sm text-muted-foreground tracking-tight">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="p-8">
              <h3 className="text-xl mb-6 tracking-tight">연락처 정보</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground tracking-tight">{info.label}</p>
                      <p className="tracking-tight">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-8 bg-primary text-primary-foreground">
              <h3 className="text-xl mb-3 tracking-tight">채용 가능</h3>
              <p className="leading-relaxed tracking-tight opacity-90">
                현재 프리랜서로 프로젝트를 진행 중이며, 정규직 포지션에도 열려 있습니다.
축적된 경험을 바탕으로 더 큰 임팩트를 만들어낼 수 있는 팀에 기여하고자 합니다.
              </p>
            </Card>
          </motion.div>
        </div>

    
      </div>
    </div>
  );
}
