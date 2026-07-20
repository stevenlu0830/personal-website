export type Song = { label: string; href: string };

// display() arguments — shared with the Run-all orchestrator.
export const TRAVEL_ARG = "Bucket-list Travel Places";
export const CANTO_ARG = "Favourite Canto-pop Songs";
export const OTHER_ARG = "Favourite Songs other than Canto-pop";
export const LANG_ARG = "Spoken Languages";

export const TRAVEL: Record<string, string>[] = [
  { city: "London", country: "UK" },
  { city: "Montreal", country: "Canada" },
  { city: "(Undecided)", country: "Malaysia" },
];

export const SONGS_CANTOPOP: Song[] = [
  {
    label: "張敬軒 Hins Cheung — 隱形遊樂場 Imaginary Fairground",
    href: "https://www.youtube.com/watch?v=y9ntnHvD4tQ",
  },
  {
    label: "林家謙 Terence Lam — 特倫斯夢遊仙境 Wonderland",
    href: "https://www.youtube.com/watch?v=i2lIeLceOQg",
  },
  {
    label: "MC 張天賦 — 小心地滑 Caution Wet Floor",
    href: "https://www.youtube.com/watch?v=FlsxLlozYdw",
  },
];

export const SONGS_OTHER: Song[] = [
  {
    label: "sombr — back to friends",
    href: "https://www.youtube.com/watch?v=c8zq4kAn_O0",
  },
  {
    label: "The Weeknd — Blinding Lights",
    href: "https://www.youtube.com/watch?v=4NRXx6U8ABQ",
  },
  {
    label: "Owl City & Carly Rae Jepsen — Good Time",
    href: "https://www.youtube.com/watch?v=H7HmzwI67ec",
  },
];

export const LANGUAGES: Record<string, string>[] = [
  { language: "English", proficiency: "Native or bilingual proficiency" },
  { language: "Cantonese", proficiency: "Native or bilingual proficiency" },
  { language: "Mandarin", proficiency: "Native or bilingual proficiency" },
];
