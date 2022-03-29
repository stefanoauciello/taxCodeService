import {getVocal, removeSpace, removeSpecialChar, removeVocal, substituteXWithVocals} from "../Utils/utils";

function getName(name: string): string {
    const oldName = String(name);
    const vocals = getVocal(oldName);

    name = removeSpecialChar(name);
    name = removeSpace(name);
    name = removeVocal(name);

    let label = '';

    if (name.length >= 4) {
        label = name.charAt(0) + name.charAt(2) + name.charAt(3);
    } else if (name.length === 3) {
        label = name.charAt(0) + name.charAt(1) + name.charAt(2);
    } else if (name.length === 2) {
        label = name.charAt(0) + name.charAt(1) + 'X';
    } else if (name.length === 1) {
        label = name.charAt(0) + 'XX';
    } else {
        label = 'XXX';
    }

    label = substituteXWithVocals(vocals, label);

    return label;
}

export {getName}