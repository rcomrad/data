<script setup>
const emit = defineEmits(["setPlan", "setFilter"]);
</script>


<template>
  <div class="row my-3">
    <div class="col-2">
      <button type="button" class="btn btn-primary" @click="$emit('setPlan', {})">
        Создать новый план
      </button>
    </div>
    <div class="col-2 ms-auto">
      <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" @input="$emit('setFilter', $event.target.value)">
    </div>
  </div>
</template>

<style scoped>

</style>