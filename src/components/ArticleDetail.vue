<template>
  <div id="article-detail">
    <section id="content">
      <article class="article-item article-detail" v-if="article">
        <div class="image-wrap">
          <img
            :src="url + 'get-image/' + article.image"
            :alt="article.title"
            v-if="article.image"
          />
          <img
            src="../assets/img/image-not-available.jpg"
            alt="Article"
            v-else
          />
        </div>

        <h2 class="sub-header">{{ article.title }}</h2>
        <h4>{{ article.content }}</h4>
        <span class="date"> {{ article.date | moment("from", "now") }}</span>
        <br />
        <div id="buttons">
          <a @click="deleteArticle(article._id)" class="btn btn-danger"
            >Delete</a
          >
          <router-link
            :to="'/edit-article/' + article._id"
            class="btn btn-warning"
          >
            Edit
          </router-link>
        </div>
      </article>
    </section>

    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Global from "../Global";
import Sidebar from "./Sidebar";

import axios from "axios";
import swal from "sweetalert";

export default {
  name: "ArticleDetail",
  components: {
    Sidebar,
  },
  data() {
    return {
      url: Global.url,
      article: null,
    };
  },
  mounted() {
    let articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    getArticle(articleId) {
      axios.get(this.url + "article/" + articleId).then((res) => {
        if (res.data.status === "success") {
          this.article = res.data.article;
        }
        console.log(this.article);
      });
    },
    deleteArticle(articleId) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this article!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            axios.delete(this.url + "article/" + articleId).then(() => {
              this.$router.push("/blog");
            });
            swal("Poof! Your article file has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your article file is safe!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
/* BOTONES EDIT AND DELETE */
.btn-warning {
  box-shadow: inset 0px 1px 0px 0px #f5b48e;
  background: linear-gradient(to bottom, #f2b737 5%, #c6991f 100%);
  background-color: #f2b737;
  border-radius: 6px;
  border: 1px solid #f2b737;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  width: 8rem;
  text-decoration: none;
  margin: 1rem;
}
.btn-danger {
  box-shadow: inset 0px 1px 0px 0px #f5978e;
  background: linear-gradient(to bottom, #f24537 5%, #c62d1f 100%);
  background-color: #f24537;
  border-radius: 6px;
  border: 1px solid #d02718;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  width: 8rem;
  text-decoration: none;
  margin: 1rem;
}
.btn-danger:hover {
  background: linear-gradient(to bottom, #f2b737 5%, #f2b737 100%);
  background-color: #f2b737;
}
.btn-warning:hover {
  background: linear-gradient(to bottom, #c62d1f 5%, #f24537 100%);
  background-color: #c62d1f;
}
</style>