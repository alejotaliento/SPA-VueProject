<template>
  <div id="searcher">
    <Slider :title="'Search of: ' + searchString"></Slider>

    <div class="center">
      <section id="content">
        <h1 class="sub-header">Finded articles</h1>

        <div id="articles-searched">
          <Articles :articles="articles"></Articles>
        </div>

        <!-- LIMIPIAR FLOTADOS -->
        <div class="clearfix"></div>
      </section>

      <Sidebar :change="false"></Sidebar>
    </div>
  </div>
</template>

<script>
//import components
import Articles from "./Articles";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

import axios from "axios"; // used to make HTTP requests from node. js or XMLHttpRequests from the browser that also supports the ES6 Promise API.
import Global from "../Global";

export default {
  name: "Searcher",
  components: {
    Sidebar,
    Slider,
    Articles,
  },
  mounted() {
    this.searchString = this.$route.params.search;
    this.getArticlesBySearch(this.searchString);
  },
  data() {
    return {
      articles: [],
      url: Global.url,
      searchString: null
    };
  },
  methods: {
    //Ajax petitions
    getArticlesBySearch(searchString) {
      axios.get(this.url + "search-article/" + searchString).then((res) => {
        if (res.data.status === "success") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    },
  },
};
</script>

<style>
</style>