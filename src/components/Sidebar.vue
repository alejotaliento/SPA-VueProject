<template>
  <div id="sidebar-component">
    <aside id="sidebar">
      <!-- ITEM 1 -->
      <div id="nav-blog" class="sidebar-item" v-if="change">
        <h3>You can this</h3>
        <router-link to="/create-article" class="btn btn-success">
          Created article
        </router-link>
      </div>

      <!-- ITEM 2 -->
      <div id="search" class="sidebar-item">
        <h3>Searcher</h3>
        <p>Find the article that search</p>
        <form @submit.prevent="goSearch">
          <input type="text" name="search" v-model="searchString" />
          <input type="submit" name="submit" class="btn" value="Search" />
        </form>
      </div>
    </aside>
    <!-- LIMIPIAR FLOTADOS -->
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["change"],
  data() {
    return {
      searchString: null,
    };
  },
  methods: {
    goSearch() {
      this.$router.push("/redirect/" + this.searchString);
    },
  },
};
</script>

<style>
</style>