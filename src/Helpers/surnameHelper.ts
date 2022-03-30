import { getVocal, removeSpace, removeSpecialChar, removeVocal, substituteXWithVocals } from "../Utils/utils";

function getSurname(surname: string): string {

  surname = surname.toUpperCase();

  const oldSurname = String(surname);
  const vocals = getVocal(oldSurname);

  surname = removeSpecialChar(surname);
  surname = removeSpace(surname);
  surname = removeVocal(surname);

  let label = '';

  if (surname.length >= 3) {
    label = surname.charAt(0) + surname.charAt(1) + surname.charAt(2);
  } else if (surname.length === 2) {
    label = surname.charAt(0) + surname.charAt(1) + 'X';
  } else if (surname.length === 1) {
    label = surname.charAt(0) + 'XX';
  } else {
    label = 'XXX';
  }

  label = substituteXWithVocals(vocals, label);

  return label;
}

export { getSurname };