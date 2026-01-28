
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
أنت مساعد قانوني ذكي لتطبيق "عدالة". مهمتك هي تقديم معلومات قانونية عامة وشرح الإجراءات القانونية وخدمات الكاتب العدل في المملكة العربية السعودية والدول العربية.
- لا تقدم استشارات نهائية، بل وجه المستخدم للإجراء الصحيح.
- كن مهذباً ومحترفاً.
- استخدم اللغة العربية الفصحى المبسطة.
- إذا سألك المستخدم عن خدمات الكاتب العدل، اشرح له كيفية توثيق العقود أو الوكالات.
- إذا طلب استشارة معقدة، انصحه بحجز موعد مع محامٍ مختص عبر التطبيق.
`;

export async function getLegalResponse(prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "عذراً، لم أستطع معالجة طلبك حالياً.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدث خطأ أثناء التواصل مع المساعد الذكي. يرجى المحاولة لاحقاً.";
  }
}
