import { weapons } from './data';


export function describe(item) {
  if (typeof item === 'string') {
    return item;
  }
  const { label, count = 1 } = item;
  return count > 1 ? `${label} (${count})` : label;
}

export function formatEquipment(equipment) {
  return (equipment || []).map((line) => {
    if (Array.isArray(line)) {
      return {
        choices: line.map(choice => ({
          label: [].concat(choice).map(describe).join(', '),
          items: [].concat(choice).reduce((choiceItems, choiceItem) => {
            if (choiceItem.tags) {
              return choiceItems.concat([...Array(choiceItem.count || 1)].map(() => ({
                placeholder: choiceItem.label,
                options: weapons
                  .filter(w => choiceItem.tags.every(tag => w.tags.includes(tag)))
                  .map(w => w.label),
                value: undefined,
              })));
            }
            if (typeof choiceItem === 'string') {
              return choiceItems.concat({ label: choiceItem });
            }
            return choiceItems.concat(choiceItem);
          }, []),
        })),
        value: undefined,
      };
    }
    if (typeof line === 'string') {
      return { label: line };
    }
    return line;
  });
}

export function validateEquipment(equipment) {
  return (equipment || []).every((line) => {
    if (!line.choices) {
      return true;
    }
    if (line.value === undefined) {
      return false;
    }
    return line.choices[line.value].items.every((item) => {
      if (!item.options) {
        return true;
      }
      return item.value !== undefined;
    });
  });
}

export function outputEquipment(equipment) {
  return (equipment || [])
    .reduce((output, line) => {
      if (line.choices) {
        return output.concat(line.choices[line.value].items
          .map(item => (item.options ? { label: item.options[item.value] } : item)));
      }
      return output.concat(line);
    }, []);
}
