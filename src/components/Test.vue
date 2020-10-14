<template>
  <div id="test">
    <div class="center">
      <section id="content">
        <h2 class="sub-header">Test</h2>
        <h4>{{ url_id }}</h4>
        <button @click="actualizarNombre()">Update name</button>
        <button @click="reDirectToBlog()">Redirect</button>
        <h5>{{ this.name }}</h5>
      </section>
    </div>

  </div>
</template>

<script>
export default {
  name: "Test",
  // (LifeCicleHooks)
  created() {
    // Se llama después de crear la instancia
    console.log("Component created");
  },
  mounted() {
    // Se llama después de montar la instancia
    this.url_id = this.$route.params.id; //get param 'id' of url
    console.log("Component mounted");
  },
  updated() {
    // Se llama después de actualizar la instancia
    console.log("Component updated");
  },
  destroyed() {
    // Se llama después de destruir la instancia (al cambiar de un ruta a otra)
    console.log("Component destroyed");
  },
  data() {
    // Vue will recursively convert its properties into getter/setters to make it “reactive”.
    return {
      url_id: null,
      name: "Alejo Taliento",
    };
  },
  methods: {
    actualizarNombre() {
      this.name = "JUAN ROMAN RIQUELME";
      console.log(this.name);
    },
    reDirectToBlog() {
      this.$router.push("/blog"); // con push hago redirect a otra ruta
    },
  },
};
</script>

<style scoped>
#test #content{
  width: 100%;
}
</style>>