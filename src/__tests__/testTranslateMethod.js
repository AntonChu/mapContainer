import ErrorRepository from '../js/ErrorRepository';

test.each([
  ['test of getting a description of mistake number', 500, 'Internal Server Error'],
  ['test of getting a description of mistake number', 499, 'Unknown error'],
])('%s %i', (_, code, expectedAnswer) => {
  const serverErrors = new ErrorRepository();
  expect(serverErrors.translate(code)).toBe(expectedAnswer);
});
