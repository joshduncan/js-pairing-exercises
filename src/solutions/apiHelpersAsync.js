import apiClient from '../apiClient';

export const getCaptains = async () => {
  const captains = await apiClient.get('/captains');
  return captains.data;
};

export const getShips = async () => {
  const ships = await apiClient.get('/ships');
  return ships.data;
};

export const firstNames = async () => (await getCaptains()).map(c => c.first);

export const firstNamesSorted = async () => (await firstNames()).sort();

export const firstNamesSortedOnlyJs = async () =>
  (await firstNamesSorted()).filter(n => n.startsWith('J'));

export const totalAge = async () =>
  (await getCaptains()).reduce((total, c) => total + c.age, 0);

const ageSort = (a, b) => a.age - b.age;

export const fullNamesByAge = async () =>
  (await getCaptains()).sort(ageSort).map(c => `${c.first} ${c.last}`);

export const captainBio = async id => {
  const captain = (await getCaptains()).filter(c => c.id === id)[0];
  const ship = (await getShips()).filter(s => s.id === captain.ship)[0];

  return {
    id: captain.id,
    firstName: captain.first,
    lastName: captain.last,
    shipId: ship.id,
    shipName: ship.name
  };
};
