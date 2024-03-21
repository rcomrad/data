<script setup>

import {computed, ref, watch} from "vue";
import {URL} from "@/utils/config";
import axios from "axios";
import {useStore} from "vuex";
import {Delete} from "@/utils/utils";

const emit = defineEmits(["openModal"])
const props = defineProps(["filter_by"])

const journals = ref([])
const grades = ref([])
const store = useStore()

const getJournals = ()=>{
  axios.get(URL + "/get/if/journal_table[*;teacher_id[*];plan_id[*];group_id[*]]/methodist_id="+JSON.parse(localStorage.getItem("user")).id).then(response => {
    journals.value = response.data.journal_tables
    journals.value.forEach((journal)=>{
      journal.to_delete = false
    })
  })
}

let reload = computed(()=>{
  return store.state.needReload
})

getJournals()
watch(reload, ()=>{
  console.log("reload is")
  getJournals()
})

const FilteredJournals = computed(() => {
  return journals.value.filter((journal) => {

    return journal.plan.name.toLowerCase().includes(props.filter_by.toLowerCase()) ||
        journal.group.name.toLowerCase().includes(props.filter_by.toLowerCase()) ||
        journal.teacher.name.toLowerCase().includes(props.filter_by.toLowerCase())
  })
})
</script>


<template>
  <table class="table table-striped text-center">
    <thead>
    <tr>
      <th>Учебный план</th>
      <th>Группа/Класс</th>
      <th>Учитель</th>
      <th style="width: 10%">Изменить</th>
      <th style="width: 10%">
        <button class="btn btn-danger btn-sm" @click="Delete(journals, '/drop/journal_table', store)">Удалить</button>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="journal in FilteredJournals">
      <td>{{ journal.plan.name }}</td>
      <td>{{ journal.group.name }}</td>
      <td>{{ journal.teacher.name }} {{ journal.teacher.surname }}</td>
      <td>
        <button class="btn btn-primary btn-sm" @click="$emit('openModal', journal)"><i class="bi bi-pencil-fill"></i>
        </button>
      </td>
      <td><input type="checkbox" class="form-check-input" v-model="journal.to_delete"></td>
    </tr>

    </tbody>
  </table>
</template>


<style scoped>

</style>