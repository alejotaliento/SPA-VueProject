<template>
  <div id="articles-component">
    <section id="articles-list">
      <div id="articles" v-if="articles.length >= 1">
        <article
          class="article-item article-detail"
          id="article-template"
          v-for="article in articles"
          v-bind:key="article._id"
        >
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

          <h2>
            <router-link :to="{ name: 'article', params: { id: article._id } }">
              {{ article.title }}
            </router-link>
          </h2>
          <p>{{ article.content }}</p>
          <span class="date">{{ article.date | moment("from", "now") }} </span>
        </article>
      </div>

      <div v-else-if="articles.length < 1">There are not articles to show</div>

      <div v-else>
        <div class="loading center"></div>
        <p>Loading...</p>
      </div>
    </section>

    <!-- LIMIPIAR FLOTADOS -->
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Global from "../Global";

export default {
  name: "Articles",
  props: ["articles"],
  data() {
    return {
      url: Global.url,
      status: false,
    };
  },
};
</script>

<style scoped>
#article-template {
  margin-left: 0.5rem;
}
.loading {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: spin 2.5s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>