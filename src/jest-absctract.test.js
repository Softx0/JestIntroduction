beforeAll(() => {
    console.log("Antes de todas");
});

beforeEach(() => {
    console.log("Antes de cada una");
});

afterEach(() => {
    console.log("Despues de cada una");
});

afterAll(() => {
    console.log("Despues de todas");
});

test('First test', () => {
  console.log("Primer test!");
});

test('Second test', () => {
  console.log("Segundo test");
});

