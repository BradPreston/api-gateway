import type { Request, Response } from "express";
import type { APIResponse, Field } from "./types.js";

const REQUIRED_KEYS = ["sender", "receiver", "replyTo", "subject"];

export function handleSend(req: Request, res: Response) {
    const body = req.body as Record<string, Field>;

    const invalidFields = Object.entries(body)
        .filter(([, field]) => typeof field !== "object" || field === null || Array.isArray(field))
        .map(([key]) => key);

    if (invalidFields.length) {
        return res.status(400).json({
            errors: invalidFields.map(field => `${field} must be an object with a value`),
            status: "error"
        } satisfies APIResponse);
    }
    
    // create an object from an array of [key: field] inputs
    const fields = Object.fromEntries(
        Object.entries(body).map(([key, { value, required }]) => [key, { value, required }])
    );

    // get all required keys from the required keys array and any marked as required by the API request
    const requiredKeys = new Set([
        ...REQUIRED_KEYS,
        ...Object.keys(fields).filter(key => fields[key]!.required)
    ]);

    const isEmpty = (value: Field["value"] | undefined) => value === undefined || value === null || value === "";

    // get any fields that are required, but missing or don't have a value
    const missingRequiredFields = [...requiredKeys].filter(key => isEmpty(fields[key]?.value));

    if (missingRequiredFields.length) {
        return res.status(400).json({
            errors: missingRequiredFields.map(field => `${field} is a required field`),
            status: "error"
        } satisfies APIResponse);
    }

    return res.json({
        data: Object.fromEntries(
            Object.entries(fields)
                .filter(([, field]) => !isEmpty(field.value))
                .map(([key, field]) => [key, field.value])
        ),
        status: "success"
    } satisfies APIResponse);
}