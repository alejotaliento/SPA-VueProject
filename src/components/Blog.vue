<template>
  <div id="blog">
    <Slider title="Blog"></Slider>

    <div class="center">
      <section id="content">
        <h1 class="sub-header">Blog</h1>

        <div id="articles" v-if="articles">
          <Articles :articles="articles"></Articles>
        </div>
      </section>

      <Sidebar :change="true"></Sidebar>
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
  name: "Blog",
  components: {
    Sidebar,
    Slider,
    Articles,
  },
  mounted() {
    this.getArticles();
  },
  data() {
    return {
      articles: [],
      url: Global.url,
    };
  },
  methods: {
    //Ajax petitions
    getArticles() {
      axios.get(this.url + "articles").then((res) => {
        if (res.data.status === "success") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    },
  },
};
</script>

<style></style>