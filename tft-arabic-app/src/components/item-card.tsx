import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Item } from "@/lib/types";

export function ItemCard({ 
  item, 
  itemImageUrl,
  componentImageUrls
}: { 
  item: Item, 
  itemImageUrl: string,
  componentImageUrls?: string[]
}) {
  const isCombined = item.type === 'combined' && item.from.length > 0;

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex-row items-center gap-4">
        <img src={itemImageUrl} alt={item.name} className="w-12 h-12 bg-secondary rounded-md flex-shrink-0" />
        <div>
          <CardTitle>{item.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: item.desc }} />
        {isCombined && componentImageUrls && (
          <div className="mt-4">
            <h4 className="font-semibold text-xs mb-2">الوصفة:</h4>
            <div className="flex items-center gap-2">
              <img src={componentImageUrls[0]} alt="" className="w-8 h-8 bg-muted rounded-md" />
              <span>+</span>
              <img src={componentImageUrls[1]} alt="" className="w-8 h-8 bg-muted rounded-md" />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 