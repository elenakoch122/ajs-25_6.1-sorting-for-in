import sortByProps from '../app';

test('sortByProps function', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = sortByProps(obj, ['name', 'level']);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(result).toEqual(expected);
});

test('sortByProps function if object has own property', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  expect(Object.prototype.hasOwnProperty.call(obj, 'name')).toBeTruthy();
});
