describe('pos', function (){
    var inputs;

    beforeEach(function () {
        inputs = 910;
    });


    describe('Unit Test', function(){

        describe('Test buildDigits', function() {

            var allNumbers = [{number: {value: 8, digit: ['._.', '|_|', '|_|']}}];

            it('return right numberObject', function () {

                var inputs = 888;
                var result = buildNumberObject(inputs, allNumbers);
                var exceptResult = [{number: {value: 8, digit: ['._.', '|_|', '|_|']}},
                                    {number: {value: 8, digit: ['._.', '|_|', '|_|']}},
                                    {number: {value: 8, digit: ['._.', '|_|', '|_|']}}];

                expect(result).toEqual(exceptResult);
            });
        });

    });

    describe('Integration test', function () {
        it('should print correct text', function () {

            spyOn(console, 'log');

            buildLcd(inputs);
            var expectText =
                '._....._.' +
                '|_|..||.|'+
                '..|..||_|';

            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });
});