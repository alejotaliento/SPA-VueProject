<template>
  <section id="content">
    <hr />
    <h1 class="sub-header">{{ title }}</h1>
    <h2>{{ subtitle }}</h2>

    <h2>Reactivity</h2>
    <input type="text" v-model="name" placeholder="write your name" />
    Your name is: {{ name }}
    <hr />

    <h2>Conditional rendering</h2>
    <input type="number" v-model="age" />
    My age is <strong>{{ age }}</strong>

    <!-- IF -->
    <p class="alert-green" v-if="age && age >= 18 && age < 65">
      You are greater of age
    </p>
    <!-- ELSE IF -->
    <p class="alert-blue" v-else-if="age && age >= 65">You are old</p>
    <!-- ELSE -->
    <p class="alert-red" v-else>You are not greater of age</p>

    <hr />

    <h2>Directives interactive</h2>
    <!-- FOR -->
    <ol>
      <li v-for="movie in movies" v-bind:key="movie.title">{{ movie.title }}</li>
    </ol>
  </section>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    //state
    return {
      title: "This is my component",
      subtitle: "I'm sub-title of the my component",
      name: "",
      age: 0,
      movies: [
        // Object definition literally on documents Json
        {
          year: 2020,
          title: "Batman",
          image:
            "https://image.shutterstock.com/image-photo/kiev-ukraine-april-16-2015-260nw-276697244.jpg",
        },
        {
          year: 2014,
          title: "The incledibles",
          image:
            "https://img.pngio.com/the-incredibles-logo-postcard-zazzlecom-the-incredibles-logo-540_540.jpg",
        },
        {
          year: 2020,
          title: "Lion King",
          image:
            "https://img.jakpost.net/c/2019/04/11/2019_04_11_69752_1554952087._large.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.alert-red {
  color: red;
  font-weight: bold;
}
.alert-green {
  color: green;
  font-weight: bold;
}
.alert-blue {
  color: blue;
  font-weight: bold;
}
</style>