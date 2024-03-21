<script setup>
const emit = defineEmits(["setUser", "setFilter"]);
</script>


<template>
  <div class="row my-3">
    <div class="col-2">
      <button type="button" class="btn btn-primary" @click="$emit('setUser', {})" data-bs-toggle="modal"
              data-bs-target="#user">
        Создать новых юзеров
      </button>
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-primary" disabled>
        Загрузить через файл
      </button>
    </div>
    <div class="col-2 ms-auto">
      <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" @input="$emit('setFilter', $event.target.value)">
    </div>
  </div>
</template>

<style scoped>

</style>