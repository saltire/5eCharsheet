export const races = [
  {
    label: 'Dragonborn',
    abilities: {
      Strength: 2,
      Charisma: 1,
    },
    size: 'Medium',
    speed: 30,
    languages: [
      'Common',
      'Draconic',
    ],
    subraces: [
      {
        label: 'Black',
        damageType: 'Acid',
        breathWeapon: '5 by 30 ft. line (Dex. save)',
      },
      {
        label: 'Blue',
        damageType: 'Lightning',
        breathWeapon: '5 by 30 ft. line (Dex. save)',
      },
      {
        label: 'Brass',
        damageType: 'Fire',
        breathWeapon: '5 by 30 ft. line (Dex. save)',
      },
      {
        label: 'Bronze',
        damageType: 'Lightning',
        breathWeapon: '5 by 30 ft. line (Dex. save)',
      },
      {
        label: 'Copper',
        damageType: 'Acid',
        breathWeapon: '5 by 30 ft. line (Dex. save)',
      },
      {
        label: 'Gold',
        damageType: 'Fire',
        breathWeapon: '5 by 30 ft. line (Dex. save)',
      },
      {
        label: 'Green',
        damageType: 'Poison',
        breathWeapon: '5 by 30 ft. line (Dex. save)',
      },
      {
        label: 'Red',
        damageType: 'Fire',
        breathWeapon: '5 by 30 ft. line (Dex. save)',
      },
      {
        label: 'Silver',
        damageType: 'Cold',
        breathWeapon: '5 by 30 ft. line (Dex. save)',
      },
      {
        label: 'White',
        damageType: 'Cold',
        breathWeapon: '5 by 30 ft. line (Dex. save)',
      },
    ],
  },
  {
    label: 'Dwarf',
    abilities: {
      Constitution: 2,
    },
    size: 'Medium',
    speed: 25,
    darkvision: 60,
    weapons: [
      'Battleaxe',
      'Handaxe',
      'Throwing Hammer',
    ],
    tools: [
      "Smith's Tools",
      "Brewer's Supplies",
      "Mason's Tools",
    ],
    languages: [
      'Common',
      'Dwarvish',
    ],
    subraces: [
      {
        label: 'Hill Dwarf',
        abilities: {
          Wisdom: 1,
        },
        hpMax: 1,
        hpPerLevel: 1,
      },
      {
        label: 'Mountain Dwarf',
        abilities: {
          Strength: 2,
        },
        armor: [
          'Light',
          'Medium',
        ],
      },
    ],
  },
  {
    label: 'Elf',
    abilities: {
      Dexterity: 2,
    },
    size: 'Medium',
    speed: 30,
    darkvision: 60,
    skills: [
      'Perception',
    ],
    languages: [
      'Common',
      'Elvish',
    ],
    subraces: [
      {
        label: 'High Elf',
        abilities: {
          Intelligence: 1,
        },
        weapons: [
          'Longsword',
          'Shortsword',
          'Shortbow',
          'Longbow',
        ],
        extraCantrips: 1,
        extraLanguages: 1,
      },
      {
        label: 'Wood Elf',
        abilities: {
          Wisdom: 1,
        },
        weapons: [
          'Longsword',
          'Shortsword',
          'Shortbow',
          'Longbow',
        ],
        speed: 35,
      },
      {
        label: 'Dark Elf (Drow)',
        abilities: {
          Charisma: 1,
        },
        darkvision: 120,
        cantrips: [
          {
            label: 'dancing lights',
            ability: 'Charisma',
          },
        ],
        weapons: [
          'Rapier',
          'Shortsword',
          'Hand Crossbow',
        ],
      },
    ],
  },
  {
    label: 'Gnome',
    abilities: {
      Intelligence: 2,
    },
    size: 'Small',
    speed: 25,
    darkvision: 60,
    languages: [
      'Common',
      'Gnomish',
    ],
    subraces: [
      {
        label: 'Forest Gnome',
        abilities: {
          Dexterity: 1,
          cantrips: [
            {
              label: 'minor illusion',
              ability: 'Intelligence',
            },
          ],
        },
      },
      {
        label: 'Rock Gnome',
        abilities: {
          Constitution: 1,
        },
        tools: [
          "Artisan's Tools",
        ],
      },
    ],
  },
  {
    label: 'Half-Elf',
    abilities: {
      Charisma: 2,
    },
    extraAbilities: 2,
    size: 'Medium',
    speed: 30,
    darkvision: 60,
    extraSkills: 2,
    languages: [
      'Common',
      'Elvish',
    ],
    extraLanguages: 1,
  },
  {
    label: 'Half-Orc',
    abilities: {
      Strength: 2,
      Constitution: 1,
    },
    size: 'Medium',
    darkvision: 60,
    skills: [
      'Intimidation',
    ],
    languages: [
      'Common',
      'Orc',
    ],
  },
  {
    label: 'Halfling',
    abilities: {
      Dexterity: 2,
    },
    size: 'Small',
    speed: 25,
    languages: [
      'Common',
      'Halfling',
    ],
    subraces: [
      {
        label: 'Lightfoot',
        abilities: {
          Charisma: 1,
        },
      },
      {
        label: 'Stout',
        abilities: {
          Constitution: 1,
        },
      },
    ],
  },
  {
    label: 'Human',
    abilities: {
      Strength: 1,
      Dexterity: 1,
      Constitution: 1,
      Wisdom: 1,
      Intelligence: 1,
      Charisma: 1,
    },
    size: 'Medium',
    speed: 30,
    languages: [
      'Common',
    ],
    extraLanguages: 1,
  },
  {
    label: 'Tiefling',
    abilities: {
      Intelligence: 1,
      Charisma: 2,
    },
    size: 'Medium',
    speed: 30,
    darkvision: 60,
    cantrips: [
      {
        label: 'thaumaturgy',
        ability: 'Charisma',
      },
    ],
    languages: [
      'Common',
      'Infernal',
    ],
  },
];

export const classes = [
  'Barbarian',
  'Bard',
  'Cleric',
  'Druid',
  'Fighter',
  'Monk',
  'Paladin',
  'Ranger',
  'Rogue',
  'Sorcerer',
  'Warlock',
  'Wizard',
];

export const backgrounds = [
  'Acolyte',
  'Charlatan',
  'Criminal',
  'Entertainer',
  'Folk Hero',
  'Guild Artisan',
  'Hermit',
  'Noble',
  'Outlander',
  'Sage',
  'Sailor',
  'Soldier',
  'Urchin',
];

export const alignments = [
  'Lawful Good',
  'Neutral Good',
  'Chaotic Good',
  'Lawful Neutral',
  'True Neutral',
  'Chaotic Neutral',
  'Lawful Evil',
  'Neutral Evil',
  'Chaotic Evil',
];

export const abilities = [
  'Strength',
  'Dexterity',
  'Constitution',
  'Intelligence',
  'Wisdom',
  'Charisma',
];
