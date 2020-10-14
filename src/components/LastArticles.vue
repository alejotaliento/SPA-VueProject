<template>
  <div id="last-articles">
    <Slider
      title="Bienvenido a mi pagina desarrollada con el Framework VueJs"
      :showBtn="true"
    ></Slider>

    <div class="center">
      <section id="content">
        <h2 class="sub-header">Last Articles</h2>

        <!-- LISTADO DE ARTICULOS -->
        <div id="articles" v-if="lastArticles">
          <Articles :articles="lastArticles"></Articles>
        </div>
      </section>
      <Sidebar></Sidebar>
    </div>
  </div>
</template>

<script>
//import components
import Articles from "./Articles";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

import axios from "axios";
import Global from "../Global";

export default {
  name: "LastArticles",
  components: {
    Sidebar,
    Slider,
    Articles,
  },
  mounted() {
    this.getLastArticles();
  },
  data() {
    return {
      lastArticles: [],
      url: Global.url,
    };
  },
  methods: {
    getLastArticles() {
      axios.get(this.url + "articles/last").then((res) => {
        if (res.data.status === "success") {
          this.lastArticles = res.data.articles;
        }
        console.log(this.lastArticles);
      });
    },
  },
};
</script>

<style>
</style>