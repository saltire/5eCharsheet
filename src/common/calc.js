import { backgrounds, classes, races, xpLevels } from './data';
import { mod, sum } from './utils';


export function getRace(char) {
  return races.find(r => r.label === char.race);
}

export function getSubrace(char, raceData) {
  const race = getRace(char, raceData);
  return race && (race.subraces || []).find(r => r.label === char.subrace);
}

export function getClass(char) {
  return classes.find(c => c.label === char.class);
}

export function getBackground(char) {
  return backgrounds.find(b => b.label === char.background);
}

export function getAbilityBonuses(char, raceData) {
  const race = raceData || getRace(char);
  const subrace = getSubrace(char, race);

  const bonuses = { ...(race && race.abilities) || {} };
  Object.entries((subrace && subrace.abilities) || {}).forEach(([ability, score]) => {
    bonuses[ability] = (bonuses[ability] || 0) + score;
  });
  return bonuses;
}

export function getEquipment(char, classData, backgroundData) {
  const clss = classData || getClass(char);
  const background = backgroundData || getBackground(char);

  return Array.from(new Set([
    ...((clss && clss.equipment) || []),
    ...((background && background.equipment) || []),
  ]));
}

export function getLanguages(char, raceData) {
  const race = raceData || getRace(char);
  const subrace = getSubrace(char, race);

  return Array.from(new Set([
    ...((race && race.languages) || []),
    ...((subrace && subrace.languages) || []),
  ]));
}

export function getLanguageChoices(char, raceData, backgroundData) {
  const race = raceData || getRace(char);
  const subrace = getSubrace(char, race);
  const background = backgroundData || getBackground(char);

  return sum(
    race && race.languageChoices,
    subrace && subrace.languageChoices,
    background && background.languageChoices,
  );
}

export function getLevelProgress(char) {
  const currentLevelXP = xpLevels[char.level - 1];
  const nextLevelXP = xpLevels[char.level];
  return (char.xp - currentLevelXP) / (nextLevelXP - currentLevelXP);
}

export function getMaxHitPoints(char, classData) {
  const clss = classData || getClass(char);

  const con = char.abilities.Constitution;
  return clss && con && (clss.hitDie + mod(con));
}

export function getProficiencyBonus(char) {
  return Math.floor(((char.level || 1) + 7) / 4);
}

export function getProficientSkills(char, raceData, backgroundData) {
  const race = raceData || getRace(char);
  const background = backgroundData || getBackground(char);

  const profSkills = new Set([
    ...((race && race.skills) || []),
    ...((background && background.skills) || []),
  ]);
  return Array.from(profSkills);
}

export function getSkillChoices(char, raceData, classData) {
  const race = raceData || getRace(char);
  const clss = classData || getClass(char, classData);

  return sum(race && race.skillChoices, clss && clss.skillChoices);
}

export function getSpeed(char, raceData) {
  const race = raceData || getRace(char);
  const subrace = getSubrace(char, race);

  return (subrace && subrace.speed) || (race && race.speed);
}
