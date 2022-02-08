import { getQuoteCallback, getQuotePromises } from './index';

// 1. por medio de un callback 

test('getQuote w/ callback', (done) => {
    getQuoteCallback((quote) => {
        expect(quote).toBe(
            "No creas todo lo que vez en internet, por Benjamin"
        );
        // Esta funcion done se ejecuta cuando se termina mi test para indicarselo a jest
        done();
    });
});

// 2. Con async await y 3. Por medio de promises
// hay que tener cuidado con poner los expect y si el expect esta dentro de del resolve del then, 
// por que si no tiene el return dice que esta vacia la prueba para jest y la pasa
test('getQuote w/ promises', async () => {
    const quote = await getQuotePromises();
    expect(quote).toBe(
        "No creas todo lo que vez en internet, por Benjamin"
    );
});

test('getQuote w/ promises and matcher resolve', () => {
    // en caso de manejar el reject y los errores de la promise tamb
    getQuotePromises().catch(err => expect(err));

    return expect(getQuotePromises()).resolves.toBe(
        "No creas todo lo que vez en internet, por Benjamin"
    );
});

