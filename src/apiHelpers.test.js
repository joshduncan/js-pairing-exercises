import * as apiHelpers from './apiHelpers';

test('returns data from captains endpoint', async () => {
  const captains = await apiHelpers.getCaptains();
  const firstCaptain = {
    id: 'SQ2WI',
    first: 'Jack',
    last: 'Sparrow',
    age: 48,
    ship: 'BC13V'
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

xtest('captain and ship combined for given captain id', async () => {
  const expectedData = {
    id: 'R6TZN',
    firstName: 'Malcolm',
    lastName: 'Reynolds',
    shipId: 'V7B8T',
    shipName: 'Serenity'
  };
  const captainShipData = await apiHelpers.captainBio('R6TZN');

  expect(captainShipData).toEqual(expectedData);
});

xtest('Captains sorted by ship size', async () => {
  const expectedData = [
    {
      id: 'KZUC8',
      first: 'Han',
      last: 'Solo',
      age: 33,
      ship: 'Millenium Falcon'
    },
    {
      id: 'R6TZN',
      first: 'Malcolm',
      last: 'Reynolds',
      age: 34,
      ship: 'Serenity'
    },
    {
      id: 'SQ2WI',
      first: 'Jack',
      last: 'Sparrow',
      age: 48,
      ship: 'Black Pearl'
    },
    {
      id: 'UXWPK',
      first: 'Jean Luc',
      last: 'Picard',
      age: 64,
      ship: 'USS Enterprise NCC-1701-D'
    }
  ];
  const captainsWithShipNamesBySize = await apiHelpers.captainsWithShipNamesBySize();

  expect(captainsWithShipNamesBySize).toEqual(expectedData);
});
