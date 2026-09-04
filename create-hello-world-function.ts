type Fn = (...args: any[]) => string;

const createHelloWorld = (): Fn => (...args: any[]) => "Hello World"

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
