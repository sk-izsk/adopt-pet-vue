const mutations = {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet);
  },
};

export { mutations };
