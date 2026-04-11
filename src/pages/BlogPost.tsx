import { motion } from "motion/react";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { withBaseUrl } from "@/lib/asset";

interface BlogPostProps {
  slug: string;
  onBack: () => void;
}

export default function BlogPost({ slug, onBack }: BlogPostProps) {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="pt-[var(--header-height)] pb-24 text-center">
        <h1 className="text-4xl font-bold mb-8">Post not found</h1>
        <Button onClick={onBack}>Back to Blog</Button>
      </main>
    );
  }

  return (
    <main className="pt-[var(--header-height)] pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-primary hover:text-primary/80 p-0 h-auto font-bold uppercase tracking-widest text-xs group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="aspect-video w-full rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-primary/10">
            <img
              src={withBaseUrl(post.image)}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex items-center gap-4 text-xs text-white mb-6 uppercase tracking-widest font-bold">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-12 leading-tight tracking-tighter text-white">
            {post.title}
          </h1>

          <div className="prose max-w-none">
            {post.content.split('\n').map((paragraph, i) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;
              
              if (trimmed.startsWith('###')) {
                return (
                  <h3 key={i} className="text-2xl font-bold mt-12 mb-6 text-primary">
                    {trimmed.replace('###', '').trim()}
                  </h3>
                );
              }
              return (
                <p key={i} className="text-white text-lg md:text-xl leading-relaxed mb-6">
                  {trimmed}
                </p>
              );
            })}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
