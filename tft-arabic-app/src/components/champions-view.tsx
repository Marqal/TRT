"use client";

import { useState, useMemo } from "react";
import { ChampionGrid } from "./champion-grid";
import { Champion, Trait } from "@/lib/types";
import { Input } from "./ui/input";

export function ChampionsView({ initialChampions, initialTraits, version }: {
  initialChampions: Champion[],
  initialTraits: Record<string, Trait>,
  version: string
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChampions = useMemo(() => 
    initialChampions.filter((champion) =>
      champion.name.toLowerCase().includes(searchTerm.toLowerCase())
  ), [initialChampions, searchTerm]);

  const championsByCost = useMemo(() => {
    const byCost: { [key: number]: Champion[] } = {};
    for (let i = 1; i <= 5; i++) {
      byCost[i] = [];
    }
    filteredChampions.forEach(champion => {
      const cost = champion.tier || 0;
      if (cost >= 1 && cost <= 5) {
        byCost[cost].push(champion);
      }
    });
    return byCost;
  }, [filteredChampions]);

  const traitImageUrls = useMemo(() => 
    Object.values(initialTraits).reduce((acc: any, trait: any) => {
      if (trait.id && trait.image?.full) {
        acc[trait.id] = `https://ddragon.leagueoflegends.com/cdn/${version}/img/tft-trait/${trait.image.full}`;
      }
      return acc;
    }, {} as Record<string, string>)
  , [initialTraits, version]);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">الأبطال</h1>
      <p className="text-muted-foreground mb-6">تصفح الأبطال حسب التكلفة أو ابحث بالاسم.</p>
      
      <div className="mb-8">
        <Input
          type="text"
          placeholder="ابحث عن بطل..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {Object.keys(championsByCost).map(cost => (
        <div key={cost} className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-primary pb-2 mb-6">
            <span className="text-yellow-400">{cost}</span> عملات ذهبية
          </h2>
          <ChampionGrid 
            champions={championsByCost[Number(cost)]} 
            version={version} 
            traitImageUrls={traitImageUrls} 
            traitsData={initialTraits}
          />
        </div>
      ))}
    </div>
  );
} 