export interface KeyAndValue {
    key: string;
    value: any;
}

export function objectToArray(obj: Record<string, any>): KeyAndValue[] {
    if(!obj){ return [] }
    return Object.keys(obj).map((key: string) => ({ key, value: obj[key] }));
}