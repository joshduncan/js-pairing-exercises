import apiClient from '../apiClient';

export const getCaptains = async () => {
  const captains = await apiClient.get('/captains');
  return captains.data;
};

export const firstNames = () => getCaptains().map(c => c.first);

export const firstNamesSorted = () => firstNames().sort();

export const firstNamesSortedOnlyJs = () =>
  firstNamesSorted().filter(n => n.startsWith('J'));

export const totalAge = () => getCaptains().reduce((total, c) => total + c.age, 0);

const ageSort = (a, b) => a.age - b.age;

export const fullNamesByAge = () =>
  getCaptains()
    .sort(ageSort)
    .map(c => `${c.first} ${c.last}`);
