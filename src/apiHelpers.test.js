// import * as apiHelpers from './apiHelpers';
import * as apiHelpers from './solutions/apiHelpersAsync';

test('returns data from captains endpoint', async () => {
  const captains = await apiHelpers.getCaptains();
  const firstCaptain = {
    id: 'SQ2WI',
    first: 'Jack',
    last: 'Sparrow',
    age: 48
  };

  expect(captains).toHaveLength(4);
  expect(captains[0]).toEqual(firstCaptain);
});

xtest('captain first names', async () => {
  const expectedNames = ['Jack', 'Malcolm', 'Jean Luc', 'Han'];
  const firstNames = await apiHelpers.firstNames();

  expect(firstNames).toEqual(expectedNames);
});

xtest('captain first names sorted alphabetically', async () => {
  const expectedNames = ['Han', 'Jack', 'Jean Luc', 'Malcolm'];
  const firstNamesSorted = await apiHelpers.firstNamesSorted();

  expect(firstNamesSorted).toEqual(expectedNames);
});

xtest('captain first names that start with J sorted alphabetically', async () => {
  const expectedNames = ['Jack', 'Jean Luc'];
  const firstNamesSortedOnlyJs = await apiHelpers.firstNamesSortedOnlyJs();

  expect(firstNamesSortedOnlyJs).toEqual(expectedNames);
});

xtest('captain combined total age', async () => {
  const expectedTotalAge = 179;
  const totalAge = await apiHelpers.totalAge();

  expect(totalAge).toEqual(expectedTotalAge);
});

xtest('captain full names sorted by age ascending', async () => {
  const expectedNames = [
    'Han Solo',
    'Malcolm Reynolds',
    'Jack Sparrow',
    'Jean Luc Picard'
  ];
  const fullNamesByAge = await apiHelpers.fullNamesByAge();

  expect(fullNamesByAge).toEqual(expectedNames);
});
