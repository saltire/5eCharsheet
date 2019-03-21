export default [
  {
    label: 'Acolyte',
    skills: [
      'Insight',
      'Religion',
    ],
    languageChoices: 2,
  },
  {
    label: 'Charlatan',
    skills: [
      'Deception',
      'Sleight of Hand',
    ],
    tools: [
      'Disguise Kit',
      'Forgery Kit',
    ],
  },
  {
    label: 'Criminal',
    skills: [
      'Deception',
      'Stealth',
    ],
    tools: [
      "Thieves' Tools",
    ],
    toolChoices: {
      'Gaming Set': 1,
    },
  },
  {
    label: 'Entertainer',
    skills: [
      'Acrobatics',
      'Performance',
    ],
    tools: [
      'Disguise Kit',
    ],
    toolChoices: {
      'Musical Instrument': 1,
    },
  },
  {
    label: 'Folk Hero',
    skills: [
      'Animal Handling',
      'Survival',
    ],
    tools: [
      "Artisan's Tools",
      'Vehicle (Land)',
    ],
  },
  {
    label: 'Guild Artisan',
    skills: [
      'Insight',
      'Persuasion',
    ],
    tools: [
      "Artisan's Tools",
    ],
    languageChoices: 1,
  },
  {
    label: 'Hermit',
    skills: [
      'Medicine',
      'Religion',
    ],
    tools: [
      'Herbalism Kit',
    ],
    languageChoices: 1,
  },
  {
    label: 'Noble',
    skills: [
      'History',
      'Persuasion',
    ],
    toolChoices: {
      'Gaming Set': 1,
    },
    languageChoices: 1,
  },
  {
    label: 'Outlander',
    skills: [
      'Athletics',
      'Survival',
    ],
    toolChoices: {
      'Musical Instrument': 1,
    },
    languageChoices: 1,
  },
  {
    label: 'Sage',
    skills: [
      'Arcana',
      'History',
    ],
    languageChoices: 2,
  },
  {
    label: 'Sailor',
    skills: [
      'Athletics',
      'Perception',
    ],
    tools: [
      "Navigator's Tools",
      'Vehicle (Water)',
    ],
  },
  {
    label: 'Soldier',
    skills: [
      'Athletics',
      'Intimidation',
    ],
    tools: [
      'Vehicle (Land)',
    ],
    toolChoices: {
      'Gaming Set': 1,
    },
  },
  {
    label: 'Urchin',
    skills: [
      'Sleight of Hand',
      'Stealth',
    ],
    tools: [
      'Disguise Kit',
      "Thieves' Tools",
    ],
  },
];
