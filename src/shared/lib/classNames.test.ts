import { classNames } from './classNames';

describe('classNames', () => {
  test('no params', () => {
    expect(classNames('')).toBe('');
  });

  test('with only one param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expectedClassNames = 'someClass current show';

    expect(classNames('someClass', {}, ['current', 'show'])).toBe(expectedClassNames);
  });

  test('with mods', () => {
    const expectedClassNames = 'someClass open isUser';

    expect(classNames('someClass', { open: true, isUser: true })).toBe(expectedClassNames);
  });

  test('with mods false', () => {
    const expectedClassNames = 'someClass open';

    expect(classNames('someClass', { open: true, isUser: false })).toBe(expectedClassNames);
  });

  test('with mods and additional classes', () => {
    const expectedClassNames = 'someClass open isUser card test';

    expect(
      classNames('someClass', { open: true, isUser: true }, ['card', 'test']),
    ).toBe(expectedClassNames);
  });
});
