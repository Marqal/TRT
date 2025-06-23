import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { mockNews } from "@/lib/mock-data";

type NewsArticle = typeof mockNews[0];

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <img
          src={`https://placehold.co/400x200/27272a/fafafa/png?text=خبر`}
          alt={article.title}
          className="h-48 w-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="mb-2">{article.title}</CardTitle>
        <p className="text-muted-foreground">{article.excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 text-xs text-muted-foreground">
        <span>بواسطة: {article.author}</span>
        <span className="mx-2">•</span>
        <span>{new Date(article.date).toLocaleDateString("ar-EG")}</span>
      </CardFooter>
    </Card>
  );
} 