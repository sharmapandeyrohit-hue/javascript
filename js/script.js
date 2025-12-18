
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function Operation(operation, a, b) {
    let result;

    switch (operation) {
        case add:
            result = add(a, b);
            break;

        case sub:
            result = sub(a, b);
            break;

        case mul:
            result = mul(a, b);
            break;

        case div:
            result = div(a, b);
            break;

        default:
            result = "Invalid Operation";
    }

    document.writeln(result);
    return result;
}





