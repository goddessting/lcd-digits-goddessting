function buildNumberObject(number) {
    number = number + '';
    var element = number.split('');
    var object = [{number: {value: 0, digit: ['._.', '|.|', '|_|']}},
        {number: {value: 1, digit: ['...', '..|', '..|']}},
        {number: {value: 2, digit: ['._.', '._|', '|_.']}},
        {number: {value: 3, digit: ['._.', '._|', '._|']}},
        {number: {value: 4, digit: ['...', '|_|', '..|']}},
        {number: {value: 5, digit: ['._.', '|_.', '._|']}},
        {number: {value: 6, digit: ['._.', '|_.', '|_|']}},
        {number: {value: 7, digit: ['._.', '..|', '..|']}},
        {number: {value: 8, digit: ['._.', '|_|', '|_|']}},
        {number: {value: 9, digit: ['._.', '|_|', '..|']}},
    ];
    var numberObject = [];
    for (var i = 0; i < element.length; i++) {
        for (var j = 0; j < object.length; j++) {
            if (parseInt(element[i]) === object[j].number.value) {
                numberObject.push(object[j]);
                break;
            }
        }
    }
    return numberObject;
}

function print(numberObject) {
    var print = '';
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < numberObject.length; j++) {
            print += numberObject[j].number.digit[i];
        }
    }
    console.log(print);
}

function buildLcd(number) {
    var numberObject = buildNumberObject(number);
    print(numberObject);
}
