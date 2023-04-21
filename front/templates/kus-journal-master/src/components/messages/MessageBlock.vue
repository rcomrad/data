<script setup lang="ts">
import {ref} from "vue";

const messages = ref([])

if (localStorage.getItem("messages") != null){
  messages.value = JSON.parse(localStorage.getItem("messages"))
  localStorage.removeItem("messages")
}

</script>

<template>
  <div v-for="message in messages" class="alert my-2" role="alert" :class="'alert-'+message.type">
    {{ message.data }}
  </div>
</template>

<style scoped>

</style>