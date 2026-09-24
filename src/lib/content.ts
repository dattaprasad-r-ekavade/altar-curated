export type Essay = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  motif: string;
  featured?: boolean;
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
    motif: "01",
    featured: true,
  },
  {
    slug: "the-dream-is-that-it-ends",
    title: "The Dream Is That It Ends",
    eyebrow: "Love / Grief",
    summary:
      "A reflection on grief, mortality and the ordinary gestures that make love visible.",
    motif: "02",
  },
  {
    slug: "the-slog-of-it-all",
    title: "The Slog Of It All",
    eyebrow: "Embodiment / Company",
    summary:
      "For the unfinished, the uncertain and the days that are easier to carry together.",
    motif: "03",
  },
  {
    slug: "the-undying-force-of-my-devotion",
    title: "The Undying Force Of My Devotion",
    eyebrow: "Devotion / Becoming",
    summary:
      "A look back at ambition, shame and the sacred, sometimes embarrassing act of wanting.",
    motif: "04",
  },
];

export const communityPrompts = [
  {
    number: "01",
    label: "On wanting",
    title: "What have you learned to want without apology?",
    description: "A space for desire, fear and the things we almost said aloud.",
  },
  {
    number: "02",
    label: "On the ordinary",
    title: "Where did love find you this week?",
    description: "In the small gestures: a cup of tea, cut fruit, a familiar look.",
  },
  {
    number: "03",
    label: "On becoming",
    title: "What are you still in the middle of?",
    description: "No finished version of yourself required.",
  },
];
