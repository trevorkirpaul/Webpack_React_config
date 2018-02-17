export const createAnimal = (name, color) => ({
  type: 'ANIMALS:CREATE',
  cat: {
    name,
    color,
  },
});
