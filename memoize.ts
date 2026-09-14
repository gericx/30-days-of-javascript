type Fn = (...params: number[]) => number
export type Cache = {
    [key: string]: number
}

export function memoize(fn: Fn): Fn {
    const cache: Cache = {}

    return function(...args) {
        const key = JSON.stringify(args)
        
        if (key in cache) return cache[key]
        return cache[key] = fn(...args)
       
    } 
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */