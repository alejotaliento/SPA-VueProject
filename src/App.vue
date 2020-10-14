<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>

    <!-- Componentes cargados de manera dinamica -->
    <router-view></router-view>
  
    <!-- Componente cargado de manera estatica -->
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// IMPORT COMPONENTS
// import HelloWorld from './components/HelloWorld.vue';
// import MyComponent from './components/MyComponent';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

export default {
  name: "App",
  components: {
    //    HelloWorld,
    //  MyComponent,
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

@import "./assets/css/styles.css";
</style>
