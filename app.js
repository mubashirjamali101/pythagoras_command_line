const prompt = require('prompt-sync')({sigint: true});

const log = console.log;

let n1 = prompt("a="), n2 = prompt("b="), n3 = prompt("c=");

function pyth(a = 1, b = 1, c = 1) {
    if(a == "?" && Number(b) != NaN && Number(c) != NaN){
        b = Number(b)
        c = Number(c)
        a = Math.sqrt((c*c)-(b*b))
        log(`a = ${a}`)
    }else if(b == "?" && Number(a) != NaN && Number(c) != NaN){
        a = Number(a)
        c = Number(c)
        b = Math.sqrt((c*c)-(a*a))
        log(`b = ${b}`)
    }else if(c == "?" && Number(b) != NaN && Number(a) != NaN){
        b = Number(b)
        a = Number(a)
        c = Math.sqrt((a*a)+(b*b))
        log(`b = ${b}`)
    }else if(Number(b)&& Number(a) && Number(c)){

        b = Number(b)
        c = Number(c)
        a = Number(a)
        log(`${(c*c)}(c) = ${(a*a)}(a) + ${(b*b)}(b)`)
    }else {
        log("input is not valid")
    }

}

pyth(n1, n2, n3)