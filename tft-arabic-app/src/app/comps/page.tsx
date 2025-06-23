import { CompCard } from "@/components/comp-card";
import { mockComps } from "@/lib/mock-data";

export default function CompsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">أقوى تركيبات الفرق</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockComps.map((comp) => (
          <CompCard key={comp.id} comp={comp} />
        ))}
      </div>
    </div>
  );
} 