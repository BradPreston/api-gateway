export type Field = {
    value: File | string | number | Date;
    required: boolean;
}

export type APIResponse =
    | { status: "success"; data: Record<string, Field["value"]> }
    | { status: "error"; errors: string[] };