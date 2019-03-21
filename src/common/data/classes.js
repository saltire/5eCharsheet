export default [
  {
    label: 'Barbarian',
    hitDie: 12,
    armor: [
      'Light',
      'Medium',
      'Shield',
    ],
    weapons: [
      'Simple',
      'Martial',
    ],
    savingThrows: [
      'Strength',
      'Constitution',
    ],
    skillChoices: 2,
    skillOptions: [
      'Animal Handling',
      'Athletics',
      'Intimidation',
      'Nature',
      'Perception',
      'Survival',
    ],
    equipment: [
      [
        'Greataxe',
        'Martial+Melee',
      ],
      [
        { Handaxe: 2 },
        'Simple',
      ],
      "Explorer's pack",
      { Javelin: 4 },
    ],
  },
  {
    label: 'Bard',
    hitDie: 8,
    armor: [
      'Light',
    ],
    weapons: [
      'Simple',
      'Hand crossbow',
      'Longsword',
      'Rapier',
      'Shortsword',
    ],
    toolChoices: {
      'Musical instrument': 3,
    },
    savingThrows: [
      'Dexterity',
      'Charisma',
    ],
    skillChoices: 3,
    equipment: [
      [
        'Rapier',
        'Longsword',
        'Simple',
      ],
      [
        "Diplomat's pack",
        "Entertainer's pack",
      ],
      'Musical instrument',
      'Leather armor',
      'Dagger',
    ],
  },
  {
    label: 'Cleric',
    hitDie: 8,
    armor: [
      'Light',
      'Medium',
      'Shield',
    ],
    weapons: [
      'Simple',
    ],
    savingThrows: [
      'Wisdom',
      'Charisma',
    ],
    skillChoices: 2,
    skillOptions: [
      'History',
      'Insight',
      'Medicine',
      'Persuasion',
      'Religion',
    ],
    equipment: [
      [
        'Mace',
        'Warhammer',
      ],
      [
        'Scale mail',
        'Leather armor',
        'Chain mail',
      ],
      [
        [
          'Light crossbow',
          { Bolt: 20 },
        ],
        'Simple',
      ],
      [
        "Priest's pack",
        "Explorer's pack",
      ],
      'Shield',
      'Holy symbol',
    ],
  },
  {
    label: 'Druid',
    hitDie: 8,
    armor: [
      'Light',
      'Medium',
      'Shield',
    ],
    armorNotes: 'Druids will not wear armor or use shields made of metal.',
    weapons: [
      'Club',
      'Dagger',
      'Dart',
      'Javelin',
      'Mace',
      'Quarterstaff',
      'Scimitar',
      'Sickle',
      'Sling',
      'Spear',
    ],
    tools: [
      'Herbalism kit',
    ],
    savingThrows: [
      'Intelligence',
      'Wisdom',
    ],
    skillChoices: 2,
    skillOptions: [
      'Arcana',
      'Animal Handling',
      'Insight',
      'Medicine',
      'Nature',
      'Perception',
      'Religion',
      'Survival',
    ],
    equipment: [
      [
        'Wooden shield',
        'Simple',
      ],
      [
        'Scimitar',
        'Simple+Melee',
      ],
      'Leather armor',
      "Explorer's pack",
      'Druidic focus',
    ],
  },
  {
    label: 'Fighter',
    hitDie: 10,
    armor: [
      'Armor',
      'Shield',
    ],
    weapons: [
      'Simple',
      'Martial',
    ],
    savingThrows: [
      'Strength',
      'Constitution',
    ],
    skillChoices: 2,
    skillOptions: [
      'Acrobatics',
      'Animal Handling',
      'Athletics',
      'History',
      'Insight',
      'Intimidation',
      'Perception',
      'Survival',
    ],
    equipment: [
      [
        'Chain Mail',
        [
          'Leather armor',
          'Longbow',
          { Arrow: 20 },
        ],
      ],
      'Martial',
      [
        'Martial',
        'Shield',
      ],
      [
        [
          'Light crossbow',
          { Bolt: 20 },
        ],
        { Handaxe: 2 },
      ],
      [
        "Dungeoneer's pack",
        "Explorer's pack",
      ],
    ],
  },
  {
    label: 'Monk',
    hitDie: 8,
    weapons: [
      'Simple',
      'Shortsword',
    ],
    savingThrows: [
      'Strength',
      'Dexterity',
    ],
    skillChoices: 2,
    skillOptions: [
      'Acrobatics',
      'Athletics',
      'History',
      'Insight',
      'Religion',
      'Stealth',
    ],
    equipment: [
      [
        'Shortsword',
        'Simple',
      ],
      [
        "Dungeoneer's pack",
        "Explorer's pack",
      ],
      { Dart: 10 },
    ],
  },
  {
    label: 'Paladin',
    hitDie: 10,
    armor: [
      'Armor',
      'Shield',
    ],
    weapons: [
      'Simple',
      'Martial',
    ],
    savingThrows: [
      'Wisdom',
      'Charisma',
    ],
    skillChoices: 2,
    skillOptions: [
      'Athletics',
      'Insight',
      'Intimidation',
      'Medicine',
      'Persuasion',
      'Religion',
    ],
    equipment: [
      'Martial',
      [
        'Martial',
        'Shield',
      ],
      [
        { Javelin: 5 },
        'Simple+Melee',
      ],
      [
        "Priest's pack",
        "Explorer's pack",
      ],
      'Chain mail',
      'Holy symbol',
    ],
  },
  {
    label: 'Ranger',
    hitDie: 10,
    armor: [
      'Light',
      'Medium',
      'Shield',
    ],
    weapons: [
      'Simple',
      'Martial',
    ],
    savingThrows: [
      'Strength',
      'Dexterity',
    ],
    skillChoices: 3,
    skillOptions: [
      'Animal Handling',
      'Athletics',
      'Insight',
      'Investigation',
      'Nature',
      'Perception',
      'Stealth',
      'Survival',
    ],
    equipment: [
      [
        'Scale mail',
        'Leather armor',
      ],
      [
        { Shortsword: 2 },
        { 'Simple+Melee': 2 },
      ],
      [
        "Dungeoneer's pack",
        "Explorer's pack",
      ],
      'Longbow',
      { Arrow: 20 },
    ],
  },
  {
    label: 'Rogue',
    hitDie: 8,
    armor: [
      'Light',
    ],
    weapons: [
      'Simple',
      'Hand crossbow',
      'Longsword',
      'Rapier',
      'Shortsword',
    ],
    tools: [
      "Thieves' tools",
    ],
    savingThrows: [
      'Dexterity',
      'Intelligence',
    ],
    skillChoices: 4,
    skillOptions: [
      'Acrobatics',
      'Athletics',
      'Deception',
      'Insight',
      'Intimidation',
      'Investigation',
      'Perception',
      'Performance',
      'Persuasion',
      'Sleight of Hand',
      'Stealth',
    ],
    equipment: [
      [
        'Rapier',
        'Shortsword',
      ],
      [
        [
          'Shortbow',
          { Arrow: 20 },
        ],
        'Shortsword',
      ],
      [
        "Burglar's pack",
        "Dungeoneer's pack",
        "Explorer's pack",
      ],
      'Leather armor',
      { Dagger: 2 },
      "Thieves' tools",
    ],
  },
  {
    label: 'Sorcerer',
    hitDie: 6,
    weapons: [
      'Dagger',
      'Dart',
      'Sling',
      'Quarterstaff',
      'Light crossbow',
    ],
    savingThrows: [
      'Constitution',
      'Charisma',
    ],
    skillChoices: 2,
    skillOptions: [
      'Arcana',
      'Deception',
      'Insight',
      'Intimidation',
      'Persuasion',
      'Religion',
    ],
    equipment: [
      [
        [
          'Light crossbow',
          { Bolt: 20 },
        ],
        'Simple',
      ],
      [
        'Component pouch',
        'Arcane focus',
      ],
      [
        "Dungeoneer's pack",
        "Explorer's pack",
      ],
      { Dagger: 2 },
    ],
  },
  {
    label: 'Warlock',
    hitDie: 8,
    armor: [
      'Light',
    ],
    weapons: [
      'Simple',
    ],
    savingThrows: [
      'Wisdom',
      'Charisma',
    ],
    skillChoices: 2,
    skillOptions: [
      'Arcana',
      'Deception',
      'History',
      'Intimidation',
      'Investigation',
      'Nature',
      'Religion',
    ],
    equipment: [
      [
        [
          'Light crossbow',
          { Bolt: 20 },
        ],
        'Simple',
      ],
      [
        'Component pouch',
        'Arcane focus',
      ],
      [
        "Scholar's pack",
        "Dungeoneer's pack",
      ],
      'Leather armor',
      'Simple',
      { Dagger: 2 },
    ],
  },
  {
    label: 'Wizard',
    hitDie: 6,
    weapons: [
      'Dagger',
      'Dart',
      'Sling',
      'Quarterstaff',
      'Light crossbow',
    ],
    savingThrows: [
      'Intelligence',
      'Wisdom',
    ],
    skillChoices: 2,
    skillOptions: [
      'Arcana',
      'History',
      'Insight',
      'Investigation',
      'Medicine',
      'Religion',
    ],
    equipment: [
      [
        'Quarterstaff',
        'Dagger',
      ],
      [
        'Component pouch',
        'Arcane focus',
      ],
      [
        "Scholar's pack",
        "Explorer's pack",
      ],
      'Spellbook',
    ],
  },
];
