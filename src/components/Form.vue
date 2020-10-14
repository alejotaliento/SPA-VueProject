<template>
  <div id="form">
    <div class="center">
      <section id="content">
        <h2 class="sub-header">Form</h2>
        <div v-if="user.name && user.lastname" id="form-reactivity">
          <h3><strong>** Reactivity **</strong></h3>
          <h5>
            Name: {{ user.name }} <br />
            Lastname: {{ user.lastname }} <br />
            Gender: {{ user.gender }}
          </h5>
          <hr />
        </div>
        <form class="mid-form" @submit.prevent="showUser()">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              v-model="user.name"
              placeholder="Your name..."
            />
            <span v-if="submitted && !$v.user.name.required"
              >This field is required</span
            >
            <span v-if="submitted && !$v.user.name.minLength"
              >This field must have min 4 characters</span
            >
          </div>

          <div class="form-group">
            <label for="lastname">Lastname</label>
            <input
              type="text"
              name="lastname"
              v-model="user.lastname"
              placeholder="Your lastname..."
            />
            <span v-if="submitted && !$v.user.lastname.required"
              >This field is required</span
            >
            <span v-if="submitted && !$v.user.lastname.minLength"
              >This field must have min 4 characters</span
            >
          </div>

          <div class="form-group">
            <label for="bio">Biography</label>
            <textarea name="bio" v-model="user.bio"></textarea>
            <span v-if="submitted && !$v.user.bio.required"
              >This field is required</span
            >
            <span v-if="submitted && !$v.user.bio.minLength"
              >This field must have min 10 characters</span
            >
          </div>

          <div class="form-group radio-buttons">
            <input
              type="radio"
              name="gender"
              value="Man"
              v-model="user.gender"
            />Man
            <input
              type="radio"
              name="gender"
              value="Woman"
              v-model="user.gender"
            />Woman
            <input
              type="radio"
              name="gender"
              value="Other"
              v-model="user.gender"
            />Other
          </div>

          <div class="clearfix"></div>

          <input type="submit" class="btn-success" value="Send" :disabled="submitted"/>
        </form>
      </section>

      <Sidebar></Sidebar>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Form",
  components: {
    Sidebar,
  },
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(4),
      },
      lastname: {
        required,
        minLength: minLength(4),
      },
      bio: {
        required,
        minLength: minLength(10),
      },
      gender: {
        required,
      },
    },
  },
  data() {
    return {
      submitted: false,
      user: {
        // objeto que va a modificar el formulario
        name: "",
        lastname: "",
        bio: "",
        gender: "",
      },
    };
  },
  methods: {
    showUser() {
      console.log(this.user);
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }

      alert("Validation pass");
    },
  },
};
</script>

<style>
</style>