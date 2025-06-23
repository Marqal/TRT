import { ChampionsView } from "@/components/champions-view";
import { getChampions, getLatestTftVersion, getTraits } from "@/lib/datadragon";
import { Champion } from "@/lib/types";

export default async function ChampionsPage() {
  const version = await getLatestTftVersion();
  
  const [championsData, traitsData] = await Promise.all([
    getChampions(version),
    getTraits(version)
  ]);

  const championsArray: Champion[] = Object.values(championsData).filter(
    (champion: any): champion is Champion => champion && champion.id && champion.id.startsWith('TFT14_')
  );

  return (
    <ChampionsView 
      initialChampions={championsArray} 
      initialTraits={traitsData}
      version={version}
    />
  );
} 