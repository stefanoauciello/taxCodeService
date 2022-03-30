import {
  convertEvenValue,
  convertRemainderToChar,
  convertShotValue,
  getNumberMonth,
  getVocal,
  hasNumber,
  isNumber,
  removeSpace,
  removeSpecialChar,
  removeVocal,
  substituteXWithVocals
} from "../../../src/Utils/utils";

describe('should test utils', () => {

  it('should test isNumber function', () => {
    expect(isNumber('123')).toBeTruthy();
    expect(isNumber('12A')).toBeFalsy();
    expect(isNumber('')).toBeFalsy();
    expect(isNumber('AAA')).toBeFalsy();
  });

  it('should test hasNumber function', () => {
    expect(hasNumber('AAA')).toBeFalsy();
    expect(hasNumber('AA1')).toBeTruthy();
    expect(hasNumber('')).toBeFalsy();
  });

  it('should test removeSpecialChar function', () => {
    expect(removeSpecialChar('step%$')).toEqual('step');
  });

  it('should test removeSpace function', () => {
    expect(removeSpace(' step step ')).toEqual('stepstep');
  });

  it('should test removeVocal function', () => {
    expect(removeVocal('ABBA')).toEqual('BB');
    expect(removeVocal('AEBA')).toEqual('B');
    expect(removeVocal('IOAM')).toEqual('M');
    expect(removeVocal('ULU')).toEqual('L');
  });

  it('should test getVocal function', () => {
    expect(getVocal('ABBA')).toEqual('AA');
    expect(getVocal('STEFANO')).toEqual('EAO');
    expect(getVocal('PPP')).toBeNull();
  });

  it('should test getNumberMonth function', () => {
    expect(getNumberMonth('A')).toEqual('01');
    expect(getNumberMonth('B')).toEqual('02');
    expect(getNumberMonth('C')).toEqual('03');
    expect(getNumberMonth('D')).toEqual('04');
    expect(getNumberMonth('E')).toEqual('05');
    expect(getNumberMonth('H')).toEqual('06');
    expect(getNumberMonth('L')).toEqual('07');
    expect(getNumberMonth('M')).toEqual('08');
    expect(getNumberMonth('P')).toEqual('09');
    expect(getNumberMonth('R')).toEqual('10');
    expect(getNumberMonth('S')).toEqual('11');
    expect(getNumberMonth('T')).toEqual('12');
  });

  it('should test convertEvenValue function', () => {
    expect(convertEvenValue('A')).toEqual(0);
    expect(convertEvenValue('0')).toEqual(0);
    expect(convertEvenValue('M')).toEqual(12);
    expect(convertEvenValue('Z')).toEqual(25);
  });

  it('should test convertShotValue function', () => {
    expect(convertShotValue('A')).toEqual(1);
    expect(convertShotValue('0')).toEqual(1);
    expect(convertShotValue('F')).toEqual(13);
    expect(convertShotValue('Z')).toEqual(23);
  });

  it('should test convertRemainderToChar function', () => {
    expect(convertRemainderToChar(0)).toEqual('A');
    expect(convertRemainderToChar(5)).toEqual('F');
  });

  it('should test substituteXWithVocals function', () => {
    expect(substituteXWithVocals('AAA', 'XXX')).toEqual('AAA');
    expect(substituteXWithVocals('AAA', 'CLL')).toEqual('CLL');
    expect(substituteXWithVocals('AEE', 'CLX')).toEqual('CLA');
    expect(substituteXWithVocals(null, 'CLX')).toEqual('CLX');
    expect(substituteXWithVocals(null, 'XXX')).toEqual('XXX');
    expect(substituteXWithVocals('AA', 'SXX')).toEqual('SAA');
    expect(substituteXWithVocals('A', 'SXX')).toEqual('SAX');
    expect(substituteXWithVocals('AA', 'XXX')).toEqual('AAX');
    expect(substituteXWithVocals('A', 'XXX')).toEqual('AXX');
  });

});
