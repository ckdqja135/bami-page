import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';

interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  thumbnail: string;
  categories: string[];
}

interface RssResponse {
  status: string;
  items: BlogPost[];
}

function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
}

const RSS_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://codesk.tistory.com/rss';
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643';

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(RSS_URL)
      .then((res) => {
        if (!res.ok) throw new Error('RSS 피드를 불러오는데 실패했습니다.');
        return res.json() as Promise<RssResponse>;
      })
      .then((data) => {
        if (data.status !== 'ok') throw new Error('RSS 피드 파싱에 실패했습니다.');
        const filtered = data.items.filter((item) => {
          const title = item.title;
          if (title.includes('RG406V를 구매하다 겪었던 불미스러운 일')) return false;
          if (title.includes('산업안전 및 사고 예방 교육(해답)')) return false;
          return true;
        });
        setPosts(filtered);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
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
          <h1 className="text-4xl md:text-5xl mb-6 tracking-tight">블로그</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto tracking-tight">
            웹 개발, 디자인, 기술에 대한 생각, 통찰, 튜토리얼을 공유합니다.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden h-full flex flex-col animate-pulse">
                <div className="aspect-[16/9] bg-muted" />
                <div className="p-6 flex-1 flex flex-col gap-3">
                  <div className="h-4 bg-muted rounded w-1/3" />
                  <div className="h-6 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-full" />
                  <div className="h-4 bg-muted rounded w-2/3" />
                  <div className="flex gap-2 mt-2">
                    <div className="h-5 bg-muted rounded w-16" />
                    <div className="h-5 bg-muted rounded w-16" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-lg text-muted-foreground mb-2">블로그 글을 불러오는 중 오류가 발생했습니다.</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </motion.div>
        )}

        {/* Posts Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => {
              const excerpt = stripHtml(post.description).slice(0, 120) + '...';
              const image = post.thumbnail || DEFAULT_IMAGE;
              const date = formatDate(post.pubDate);
              const tags = post.categories.filter((c) => c.length > 0);

              return (
                <motion.div
                  key={post.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card
                    className="overflow-hidden group cursor-pointer hover:shadow-[0_8px_24px_rgba(107,124,255,0.15)] transition-all h-full flex flex-col"
                    onClick={() => window.open(post.link, '_blank')}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <ImageWithFallback
                        src={image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1 tracking-tight">
                          <Calendar className="h-4 w-4" />
                          {date}
                        </span>
                      </div>
                      <h3 className="text-xl mb-3 tracking-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed tracking-tight flex-1">
                        {excerpt}
                      </p>
                      {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all tracking-tight">
                        원문 보기 <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
