import { TaxServiceError } from "../Errors/taxServiceError";

import log4js from "log4js";

const logger = log4js.getLogger();
logger.level = "all";

const vocals = [ 'A', 'E', 'I', 'O', 'U' ];

function isNumber(value: string) {
  return /^\d+$/.test(value);
}

function hasNumber(myString: string) {
  return /\d/.test(myString);
}

function removeSpecialChar(input: string): string {
  return input.replace(/[^a-zA-Z0-9 ]/g, "");
}

function removeSpace(input: string): string {
  return input.replaceAll(' ', '');
}

function removeVocal(input: string): string {
  input = input.replaceAll('A', '');
  input = input.replaceAll('E', '');
  input = input.replaceAll('I', '');
  input = input.replaceAll('O', '');
  input = input.replaceAll('U', '');
  return input;
}

function getVocal(input: string): string | null {
  const vocalsFounded: string[] = [];
  for (const character of input) {
    if (vocals.includes(character)) {
      vocalsFounded.push(character);
    }
  }
  if (vocalsFounded.length > 0) {
    return vocalsFounded.join('');
  } else {
    return null;
  }
}

function getNumberMonth(month: string): string {
  switch (month) {
    case 'A': {
      return '01';
    }
    case 'B': {
      return '02';
    }
    case 'C': {
      return '03';
    }
    case 'D': {
      return '04';
    }
    case 'E': {
      return '05';
    }
    case 'H': {
      return '06';
    }
    case 'L': {
      return '07';
    }
    case 'M': {
      return '08';
    }
    case 'P': {
      return '09';
    }
    case 'R': {
      return '10';
    }
    case 'S': {
      return '11';
    }
    case 'T': {
      return '12';
    }
    default:
      logger.error('Invalid Month');
      throw new TaxServiceError(400, 'Invalid Month');
  }
}

function getCharMonth(month: string): string {
  switch (month) {
    case '01': {
      return 'A';
    }
    case '02': {
      return 'B';
    }
    case '03': {
      return 'C';
    }
    case '04': {
      return 'D';
    }
    case '05': {
      return 'E';
    }
    case '06': {
      return 'H';
    }
    case '07': {
      return 'L';
    }
    case '08': {
      return 'M';
    }
    case '09': {
      return 'P';
    }
    case '10': {
      return 'R';
    }
    case '11': {
      return 'S';
    }
    case '12': {
      return 'T';
    }
    default:
      logger.error('Invalid Month');
      throw new TaxServiceError(400, 'Invalid Month');
  }
}

function convertEvenValue(char: string): number {
  switch (char) {
    case 'A':
    case '0': {
      return 0;
    }
    case 'B':
    case '1': {
      return 1;
    }
    case 'C':
    case '2': {
      return 2;
    }
    case 'D':
    case '3': {
      return 3;
    }
    case 'E':
    case '4': {
      return 4;
    }
    case 'F':
    case '5': {
      return 5;
    }
    case 'G':
    case '6': {
      return 6;
    }
    case 'H':
    case '7': {
      return 7;
    }
    case 'I':
    case '8': {
      return 8;
    }
    case 'J':
    case '9': {
      return 9;
    }
    case 'K' : {
      return 10;
    }
    case 'L' : {
      return 11;
    }
    case 'M' : {
      return 12;
    }
    case 'N' : {
      return 13;
    }
    case 'O' : {
      return 14;
    }
    case 'P' : {
      return 15;
    }
    case 'Q' : {
      return 16;
    }
    case 'R' : {
      return 17;
    }
    case 'S' : {
      return 18;
    }
    case 'T' : {
      return 19;
    }
    case 'U' : {
      return 20;
    }
    case 'V' : {
      return 21;
    }
    case 'W' : {
      return 22;
    }
    case 'X' : {
      return 23;
    }
    case 'Y' : {
      return 24;
    }
    case 'Z' : {
      return 25;
    }
    default:
      logger.error('Invalid Conversion');
      throw new TaxServiceError(400, 'Invalid Conversion');
  }
}

