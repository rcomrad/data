<script setup>
import {computed, ref, watch} from "vue";
import axios from "axios";
import {URL} from "@/utils/config";
import GroupModal from "@/components/management/groups/GroupModal.vue";
import router from "@/router";

const props = defineProps(['grade'])

const groups = ref([])

const getGroups = () => {
  axios.get(URL + "/all_groups", {
    headers: {
      token: JSON.parse(localStorage.getItem("user")).token
    }
  }).then((response) => {
    console.log(response.data)
    groups.value = response.data.groups.filter((group) => {
      return group.grade === props.grade.id
    })
    for (let group of groups.value) {
      group.grade = props.grade

    }
    groups.value.forEach(group => {
      group.to_delete = false
    })
  })
}
getGroups()
let reload = computed(()=>{
  return store.state.needReload
})

watch(reload, ()=>{
  getGroups()
})


const current_group = ref({})
const setGroup = (group) => {
  current_group.value = group
}

const Delete = () => {
  let id = []
  groups.value.forEach(element => {
    element.to_delete ? id.push(element.id) : ''
  })
  axios({
    method: "POST",
    url: URL + '/drop_groups',
    data: {
      groups: id
    }
  }).then((response) => {
    router.go()
  })
}
</script>


<template>
  <GroupModal :students="grade.students" back-i-d="#group_manage" :group="current_group"/>

  <button type="button" class="btn btn-primary me-3 mt-3" data-bs-target="#group_create" data-bs-toggle="modal"
          @click="setGroup({grade: grade})">
    Создать новую группу
  </button>

  <router-link :to="{name:'grade_management'}" class="btn btn-outline-primary mt-3">
    Назад
  </router-link>


  <table class="table text-center">
    <thead>
    <tr>
      <th>Имя</th>
      <th>Изменить</th>
      <th style="width: 10%">
        <button class="btn btn-danger btn-sm" @click="Delete">Удалить</button>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="group in groups">
      <td>{{ group.name }}</td>
      <td>
        <button class="btn btn-primary btn-sm" @click="setGroup(group)" data-bs-target="#group_create"
                data-bs-toggle="modal"><i class="bi bi-pencil-fill"></i>
        </button>
      </td>
      <td><input type="checkbox" class="form-check-input" v-model="group.to_delete"></td>
    </tr>
    </tbody>
  </table>


</template>

<style scoped>

</style>