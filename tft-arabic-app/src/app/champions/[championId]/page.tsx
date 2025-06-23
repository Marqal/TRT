import { getChampionDetails, getChampions, getLatestTftVersion } from "@/lib/datadragon";
import { Champion } from "@/lib/types";

// This function helps Next.js to know which champion pages to generate at build time
export async function generateStaticParams() {
  const version = await getLatestTftVersion();
  const championsData = await getChampions(version);
  const championsArray: Champion[] = Object.values(championsData).filter(
    (champion: any): champion is Champion => champion && champion.id && champion.id.startsWith('TFT14_')
  );
  return championsArray.map((champion) => ({
    championId: champion.id,
  }));
}

export default async function ChampionDetailPage({ params }: { params: { championId: string } }) {
  // The championId in the URL is the Data Dragon ID like 'TFT14_Garen'
  // We need to extract the champion's short name for getChampionDetails, e.g., 'Garen'
  const championName = params.championId.startsWith('TFT14_') 
    ? params.championId.substring(6)
    : params.championId;
    
  const champion = await getChampionDetails(championName);

  if (!champion) {
    return (
      <div className="container py-8 text-center">
        <h1 className="text-2xl">لم يتم العثور على البطل.</h1>
      </div>
    );
  }
  
  // Community Dragon provides a path for the icon. We need to build the full URL.
  const cdragonAssetBaseUrl = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/';
  const championImage = `${cdragonAssetBaseUrl}${champion.squareIcon.toLowerCase().replace('/lol-game-data/assets/', '')}`;

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img src={championImage} alt={champion.name} className="w-full rounded-lg border-2 border-primary" />
          <h1 className="text-4xl font-bold mt-4">{champion.name}</h1>
          <p className="text-2xl text-yellow-400 mt-2">السعر: {champion.cost ?? champion.tier} 💰</p>
        </div>
        <div className="md:w-2/3">
          {champion.ability && (
            <>
              <h2 className="text-2xl font-bold mb-4">القدرة: {champion.ability.name}</h2>
              <div className="flex items-start gap-4">
                <img src={`${cdragonAssetBaseUrl}${champion.ability.icon.toLowerCase().replace('/lol-game-data/assets/', '')}`} alt={champion.ability.name} className="w-16 h-16 rounded-md border" />
                <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: champion.ability.desc }}></p>
              </div>
            </>
          )}
          
          <h2 className="text-2xl font-bold mt-8 mb-4">السمات (Traits)</h2>
          <div className="flex flex-wrap gap-2">
            {champion.traits && champion.traits.map((trait: any) => (
              <div key={trait.name} className="bg-muted px-3 py-1 rounded-md">{trait.name}</div>
            ))}
          </div>

          {champion.stats && (
            <>
              <h2 className="text-2xl font-bold mt-8 mb-4">الإحصائيات (Stats)</h2>
              <div className="grid grid-cols-2 gap-4">
                  <div><strong>❤️ الصحة:</strong> {champion.stats.hp}</div>
                  <div><strong>💧 المانا:</strong> {champion.stats.mana}</div>
                  <div><strong>🛡️ الدرع:</strong> {champion.stats.armor}</div>
                  <div><strong>✨ مقاومة السحر:</strong> {champion.stats.magicResist}</div>
                  <div><strong>⚔️ الضرر:</strong> {champion.stats.damage}</div>
                  <div><strong>💨 سرعة الهجوم:</strong> {champion.stats.attackSpeed}</div>
                  <div><strong>🎯 مدى الهجوم:</strong> {champion.stats.range}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 