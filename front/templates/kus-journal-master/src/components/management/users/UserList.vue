<script setup>

import {computed, ref, watch} from "vue";
import axios from "axios";
import {URL} from "@/utils/config";
import {useStore} from "vuex";
import {Delete} from "@/utils/utils";
const props = defineProps(["filter_by"])
const emit = defineEmits(["openModal"])
const store = useStore()

const users = ref([])
const getUsers = () => {
  axios.get(URL + '/get/all/user').then((response) => {

    users.value = response.data.users.filter((user) => {
      return (!user.role.includes("admin") && !user.role.includes("director")) || (JSON.parse(localStorage.getItem("user")).role.includes("admin"))
    })
    users.value.sort((f, s) => {
      if (GetPriority(f.role) > GetPriority(s.role)) {
        return 1
      }
      if (GetPriority(f.role) < GetPriority(s.role)) {
        return -1
      }
      if (f.surname + f.name > s.surname + s.name) {
        return 1
      } else {
        return -1
      }
    })
    users.value.forEach(element=>{element.to_delete = false})
  })
}
getUsers();

let reload = computed(()=>{
  return store.state.needReload
})
watch(reload, ()=>{
  getUsers()
})

const GetRole = (raw) => {
  const roles = {
    "student": "Обучающийся",
    "teacher": "Педагог",
    "grade_head": "Кл. руководитель",
    "add_user": "Упр. юзерами",
    "add_journal": "Упр. журналом",
    "add_plan": "Упр. планами",
    "add_grade": "Упр. классами",
    "submitor": "Участник соревнований"
  }
  let ans = ""
  for (let role of raw) {
    ans += roles[role] + " "
  }
  return ans
}

const FilteredUsers = computed(() => {

  return users.value.filter((user) => {
    return user.name.toLowerCase().includes(props.filter_by.toLowerCase())
        || user.surname.toLowerCase().includes(props.filter_by.toLowerCase())
        || user.login.toLowerCase().includes(props.filter_by.toLowerCase())
        || GetRole(user.role).toLowerCase().includes(props.filter_by.toLowerCase())
  })
})
const GetPriority = (el) => {
  if (el.includes("student")) {
    return 1
  } else if (el.includes("teacher") || el.includes("grade_head")) {
    return 2
  } else {
    return 3
  }
}


</script>

<template>
  <table class="table table-striped text-center">
    <thead>
    <tr>
      <th>Имя</th>
      <th>Роль</th>
      <th>Логин</th>
      <th style="width: 10%">Изменить</th>
      <th style="width: 10%"><button class="btn btn-danger btn-sm" @click="Delete(users, '/drop/user', store)">Удалить</button></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in FilteredUsers">
      <td>{{ user.surname }} {{ user.name }}</td>
      <td>{{ GetRole(user.role) }}</td>
      <td>{{ user.login }}</td>
      <td>
        <button class="btn btn-primary btn-sm" @click="$emit('openModal', user)"><i class="bi bi-pencil-fill"></i>
        </button>
      </td>
      <td>
        <input type="checkbox" class="form-check-input" v-model="user.to_delete" >
      </td>
    </tr>

    </tbody>
  </table>
</template>

<style scoped>

</style>