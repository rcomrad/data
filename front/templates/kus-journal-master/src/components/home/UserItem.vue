<script setup>
import router from "@/router";

const logout = ()=>{
  localStorage.removeItem("user")
  router.push({name: "login"})
}
</script>

<template>
  <div class="dropdown border-top sticky-bottom">
    <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
      <img src="../../static/person-circle.svg" alt="mdo" width="24" height="24" class="rounded-circle">
    </a>
    <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
      <li><a class="dropdown-item" @click="logout">Выйти из аккаунта</a></li>
    </ul>
  </div>
</template>

<style scoped>

</style>