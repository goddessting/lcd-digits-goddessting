function getStringNumber(number) {
    return number.toString().split('');
}

function getObjectNumber(elements, allNumbers) {
    var objectNumber = [];

    elements.forEach(function (element) {
        objectNumber.push(allNumbers[element]);
    });

    return objectNumber;
}

function print(numberObject) {
    var print = '';
    for (var i = 0; i < numberObject[0].length; i++) {
        for (var j = 0; j < numberObject.length; j++) {
            print += numberObject[j][i] + ' ';
        }
        print += '\n';
    }
    console.log(print);
}

function buildLcd(number) {

    var stringNumber = getStringNumber(number);
    var allNumbers = loadAllNumbers();
    var objectNumber = getObjectNumber(stringNumber, allNumbers);

    print(objectNumber);
}
