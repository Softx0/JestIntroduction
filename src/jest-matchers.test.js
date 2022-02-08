test(' object assignment', () => {
    const data = { one: 1 };
    data["two"] = 2;

    // toEqual idealmente para objetos y arrays
    expect(data).toEqual({ one: 1, two: 2 });
});

// viendo los matchers de bool
test('null', () => {
    const n = null;

    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();

});

// viendo los matchers de bool
test('zero', () => {
    const z = 0;

    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();

});

// para los numericos
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});


// para numeros flotantes
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3);    //       This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
});


// Para strings, se utiliza mucho expresiones regulares
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

// tambien se puede utilizar toBe ya si es exacto
test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
    expect('stop').toBe('stop');
});


// para arrays e iterables, se puede utilizar toContain
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});

// Tambien manejar excepciones

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
});
