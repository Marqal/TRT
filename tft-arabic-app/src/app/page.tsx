import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">مرحباً بك في موقع TFT بالعربي</h1>
      <p className="text-lg mb-8">هذا هو زر من Shadcn/UI:</p>
      <Button>اضغط هنا</Button>
    </main>
  );
}
