<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <component :is="Component"></component>
  </router-view>
</template>

<script setup>
</script>

<style scoped></style>
