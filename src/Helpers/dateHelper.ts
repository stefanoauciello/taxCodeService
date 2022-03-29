import {getCharMonth, isNumber} from "../Utils/utils";
import {TaxServiceError} from "../Errors/taxServiceError";

import log4js from "log4js";

const logger = log4js.getLogger();
logger.level = "all";

function getDateBirth(dateOfBirth: string, gender: string): string {
    const date = dateOfBirth.split('-');

    if (date.length < 3) {
        logger.error('Invalid dateOfBirth: it should be in DD-MM-YY format!');
        throw new TaxServiceError(400, 'Invalid dateOfBirth: it should be in DD-MM-YY format!');
    }

    let day = date[0];
    let month = date[1];
    const year = date[2];

    if (day.length != 2 || !isNumber(day) || month.length != 2 || !isNumber(month) || year.length != 2 || !isNumber(year)) {
        logger.error('Invalid dateOfBirth: it should be in DD-MM-YY format!');
        throw new TaxServiceError(400, 'Invalid dateOfBirth: it should be in DD-MM-YY format!');
    }

    if (gender === 'F') {
        day = day + 40;
    }
    month = getCharMonth(month);

    return year + month + day;
}

export {getDateBirth}