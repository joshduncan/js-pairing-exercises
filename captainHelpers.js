export const firstNames = data => data.map(c => c.first);

export const firstNamesSorted = data => data.map(c => c.first).sort();

export const firstNamesSortedOnlyJs = data =>
  data
    .map(c => c.first)
    .sort()
    .filter(n => n.startsWith('J'));

export const totalAge = data => data.reduce((total, c) => total + c.age, 0);

const ageSort = (a, b) => a.age - b.age;
export const fullNamesByAge = data => data.sort(ageSort).map(c => `${c.first} ${c.last}`);

export const addShip = (shipName, captain) => {
  captain.ship = shipName;
  return captain;
};

export const addShipImmutable = (shipName, captain) => ({
  ...captain,
  ship: shipName
});
