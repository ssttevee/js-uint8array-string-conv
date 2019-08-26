export function stringToArray(s: string): Uint8Array {
    return new Uint8Array(s.split('').map((c) => c.charCodeAt(0)))
}

export function arrayToString(a: Uint8Array): string {
    return Array.from(a, (c) => String.fromCharCode(c)).join('');
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
