export default [
  {
    label: 'Acolyte',
    skills: [
      'Insight',
      'Religion',
    ],
    languageChoices: 2,
    equipment: [
      'Holy symbol',
      [
        'Prayer book',
        'Prayer wheel',
      ],
      { Incense: 5 },
      'Vestments',
      'Common clothes',
      'Belt pouch',
      { gp: 15 },
    ],
  },
  {
    label: 'Charlatan',
    skills: [
      'Deception',
      'Sleight of Hand',
    ],
    tools: [
      'Disguise kit',
      'Forgery kit',
    ],
    equipment: [
      'Fine clothes',
      'Disguise kit',
      [
        { 'Stoppered bottle of colored liquid': 10 },
        'Weighted dice',
        'Deck of marked cards',
        'Signet ring',
      ],
      'Belt pouch',
      { gp: 15 },
    ],
  },
  {
    label: 'Criminal',
    skills: [
      'Deception',
      'Stealth',
    ],
    tools: [
      "Thieves' tools",
    ],
    toolChoices: {
      'Gaming set': 1,
    },
    equipment: [
      'Crowbar',
      'Dark common clothes with hood',
      'Belt pouch',
      { gp: 15 },
    ],
  },
  {
    label: 'Entertainer',
    skills: [
      'Acrobatics',
      'Performance',
    ],
    tools: [
      'Disguise kit',
    ],
    toolChoices: {
      'Musical instrument': 1,
    },
    equipment: [
      'Musical instrument',
      [
        'Love letter',
        'Lock of hair',
        'Trinket',
      ],
      'Costume',
      'Belt pouch',
      { gp: 15 },
    ],
  },
  {
    label: 'Folk Hero',
    skills: [
      'Animal Handling',
      'Survival',
    ],
    tools: [
      "Artisan's tools",
      'Vehicle (land)',
    ],
    equipment: [
      "Artisan's tools",
      'Shovel',
      'Iron pot',
      'Common clothes',
      'Belt pouch',
      { gp: 10 },
    ],
  },
  {
    label: 'Guild Artisan',
    skills: [
      'Insight',
      'Persuasion',
    ],
    tools: [
      "Artisan's tools",
    ],
    languageChoices: 1,
    equipment: [
      "Artisan's tools",
      'Letter of introduction from your guild',
      "Traveler's clothes",
      'Belt pouch',
      { gp: 15 },
    ],
  },
  {
    label: 'Hermit',
    skills: [
      'Medicine',
      'Religion',
    ],
    tools: [
      'Herbalism kit',
    ],
    languageChoices: 1,
    equipment: [
      'Scroll case stuffed with notes',
      'Winter blanket',
      'Common clothes',
      'Herbalism kit',
      { gp: 5 },
    ],
  },
  {
    label: 'Noble',
    skills: [
      'History',
      'Persuasion',
    ],
    toolChoices: {
      'Gaming set': 1,
    },
    languageChoices: 1,
    equipment: [
      'Fine clothes',
      'Signet ring',
      'Scroll of pedigree',
      'Purse',
      { gp: 25 },
    ],
  },
  {
    label: 'Outlander',
    skills: [
      'Athletics',
      'Survival',
    ],
    toolChoices: {
      'Musical instrument': 1,
    },
    languageChoices: 1,
    equipment: [
      'Staff',
      'Hunting trap',
      'Trophy from an animal',
      "Traveler's clothes",
      'Belt pouch',
      { gp: 10 },
    ],
  },
  {
    label: 'Sage',
    skills: [
      'Arcana',
      'History',
    ],
    languageChoices: 2,
    equipment: [
      'Bottle of black ink',
      'Quill',
      'Small knife',
      'Letter from a dead colleague',
      'Common clothes',
      'Belt pouch',
      { gp: 10 },
    ],
  },
  {
    label: 'Sailor',
    skills: [
      'Athletics',
      'Perception',
    ],
    tools: [
      "Navigator's tools",
      'Vehicle (water)',
    ],
    equipment: [
      'Club',
      '50 feet of silk rope',
      'Lucky charm',
      'Common clothes',
      'Belt pouch',
      { gp: 10 },
    ],
  },
  {
    label: 'Soldier',
    skills: [
      'Athletics',
      'Intimidation',
    ],
    tools: [
      'Vehicle (land)',
    ],
    toolChoices: {
      'Gaming set': 1,
    },
    equipment: [
      'Rank insignia',
      'Trophy from a fallen enemy',
      [
        'Bone dice',
        'Deck of cards',
      ],
      'Common clothes',
      'Belt pouch',
      { gp: 10 },
    ],
  },
  {
    label: 'Urchin',
    skills: [
      'Sleight of Hand',
      'Stealth',
    ],
    tools: [
      'Disguise kit',
      "Thieves' tools",
    ],
    equipment: [
      'Small knife',
      'Map of home city',
      'Pet mouse',
      'Token to remember your parents by',
      'Common clothes',
      'Belt pouch',
      { gp: 10 },
    ],
  },
];
