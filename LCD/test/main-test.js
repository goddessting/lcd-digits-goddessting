describe('pos', function () {
    var inputs;

    beforeEach(function () {
        inputs = 910;
    });


    describe('Unit Test', function () {

        describe('Test buildDigits', function () {

            var allNumbers = [
                ['._.', '|.|', '|_|'],
                ['...', '..|', '..|'],
                ['._.', '._|', '|_.'],
                ['._.', '._|', '._|'],
                ['...', '|_|', '..|'],
                ['._.', '|_.', '._|'],
                ['._.', '|_.', '|_|'],
                ['._.', '..|', '..|'],
                ['._.', '|_|', '|_|'],
                ['._.', '|_|', '..|']
            ];

            it('return right numberObject', function () {

                var inputs = 5678;
                var result = buildNumberObject(inputs, allNumbers);
                var exceptResult = [['._.', '|_.', '._|'],
                    ['._.', '|_.', '|_|'],
                    ['._.', '..|', '..|'],
                    ['._.', '|_|', '|_|']
                ];

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
                '|_|..||.|' +
                '..|..||_|';

            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });
});