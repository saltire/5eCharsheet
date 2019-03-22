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
      { label: 'Simple weapon', tags: ['Simple'] },
      { label: 'Martial weapon', tags: ['Martial'] },
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
        { label: 'Martial melee weapon', tags: ['Martial', 'Melee'] },
      ],
      [
        { label: 'Handaxe', count: 2 },
        { label: 'Simple weapon', tags: ['Simple'] },
      ],
      "Explorer's pack",
      { label: 'Javelin', count: 4 },
    ],
  },
  {
    label: 'Bard',
    hitDie: 8,
    armor: [
      'Light',
    ],
    weapons: [
      { label: 'Simple weapon', tags: ['Simple'] },
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
        { label: 'Simple weapon', tags: ['Simple'] },
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
      { label: 'Simple weapon', tags: ['Simple'] },
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
          { label: 'Bolt', count: 20 },
        ],
        { label: 'Simple weapon', tags: ['Simple'] },
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
        { label: 'Simple weapon', tags: ['Simple'] },
      ],
      [
        'Scimitar',
        { label: 'Simple melee weapon', tags: ['Simple', 'Melee'] },
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
      { label: 'Simple weapon', tags: ['Simple'] },
      { label: 'Martial weapon', tags: ['Martial'] },
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
          { label: 'Arrow', count: 20 },
        ],
      ],
      { label: 'Martial weapon', tags: ['Martial'] },
      [
        { label: 'Martial weapon', tags: ['Martial'] },
        'Shield',
      ],
      [
        [
          'Light crossbow',
          { label: 'Bolt', count: 20 },
        ],
        { label: 'Handaxe', count: 2 },
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
      { label: 'Simple weapon', tags: ['Simple'] },
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
        { label: 'Simple weapon', tags: ['Simple'] },
      ],
      [
        "Dungeoneer's pack",
        "Explorer's pack",
      ],
      { label: 'Dart', count: 10 },
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
      { label: 'Simple weapon', tags: ['Simple'] },
      { label: 'Martial weapon', tags: ['Martial'] },
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
      { label: 'Martial weapon', tags: ['Martial'] },
      [
        { label: 'Martial weapon', tags: ['Martial'] },
        'Shield',
      ],
      [
        { label: 'Javelin', count: 5 },
        { label: 'Simple melee weapon', tags: ['Simple', 'Melee'] },
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
      { label: 'Simple weapon', tags: ['Simple'] },
      { label: 'Martial weapon', tags: ['Martial'] },
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
        { label: 'Shortsword', count: 2 },
        { label: 'Simple melee weapon', tags: ['Simple', 'Melee'], count: 2 },
      ],
      [
        "Dungeoneer's pack",
        "Explorer's pack",
      ],
      'Longbow',
      { label: 'Arrow', count: 20 },
    ],
  },
  {
    label: 'Rogue',
    hitDie: 8,
    armor: [
      'Light',
    ],
    weapons: [
      { label: 'Simple weapon', tags: ['Simple'] },
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
          { label: 'Arrow', count: 20 },
        ],
        'Shortsword',
      ],
      [
        "Burglar's pack",
        "Dungeoneer's pack",
        "Explorer's pack",
      ],
      'Leather armor',
      { label: 'Dagger', count: 2 },
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
          { label: 'Bolt', count: 20 },
        ],
        { label: 'Simple weapon', tags: ['Simple'] },
      ],
      [
        'Component pouch',
        'Arcane focus',
      ],
      [
        "Dungeoneer's pack",
        "Explorer's pack",
      ],
      { label: 'Dagger', count: 2 },
    ],
  },
  {
    label: 'Warlock',
    hitDie: 8,
    armor: [
      'Light',
    ],
    weapons: [
      { label: 'Simple weapon', tags: ['Simple'] },
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
          { label: 'Bolt', count: 20 },
        ],
        { label: 'Simple weapon', tags: ['Simple'] },
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
      { label: 'Simple weapon', tags: ['Simple'] },
      { label: 'Dagger', count: 2 },
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
