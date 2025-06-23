import { Champion } from "./types";

const DDRAGON_BASE_URL = 'https://ddragon.leagueoflegends.com/cdn';
const CDRAGON_RAW_BASE_URL = 'https://raw.communitydragon.org';

export async function getLatestTftVersion(): Promise<string> {
  const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json', { cache: 'no-store' });
  if (!response.ok) {
    // Fallback version
    return "14.12.1";
  }
  const versions = await response.json();
  return versions[0];
}

export async function getChampions(version: string): Promise<any> {
  const response = await fetch(`${DDRAGON_BASE_URL}/${version}/data/en_US/tft-champion.json`, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Failed to fetch champions from Data Dragon: ${response.statusText}`);
  }
  const json = await response.json();
  return json.data;
}

export async function getChampionDetails(championId: string): Promise<any> {
    const set = "14"; // Using the correct set number
    const url = `${CDRAGON_RAW_BASE_URL}/latest/plugins/rcp-be-lol-game-data/global/default/tft-champion.json`;

    try {
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const championsData = await response.json();
        
        const championKey = `TFT${set}_${championId}`;
        const champion = championsData.items.find((item: any) => item.apiName === championKey);

        if (champion) {
            return champion;
        } else {
            const fallbackChampion = championsData.items.find((item: any) => item.name.toLowerCase() === championId.toLowerCase());
            if(fallbackChampion) return fallbackChampion;

            throw new Error(`Champion with key ${championKey} or name ${championId} not found.`);
        }
    } catch (error) {
        console.error("Failed to fetch or process champion details:", error);
        throw error;
    }
}


export async function getItems(version: string): Promise<any> {
  const response = await fetch(`${DDRAGON_BASE_URL}/${version}/data/en_US/tft-item.json`, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Failed to fetch items from Data Dragon: ${response.statusText}`);
  }
  const json = await response.json();
  return json.data;
}

export async function getTraits(version: string): Promise<any> {
    const response = await fetch(`${DDRAGON_BASE_URL}/${version}/data/en_US/tft-trait.json`, { cache: 'no-store' });
    if (!response.ok) {
        throw new Error(`Failed to fetch traits from Data Dragon: ${response.statusText}`);
    }
    const json = await response.json();
    return json.data;
} 