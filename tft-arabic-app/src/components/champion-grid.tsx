"use client";

import Link from "next/link";
import { ChampionCard } from "./champion-card";
import { Champion } from "@/lib/types";

export function ChampionGrid({ champions, version, traitImageUrls, traitsData }: { 
  champions: Champion[], 
  version: string, 
  traitImageUrls: Record<string, string>,
  traitsData: any 
}) {
  const imageUrlBase = `https://ddragon.leagueoflegends.com/cdn/${version}/img/tft-champion/`;

  // If there are no champions, don't render anything for this grid.
  if (!champions || champions.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
      {champions.map((champion) => {
        const championImageUrl = `${imageUrlBase}${champion.image.full}`;
        return (
          <Link href={`/champions/${champion.id}`} key={champion.id} className="transition-transform hover:scale-105">
            <ChampionCard 
              champion={champion} 
              championImageUrl={championImageUrl} 
              traitImageUrls={traitImageUrls} 
              traitsData={traitsData}
            />
          </Link>
        )
      })}
    </div>
  );
} 