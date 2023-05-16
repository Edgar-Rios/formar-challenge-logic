function fizz_buzz(n) {

    let arr = Array.from(new Array(n));
    return arr.map((e, i) => {
        let number = i + 1;
        switch (true) {
            case number % 5 == 0 && number % 3 == 0:
                return 'FizzBuzz';
            case number % 3 == 0:
                return 'Fizz';
            case number % 5 == 0:
                return 'Buzz';
            default:
                return number;
        }
    })

}


// TEST
console.log(fizz_buzz(15));