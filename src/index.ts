export function stringToArray(s: string): Uint8Array {
    const utf8 = unescape(encodeURIComponent(s));
    return Uint8Array.from(utf8, (_, i) => utf8.charCodeAt(i));
}

export function arrayToString(a: Uint8Array): string {
    const utf8 = String.fromCharCode.apply(null, a as unknown as number[]);
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

export function arraysEqual(a: Uint8Array, b: Uint8Array): boolean {
    if (a.length !== b.length) {
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }

    return true;
}
