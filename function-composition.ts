type F = (x: number) => number;

function compose(functions: F[]): F {
    return function(x) {
        let init = x
        for (let i=functions.length-1; i>=0; i--) {
            init = functions[i](init)
        }
        return init
    }
};