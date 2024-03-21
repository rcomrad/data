<script setup>
import axios from "axios";
import {URL} from "@/utils/config";
import {reactive, watch} from "vue";

const props = defineProps({
  lessons: {
    type: Array,
    required: true
  },
  marks: {
    type: Array,
    required: true
  },
  students: {
    type: Array,
    required: true
  }
})

function get_mark(student, lesson) {
  for (const mark of props.marks) {
    if (mark.student === student && mark.lesson === lesson) {
      return mark;
    }
  }
  props.marks.push({value: "", id: -1, student: student, lesson: lesson})
  for (const mark of props.marks) {
    if (mark.student === student && mark.lesson === lesson) {
      return mark;
    }
  }
}

const avg = reactive({})

function get_avg(student) {
  let sum = 0
  let count = 0
  for (const mark of props.marks) {
    if (mark.student === student) {

      if (['1', '2', '3', '4', '5'].includes(mark.value)) {
        sum += parseInt(mark.value)
        count += 1
      }
    }
  }
  if (count === 0) {
    avg[student] = ''
  } else {
    avg[student] = parseFloat((sum / count).toFixed(3))
  }

}
watch(props, ()=>{
  for(let student of props.students){
    get_avg(student.id)
  }
})

</script>

<template>
  <tbody>
  <tr v-for="student in students">
    <th scope="row" style="">{{ student.surname }} {{ student.name[0] }}.</th>
    <td>{{ avg[student.id] }}</td>
    <td style="" v-for="lesson in lessons">
      {{get_mark(student.id, lesson.id).value}}

    </td>
  </tr>
  </tbody>
</template>