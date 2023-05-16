function number_cardinality(n) {
    const [ODD, EVEN, ZERO, FIVE] = ['odd', 'even', 'zero', 'five']

    let length = n.toString().length;
    let lastDigit = n.toString()[length - 1];

    switch (true) {
        case lastDigit == 5:
            return FIVE;
        case lastDigit == 0:
            return ZERO;
        case lastDigit % 2 == 0:
            return EVEN;
        case lastDigit % 2 != 0:
            return ODD;
    }
}
// TESTS
console.log(`input: 100     output: ${number_cardinality(100)}`);
console.log(`input: 88     output: ${number_cardinality(88)}`);
console.log(`input: 155     output: ${number_cardinality(155)}`);
console.log(`input: 99     output: ${number_cardinality(99)}`);