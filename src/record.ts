export {};

// Record<K,V>
type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '東京', confirmed_cases: 240 },
  Tottori: { kanji_name: '東京', confirmed_cases: 2 },
};

const covid19J: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 32 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 44 },
  Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
//  Shiga: { kanji_name: '滋賀', confirmed_cases: 4 },
};
