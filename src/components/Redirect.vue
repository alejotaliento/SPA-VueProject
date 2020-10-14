<template>
  <h1>Redirecting...</h1>
</template>

<script>
export default {
  name: "Redirect",
  mounted() {
    let searchString = this.$route.params.search;
    this.$router.push("/searcher/" + searchString);
  },
};
</script>

<style>
</style>