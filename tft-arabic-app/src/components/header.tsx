import Link from "next/link";

export function Header() {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl">
          TFT بالعربي
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/comps" className="text-muted-foreground transition-colors hover:text-foreground">
            تركيبات الفرق
          </Link>
          <Link href="/champions" className="text-muted-foreground transition-colors hover:text-foreground">
            الأبطال
          </Link>
          <Link href="/items" className="text-muted-foreground transition-colors hover:text-foreground">
            الأدوات
          </Link>
          <Link href="/news" className="text-muted-foreground transition-colors hover:text-foreground">
            أخبار الميتا
          </Link>
        </nav>
      </div>
    </header>
  );
} 