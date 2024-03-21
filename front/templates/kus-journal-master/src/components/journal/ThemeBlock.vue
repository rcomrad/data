<script setup>
import {Modal} from "bootstrap";

const props = defineProps(['lessons'])
const emit = defineEmits(["setModalLesson"])
const MakeDate = (str)=>{
  let date = new Date(str)
  return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}`
}

const CallModal = (lesson)=>{
  emit("setModalLesson", lesson)
  const modal = new Modal('#lesson')
  modal.toggle()
}
</script>

<template>
<table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th scope="col">Тема</th>
      <th style="width: 15%">Дата</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="lesson in lessons">
      <th scope="col" @click="CallModal(lesson)">{{lesson.theme}}</th>
      <td>{{MakeDate(lesson.date)}}</td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>

</style>