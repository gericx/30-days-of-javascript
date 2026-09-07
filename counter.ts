type Fn = () => number
const createCounter = (n: number): Fn => {
    return () => n++
}