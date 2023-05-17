// let number = 45675;

// let prevstr = number.toString().slice(0, 2).split('').reduce((sum, value) => sum + +(value), 0);
// let poststr = number.toString().split('').slice(2).map(e => +(e));

// for (const c of 'object') {
//     console.log(c);
// }

// console.log(number)
// console.log(prevstr)
// console.log(poststr)

function range_vision(n) {
    let min = 1000;
    let str = n.toString().split('').map(e => +(e));

    if (!str.some(digit => digit == 1)) return false;

    str.forEach((element, index) => {
        let prev = str.slice(index - element, index);
        let next = str.slice(index + 1, index + element);

        let valueVision = [...prev, ...next].reduce((sum, num) => sum + num, 0);

        if (valueVision < min)
            min = valueVision;

        if (element == 1 && valueVision <= min)
            return true;
    });

    return false;
}