function buildNumberObject(number, allNumbers) {
    var string = number + '';
    var elements = string.split('');
    var numberObject = [];

    elements.forEach(function(element){
        for (var j = 0; j < allNumbers.length; j++) {
            if (parseInt(element) === allNumbers[j].number.value) {
                numberObject.push(allNumbers[j]);
                break;
            }
        }
    });
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
    var allNumbers = loadAllNumbers();
    var numberObject = buildNumberObject(number, allNumbers);
    print(numberObject);
}
