export const createAnimal = (name, color) => ({
  type: 'ANIMALS:CREATE',
  cat: {
    name,
    color,
  },
});

export const getCats = () => ({
  type: 'CATS:FETCH_ALL',
});

export const createCat = name => ({
  type: 'CAT:CREATE',
  name,
});

export const deleteCat = id => ({
  type: 'CAT:DELETE',
  id,
});

export const updateCat = (id, name) => ({
  type: 'CAT:UPDATE',
  id,
  name,
});
