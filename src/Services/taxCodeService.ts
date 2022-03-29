import {getSurname} from "../Helpers/surnameHelper";
import {getName} from "../Helpers/nameHelper";
import {getDateBirth} from "../Helpers/dateHelper";
import {getPlaceCode, getPlaceName} from "../Helpers/cityHelper";
import {getControlCode} from "../Helpers/controlCodeHelper";
import {getNumberMonth, hasNumber, isNumber} from "../Utils/utils";
import {TaxServiceError} from "../Errors/taxServiceError";

import log4js from "log4js";

const logger = log4js.getLogger();
logger.level = "all";

function createTaxCode(
    surname: string,
    name: string,
    birthPlace: string,
    dateOfBirth: string,
    gender: string
): string {

    logger.info("Generating Tax Code from info : " + JSON.stringify({surname, name, birthPlace, dateOfBirth, gender}));

    if (!surname || surname.length === 0 || hasNumber(surname)) {
        logger.error('Invalid surname');
        throw new TaxServiceError(400, 'Invalid surname');
    }

    if (!name || name.length === 0 || hasNumber(name)) {
        logger.error('Invalid name');
        throw new TaxServiceError(400, 'Invalid name');
    }

    const taxSurname: string = getSurname(surname);
    const taxName: string = getName(name);
    const taxDate: string = getDateBirth(dateOfBirth, gender);
    const taxPlaceCode: string = getPlaceCode(birthPlace);

    let taxCode = taxSurname + taxName + taxDate + taxPlaceCode;
    const controlCode: string = getControlCode(taxCode);
    taxCode = taxCode + controlCode;

    logger.info("Generated Tax Code  : " + taxCode);

    return taxCode;
}

function decodeTax(tax: string) {

    if (!tax || tax.length != 16) {
        logger.error('Invalid code: it should be a string of 16 characters');
        throw new TaxServiceError(400, 'Invalid code: it should be a string of 16 characters');
    }

    tax = tax.toUpperCase();

    logger.info('Decoding code : ' + tax);

    let gender = 'M';

    const surname = tax.charAt(0) + tax.charAt(1) + tax.charAt(2);
    const name = tax.charAt(3) + tax.charAt(4) + tax.charAt(5);
    const birthYear = tax.charAt(6) + tax.charAt(7);
    const birthMonth = tax.charAt(8);
    const birthDays = tax.charAt(9) + tax.charAt(10);
    const birthPlace = tax.charAt(11) + tax.charAt(12) + tax.charAt(13) + tax.charAt(14);
    const controlChar = tax.charAt(15);

    if (hasNumber(surname)) {
        logger.error('Invalid Surname');
        throw new TaxServiceError(400, 'Invalid Surname');
    }

    if (hasNumber(name)) {
        logger.error('Invalid Name');
        throw new TaxServiceError(400, 'Invalid Name');
    }

    if (!isNumber(birthYear)) {
        logger.error('Invalid Year');
        throw new TaxServiceError(400, 'Invalid Year');
    }

    if (!isNumber(birthDays)) {
        logger.error('Invalid Days');
        throw new TaxServiceError(400, 'Invalid Days');
    }


    let days = parseInt(birthDays);
    if (days > 40) {
        gender = 'F';
        days = days - 40;
    }

    const month = getNumberMonth(birthMonth);
    const birthPlaceName = getPlaceName(birthPlace);

    const controlCode: string = getControlCode(tax.substring(0, 15));
    if (controlChar !== controlCode) {
        logger.error('Invalid Control Code');
        throw new TaxServiceError(400, 'Invalid Control Code');
    }

    const obj = {
        surname,
        name,
        birthDate: days + '-' + month + '-' + birthYear,
        gender,
        birthPlaceName
    }

    logger.info("Decoded Information " + JSON.stringify(obj));

    return obj;
}

export {createTaxCode, decodeTax}