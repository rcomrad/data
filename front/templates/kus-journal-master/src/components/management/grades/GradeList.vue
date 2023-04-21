<script setup>
import {computed, ref, watch} from "vue";
import axios from "axios";
import {URL} from "@/utils/config";
import {useStore} from "vuex";
import {Delete} from "@/utils/utils";

const props = defineProps(["filter_by"])
const emit = defineEmits(["openModal"])
const store = useStore()
const grades = ref([])

const GetPriority = (name) => {
  if (!(name[1] === '1' || name[1] === '0')) {
    name = '0' + name
  }
  return name
}
const GetGrade = ()=>{
  axios.get(URL + '/get/all/grade[*;head_id[id;name;surname;role_id]]').then((response) => {
    grades.value = response.data.grades
    grades.value.sort((f, s) => {
      if (GetPriority(f.name) > GetPriority(s.name)) {
        return 1
      } else {
        return -1
      }

    })
    grades.value.forEach(grade => {
      grade.to_delete = false
    })
  })
}
GetGrade()
let reload = computed(()=>{
  return store.state.needReload
})

watch(reload, ()=>{
  GetGrade()
})


const FilteredGrades = computed(() => {
  return grades.value.filter((grade) => {
    return grade.name.toLowerCase().includes(props.filter_by.toLowerCase())
  })
})
</script>

<template>
  <table class="table table-striped text-center">
    <thead>
    <tr>
      <th>Имя</th>
      <th>Классный руководитель</th>
      <th style="width: 10%">Изменить</th>
      <th style="width: 10%">
        <button class="btn btn-danger btn-sm" @click="Delete(grades, '/drop/grade', store)">Удалить</button>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="grade in FilteredGrades">
      <td>{{ grade.name }}</td>
      <td>{{ grade.head.name }} {{ grade.head.surname }}</td>
      <td>
        <button class="btn btn-primary btn-sm" @click="$emit('openModal', grade)"><i class="bi bi-pencil-fill"></i>
        </button>
      </td>
      <td><input type="checkbox" class="form-check-input" v-model="grade.to_delete"></td>
    </tr>

    </tbody>
  </table>
</template>


<style scoped>

</style>