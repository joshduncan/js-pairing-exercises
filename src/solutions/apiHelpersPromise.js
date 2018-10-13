import apiClient from '../apiClient';

export const getCaptains = () =>
  apiClient.get('/captains').then(response => response.data);

export const getShips = () => apiClient.get('/ships').then(response => response.data);

export const firstNames = () => getCaptains().then(data => data.map(c => c.first));

export const firstNamesSorted = () => firstNames().then(names => names.sort());

export const firstNamesSortedOnlyJs = () =>
  firstNamesSorted().then(names => names.filter(n => n.startsWith('J')));

export const totalAge = () =>
  getCaptains().then(captains => captains.reduce((total, c) => total + c.age, 0));

const ageSort = (a, b) => a.age - b.age;

export const fullNamesByAge = () =>
  getCaptains().then(data => data.sort(ageSort).map(c => `${c.first} ${c.last}`));

export const captainBio = id => {
  const captainFetch = getCaptains().then(
    captains => captains.filter(c => c.id === id)[0]
  );
  const shipFetch = captainFetch.then(captain =>
    getShips().then(ships => ships.filter(s => s.id === captain.ship)[0])
  );

  return Promise.all([captainFetch, shipFetch]).then(([captain, ship]) => ({
    id: captain.id,
    firstName: captain.first,
    lastName: captain.last,
    shipId: ship.id,
    shipName: ship.name
  }));
};
