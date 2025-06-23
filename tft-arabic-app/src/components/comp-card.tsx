import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockComps } from "@/lib/mock-data";

type Comp = typeof mockComps[0];

// A mapping for champion cost to its Tailwind CSS border color
const costColorMap: { [key: number]: string } = {
  1: "border-gray-500",
  2: "border-green-500",
  3: "border-blue-500",
  4: "border-purple-500",
  5: "border-yellow-500",
};

export function CompCard({ comp }: { comp: Comp }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{comp.title}</CardTitle>
          <div className="flex items-center gap-2">
            <span className="font-semibold">الفئة:</span>
            <span className="text-lg font-bold text-primary">{comp.tier}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">التناغمات:</h4>
          <div className="flex flex-wrap gap-2">
            {comp.synergies.map((synergy) => (
              <div key={synergy} className="bg-secondary text-secondary-foreground rounded-md px-2 py-1 text-xs">
                {synergy}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">الأبطال:</h4>
          <div className="grid grid-cols-8 gap-2">
            {comp.champions.map((champion) => (
              <div key={champion.id} className="flex flex-col items-center">
                <img
                  src={`https://placehold.co/48x48/27272a/fafafa/png?text=${champion.name.substring(0,2)}`}
                  alt={champion.name}
                  className={`w-12 h-12 rounded-md border-2 ${costColorMap[champion.cost] || 'border-gray-400'}`}
                />
                <span className="text-xs mt-1">{champion.name}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 