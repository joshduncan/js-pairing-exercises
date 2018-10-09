import apiClient from '../apiClient';

export const getCaptains = () =>
  apiClient.get('/captains').then(response => response.data);

export const firstNames = () => getCaptains().then(data => data.map(c => c.first));

export const firstNamesSorted = () => firstNames().then(names => names.sort());

export const firstNamesSortedOnlyJs = () =>
  firstNamesSorted().then(names => names.filter(n => n.startsWith('J')));

export const totalAge = () =>
  getCaptains().then(captains => captains.reduce((total, c) => total + c.age, 0));

const ageSort = (a, b) => a.age - b.age;

export const fullNamesByAge = () =>
  getCaptains().then(data => data.sort(ageSort).map(c => `${c.first} ${c.last}`));
