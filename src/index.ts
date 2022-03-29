import express from "express";
import {generateTaxCode, getTextCodeInfo} from "./Controllers/taxCodeController";
import log4js from "log4js";

const logger = log4js.getLogger();
logger.level = "all";

const router = express.Router();
const app = express();
app.use(express.json());

router.get("/tax-code/:code", getTextCodeInfo);
router.post("/tax-code", generateTaxCode);

app.use(router);
app.listen(8080, () => logger.info("Server running on port 8080."));