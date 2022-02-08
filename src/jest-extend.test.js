//Creando tus propios matchers

expect.extend({
    toBeEqualTwo(received) {
        if (received != 2) {
            return {
                pass: false,
                message: () => `Expected ${received} to be number 2`
            }
        }

        return {
            pass: true,
        }
    }
})
test('number 2 ', () => {
    expect(2).toBeEqualTwo();
});