import { formatEquipment, validateEquipment, outputEquipment } from '../equipment-utils';


const rawEq = [
  [
    'Shortsword',
    [
      'Light crossbow',
      { label: 'Bolt', count: 20 },
    ],
    { label: 'Simple melee weapon', tags: ['Simple', 'Melee'] },
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
];

const formattedEq = [
  {
    choices: [
      {
        label: 'Shortsword',
        items: [
          { label: 'Shortsword' },
        ],
      },
      {
        label: 'Light crossbow, Bolt (20)',
        items: [
          { label: 'Light crossbow' },
          { label: 'Bolt', count: 20 },
        ],
      },
      {
        label: 'Simple melee weapon',
        items: [
          {
            placeholder: 'Simple melee weapon',
            options: [
              'Club',
              'Dagger',
              'Greatclub',
              'Handaxe',
              'Javelin',
              'Light hammer',
              'Mace',
              'Quarterstaff',
              'Sickle',
              'Spear',
            ],
            value: undefined,
          },
        ],
      },
    ],
    value: undefined,
  },
  {
    choices: [
      {
        label: 'Shortsword (2)',
        items: [
          { label: 'Shortsword', count: 2 },
        ],
      },
      {
        label: 'Simple melee weapon (2)',
        items: [
          {
            placeholder: 'Simple melee weapon',
            options: [
              'Club',
              'Dagger',
              'Greatclub',
              'Handaxe',
              'Javelin',
              'Light hammer',
              'Mace',
              'Quarterstaff',
              'Sickle',
              'Spear',
            ],
            value: undefined,
          },
          {
            placeholder: 'Simple melee weapon',
            options: [
              'Club',
              'Dagger',
              'Greatclub',
              'Handaxe',
              'Javelin',
              'Light hammer',
              'Mace',
              'Quarterstaff',
              'Sickle',
              'Spear',
            ],
            value: undefined,
          },
        ],
      },
    ],
    value: undefined,
  },
  {
    choices: [
      {
        label: "Dungeoneer's pack",
        items: [
          { label: "Dungeoneer's pack" },
        ],
      },
      {
        label: "Explorer's pack",
        items: [
          { label: "Explorer's pack" },
        ],
      },
    ],
    value: undefined,
  },
  { label: 'Longbow' },
  { label: 'Arrow', count: 20 },
];

test('should format equipment for state', () => {
  expect(formatEquipment(rawEq)).toEqual(formattedEq);
});


const incompleteChoiceEq = [
  {
    choices: [
      {
        label: 'Shortsword (2)',
        items: [
          { label: 'Shortsword', count: 2 },
        ],
      },
      {
        label: 'Simple melee weapon (2)',
        items: [
          {
            placeholder: 'Simple melee weapon',
            options: [
              'Club',
              'Dagger',
              'Greatclub',
            ],
            value: 1,
          },
          {
            placeholder: 'Simple melee weapon',
            options: [
              'Club',
              'Dagger',
              'Greatclub',
            ],
            value: 2,
          },
        ],
      },
    ],
    value: undefined,
  },
  { label: 'Longbow' },
  { label: 'Arrow', count: 20 },
];

const incompleteOptionEq = [
  {
    choices: [
      {
        label: 'Shortsword (2)',
        items: [
          { label: 'Shortsword', count: 2 },
        ],
      },
      {
        label: 'Simple melee weapon (2)',
        items: [
          {
            placeholder: 'Simple melee weapon',
            options: [
              'Club',
              'Dagger',
              'Greatclub',
            ],
            value: 1,
          },
          {
            placeholder: 'Simple melee weapon',
            options: [
              'Club',
              'Dagger',
              'Greatclub',
            ],
            value: undefined,
          },
        ],
      },
    ],
    value: 1,
  },
  { label: 'Longbow' },
  { label: 'Arrow', count: 20 },
];

const completeEq = [
  {
    choices: [
      {
        label: 'Shortsword (2)',
        items: [
          { label: 'Shortsword', count: 2 },
        ],
      },
      {
        label: 'Simple melee weapon (2)',
        items: [
          {
            placeholder: 'Simple melee weapon',
            options: [
              'Club',
              'Dagger',
              'Greatclub',
            ],
            value: 1,
          },
          {
            placeholder: 'Simple melee weapon',
            options: [
              'Club',
              'Dagger',
              'Greatclub',
            ],
            value: 2,
          },
        ],
      },
    ],
    value: 1,
  },
  { label: 'Longbow' },
  { label: 'Arrow', count: 20 },
];

const completeUnusedOptionEq = [
  {
    choices: [
      {
        label: 'Shortsword (2)',
        items: [
          { label: 'Shortsword', count: 2 },
        ],
      },
      {
        label: 'Simple melee weapon (2)',
        items: [
          {
            placeholder: 'Simple melee weapon',
            options: [
              'Club',
              'Dagger',
              'Greatclub',
            ],
            value: undefined,
          },
          {
            placeholder: 'Simple melee weapon',
            options: [
              'Club',
              'Dagger',
              'Greatclub',
            ],
            value: undefined,
          },
        ],
      },
    ],
    value: 0,
  },
  { label: 'Longbow' },
  { label: 'Arrow', count: 20 },
];


test('should return false if a line choice value is undefined', () => {
  expect(validateEquipment(incompleteChoiceEq)).toBe(false);
});

test('should return false if an item option value is undefined', () => {
  expect(validateEquipment(incompleteOptionEq)).toBe(false);
});

test('should return true if all choices and options have values', () => {
  expect(validateEquipment(completeEq)).toBe(true);
});

test('should return true even if unchosen choices have options with undefined values', () => {
  expect(validateEquipment(completeUnusedOptionEq)).toBe(true);
});


const stateEq = [
  {
    choices: [
      {
        label: 'Shortsword',
        items: [
          { label: 'Shortsword' },
        ],
      },
      {
        label: 'Light crossbow, Bolt (20)',
        items: [
          { label: 'Light crossbow' },
          { label: 'Bolt', count: 20 },
        ],
      },
      {
        label: 'Simple melee weapon',
        items: [
          {
            placeholder: 'Simple melee weapon',
            options: [
              'Club',
              'Dagger',
              'Greatclub',
              'Handaxe',
              'Javelin',
              'Light hammer',
              'Mace',
              'Quarterstaff',
              'Sickle',
              'Spear',
            ],
            value: 1,
          },
        ],
      },
    ],
    value: 1,
  },
  {
    choices: [
      {
        label: 'Shortsword (2)',
        items: [
          { label: 'Shortsword', count: 2 },
        ],
      },
      {
        label: 'Simple melee weapon (2)',
        items: [
          {
            placeholder: 'Simple melee weapon',
            options: [
              'Club',
              'Dagger',
              'Greatclub',
              'Handaxe',
              'Javelin',
              'Light hammer',
              'Mace',
              'Quarterstaff',
              'Sickle',
              'Spear',
            ],
            value: 3,
          },
          {
            placeholder: 'Simple melee weapon',
            options: [
              'Club',
              'Dagger',
              'Greatclub',
              'Handaxe',
              'Javelin',
              'Light hammer',
              'Mace',
              'Quarterstaff',
              'Sickle',
              'Spear',
            ],
            value: 3,
          },
        ],
      },
    ],
    value: 1,
  },
  {
    choices: [
      {
        label: "Dungeoneer's pack",
        items: [
          { label: "Dungeoneer's pack" },
        ],
      },
      {
        label: "Explorer's pack",
        items: [
          { label: "Explorer's pack" },
        ],
      },
    ],
    value: 0,
  },
  { label: 'Longbow' },
  { label: 'Arrow', count: 20 },
];

const outputEq = [
  { label: 'Light crossbow' },
  { label: 'Bolt', count: 20 },
  { label: 'Handaxe' },
  { label: 'Handaxe' },
  { label: "Dungeoneer's pack" },
  { label: 'Longbow' },
  { label: 'Arrow', count: 20 },
];

test('should format equipment for output', () => {
  expect(outputEquipment(stateEq)).toEqual(outputEq);
});
