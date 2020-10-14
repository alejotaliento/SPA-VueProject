<template>
  <div id="movies">
    <Slider title="Movies"></Slider>

    <div class="center">
      <section id="content">
        <h2 class="sub-header">Movies</h2>

        <div class="favorite" v-if="movieFavorite">
          <h3>Your movie favorite is: {{ movieFavorite.title }}</h3>
        </div>

        <div id="movies-list">
          <!-- FOR OF MOVIES -->
          <div v-for="movie in moviesMayus" v-bind:key="movie.title">
            <!-- v-bind:class="classObject" -->
            <Movie :movie="movie" @favorite="getMovieFav"></Movie>
            <!-- Le paso la prop movie al component hijo Movie.vue-->
          </div>
        </div>

        <button @click="changeState" class="btn-success">See more</button>
        <div class="datos" v-if="this.datos.showInfo">
          <p v-html="misDatos"></p>
          <br />
          <strong>Filter: </strong
          >{{ this.datos.name | mayus | concatenateYear("(This is a message)") }}
        </div>

        <!-- LIMIPIAR FLOTADOS -->
        <div class="clearfix"></div>
      </section>

      <Sidebar></Sidebar>
    </div>
  </div>
</template>

<script>
import Movie from "./Movie";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

export default {
  name: "Movies",
  components: {
    Movie,
    Sidebar,
    Slider,
  },
  data() {
    return {
      movieFavorite: null,
      movies: [
        // Object definition literally on documents Json
        {
          year: 2016,
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
      datos: {
        name: "Alejo",
        lastname: "Taliento",
        age: 21,
        showInfo: false,
      },
    };
  },
  methods: {
    getMovieFav(favorite) {
      this.movieFavorite = favorite;
    },
    changeState() {
      if (this.datos.showInfo === false) {
        this.datos.showInfo = true;
      } else {
        this.datos.showInfo = false;
      }

      return this.datos.showInfo;
    },
  },
  filters: {
    //pipers on angular || filters on vue
    mayus(value) {
      return value.toUpperCase();
    },
    concatenateYear(value, message) {
      let date = new Date();
      return value + " " + date.getUTCFullYear() + " " + message;
    },
  },
  computed: {
    //props computadas
    moviesMayus() {
      var moviesModified = this.movies;
      for (let i = 0; i < this.movies.length; i++) {
        moviesModified[i].title = moviesModified[i].title.toUpperCase();
      }
      console.log(moviesModified);
      return moviesModified;
    },
    misDatos() {
      return (
        "<strong>Computed prop: </strong> " +
        "<br/>" +
        "Name: " +
        this.datos.name +
        "<br/>" +
        "Lastname: " +
        this.datos.lastname +
        "<br/>" +
        "Age: " +
        this.datos.age
      );
    },
  },
};
</script>

<style scoped>
.favorite {
  text-align: center;
}
</style>

