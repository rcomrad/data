<script setup>
const emit = defineEmits(["setJournal", "setFilter"]);
</script>


<template>
  <div class="row my-3">
    <div class="col-2">
      <button type="button" class="btn btn-primary" @click="$emit('setJournal', {})" data-bs-toggle="modal"
              data-bs-target="#journal">
        Создать новый журнал
      </button>
    </div>
    <div class="col-2 ms-auto">
      <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" @input="$emit('setFilter', $event.target.value)">
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonBlock"
}
</script>

<style scoped>

</style>