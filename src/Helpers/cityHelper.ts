import fs from 'fs';
import * as path from "path";
import { TaxServiceError } from "../Errors/taxServiceError";
import { removeSpecialChar } from "../Utils/utils";

import log4js from "log4js";

const logger = log4js.getLogger();
logger.level = "all";

function getPlaceCode(birthPlace: string): string {

  birthPlace = birthPlace.toUpperCase();
  birthPlace = removeSpecialChar(birthPlace);

  const filePath = path.join(__dirname, '../../cities.json');
  const rawdata = fs.readFileSync(filePath);
  const { cities } = JSON.parse(rawdata.toString());

  const city = cities.find((obj) => obj.town === birthPlace);
  if (!city) {
    logger.error('Invalid City');
    throw new TaxServiceError(400, 'Invalid City');
  }
  return city.code;
}

function getPlaceName(code: string): string {

  const filePath = path.join(__dirname, '../../cities.json');
  const rawdata = fs.readFileSync(filePath);
  const { cities } = JSON.parse(rawdata.toString());

  const city = cities.find((obj) => obj.code === code);
  if (!city) {
    logger.error('Invalid City');
    throw new TaxServiceError(400, 'Invalid City');
  }
  return city.town;
}

export { getPlaceCode, getPlaceName };