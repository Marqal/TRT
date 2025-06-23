import { ItemCard } from "@/components/item-card";
import { getItems, getLatestTftVersion } from "@/lib/datadragon";
import { Item } from "@/lib/types";

export default async function ItemsPage() {
  const version = await getLatestTftVersion();
  const itemsData = await getItems(version);
  
  const itemImageUrlBase = `https://ddragon.leagueoflegends.com/cdn/${version}/img/tft-item/`;

  const allItems: Item[] = Object.values(itemsData).map((item: any) => ({
    ...item,
    type: (item.from && item.from.length > 0) ? 'combined' : 'basic',
    desc: item.description, // a lot of items have 'description' instead of 'desc'
  }));

  const itemImageUrls = allItems.reduce((acc, item) => {
    acc[item.id] = `${itemImageUrlBase}${item.icon}`;
    return acc;
  }, {} as Record<string, string>);

  const basicItems = allItems.filter((item) => item.type === "basic" && !item.id.includes('TFT_Item_Grant_') && item.name);
  const combinedItems = allItems.filter((item) => item.type === "combined" && item.name && item.from.length === 2);


  return (
    <div className="container py-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-6">الأدوات الأساسية</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {basicItems.map((item) => (
            <ItemCard 
              key={item.id} 
              item={item}
              itemImageUrl={itemImageUrls[item.id]}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-6">الأدوات المدمجة</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {combinedItems.map((item) => (
            <ItemCard 
              key={item.id} 
              item={item}
              itemImageUrl={itemImageUrls[item.id]}
              componentImageUrls={item.from.map(id => itemImageUrls[id])}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 