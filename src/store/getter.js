const getter = {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length;
  },
};

export { getter };
