type Params = { [key: string]: string | number | boolean | undefined }

export function serializeParams(params: Params) {
    return Object.entries(params)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => `/${key}/${value}`)
    .join('');
}