<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import CountryView from './components/CountryView.vue'
</script>

<template>
  <div class="bg-gradient-to-r from-blue-600 to-violet-600 min-h-screen">
    <Header />
    <CountryView />
  </div>

  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>
<style scoped></style>
