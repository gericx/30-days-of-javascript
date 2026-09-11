type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
     let filtered: number[] = []

    for (let i=0; i<arr.length; i++) {
        if (fn(arr[i], i)) 
            filtered[filtered.length] = arr[i]
    }

    return filtered
};