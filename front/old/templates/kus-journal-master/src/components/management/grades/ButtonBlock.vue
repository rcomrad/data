<script setup>
const emit = defineEmits(["setGrade", "setFilter"]);
</script>


<template>
  <div class="row my-3">
    <div class="col-2">
      <button type="button" class="btn btn-primary" @click="$emit('setGrade', {})" data-bs-toggle="modal"
              data-bs-target="#grade">
        Создать новый класс
      </button>
    </div>
    <div class="col-2 ms-auto">
      <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" @input="$emit('setFilter', $event.target.value)">
    </div>
  </div>
</template>

<style scoped>

</style>

<style scoped>

</style>