<template>
  <section id="content">
    <h1>{{ texto }}</h1>
    <div style="background: yellow">
      <MyComponent></MyComponent>
    </div>
  </section>
</template>

<script>
import MyComponent from "./MyComponent"; //import component

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    //Alta para componentes a usar dentro de HelloWorld.vue
    MyComponent,
  },
  data() {
    return {
      texto: "Hello world since the Component",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
