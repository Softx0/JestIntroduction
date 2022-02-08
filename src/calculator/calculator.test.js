// const calculator = require('./index');
import { calculator } from './index';
;

test('Sum Calculator', () => {
    const result = calculator.sum(1, 2);

    expect(result).toBe(3); // toBe idealmente para tipos de datos primitivos, no obstante no para floating numbers

});

test.todo('Substract Calculator');

test.todo('Multiply Calculator');

test.todo('Divide Calculator');