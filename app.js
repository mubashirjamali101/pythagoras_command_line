const prompt = require('prompt-sync')({ sigint: true });

const log = console.log;

let n1 = prompt("a = "),
    n2 = prompt("b = "),
    n3 = prompt("c = "); // taking initial user input, enter a number as value or a ? sign to find it that value

function pyth(a = 1, b = 1, c = 1) { //the main function which uses  pythagores theorem to find the one of the arguments of the a, b & c
    if (a == "" || a == "?" && b != "" && c != "" && Number(b) && b != " ? " && Number(c) && c != " ? ") {
        b = Number(b);
        c = Number(c);
        a = Math.sqrt((c * c) - (b * b));
        log(`a = ${a}`)
    } else if (b == "" || b == "?" && Number(a) && a != "?" && Number(c) && c != "?") {
        a = Number(a)
        c = Number(c)
        b = Math.sqrt((c * c) - (a * a))
        log(`b = ${b}`)
    } else if (c == "" || c == "?" && b != "" && a != "" && Number(b) && b != "?" && Number(a) && a != "?") {
        b = Number(b)
        a = Number(a)
        c = Math.sqrt((a * a) + (b * b))
        log(`c = ${c}`)
    } else if (Number(b) && Number(a) && Number(c)) {

        b = Number(b)
        c = Number(c)
        a = Number(a)
        if ((a * a) + (b * b) == (c * c)) {
            log(`${(c*c)}(c) = ${(a*a)}(a) + ${(b*b)}(b)`)
        } else {
            log(`ERROR: The entered parameter's doesn't satisfy Pythagores Theorem.`)
        }
    } else {
        log("Two arguments must be numbers and third should be \"?\" sign.")
    }

}

pyth(n1, n2, n3)