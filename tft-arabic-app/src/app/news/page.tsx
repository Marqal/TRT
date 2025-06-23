import { NewsCard } from "@/components/news-card";
import { mockNews } from "@/lib/mock-data";

export default function NewsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">آخر أخبار الميتا</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mockNews.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
} 