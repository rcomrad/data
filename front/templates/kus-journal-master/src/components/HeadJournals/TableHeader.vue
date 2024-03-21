<script setup>
import {Modal} from "bootstrap";

const props = defineProps({
  lessons: {
    type: Array,
    required: true
  },
})

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
  <thead>
  <tr>
    <th style="min-width: 10vw;">Имя</th>
    <th>Сред.</th>
    <th scope="col" style="" v-for="lesson in lessons" @click="CallModal(lesson)">{{MakeDate(lesson.date)}}</th>
  </tr>
  </thead>
</template>