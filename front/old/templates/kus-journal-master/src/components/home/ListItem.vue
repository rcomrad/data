<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";

const props = defineProps({
  href:{
    default: {name: "homepage"}
  },
  icon:{
    type: String
  },
  title:{
    type: String
  }
})
</script>

<template>
  <li>
    <router-link class="nav-link py-3 border-bottom fs-5 fw-bold" style="border-radius: 0" :to="href" data-bs-toggle="tooltip" :data-bs-title="title">
      <i class="bi" :class="icon"></i>
    </router-link>
  </li>
</template>

<style scoped>

</style>