export function stringToArray(s: string): Uint8Array {
    const utf8 = unescape(encodeURIComponent(s));
    return Uint8Array.from(utf8, (_, i) => utf8.charCodeAt(i));
}

export function arrayToString(a: Uint8Array): string {
    const utf8 = Array.from(a, (c) => String.fromCharCode(c)).join('');
    return decodeURIComponent(escape(utf8));
}

export function mergeArrays(...arrays: Uint8Array[]): Uint8Array {
    const out = new Uint8Array(arrays.reduce((total, arr) => total + arr.length, 0));

    let offset = 0;
    for (const arr of arrays) {
        out.set(arr, offset);
        offset += arr.length;
    }

    return out;
}
