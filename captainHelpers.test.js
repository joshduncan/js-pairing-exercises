import * as CaptainHelpers from './captainHelpers';

const captains = [
  {
    first: 'Jack',
    last: 'Sparrow',
    age: 48
  },
  {
    first: 'Malcolm',
    last: 'Reynolds',
    age: 34
  },
  {
    first: 'James',
    last: 'Kirk',
    age: 58
  },
  {
    first: 'Han',
    last: 'Solo',
    age: 86
  }
];

test('returns first names', () => {
  const expectedNames = ['Jack', 'Malcolm', 'James', 'Han'];

  expect(CaptainHelpers.firstNames(captains)).toEqual(expectedNames);
});

test('returns first names sorted alphabetically', () => {
  const expectedNames = ['Han', 'Jack', 'James', 'Malcolm'];

  expect(CaptainHelpers.firstNamesSorted(captains)).toEqual(expectedNames);
});

test('returns first names that start with J sorted alphabetically', () => {
  const expectedNames = ['Jack', 'James'];

  expect(CaptainHelpers.firstNamesSortedOnlyJs(captains)).toEqual(expectedNames);
});

test('returns combined total age', () => {
  const expectedTotalAge = 226;

  expect(CaptainHelpers.totalAge(captains)).toEqual(expectedTotalAge);
});

test('returns captains full names sorted by age ascending', () => {
  const expectedNames = ['Malcolm Reynolds', 'Jack Sparrow', 'James Kirk', 'Han Solo'];

  expect(CaptainHelpers.fullNamesByAge(captains)).toEqual(expectedNames);
});
