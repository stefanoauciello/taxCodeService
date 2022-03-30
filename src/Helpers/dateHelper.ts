import { getCharMonth } from "../Utils/utils";

import log4js from "log4js";

const logger = log4js.getLogger();
logger.level = "all";

function getDateBirth(dateOfBirth: string, gender: string): string {
  const date = dateOfBirth.split('-');

  let day = date[0];
  let month = date[1];
  const year = date[2];

  if (gender === 'F') {
    day = day + 40;
  }
  month = getCharMonth(month);

  return year + month + day;
}

export { getDateBirth };
