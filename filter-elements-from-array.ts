function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let transformed: number[] = []

    for (let i = 0; i < arr.length; i++) {
        transformed.push(fn(arr[i], i))
    }
    return transformed
};