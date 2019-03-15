import classes from './data/classes';
import races from './data/races';


export {
  classes,
  races,
};

export const abilities = [
  'Strength',
  'Dexterity',
  'Constitution',
  'Intelligence',
  'Wisdom',
  'Charisma',
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

export const languages = [
  {
    label: 'Common',
    type: 'Standard',
  },
  {
    label: 'Dwarvish',
    type: 'Standard',
  },
  {
    label: 'Elvish',
    type: 'Standard',
  },
  {
    label: 'Giant',
    type: 'Standard',
  },
  {
    label: 'Gnomish',
    type: 'Standard',
  },
  {
    label: 'Goblin',
    type: 'Standard',
  },
  {
    label: 'Halfling',
    type: 'Standard',
  },
  {
    label: 'Orc',
    type: 'Standard',
  },
  {
    label: 'Abyssal',
    type: 'Exotic',
  },
  {
    label: 'Celestial',
    type: 'Exotic',
  },
  {
    label: 'Draconic',
    type: 'Exotic',
  },
  {
    label: 'Deep Speech',
    type: 'Exotic',
  },
  {
    label: 'Infernal',
    type: 'Exotic',
  },
  {
    label: 'Primordial',
    type: 'Exotic',
  },
  {
    label: 'Sylvan',
    type: 'Exotic',
  },
  {
    label: 'Undercommon',
    type: 'Exotic',
  },
];

export const skills = [
  {
    label: 'Athletics',
    ability: 'Strength',
  },
  {
    label: 'Acrobatics',
    ability: 'Dexterity',
  },
  {
    label: 'Sleight of Hand',
    ability: 'Dexterity',
  },
  {
    label: 'Stealth',
    ability: 'Dexterity',
  },
  {
    label: 'Arcana',
    ability: 'Intelligence',
  },
  {
    label: 'History',
    ability: 'Intelligence',
  },
  {
    label: 'Investigation',
    ability: 'Intelligence',
  },
  {
    label: 'Nature',
    ability: 'Intelligence',
  },
  {
    label: 'Religion',
    ability: 'Intelligence',
  },
  {
    label: 'Animal Handling',
    ability: 'Wisdom',
  },
  {
    label: 'Insight',
    ability: 'Wisdom',
  },
  {
    label: 'Medicine',
    ability: 'Wisdom',
  },
  {
    label: 'Perception',
    ability: 'Wisdom',
  },
  {
    label: 'Survival',
    ability: 'Wisdom',
  },
  {
    label: 'Deception',
    ability: 'Charisma',
  },
  {
    label: 'Intimidation',
    ability: 'Charisma',
  },
  {
    label: 'Performance',
    ability: 'Charisma',
  },
  {
    label: 'Persuasion',
    ability: 'Charisma',
  },
];

export const blankChar = () => ({
  name: '',
  level: 1,
  xp: 0,
  race: '',
  subrace: '',
  class: '',
  background: '',
  alignment: '',
  abilities: abilities.reduce((abs, name) => Object.assign(abs, { [name]: null }), {}),
  skills: [],
  languages: [],
});
