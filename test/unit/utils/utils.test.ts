import {
  convertEvenValue,
  getNumberMonth,
  getVocal,
  hasNumber,
  isNumber,
  removeSpace,
  removeSpecialChar,
  removeVocal
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
  })



});