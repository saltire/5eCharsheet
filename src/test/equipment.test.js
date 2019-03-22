import { formatEquipment } from '../modals/EquipmentEditor';


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
    options: [
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
          },
        ],
      },
    ],
  },
  {
    options: [
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
          },
        ],
      },
    ],
  },
  {
    options: [
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
  },
  { label: 'Longbow' },
  { label: 'Arrow', count: 20 },
];


test('should format equipment for state', () => {
  expect(formatEquipment(rawEq)).toEqual(formattedEq);
});