function convertShotValue(char: string): number {
  switch (char) {
    case 'A':
    case '0': {
      return 1;
    }
    case 'B':
    case '1': {
      return 0;
    }
    case 'C':
    case '2': {
      return 5;
    }
    case 'D':
    case '3': {
      return 7;
    }
    case 'E':
    case '4': {
      return 9;
    }
    case 'F':
    case '5': {
      return 13;
    }
    case 'G':
    case '6': {
      return 15;
    }
    case 'H':
    case '7': {
      return 17;
    }
    case 'I':
    case '8': {
      return 19;
    }
    case 'J':
    case '9': {
      return 21;
    }
    case 'K' : {
      return 2;
    }
    case 'L' : {
      return 4;
    }
    case 'M' : {
      return 18;
    }
    case 'N' : {
      return 20;
    }
    case 'O' : {
      return 11;
    }
    case 'P' : {
      return 3;
    }
    case 'Q' : {
      return 6;
    }
    case 'R' : {
      return 8;
    }
    case 'S' : {
      return 12;
    }
    case 'T' : {
      return 14;
    }
    case 'U' : {
      return 16;
    }
    case 'V' : {
      return 10;
    }
    case 'W' : {
      return 22;
    }
    case 'X' : {
      return 25;
    }
    case 'Y' : {
      return 24;
    }
    case 'Z' : {
      return 23;
    }
    default:
      logger.error('Invalid Conversion');
      throw new TaxServiceError(400, 'Invalid Conversion');
  }
}

function convertRemainderToChar(char: number): string {
  switch (char) {
    case 0: {
      return 'A';
    }
    case 1: {
      return 'B';
    }
    case 2: {
      return 'C';
    }
    case 3: {
      return 'D';
    }
    case 4: {
      return 'E';
    }
    case 5: {
      return 'F';
    }
    case 6: {
      return 'G';
    }
    case 7: {
      return 'H';
    }
    case 8: {
      return 'I';
    }
    case 9: {
      return 'J';
    }
    case 10: {
      return 'K';
    }
    case 11: {
      return 'L';
    }
    case 12: {
      return 'M';
    }
    case 13: {
      return 'N';
    }
    case 14: {
      return 'O';
    }
    case 15: {
      return 'P';
    }
    case 16: {
      return 'Q';
    }
    case 17: {
      return 'R';
    }
    case 18: {
      return 'S';
    }
    case 19: {
      return 'T';
    }
    case 20: {
      return 'U';
    }
    case 21: {
      return 'V';
    }
    case 22: {
      return 'W';
    }
    case 23: {
      return 'X';
    }
    case 24: {
      return 'Y';
    }
    case 25: {
      return 'Z';
    }
    default:
      logger.error('Invalid Conversion');
      throw new TaxServiceError(400, 'Invalid Conversion');
  }
}

function substituteXWithVocals(vocals, label) {
  if (vocals && label.includes('X')) {
    const count = label.split('').filter(x => x === 'X').length;
    if (count === 3) {
      if (vocals.length > 2) {
        label = vocals.charAt(0) + vocals.charAt(1) + vocals.charAt(2);
      } else if (vocals.length === 2) {
        label = vocals.charAt(0) + vocals.charAt(1) + 'X';
      } else if (vocals.length === 1) {
        label = vocals.charAt(0) + 'XX';
      }
    } else if (count === 2) {
      if (vocals.length > 1) {
        label = label.charAt(0) + vocals.charAt(0) + vocals.charAt(1);
      } else if (vocals.length === 1) {
        label = label.charAt(0) + vocals.charAt(0) + 'X';
      }

    } else if (count === 1 && vocals.length > 0) {
      label = label.charAt(0) + label.charAt(1) + vocals.charAt(0);
    }
  }
  return label;
}

export {
  removeSpecialChar,
  removeVocal,
  getCharMonth,
  convertEvenValue,
  convertShotValue,
  convertRemainderToChar,
  getNumberMonth,
  getVocal,
  substituteXWithVocals,
  removeSpace,
  isNumber,
  hasNumber
};