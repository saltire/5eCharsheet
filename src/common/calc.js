import { classes, races } from './data';
import { mod } from './utils';


export function getRace(char) {
  return races.find(r => r.label === char.race);
}

export function getClass(char) {
  return classes.find(c => c.label === char.class);
}

export function getAbilityBonuses(char) {
  const race = getRace(char);
  const subrace = race && (race.subraces || []).find(r => r.label === char.subrace);
  const bonuses = Object.assign({}, (race && race.abilities) || {});
  Object.entries((subrace && subrace.abilities) || {}).forEach(([ability, score]) => {
    bonuses[ability] = (bonuses[ability] || 0) + score;
  });

  return bonuses;
}

export function getHitPoints(char) {
  const clss = getClass(char);
  const con = char.abilities.Constitution;
  return clss && con && (clss.hitDie + mod(con));
}

export function getProficiencyBonus(char) {
  return Math.floor(((char.level || 1) + 7) / 4);
}

export function getProficientSkills(char) {
  const race = getRace(char);
  const profSkills = new Set((race && race.skills) || []);

  return Array.from(profSkills);
}

export function getSkillChoices(char) {
  const race = getRace(char);
  const clss = getClass(char);
  return ((race && race.skillChoices) || 0) + ((clss && clss.skillChoices) || 0);
}
