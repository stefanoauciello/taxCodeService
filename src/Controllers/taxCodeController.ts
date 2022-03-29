import {Request, Response} from "express";
import {createTaxCode, decodeTax} from "../Services/taxCodeService";
import log4js from "log4js";

const logger = log4js.getLogger();
logger.level = "all";

function getTextCodeInfo(req: Request, res: Response): Response {
    try {
        const taxCodeParams = req.params.code;
        const props = decodeTax(taxCodeParams);
        return res.status(200).json(props);
    } catch (e: any) {
        return res.status(e?.status || 500).json(e?.message || 'Internal Server Errors');
    }
}

function generateTaxCode(req: Request, res: Response): Response {
    try {
        const {
            surname,
            name,
            birthPlace,
            dateOfBirth,
            gender
        } = req.body;

        const code = createTaxCode(
            surname,
            name,
            birthPlace,
            dateOfBirth,
            gender
        );
        return res.status(200).json({tax_code: code});
    } catch (e: any) {
        return res.status(e?.status || 500).json(e?.message || 'Internal Server Errors');
    }
}

export {getTextCodeInfo, generateTaxCode}