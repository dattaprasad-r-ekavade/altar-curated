export type Essay = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  motif: string;
  room: "The Library" | "Rituals";
  featured?: boolean;
  ritual?: {
    objects: { name: string; note: string }[];
    prompt: string;
  };
};

// Editorial descriptions are temporary, based on the project brief. Full text
// and images should be supplied and approved by Mehak before publication.
export const essays: Essay[] = [
  {
    slug: "i-fear-what-i-crave",
    title: "i fear what i crave",
    eyebrow: "Desire / An opening",
    summary:
      "On the cost of cool detachment, and the courage it takes to put the heart on the line.",
    motif: "I",
    room: "The Library",
    featured: true,
  },
  {
    slug: "the-dream-is-that-it-ends",
    title: "The Dream Is That It Ends",
    eyebrow: "Love / Grief",
    summary:
      "A reflection on grief, mortality and the ordinary gestures that make love visible.",
    motif: "II",
    room: "The Library",
  },
  {
    slug: "the-slog-of-it-all",
    title: "The Slog Of It All",
    eyebrow: "Embodiment / Company",
    summary:
      "For the unfinished, the uncertain and the days that are easier to carry together.",
    motif: "III",
    room: "The Library",
  },
  {
    slug: "the-undying-force-of-my-devotion",
    title: "The Undying Force Of My Devotion",
    eyebrow: "Devotion / Becoming",
    summary:
      "A look back at ambition, shame and the sacred, sometimes embarrassing act of wanting.",
    motif: "IV",
    room: "The Library",
  },
  {
    slug: "creating-a-grounding-evening-ritual",
    title: "Creating a Grounding Evening Ritual",
    eyebrow: "Rituals / Seasonal living",
    summary:
      "A slow way to close the day: a little light, a few breaths, one page and an object to hold.",
    motif: "V",
    room: "Rituals",
    ritual: {
      objects: [
        { name: "A candle", note: "To mark the threshold between day and night." },
        { name: "Reflections in Bloom", note: "A page to set the day down on." },
        { name: "A crystal", note: "Something small and steady for the hand." },
      ],
      prompt: "What am I ready to set down before I sleep?",
    },
  },
];

export const library = essays.filter((essay) => essay.room === "The Library");
export const featuredRitual = essays.find((essay) => essay.ritual)!;

export const communityPrompts = [
  {
    slug: "on-wanting",
    number: "I",
    label: "On wanting",
    title: "What have you learned to want without apology?",
    description: "A space for desire, fear and the things we almost said aloud.",
  },
  {
    slug: "on-the-ordinary",
    number: "II",
    label: "On the ordinary",
    title: "Where did love find you this week?",
    description: "In the small gestures: a cup of chai, cut fruit, a familiar look.",
  },
  {
    slug: "on-becoming",
    number: "III",
    label: "On becoming",
    title: "What are you still in the middle of?",
    description: "No finished version of yourself required.",
  },
];

export const notes = [
  {
    number: "I",
    theme: "A reflection",
    text: "There is a particular kind of courage in admitting you still care.",
  },
  {
    number: "II",
    theme: "A small ritual",
    text: "Notice one ordinary thing that asked nothing of you and still made the day softer.",
  },
  {
    number: "III",
    theme: "A journal prompt",
    text: "Where do you feel most like yourself, even before you can explain why?",
  },
];

export const greenhouseShelves = [
  "Journal",
  "Rituals",
  "Seasonal living",
  "Botanical world",
  "Guides",
  "Journal prompts",
];

export const apothecaryShelves = [
  { name: "Candles", note: "Light for beginnings and endings." },
  { name: "Crystals", note: "Small, steady companions." },
  { name: "Ritual objects", note: "Tools that hold a practice." },
  { name: "Botanical goods", note: "From the garden, for the senses." },
  { name: "Sensory objects", note: "Scent, texture, weight." },
];

export const shopCategories = [
  { name: "Journals", note: "Reflections in Bloom, the first offering." },
  { name: "Digital", note: "Prompt bundles, e-guides and printables." },
  { name: "Decks", note: "Cards for pausing and asking." },
  { name: "Apothecary", note: "Candles, crystals and botanical goods." },
  { name: "Ritual objects", note: "Chosen for a practice, not a shelf." },
];
