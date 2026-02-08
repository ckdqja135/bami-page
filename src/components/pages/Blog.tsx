import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Calendar, Clock, ArrowRight, BookOpen, Share2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const blogPosts = [
  {
    id: 1,
    title: '확장 가능한 React 애플리케이션 구축하기',
    excerpt: '팀과 제품과 함께 성장하는 유지보수 가능한 React 애플리케이션을 만들기 위한 모범 사례와 패턴입니다.',
    image: 'https://images.unsplash.com/photo-1630782431122-97b3809d3780',
    date: '2024년 10월 15일',
    readTime: '8분',
    tags: ['React', '아키텍처', '모범 사례'],
    fullContent: `
      <p>대규모 React 애플리케이션을 구축하는 것은 단순히 컴포넌트를 작성하는 것 이상입니다. 프로젝트가 성장함에 따라 확장 가능하고 유지보수 가능한 아키텍처를 설계하는 것이 중요합니다.</p>
      
      <h2>1. 컴포넌트 구조화</h2>
      <p>컴포넌트는 애플리케이션의 기본 빌딩 블록입니다. 각 컴포넌트는 단일 책임 원칙을 따라야 하며, 재사용 가능하고 테스트하기 쉬워야 합니다. 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리하여 관심사를 명확히 구분하세요.</p>
      
      <h2>2. 상태 관리 전략</h2>
      <p>애플리케이션의 규모에 따라 적절한 상태 관리 솔루션을 선택하는 것이 중요합니다. 작은 프로젝트에는 Context API와 useState로 충분할 수 있지만, 복잡한 상태 로직이 필요한 경우 Redux나 Zustand 같은 라이브러리를 고려하세요.</p>
      
      <h2>3. 코드 분할과 지연 로딩</h2>
      <p>React.lazy()와 Suspense를 사용하여 코드를 분할하고 필요한 시점에만 로드하세요. 이는 초기 로딩 시간을 크게 개선하고 사용자 경험을 향상시킵니다.</p>
      
      <h2>4. 타입 안정성</h2>
      <p>TypeScript를 사용하면 개발 시점에 많은 버그를 미리 잡을 수 있습니다. 프롭스와 상태에 명확한 타입을 정의하여 코드의 안정성과 가독성을 높이세요.</p>
      
      <h2>결론</h2>
      <p>확장 가능한 React 애플리케이션을 구축하는 것은 지속적인 노력이 필요합니다. 처음부터 좋은 아키텍처 패턴을 적용하고 코드 품질을 유지하면 장기적으로 개발 속도와 유지보수성을 크게 향상시킬 수 있습니다.</p>
    `
  },
  {
    id: 2,
    title: '프론트엔드 개발자를 위한 TypeScript 팁',
    excerpt: '더 안전하고 유지보수 가능한 코드를 작성하고 프로덕션 배포 전에 버그를 잡기 위한 고급 TypeScript 기술입니다.',
    image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1',
    date: '2024년 9월 28일',
    readTime: '6분',
    tags: ['TypeScript', 'JavaScript', '개발'],
    fullContent: `
      <p>TypeScript는 JavaScript에 정적 타입을 추가하여 개발 경험을 크게 개선합니다. 이 글에서는 실무에서 유용한 TypeScript 팁들을 공유합니다.</p>
      
      <h2>1. 유틸리티 타입 활용하기</h2>
      <p>TypeScript는 Partial, Pick, Omit, Required 등 다양한 유틸리티 타입을 제공합니다. 이들을 활용하면 기존 타입을 기반으로 새로운 타입을 쉽게 생성할 수 있습니다.</p>
      
      <h2>2. 제네릭으로 재사용 가능한 컴포넌트 만들기</h2>
      <p>제네릭을 사용하면 다양한 타입에서 동작하는 재사용 가능한 컴포넌트와 함수를 만들 수 있습니다. 타입 안정성을 유지하면서도 유연성을 확보할 수 있습니다.</p>
      
      <h2>3. 타입 가드 활용</h2>
      <p>타입 가드를 사용하면 런타임에 타입을 확인하고 TypeScript 컴파일러에게 정확한 타입 정보를 제공할 수 있습니다. typeof, instanceof, 커스텀 타입 가드를 적절히 활용하세요.</p>
      
      <h2>4. Strict 모드 활성화</h2>
      <p>tsconfig.json에서 strict 옵션을 활성화하면 더 엄격한 타입 체크를 수행합니다. 처음에는 어려울 수 있지만 장기적으로 코드 품질이 크게 향상됩니다.</p>
      
      <h2>마무리</h2>
      <p>TypeScript는 학습 곡선이 있지만, 올바르게 사용하면 개발 생산성과 코드 품질을 크게 향상시킬 수 있습니다. 작은 프로젝트부터 시작해서 점진적으로 TypeScript의 고급 기능들을 익혀나가세요.</p>
    `
  },
  {
    id: 3,
    title: 'Tailwind를 활용한 현대적인 CSS 기법',
    excerpt: '유틸리티 우선 CSS의 강력함과 Tailwind CSS가 개발 워크플로우를 어떻게 가속화하는지 탐구합니다.',
    image: 'https://images.unsplash.com/photo-1608156639585-b3a032ef9689',
    date: '2024년 9월 10일',
    readTime: '5분',
    tags: ['CSS', 'Tailwind', '디자인'],
    fullContent: `
      <p>Tailwind CSS는 유틸리티 우선 접근 방식으로 웹 개발의 CSS 작성 방식을 혁신하고 있습니다. 이 글에서는 Tailwind의 장점과 효과적인 사용 방법을 알아봅니다.</p>
      
      <h2>1. 유틸리티 우선 접근의 이점</h2>
      <p>Tailwind는 작은 유틸리티 클래스를 조합하여 디자인을 구현합니다. 이 방식은 CSS 파일 크기를 줄이고, 클래스 이름을 고민하는 시간을 절약하며, 디자인 시스템의 일관성을 유지하는 데 도움이 됩니다.</p>
      
      <h2>2. 반응형 디자인 간소화</h2>
      <p>Tailwind의 반응형 접두사(sm:, md:, lg: 등)를 사용하면 미디어 쿼리를 직접 작성하지 않고도 쉽게 반응형 디자인을 구현할 수 있습니다.</p>
      
      <h2>3. 커스터마이징과 디자인 시스템</h2>
      <p>tailwind.config.js를 통해 색상, 간격, 타이포그래피 등을 커스터마이징할 수 있습니다. 프로젝트의 디자인 시스템을 Tailwind 설정에 반영하여 일관된 디자인을 유지하세요.</p>
      
      <h2>4. 컴포넌트 추출</h2>
      <p>반복되는 스타일 패턴은 React 컴포넌트로 추출하여 재사용하세요. Tailwind는 CSS-in-JS와도 잘 작동하므로 필요에 따라 두 방식을 혼용할 수 있습니다.</p>
      
      <h2>결론</h2>
      <p>Tailwind CSS는 빠른 개발과 일관된 디자인을 가능하게 합니다. 처음에는 낯설 수 있지만, 익숙해지면 CSS 작성 속도가 크게 향상됩니다.</p>
    `
  },
  {
    id: 4,
    title: '2024년 상태 관리',
    excerpt: 'React 애플리케이션에 적합한 상태 관리 솔루션을 선택하기 위한 종합 가이드입니다.',
    image: 'https://images.unsplash.com/photo-1630283017802-785b7aff9aac',
    date: '2024년 8월 22일',
    readTime: '10분',
    tags: ['React', '상태 관리', 'Redux'],
    fullContent: `
      <p>React 애플리케이션에서 상태 관리는 매우 중요한 부분입니다. 2024년 현재, 다양한 상태 관리 솔루션이 존재하며 각각의 장단점을 이해하는 것이 중요합니다.</p>
      
      <h2>1. React Context API</h2>
      <p>간단한 전역 상태 관리에는 Context API만으로도 충분합니다. 별도의 라이브러리 없이 React 내장 기능을 사용하여 프롭 드릴링 문제를 해결할 수 있습니다.</p>
      
      <h2>2. Redux Toolkit</h2>
      <p>복잡한 상태 로직과 미들웨어가 필요한 대규모 애플리케이션에는 Redux Toolkit이 여전히 강력한 선택입니다. 보일러플레이트 코드가 많이 줄어들었으며 타입 추론도 개선되었습니다.</p>
      
      <h2>3. Zustand</h2>
      <p>Zustand는 간단하면서도 강력한 상태 관리 라이브러리입니다. Redux보다 훨씬 적은 보일러플레이트로 비슷한 기능을 구현할 수 있어 인기를 얻고 있습니다.</p>
      
      <h2>4. Jotai와 Recoil</h2>
      <p>아톰 기반 상태 관리 라이브러리들은 세밀한 상태 구독과 업데이트를 가능하게 합니다. 성능이 중요한 애플리케이션에서 유용합니다.</p>
      
      <h2>5. TanStack Query (React Query)</h2>
      <p>서버 상태 관리에는 TanStack Query가 최고의 선택입니다. 캐싱, 재검증, 낙관적 업데이트 등을 간단하게 구현할 수 있습니다.</p>
      
      <h2>선택 가이드</h2>
      <p>프로젝트의 규모와 요구사항에 따라 적절한 솔루션을 선택하세요. 작은 프로젝트는 Context API나 Zustand로 시작하고, 필요에 따라 더 강력한 솔루션으로 전환할 수 있습니다.</p>
    `
  },
  {
    id: 5,
    title: 'Flutter vs React Native',
    excerpt: '실제 프로젝트 경험을 바탕으로 한 두 주요 크로스 플랫폼 모바일 개발 프레임워크의 솔직한 비교입니다.',
    image: 'https://images.unsplash.com/photo-1505304451-3b3b85a91afe',
    date: '2024년 8월 5일',
    readTime: '12분',
    tags: ['Flutter', 'React Native', '모바일'],
    fullContent: `
      <p>크로스 플랫폼 모바일 개발을 고려할 때 Flutter와 React Native는 가장 인기 있는 두 가지 선택지입니다. 양쪽 모두 실무에서 사용해본 경험을 바탕으로 비교해보겠습니다.</p>
      
      <h2>1. 성능</h2>
      <p>Flutter는 Dart로 컴파일되어 네이티브 코드로 실행되므로 일반적으로 더 나은 성능을 보입니다. React Native는 JavaScript 브리지를 사용하므로 성능이 약간 떨어질 수 있지만, 대부분의 앱에서는 체감할 수 있는 차이가 없습니다.</p>
      
      <h2>2. 개발 경험</h2>
      <p>React Native는 React 개발자에게 친숙한 환경을 제공합니다. Flutter는 Dart를 배워야 하지만, Hot Reload와 풍부한 위젯 라이브러리로 빠른 개발이 가능합니다.</p>
      
      <h2>3. UI/UX</h2>
      <p>Flutter는 Material Design과 Cupertino 위젯을 기본 제공하여 일관된 UI를 구현하기 쉽습니다. React Native는 네이티브 컴포넌트를 사용하므로 플랫폼별 네이티브 룩앤필을 더 쉽게 구현할 수 있습니다.</p>
      
      <h2>4. 커뮤니티와 생태계</h2>
      <p>React Native는 더 오래되었고 JavaScript 생태계를 활용할 수 있어 패키지가 풍부합니다. Flutter도 빠르게 성장하고 있으며 공식 패키지의 품질이 높습니다.</p>
      
      <h2>5. 웹과 데스크톱 지원</h2>
      <p>Flutter는 웹과 데스크톱 애플리케이션 개발도 지원합니다. React Native도 React Native Web이 있지만 Flutter만큼 원활하지는 않습니다.</p>
      
      <h2>결론</h2>
      <p>두 프레임워크 모두 훌륭한 선택입니다. React 경험이 있다면 React Native가, 성능과 일관성을 최우선으로 한다면 Flutter가 더 적합할 수 있습니다. 프로젝트 요구사항과 팀의 역량을 고려하여 선택하세요.</p>
    `
  },
  {
    id: 6,
    title: '웹 성능 최적화',
    excerpt: '성능 최적화를 통해 웹사이트의 로딩 속도와 사용자 경험을 개선하기 위한 실용적인 전략입니다.',
    image: 'https://images.unsplash.com/photo-1730782431122-97b3809d3780',
    date: '2024년 7월 18일',
    readTime: '7분',
    tags: ['성능', 'Web Vitals', '최적화'],
    fullContent: `
      <p>웹 성능은 사용자 경험과 SEO에 직접적인 영향을 미칩니다. 이 글에서는 웹사이트의 성능을 측정하고 개선하는 실용적인 방법들을 소개합니다.</p>
      
      <h2>1. Core Web Vitals 이해하기</h2>
      <p>LCP(Largest Contentful Paint), FID(First Input Delay), CLS(Cumulative Layout Shift)는 구글이 정의한 핵심 웹 지표입니다. 이들을 개선하면 검색 순위도 향상됩니다.</p>
      
      <h2>2. 이미지 최적화</h2>
      <p>WebP나 AVIF 같은 현대적인 이미지 포맷을 사용하고, 적절한 크기로 리사이징하며, 레이지 로딩을 적용하세요. 이미지는 대부분의 웹사이트에서 가장 큰 병목 지점입니다.</p>
      
      <h2>3. 코드 스플리팅과 트리 쉐이킹</h2>
      <p>사용하지 않는 코드를 제거하고 필요한 코드만 번들에 포함시키세요. Webpack이나 Vite 같은 번들러의 최적화 기능을 적극 활용하세요.</p>
      
      <h2>4. 캐싱 전략</h2>
      <p>적절한 캐시 헤더를 설정하고 Service Worker를 활용하여 오프라인 경험을 제공하세요. CDN을 사용하면 전 세계 사용자에게 빠른 콘텐츠 전달이 가능합니다.</p>
      
      <h2>5. 렌더링 최적화</h2>
      <p>React.memo, useMemo, useCallback을 적절히 사용하여 불필요한 리렌더링을 방지하세요. 가상 스크롤을 구현하여 긴 리스트의 성능을 개선할 수 있습니다.</p>
      
      <h2>측정과 모니터링</h2>
      <p>Lighthouse, WebPageTest, Chrome DevTools를 활용하여 성능을 정기적으로 측정하고 개선하세요. 실제 사용자 데이터(RUM)를 수집하면 더 정확한 성능 분석이 가능합니다.</p>
    `
  },
];

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl mb-6 tracking-tight">블로그</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto tracking-tight">
            웹 개발, 디자인, 기술에 대한 생각, 통찰, 튜토리얼을 공유합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card 
                className="overflow-hidden group cursor-pointer hover:shadow-[0_8px_24px_rgba(107,124,255,0.15)] transition-all h-full flex flex-col"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1 tracking-tight">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 tracking-tight">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed tracking-tight flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all tracking-tight">
                    더 읽기 <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-0 text-center">
            <h3 className="text-2xl md:text-3xl mb-4 tracking-tight">최신 소식 받기</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto tracking-tight">
              새로운 블로그 포스트, 튜토리얼, 웹 개발 관련 업데이트를 구독하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="이메일 주소"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors tracking-tight">
                구독하기
              </button>
            </div>
          </Card>
        </motion.div> */}
      </div>

      {/* Blog Post Detail Dialog */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedPost && (
            <div>
              <DialogHeader>
                <DialogTitle className="text-3xl tracking-tight mb-4">
                  {selectedPost.title}
                </DialogTitle>
              </DialogHeader>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="tracking-tight">{selectedPost.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="tracking-tight">{selectedPost.readTime} 읽기</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span className="tracking-tight">블로그</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPost.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Separator className="my-6" />

              {/* Featured Image */}
              <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
                <ImageWithFallback
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog Content */}
              <div 
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
                style={{
                  lineHeight: '1.8',
                }}
              />

              <Separator className="my-6" />

              {/* Share Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground tracking-tight">공유하기</span>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    트위터
                  </Button>
                  <Button variant="outline" size="sm">
                    페이스북
                  </Button>
                  <Button variant="outline" size="sm">
                    링크 복사
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
