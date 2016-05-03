function getSingleNumber(number) {
    var string = number + '';
    var elements = string.split('');

    return elements;
}

function getNumber(element, allNumbers, numberObject){

    for (var j = 0; j < allNumbers.length; j++) {
        if (parseInt(element) === j) {
            numberObject.push(allNumbers[j]);
            return numberObject;
        }
    }
}
function buildNumberObject(number, allNumbers) {
    var numberObject = [];
    var elements = getSingleNumber(number);

    elements.forEach(function (element) {
        numberObject = getNumber(element,allNumbers, numberObject);
    });
    return numberObject;
}

function print(numberObject) {
    var print = '';
    for (var i = 0; i < numberObject[0].length; i++) {
        for (var j = 0; j < numberObject.length; j++) {
            print += numberObject[j][i];
        }
    }
    console.log(print);
}

function buildLcd(number) {
    var allNumbers = loadAllNumbers();

    var numberObject = buildNumberObject(number, allNumbers);
    print(numberObject);
}
