export default [
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
    subraceLabel: 'Ancestry',
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
      'Throwing hammer',
    ],
    tools: [
      "Smith's tools",
      "Brewer's supplies",
      "Mason's tools",
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
        cantripChoices: 1,
        languageChoices: 1,
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
          'Hand crossbow',
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
          "Artisan's tools",
        ],
      },
    ],
  },
  {
    label: 'Half-Elf',
    abilities: {
      Charisma: 2,
    },
    abilityChoices: 2,
    size: 'Medium',
    speed: 30,
    darkvision: 60,
    skillChoices: 2,
    languages: [
      'Common',
      'Elvish',
    ],
    languageChoices: 1,
  },
  {
    label: 'Half-Orc',
    abilities: {
      Strength: 2,
      Constitution: 1,
    },
    size: 'Medium',
    speed: 30,
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
    languageChoices: 1,
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
