type Fn = (...args: any[]) => string;

/** Function within the function */
const createHelloWorld = (): Fn => (...args: any[]) => "Hello World"

/** Function hoisting - */
