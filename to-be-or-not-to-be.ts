type ToBeOrNotToBe = {
    toBe: (value: number) => boolean;
    notToBe: (value: number) => boolean;
}

const expect = (value: number) => {
    const toBe = (local: number) =>
        value === local ? true :
            (() => { throw new Error('Not Equal') })()

    const notToBe = (local: number) =>
        value !== local ? true :
            (() => { throw new Error('Equal') })()

    return { toBe, notToBe }
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */