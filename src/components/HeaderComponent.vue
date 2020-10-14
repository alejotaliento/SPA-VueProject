<template>
  <div id="header-component">
    <header id="header">
      <div class="center">
        <!-- LOGO -->
        <div id="logo">
          <img src="../assets/img/logo.png" class="app-logo" alt="Logotipo" />
          <span id="brand"> <strong>Curso</strong>Vue </span>
        </div>

        <!-- MENU NAV -->
        <nav id="menu">
          <ul>
            <li>
              <router-link to="/home" active-class="active">Home</router-link>
            </li>
            <li>
              <router-link to="/blog" active-class="active">Blog</router-link>
            </li>
            <li>
              <router-link to="/form" active-class="active">
                Form
              </router-link>
            </li>
            <li>
              <router-link to="/movies" active-class="active"
                >Movies</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'test', params: { id: 'Param value' } }"
                active-class="active"
              >
                Test
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- LIMIPIAR FLOTADOS -->
        <div class="clearfix"></div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style>
</style>