import { motion } from "motion/react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";
import BilingualText from "../components/BilingualText";

interface BlogProps {
  onPostClick: (slug: string) => void;
}

export default function Blog({ onPostClick }: BlogProps) {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary-heading text-sm mb-4 block">
            Dalgopchang Journal <span className="text-black/60 font-semibold">· 달곱창 이야기</span>
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 tracking-tighter">
            <span className="text-[#CFC6B4]">OUR</span> <span className="text-primary">BLOG</span>
          </h1>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            Insights, stories, and the culture behind the best Korean Gopchang experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className="bg-black/40 border-white/10 overflow-hidden h-full flex flex-col group cursor-pointer hover:border-primary/30 transition-all duration-300 shadow-[0_18px_55px_-35px_rgba(0,0,0,0.95)]"
                onClick={() => onPostClick(post.slug)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-[#CFC6B4] mb-4 uppercase tracking-widest font-bold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="text-xl text-white font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/70 mb-6 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4 flex items-center text-primary font-bold text-sm uppercase tracking-widest group/btn">
                    <BilingualText
                      en={<span>Read More</span>}
                      ko={<span className="text-[11px] font-semibold tracking-wide text-white/60">더 보기</span>}
                      koTone="normal"
                      className="leading-none"
                      koClassName="ml-2"
                    />
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
