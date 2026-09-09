type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

const createCounter = (init: number): Counter => {
    let curr = init

    const increment = () => ++curr
    const decrement = () => --curr
    const reset = () => curr = init
    
    return { increment, decrement, reset }
};