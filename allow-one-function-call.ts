type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    let callback = 0;

    const func = (...args: any) => {
        if (callback > 0) return undefined

        callback++
        return fn(...args)
    }

    return func
}