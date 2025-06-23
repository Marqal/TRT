// lib/datadragon.ts

// واجهة (Interface) لتحديد شكل بيانات البطل التي نهتم بها
export interface Champion {
  id: string;
  name: string;
  cost: number;
  traits: string[];
}

// دالة لجلب بيانات الأبطال للـ Set الحالي
export async function getChampionsData() {
  try {
    // ---===[ التعديل النهائي والصحيح هنا ]===---
    // تم تغيير الرابط ليجلب بيانات الموسم 14
    const response = await fetch('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/tft-set14.json');
    
    if (!response.ok) {
      // في حال عدم وجود ملف سيت 14 بعد، يمكننا محاولة الرجوع للسيت الأقدم كخطة بديلة
      // لكن حالياً سنعتبره موجوداً بناءً على كلامك
      throw new Error(`Failed to fetch TFT Set 14 data: ${response.statusText}`);
    }
    
    const tftData = await response.json();
    
    // ---===[ التعديل النهائي والصحيح هنا ]===---
    const champions: Champion[] = tftData.items
      .filter((item: any) => item.type?.startsWith('TFT14_Champion')) // الفلترة حسب الموسم 14
      .map((item: any) => ({
        id: item.id.replace(/TFT\d+_/g, ''), // تنظيف ID البطل من أي رقم موسم
        name: item.name,
        cost: item.cost,
        traits: item.traits,
      }));
      
    return champions;

  } catch (error) {
    console.error("Error fetching champions data:", error);
    return []; // إرجاع مصفوفة فارغة في حالة حدوث خطأ
  }
}
