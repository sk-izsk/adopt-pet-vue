const actions = {
  addPet: (context, payload) => {
    context.commit("appendPet", payload);
  },
};

export { actions };
