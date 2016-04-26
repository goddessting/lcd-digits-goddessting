describe('pos', function (){
        var inputs;

        beforeEach(function () {
            inputs = 910;
        });


        describe('Unit Test', function(){
            describe('Test buildDigits', function() {
                it('return right numberObject', function () {
                    expect(buildNumberObject(inputs)).toEqual([{number: {value: 9, digit: ['._.', '|_|', '..|']}},
                        {number: {value: 1, digit: ['...', '..|', '..|']}},
                        {number: {value: 0, digit: ['._.', '|.|', '|_|']}}
                    ]);
                });
            });

    });



describe('Integration test', function () {
    it('should print correct text', function () {

        spyOn(console, 'log');

        buildLcd(inputs);
        var numberObject = buildNumberObject(910);
        var expectText = '._....._.' +
                         '|_|..||.|'+
                         '..|..||_|';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
});