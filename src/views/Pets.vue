<template>
  <div>
    <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Pet",
  computed: {
    ...mapState(["cats", "dogs"]),
  },
  data() {
    return {
      animal: {},
    };
  },
  mounted() {
    const animal = this[this.$route.params.species][this.$route.params.id];
    this.animal = animal;
  },
};
</script>
