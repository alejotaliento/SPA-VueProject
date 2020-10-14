<template>
  <div id="movie">
    <article class="article-item article-detail">
      <div class="image-wrap" v-if="movie.image">
        <!-- Binding/Vilculacion -->
        <img :src="movie.image" alt="Movie" />
      </div>
      <div class="image-wrap" v-else>
        <img src="../assets/img/image-not-available.jpg" alt="Movie" />
      </div>

      <h2>{{ movie.title }}</h2>
      <span
        class="date"
        :class="{
          yeargreen: movie.year >= 2015, //IF
          yearred: movie.year < 2015, //ELSE
        }"
      >
        {{ movie.year }}
      </span>
      <a href="#"><br />Read more</a><br />
      <button @click="movieFav(movie)">Mark as favorite</button>
    </article>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: ["movie"], //prop movie que recibo del componente padre Movies.vue (input)
  methods: {
    movieFav(movieFav) { // output
      this.$emit("favorite", movieFav); //emito un evento para utilizarlo en el componente padre Movies.vue
    },
  },
};
</script>

<style scoped>
.yeargreen {
  background: green !important;
  color: white;
  padding: 5px;
  width: 96%;
  text-align: center;
}
.yearred {
  background: red !important;
  color: white;
  padding: 5px;
  width: 96%;
  text-align: center;
}
</style>