<template>
  <div class="home">
    <h1>Adopt new best friend</h1>
    {{ animalsCount }}
    <button @click="togglePetForm" v-if="!showPetForm" class="btn btn-primary">
      Add New Pet
    </button>
    <button @click="togglePetForm" v-if="showPetForm" class="btn btn-primary">
      Hide Pet Form
    </button>
    <b-form @submit="handleSubmit" v-if="showPetForm">
      <b-form-group label="Pet's name">
        <b-form-input
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Species:">
        <b-form-select
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group label="Pet's age">
        <b-form-input
          v-model="formData.age"
          type="number"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      showPetForm: false,
      formData: {
        name: "",
        age: 0,
        species: null,
      },
    };
  },
  computed: {
    ...mapGetters(["animalsCount"]),
  },
  methods: {
    ...mapActions(["addPet"]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit(e) {
      e.preventDefault();
      const payload = {
        species: this.formData.species,
        pet: {
          name: this.formData.name,
          age: this.formData.age,
        },
      };
      this.addPet(payload);
      this.formData.name = "";
      this.formData.species = null;
      this.formData.age = 0;
    },
  },
};
</script>
