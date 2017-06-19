//Man kan have en liste af parametre som ikke er bestemte.

function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, "hello", true, 7) === 9