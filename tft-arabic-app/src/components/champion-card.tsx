import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Champion } from "@/lib/types";

// The Champion type is now imported from a central file.
// The old local interface has been removed.

const costTextColorMap: { [key: number]: string } = {
  1: "text-gray-400",
  2: "text-green-400",
  3: "text-blue-400",
  4: "text-purple-400",
  5: "text-yellow-400",
};

const costBorderColorMap: { [key: number]: string } = {
  1: "border-gray-500",
  2: "border-green-500",
  3: "border-blue-500",
  4: "border-purple-500",
  5: "border-yellow-500",
};

export function ChampionCard({ champion, championImageUrl, traitImageUrls, traitsData }: { 
  champion: Champion, 
  championImageUrl: string, 
  traitImageUrls: Record<string, string>,
  traitsData: any 
}) {
  const championName = champion.name;
  const cost = champion.cost ?? champion.tier ?? 0;

  return (
    <div className={`relative aspect-[1/1.2] rounded-md overflow-hidden border-2 bg-black ${costBorderColorMap[cost] || 'border-gray-500'}`}>
      {/* Background Image */}
      <img src={championImageUrl} alt={championName} className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* Traits */}
      <div className="absolute top-2 left-2 flex flex-col gap-1.5">
        {champion.traits && champion.traits.map((traitId) => {
          const traitName = traitsData[traitId]?.name || traitId;
          const traitIconUrl = traitImageUrls[traitId];
          if (!traitIconUrl) return null;
          return (
            <div key={traitId} className="flex items-center gap-1.5" title={traitName}>
              <img src={traitIconUrl} alt={traitName} className="w-5 h-5 bg-black/50 rounded-full" />
            </div>
          )
        })}
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 p-2">
        <div className="flex justify-between items-center">
          <h3 className="text-white font-bold text-sm truncate">{championName}</h3>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 font-bold">{cost}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="currentColor" className="w-3 h-3 text-yellow-500">
                <circle cx="5" cy="5" r="5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
} 