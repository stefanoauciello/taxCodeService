import {convertEvenValue, convertRemainderToChar, convertShotValue} from "../Utils/utils";


function getControlCode(taxCode: string): string {

    const evenChars: string[] = []; // pari
    evenChars.push(taxCode.charAt(1));
    evenChars.push(taxCode.charAt(3));
    evenChars.push(taxCode.charAt(5));
    evenChars.push(taxCode.charAt(7));
    evenChars.push(taxCode.charAt(9));
    evenChars.push(taxCode.charAt(11));
    evenChars.push(taxCode.charAt(13));

    const convertedEvenChars = evenChars.map((value) => convertEvenValue(value));

    const shotChars: string[] = [];  // dispari
    shotChars.push(taxCode.charAt(0));
    shotChars.push(taxCode.charAt(2));
    shotChars.push(taxCode.charAt(4));
    shotChars.push(taxCode.charAt(6));
    shotChars.push(taxCode.charAt(8));
    shotChars.push(taxCode.charAt(10));
    shotChars.push(taxCode.charAt(12));
    shotChars.push(taxCode.charAt(14));

    const convertedShotChars = shotChars.map((value) => convertShotValue(value));

    const allElement = [...convertedEvenChars, ...convertedShotChars];

    const sum = allElement.reduce((partialSum, a) => partialSum + a, 0);

    const remainder = sum % 26;

    return convertRemainderToChar(remainder);
}

export {getControlCode}