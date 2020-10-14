<template>
  <div
    id="slider"
    :class="{
      'slider-big': showBtn, //IF
      'slider-small': !showBtn, //ELSE
    }"
  >
    <h1>{{ title }}</h1>
    <router-link to="/blog" class="btn btn-white" v-if="showBtn"
      >Go to blog</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: ["title", "showBtn"],
};
</script>

<style>
</style>