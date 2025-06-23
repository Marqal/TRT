// app/champions/page.tsx
import { getChampionsData } from "@/lib/datadragon";
import type { Metadata } from 'next';
import Image from "next/image"; // سنستخدم مكون الصور من Next.js للأداء الأفضل

// إضافة بيانات وصفية خاصة بصفحة الأبطال لتحسين SEO
export const metadata: Metadata = {
  title: 'الأبطال', // سيظهر في المتصفح: "الأبطال | TFT بالعربي"
  description: 'تصفح قائمة جميع أبطال الموسم 14 في لعبة Teamfight Tactics، تعرف على تكلفتهم وقبائلهم.',
};

export default async function ChampionsPage() {
  // 1. جلب بيانات الأبطال من الدالة التي أنشأناها.
  //    يتم هذا على السيرفر قبل إرسال الصفحة للمتصفح.
  const champions = await getChampionsData();

  // 2. حالة وجود خطأ أو عدم وجود بيانات
  if (!champions || champions.length === 0) {
    return (
      <section className="container mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold">خطأ في تحميل بيانات الأبطال</h1>
        <p className="mt-4 text-gray-400">حدث خطأ ما أثناء جلب البيانات، يرجى المحاولة مرة أخرى لاحقاً.</p>
      </section>
    );
  }

  // 3. عرض البيانات في حال نجاح الجلب
  return (
    <section className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        أبطال الموسم 14
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-4">
        {champions
          // ترتيب الأبطال حسب التكلفة
          .sort((a, b) => a.cost - b.cost)
          .map((champion) => (
            <div 
              key={champion.id} 
              className="group relative flex flex-col items-center text-center transition-all duration-200 hover:scale-105"
            >
              <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full border-2 border-gray-900 z-10 cost-${champion.cost}`}>
                <span className="flex items-center justify-center h-full text-xs font-bold text-white">
                  {champion.cost}
                </span>
              </div>
              <Image
                // رابط صورة البطل من Community Dragon
                src={`https://raw.communitydragon.org/latest/game/assets/ux/tft/champions/champion_tiles/tft14_${champion.id.toLowerCase()}.tft_set14.png`}
                alt={champion.name}
                width={100}
                height={100}
                className={`rounded-lg border-2 cost-border-${champion.cost} group-hover:border-yellow-400 transition-colors`}
              />
              <h3 className="mt-2 font-semibold text-sm text-white truncate w-full">
                {champion.name}
              </h3>
            </div>
        ))}
      </div>
    </section>
  );
}
